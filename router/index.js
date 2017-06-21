const router = require("express").Router();
const useragent = require('useragent');

useragent(true);

router.get('/api/whoami', (req, res) => {
    
    res.json(
        parseHeader(req)
    );
});

function parseHeader(request) {
  let ips = request.headers['x-forwarded-for'] ||
            request.connection.remoteAddress ||
            request.ip;
  let ip = ips.split(',')[0];
  
  let languages = request.headers['accept-language'];
  let language = '';
  if (languages) {
    language = languages.split(',')[0];
  }
  
  let agent = useragent.parse(request.headers['user-agent']);
  let os = agent.os.toString();

  return {
      ipaddress: ip,
      language: language,
      software: os
  };
}

module.exports = router;