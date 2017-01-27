const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));



app.get('/', function (req, res){
  res.render('index.ejs')
});

// Sky Sports 1 Links
app.get('/sky1', function (req, res){
  res.render('Pages/livechannels/skySports/skysport1.ejs')
});
app.get('/sky1Channel1', function (req, res){
  res.render('Pages/livechannels/skySports/sky1Channel1.ejs')
});
app.get('/sky1Channel2', function (req, res){
  res.render('Pages/livechannels/skySports/sky1Channel2.ejs')
});
app.get('/sky1Channel3', function (req, res){
  res.render('Pages/livechannels/skySports/sky1Channel3.ejs')
});

//Sky Sports 2 Links
app.get('/sky2', function (req, res){
  res.render('Pages/livechannels/skySports/skysport2.ejs')
});
app.get('/sky2Channel1', function (req, res){
  res.render('Pages/livechannels/skySports/sky2Channel1.ejs')
});
app.get('/sky2Channel2', function (req, res){
  res.render('Pages/livechannels/skySports/sky2Channel2.ejs')
});
app.get('/sky2Channel3', function (req, res){
  res.render('Pages/livechannels/skySports/sky2Channel3.ejs')
});

//Sky Sports 3 Links
app.get('/sky3', function (req, res){
  res.render('Pages/livechannels/skySports/skysport3.ejs')
});
app.get('/sky3Channel1', function (req, res){
  res.render('Pages/livechannels/skySports/sky3Channel1.ejs')
});
app.get('/sky3Channel2', function (req, res){
  res.render('Pages/livechannels/skySports/sky3Channel2.ejs')
});
app.get('/sky3Channel3', function (req, res){
  res.render('Pages/livechannels/skySports/sky3Channel3.ejs')
});

//Sky Sports 4 Links
app.get('/sky4', function (req, res){
  res.render('Pages/livechannels/skySports/skysport4.ejs')
});
app.get('/sky4Channel1', function (req, res){
  res.render('Pages/livechannels/skySports/sky4Channel1.ejs')
});
app.get('/sky4Channel2', function (req, res){
  res.render('Pages/livechannels/skySports/sky4Channel2.ejs')
});
app.get('/sky4Channel3', function (req, res){
  res.render('Pages/livechannels/skySports/sky4Channel3.ejs')
});

//Sky Sports 5 Links
app.get('/sky5', function (req, res){
  res.render('Pages/livechannels/skySports/skysport5.ejs')
});
app.get('/sky5Channel1', function (req, res){
  res.render('Pages/livechannels/skySports/sky5Channel1.ejs')
});
app.get('/sky5Channel2', function (req, res){
  res.render('Pages/livechannels/skySports/sky5Channel2.ejs')
});
app.get('/sky5Channel3', function (req, res){
  res.render('Pages/livechannels/skySports/sky5Channel3.ejs')
});

//Sky Sports News Links
app.get('/skysportnews', function (req, res){
  res.render('Pages/livechannels/skySports/skysportnews.ejs')
});
app.get('/skynews', function (req, res){
  res.render('Pages/livechannels/skySports/skynews1.ejs')
});

//Sky Sports F1 HD Links
app.get('/skysportf1', function (req, res){
  res.render('Pages/livechannels/skySports/skysportf1.ejs')
});
app.get('/skyf1hd1', function (req, res){
  res.render('Pages/livechannels/skySports/skysportf1hd1.ejs')
});
app.get('/skyf1hd2', function (req, res){
  res.render('Pages/livechannels/skySports/skysportf1hd2.ejs')
});

//BT Sports 1 Links
app.get('/btsport', function (req, res){
  res.render('Pages/livechannels/btsport/bt1.ejs')
});
app.get('/bt1channel1', function (req, res){
  res.render('Pages/livechannels/btsport/bt1channel1.ejs')
});
app.get('/bt1channel2', function (req, res){
  res.render('Pages/livechannels/btsport/bt1channel2.ejs')
});
app.get('/bt1channel3', function (req, res){
  res.render('Pages/livechannels/btsport/bt1channel3.ejs')
});

