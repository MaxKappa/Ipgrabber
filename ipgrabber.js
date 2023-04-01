const express = require('express');
const { IPinfoWrapper } = require("node-ipinfo");

const app = express();
const ipinfo = new IPinfoWrapper("TOKEN");

app.get('/', (req, res) => {
    let ip = req.headers['cf-connecting-ip'];
    console.log("IP: " + ip);
    console.log("User-Agent: " + req.headers['user-agent']);
    ipinfo.lookupIp(ip).then((response) => {
        res.status(200).send({
            ip: ip,
            city: response.city,
            region: response.region,
            country: response.country,
            loc: response.loc,
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
