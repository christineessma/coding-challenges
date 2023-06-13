
function detectWord(string) {
    let wantedWord = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== (string[i]).toUpperCase()) {
            wantedWord.push(string[i]);
        }
    }
    return wantedWord.join('');
}

console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));