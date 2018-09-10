for(var c = 998; c > 333; c--)
  for( var b = 1000 - c - 1; ( 1000 - c - b ) < b; b--){
    var a = 1000 - b - c;
    if( c ** 2 == b ** 2 + a ** 2 )
      console.log(c*b*a);
  }
