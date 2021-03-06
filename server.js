var express = require('express');
var useragent = require('express-useragent');
var app = express();

app.use(useragent.express());

app.get('/', function(req, res) {
    var ip = req.headers['x-forwarded-for'],
        language = req.headers['accept-language'],
        software = req.useragent;
        
    var ret = {
        'ipaddress': ip,
        'language': language.split(',')[0],
        'software': software.os
    };
    
    res.json(ret);
});
app.listen(process.env.PORT || 80, function() {
    console.log('server is running', process.env.PORT);
});