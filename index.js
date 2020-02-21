// add solution here
function theBeatlesPlay(musicians, instruments){
  var BeatlesInstruments = [];
  for (i = 0 ; i < musicians.length; i++){
    BeatlesInstruments.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return BeatlesInstruments
}

theBeatlesPlay(musicians, instruments);


function johnLennonFacts(array){
	
	var newFacts = [];
	var i = 0;
	while(i < array.length){
		//return facts[i] + "!!!"
		newFacts.push(array[i]+"!!!");
		i++
	}
	return newFacts
}

johnLennonFacts(facts)


