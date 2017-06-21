const router = require("express").Router();

router.get('/api/whoami', (req, res) => {
    
    res.json(
        parseHeader(req)
    );
});

function parseHeader(request) {
  let ips = request.headers['x-forwarded-for'] || request.connection.remoteAddress;
  let ip = ips.split(',')[0];
  
  let languages = request.headers['accept-language'];
  let language = languages.split(',')[0];
  
  

    return {
        ipaddress: ip,
        language: language,
        software: request.headers['user-agent']
    };
}

module.exports = router;