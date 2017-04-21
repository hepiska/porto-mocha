var express=require('express');
var bodyParser=require('body-parser');
let mongoose= require('mongoose');
const port = 3000 || process.env.PORT
let cors=require('cors');
let api=require('./routers/api');
//mongoose.connect('mongodb://localhost/memo');
let app=express()
var dbconfig = {
  development:'mongodb://localhost/memo',
  test:'mongodb://localhost/memo-test'
}
mongoose.connect(dbconfig[app.settings.env],
  function(err,succ){
    if (err) {
      console.log(err);
    } else {
      console.log('connected to ' +app.settings.env);
    }
  })
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());
app.use('/api',api);
console.log('server jalan');
//app.listen(3000);
const server = app.listen(port, function() {
  console.log("Server Jalan di port 3000");
})

module.exports = server
