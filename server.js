var path = require('path');
var express = require('express');
var app = express();
var webpack = require('webpack');
var config = require('./webpack.config');
var server =require('http').createServer(app);
var compiler = webpack(config);

app.use(express.static(path.join(__dirname, '/')))

// use in develope mode
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'index.html'));
})


server.listen(9999, function(err) {
    console.log('Listening at *:9999');
})