// add solution here
function theBeatlesPlay(musicians, instruments){
  var BeatlesInstruments = [];
  for (i = 0 ; i < musicians.length; i++){
    BeatlesInstruments.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return BeatlesInstruments
}

theBeatlesPlay(musicians, instruments);


function johnLennonFacts(facts){
  while(i < facts.length){
    //return facts[i] + "!!!"
    facts.push(facts[i]+"!!!");
  }
}