//BT Sports 2 Links
app.get('/btsport2', function (req, res){
  res.render('Pages/livechannels/btsport/bt2.ejs')
});
app.get('/bt2channel1', function (req, res){
  res.render('Pages/livechannels/btsport/bt2channel1.ejs')
});
app.get('/bt2channel2', function (req, res){
  res.render('Pages/livechannels/btsport/bt2channel2.ejs')
});
app.get('/bt2channel3', function (req, res){
  res.render('Pages/livechannels/btsport/bt2channel3.ejs')
});

//BT ESPN Links
app.get('/btespn', function (req, res){
  res.render('Pages/livechannels/btsport/btespn.ejs')
});
app.get('/btespnchannel1', function (req, res){
  res.render('Pages/livechannels/btsport/btespnchannel1.ejs')
});

//BT Euro Links
app.get('/bteuro', function (req, res){
  res.render('Pages/livechannels/btsport/bteuro.ejs')
});
app.get('/bteurochannel1', function (req, res){
  res.render('Pages/livechannels/btsport/bteurochannel1.ejs')
});
app.get('/bteurochannel2', function (req, res){
  res.render('Pages/livechannels/btsport/bteurochannel2.ejs')
});

//Euro Sports 1 Links
app.get('/eurosport1', function (req, res){
  res.render('Pages/livechannels/eurosport/eurosport1.ejs')
});
app.get('/euro1channel1', function (req, res){
  res.render('Pages/livechannels/eurosport/euro1channel1.ejs')
});

//Euro Sports 2 Links
app.get('/eurosport2', function (req, res){
  res.render('Pages/livechannels/eurosport/eurosport2.ejs')
});
app.get('/euro2channel1', function (req, res){
  res.render('Pages/livechannels/eurosport/euro2channel1.ejs')
});

//Sky Calcio Links
app.get('/skycalcio', function (req, res){
  res.render('Pages/livechannels/skysport2/skycalcio.ejs')
});
app.get('/skycalciochannel1', function (req, res){
  res.render('Pages/livechannels/skysport2/skycalciochannel1.ejs')
});

//Sky Sport 1 Italy Links
app.get('/skysport1', function (req, res){
  res.render('Pages/livechannels/skysport2/skysport1.ejs')
});
app.get('/skysportchannel1', function (req, res){
  res.render('Pages/livechannels/skysport2/sky1channel1.ejs')
});

//Sky Sport 2 Italy Links
app.get('/skysport2', function (req, res){
  res.render('Pages/livechannels/skysport2/skysport2.ejs')
});
app.get('/skysportchannel2', function (req, res){
  res.render('Pages/livechannels/skysport2/sky2channel1.ejs')
});

//Bein Sport Links
app.get('/beinsport', function (req, res){
  res.render('Pages/livechannels/beinsport/beinsport.ejs')
});
app.get('/beinsportchannel1', function (req, res){
  res.render('Pages/livechannels/beinsport/beinsportchannel.ejs')
});

//Sports Net One Links
app.get('/sportsnetone', function (req, res){
  res.render('Pages/livechannels/sportsnet/sportsnetone.ejs')
});
app.get('/sportsnetonechannel', function (req, res){
  res.render('Pages/livechannels/sportsnet/sportsnetonechannel.ejs')
});

//Sports Net Ontario Links
app.get('/sportsnetontario', function (req, res){
  res.render('Pages/livechannels/sportsnet/sportsnetontario.ejs')
});
app.get('/sportsnetontariochannel', function (req, res){
  res.render('Pages/livechannels/sportsnet/sportsnetontariochannel.ejs')
});

//Sports Net world Links
app.get('/sportsnetworld', function (req, res){
  res.render('Pages/livechannels/sportsnet/sportsnetworld.ejs')
});
app.get('/sportsnetworldchannel', function (req, res){
  res.render('Pages/livechannels/sportsnet/sportsnetworldchannel.ejs')
});

