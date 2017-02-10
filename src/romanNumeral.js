function decToRoman (decInput = null) {
  var romanNumber = [];
  var mAdd = "";
  var romanNumeralMatrix = [
     ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
     ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
     ["","I","II","III","IV","V","VI","VII","VIII","IX"]
  ];    
  if(decInput>=1000){
      var factorsOf1000 = Math.floor(decInput/1000)
      decInput -= (factorsOf1000 * 1000)
      for (var i = 0; i < factorsOf1000; i++) {
         mAdd += "M";
         if(i == (factorsOf1000 - 1)){
                romanNumber.push(mAdd)
         }
     };
  };
  if(decInput>=100){
      var factorsOf100 = Math.floor(decInput/100)
      decInput -= (factorsOf100*100)
      romanNumber.push(romanNumeralMatrix[0][factorsOf100]);
  };
  if(decInput>=10){
      var factorsOf10 = Math.floor(decInput/10)
      decInput -= (factorsOf10*10)
      romanNumber.push(romanNumeralMatrix[1][factorsOf10]);
  };
  if(decInput>=1){
      var factorsOf1 = Math.floor(decInput/1)
      decInput -= (factorsOf1)
      romanNumber.push(romanNumeralMatrix[2][factorsOf1]);
  };
  var tempString = romanNumber.join("");
  return tempString;
};
// decToRoman(1944)