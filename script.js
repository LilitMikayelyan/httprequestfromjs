var express = require('express');
const { stringify } = require('querystring');
var app = express();
var PORT = 3000;

app.get("/",function (req, res) {
    var a = Math.floor(Math.random() * 7 + 1);
    res.send(String(a));

});
app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});