//NBC SN Links
app.get('/nbcsn', function (req, res){
  res.render('Pages/livechannels/nbcsn/nbcsn.ejs')
});
app.get('/nbcsnchannel', function (req, res){
  res.render('Pages/livechannels/nbcsn/nbcsnchannel.ejs')
});

//ESPN 1 Links
app.get('/espn1', function (req, res){
  res.render('Pages/livechannels/espn/espn1.ejs')
});
app.get('/espn1channel', function (req, res){
  res.render('Pages/livechannels/espn/espn1channel1.ejs')
});

//ESPN 2 Links
app.get('/espn2', function (req, res){
  res.render('Pages/livechannels/espn/espn2.ejs')
});
app.get('/espn2channel', function (req, res){
  res.render('Pages/livechannels/espn/espn2channel1.ejs')
});


//Fox Sport 1 Links
app.get('/foxsport1', function (req, res){
  res.render('Pages/livechannels/foxsport/fox1.ejs')
});
app.get('/foxsportchannel1', function (req, res){
  res.render('Pages/livechannels/foxsport/fox1channel1.ejs')
});

//Fox Sport 2 Links
app.get('/foxsport2', function (req, res){
  res.render('Pages/livechannels/foxsport/fox2.ejs')
});
app.get('/fox2channel', function (req, res){
  res.render('Pages/livechannels/foxsport/fox2channel1.ejs')
});

//TSN Channel Links
app.get('/tsntv', function (req, res){
  res.render('Pages/livechannels/tsn/tsntv.ejs')
});
app.get('/tsnchannel', function (req, res){
  res.render('Pages/livechannels/tsn/tsnchannel.ejs')
});

//NFL Channel Links
app.get('/nfltv', function (req, res){
  res.render('Pages/livechannels/nflnetwork/nfltv.ejs')
});
app.get('/nflchannel', function (req, res){
  res.render('Pages/livechannels/nflnetwork/nfltvchannel.ejs')
});

//NBA Channel Links
app.get('/nbatv', function (req, res){
  res.render('Pages/livechannels/nbatv/nbatv.ejs')
});
app.get('/nbachannel', function (req, res){
  res.render('Pages/livechannels/nbatv/nbatvchannel.ejs')
});

//GOlf Channel Links
app.get('/golftv', function (req, res){
  res.render('Pages/livechannels/golftv/golftv.ejs')
});
app.get('/golftvchannel', function (req, res){
  res.render('Pages/livechannels/golftv/golfchannel.ejs')
});

//At The Races Channel Links
app.get('/attherace', function (req, res){
  res.render('Pages/livechannels/attheraces/attheraces.ejs')
});
app.get('/attheracechannel', function (req, res){
  res.render('Pages/livechannels/attheraces/attheraceschannel.ejs')
});

//Box Naion Links
app.get('/boxnation', function (req, res){
  res.render('Pages/livechannels/boxnation/boxnation.ejs')
});
app.get('/boxnationchannel', function (req, res){
  res.render('Pages/livechannels/boxnation/boxnationchannel.ejs')
});

//Box Naion Links
app.get('/ptv', function (req, res){
  res.render('Pages/livechannels/ptvsports/ptvsports.ejs')
});
app.get('/ptvchannel', function (req, res){
  res.render('Pages/livechannels/ptvsports/ptvsportschannel.ejs')
});

//Premier Sport Links
app.get('/premiersport', function (req, res){
  res.render('Pages/livechannels/premiersports/premiersports.ejs')
});
app.get('/premiersportchannel', function (req, res){
  res.render('Pages/livechannels/premiersports/premiersportschannel.ejs')
});

//MUTV Links
app.get('/mutv', function (req, res){
  res.render('Pages/livechannels/mutv/mutv.ejs')
});
app.get('/mutvchannel', function (req, res){
  res.render('Pages/livechannels/mutv/mutvchannel.ejs')
});

