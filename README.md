# Ipgrabber
Simple Node.js ipgrabber that print the request ip and location info using [IPinfo.io](https://ipinfo.io/) API.

## How to run
It run on port 80, you can change in [docker-compose.yml](docker-compose.yml) 
1. `git clone https://github.com/MaxKappa/Ipgrabber.git`
2. Paste your personal token key (from IPinfo.io) in [ipgrabber.js](ipgrabber.js) `const ipinfo = new IPinfoWrapper("TOKEN");`
3. `docker compose up --build -d`
