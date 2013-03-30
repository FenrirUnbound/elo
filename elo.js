var calc = (function (winner, loser, winKills, winDeaths) {
  var k = 30,
      g,
      w = 1,
      diff = winner - loser,
      scoreDiff = winKills - winDeaths,
      printMe = '';

  if( diff < 0 )
    diff *= -1;
  if( scoreDiff < 0 ) {
    scoreDiff *= -1;
    w = 0;
  }

  if( scoreDiff >= 3 ) {
    g = (11+scoreDiff)/8;
  } else if (scoreDiff === 2) {
    g = 3/2;
  } else {
    g = 1;
  }

  console.log('g: ' + g);
  console.log('w:  ' + w);
  console.log('scoreDiff:  ' + scoreDiff);
  console.log('diff:  ' + diff);

  printMe = winner+(30)*(g)*(w-(1/((Math.pow(10,(-1*(diff)/400)))+1)));

  console.log(printMe);

  w = (w) ? 0 : 1;
  console.log('w:  ' + w);

  printMe = loser+(30)*(g)*(w-(1/((Math.pow(10,(-1*(diff)/400)))+1)));
  console.log(printMe);
});
