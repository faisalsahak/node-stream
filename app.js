const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res){
  res.render('index.ejs')
});

// app.get('/nfl', function (req, res){
//   res.render('Pages/sportPages/nfl/nfl.ejs')
// });
// app.get('/game', function (req, res){
//   res.render('Pages/sportPages/nfl/stream.ejs')
// });

app.get('/sky1', function (req, res){
  res.render('Pages/sportChannels/skySports/skysport1.ejs')
});
app.get('/sky1Channel1', function (req, res){
  res.render('Pages/sportChannels/skySports/sky1Channel1.ejs')
});
app.get('/sky1Channel2', function (req, res){
  res.render('Pages/sportChannels/skySports/sky1Channel2.ejs')
});
app.get('/sky1Channel3', function (req, res){
  res.render('Pages/sportChannels/skySports/sky1Channel3.ejs')
});

app.listen(3000, function(){
  console.log("server running on port 3000")
})
