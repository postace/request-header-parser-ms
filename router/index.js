const router = require("express").Router();

router.get('/api/whoami', (req, res) => {
    
    res.json(
        parseHeader(req)
    );
});

function parseHeader(request) {
    return {
        ipaddress: request.ip,
        language: request.headers['accept-language'],
        software: request.headers['user-agent']
    };
}

module.exports = router;