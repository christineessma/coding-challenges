function FirstReverse(str) { 

    // code goes here  
    let splitStr = str.split("");
    let reverseStr = splitStr.reverse();
    let newStr = reverseStr.join("");
    str = newStr;
    return str; 
  }
     
  // keep this function call here 
  console.log(FirstReverse(readline()));
