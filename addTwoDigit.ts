function addTwoDigit(n:any): any{
    const num = n.toString().split('');

    // return num.reduce((a:string, b:string) =>{
    //     return parseInt(a) + parseInt(b);
    // })

    return parseInt(num[0]) + parseInt(num[1])
}

console.log(addTwoDigit(39))