//Chelsea TV Links
app.get('/chelseatv', function (req, res){
  res.render('Pages/livechannels/chelseatv/chelseatv.ejs')
});
app.get('/chelseatvchannel', function (req, res){
  res.render('Pages/livechannels/chelseatv/chelseachannel.ejs')
});

//Motors TV Links
app.get('/motorstv', function (req, res){
  res.render('Pages/livechannels/motorstv/motorstv.ejs')
});
app.get('/motorstvchannel', function (req, res){
  res.render('Pages/livechannels/motorstv/motorschannel.ejs')
});

//Star Sports TV Links
app.get('/starsport', function (req, res){
  res.render('Pages/livechannels/starsports/starsports.ejs')
});
app.get('/starsportchannel', function (req, res){
  res.render('Pages/livechannels/starsports/starsportschannel.ejs')
});

//BBC1 TV Links
app.get('/bbc1', function (req, res){
  res.render('Pages/livechannels/bbctv/bbc1.ejs')
});
app.get('/bbcchannel1', function (req, res){
  res.render('Pages/livechannels/bbctv/bbc1channel1.ejs')
});

//BBC2 TV Links
app.get('/bbc2', function (req, res){
  res.render('Pages/livechannels/bbctv/bbc2.ejs')
});
app.get('/bbc2channel', function (req, res){
  res.render('Pages/livechannels/bbctv/bbc2channel1.ejs')
});

//===========================================================
//=                                                         =
//=   *** END OF LIVE CHANNEL ROUTES ***                    =
//=                                                         =
//=                                                         =
//===========================================================

// ****** LIVE SPORT LINKS ROUTES ******


//NFL Link page
app.get('/nfl-links', function (req, res){
  res.render('Pages/sportchannels/nfl/nfl.ejs')
});



//Football Link page
app.get('/football-links', function (req, res){
  res.render('Pages/sportchannels/football/football.ejs')
});



//baseball Link page
app.get('/baseball-links', function (req, res){
  res.render('Pages/sportchannels/baseball/baseball.ejs')
});



//cricket Link page
app.get('/cricket-links', function (req, res){
  res.render('Pages/sportchannels/cricket/cricket.ejs')
});



//basketball TV Links
app.get('/basketball-links', function (req, res){
  res.render('Pages/sportchannels/basketball/basketball.ejs')
});



//ufc Link page
app.get('/ufc-links', function (req, res){
  res.render('Pages/sportchannels/ufc/ufc.ejs')
});



//boxing TV Links
app.get('/boxing-links', function (req, res){
  res.render('Pages/sportchannels/boxing/boxing.ejs')
});



//hockey Link page
app.get('/hockey-links', function (req, res){
  res.render('Pages/sportchannels/hockey/hockey.ejs')
});



//tennis TV Links
app.get('/tennis-links', function (req, res){
  res.render('Pages/sportchannels/tennis/tennis.ejs')
});



//snooker Link page
app.get('/snooker-links', function (req, res){
  res.render('Pages/sportchannels/snooker/snooker.ejs')
});



//rugby TV Links
app.get('/rugby-links', function (req, res){
  res.render('Pages/sportchannels/rugby/rugby.ejs')
});



//vollyball Link page
app.get('/vollyball-links', function (req, res){
  res.render('Pages/sportchannels/vollyball/vollyball.ejs')
});



//wwe TV Links
app.get('/wwe-links', function (req, res){
  res.render('Pages/sportchannels/wwe/wwe.ejs')
});



//golf Link page
app.get('/golf-links', function (req, res){
  res.render('Pages/sportchannels/golf/golf.ejs')
});




//handball TV Links
app.get('/handball-links', function (req, res){
  res.render('Pages/sportchannels/handball/handball.ejs')
});



//afl Link page
app.get('/afl-links', function (req, res){
  res.render('Pages/sportchannels/afl/afl.ejs')
});





app.get('*', function(req, res){
  res.send('404 Page Not Found', 404);
});
app.listen(3000, function(){
  console.log("server running on port 3000")
})

















console.log('something')
