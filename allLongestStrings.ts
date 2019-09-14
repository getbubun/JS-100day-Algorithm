function allLongestStrings(array: string[]):string[]{
    let longestLength = 0;
    const longestWords = [];
    array.forEach(word =>{
        longestLength = longestLength < word.length ? word.length : longestLength;
    })

    array.forEach(word =>{
        if(word.length === longestLength)
        longestWords.push(word)
    })

    return longestWords;

}

console.log(allLongestStrings(['aba','aa','bb','acd','azz','zz','c']))