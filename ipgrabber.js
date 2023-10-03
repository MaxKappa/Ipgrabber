const express = require('express');
const { IPinfoWrapper } = require("node-ipinfo");

const app = express();
const ipinfo = new IPinfoWrapper("YOUR_TOKEN");
app.engine('html', require('ejs').renderFile);
var path = require ('path');
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    let ip = req.headers['cf-connecting-ip'];
    console.log("IP: " + ip);
    console.log("User-Agent: " + req.headers['user-agent']);
    ipinfo.lookupIp(ip).then((response) => {
        res.render("index.html",{
            ip: ip,
            city: response.city,
            region: response.region,
            country: response.country,
            latitude: response.loc.split(',')[0],
            longitude: response.loc.split(',')[1],
            org: response.org,
            postal: response.postal,
            timezone: response.timezone,
            useragent: req.headers['user-agent']
        })
        console.log(response)
    });
    
});

app.listen(80, () => {
    console.log('Listening on port 80');
});
