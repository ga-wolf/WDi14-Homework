var path = require('path')
var express = require('express')
var app = express()

app.use(express.static('public'));
app.listen(process.argv[2] || 3000)
