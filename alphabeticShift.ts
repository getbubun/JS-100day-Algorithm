function alphabeticShift(input:string){
    const alphabet: string[] = ['a','b', 'c','d','e','f','g','h','i','j','h','k','l','m','n','o',
    'p','q','r','s','t','w','x','y','z'];
    
    let word = [];
     input.split('').map(char =>{
         if(char !== 'z'){
             input = alphabet[alphabet.indexOf(char) +  1]
             word.push(input)
         }else
            word.push('a')    
     })

     return word.join('');

}

console.log(alphabeticShift('crazy'))