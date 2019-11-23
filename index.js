const { getRandomWordSync, getRandomWord } = require('../word-maker');
const fs = require('fs');

console.log('It works!');

// YOUR CODE HERE

////Use this for generate Random word sysnchronously
SyncRandomWord(1,101);

////Use this for generate Random word Asysnchronously
AsyncRandomWord(1,101);

////Use this to write to a file
function writetoFile(word,fileName){
		fs.appendFile(fileName+'.txt', word, (err) => {
		if (err) throw err;
		
	});
}

function SyncRandomWord( minLen, maxLen){
	
	try{
		var filteredWordList = [];
		for(var i=minLen;i<maxLen;i++){		
			const word = getRandomWordSync({ withErrors: false });
			if(i%3 == 0 && i% 5 != 0 ){
				//console.log(i+':fizz');
				filteredWordList.push(i+':fizz');
				writetoFile(i+':fizz \n','SyncRandomWord');
			}
			else if (i% 5 == 0 && i%3 != 0)
			{
				//console.log(i+':buzz');
				filteredWordList.push(i+':buzz');
				writetoFile(i+':buzz \n','SyncRandomWord');
			}
			else if (i% 5 == 0 && i%3 ==0)
			{
				//console.log(i+':fizzbuzz');
				filteredWordList.push(i+':fizzbuzz');
				writetoFile(i+':fizzbuzz  \n','SyncRandomWord');
			}
			else
			{
				//console.log(i+':'+word);
				filteredWordList.push(i+':'+word);
				writetoFile(i+':'+word +  '\n','SyncRandomWord');
			}
		}
		filteredWordList.sort(compare);
		for(var i=0;i<filteredWordList.length;i++)
		{		
			writetoFile(filteredWordList[i]+'\n','SyncRandomWordFiltered');
		}
	}
	catch (Exception)
	{
		console.log("It shouldn't break anything!");
	}
}
function compare(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else if (a === b) {
    return 0;
  }
}
function AsyncRandomWord(minLen, maxLen){

	for(var i=1;i<101;i++){		
		const word = getRandomWord({ withErrors: false,slow: false });
		if(i%3 == 0 && i% 5 != 0 ){
			//console.log(i+':fizz');
			writetoFile(i+':fizz \n','AsyncRandomWord');
		}
		else if (i% 5 == 0 && i%3 != 0)
		{
			//console.log(i+':buzz');
			writetoFile(i+':buzz \n','AsyncRandomWord');
		}
		else if (i% 5 == 0 && i%3 ==0)
		{
			//console.log(i+':fizzbuzz');
			writetoFile(i+':fizzbuzz  \n','AsyncRandomWord');
		}
		else
		{ 	word.then(
				  function(result) { /*console.log(i +':'+ result);*/writetoFile(i+':'+result +  '\n','AsyncRandomWord'); },
				  function(error) { /* handle an error */ }
				);
		}
	}

}
function runAsync(){
	/*try {
	  await AsyncRandomWord(1,101).catch(error => {
		//doAnythingWithError(error)
		throw error
	  })
	  ...
	} catch (error) {
		console.log("handled");
	  //errorResult(res, error)
	}*/
}
