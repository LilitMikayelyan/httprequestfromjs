var express = require('express');
const { stringify } = require('querystring');
var app = express();
var PORT = 3000;
var m = 10;
var n = 10;
app.get("/",function (req, res) {
  var arr = [n,m];
for (let i = 0; i < arr[0]; i++) {
  for (let j = 0; j < arr[1]; j++) {
    var a = Math.floor(Math.random() * 7 + 1);
    arr.push(a);
  }
  
}
    
    res.send(arr);

});
app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});