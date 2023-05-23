
function LongestWord(sen) { 
  let sentenceArray = sentence.replace(/^0-9a-zA-Z\s]/g, "").split("");
  let longWord = "";

  for (let i = 0; i < sentenceArray.length; i++) {
  if(sentenceArray[i].length > longWord.length) {
    longWord = sentenceArray[i];}
  }
    // code goes here  
    return longWord; 
  
  }
     
  // keep this function call here 
  console.log(LongestWord("here is a sample sentence for testing."));

