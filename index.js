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

johnLennonFacts(facts);

function iLoveTheBeatles() {
	var arr = [];
	var i = 0;

	do {
		arr.push('I love the Beatles!');
		i++;
	} while (i < 15);
	return arr;
}

iLoveTheBeatles();
