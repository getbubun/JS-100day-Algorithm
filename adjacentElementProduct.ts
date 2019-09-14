function adjacentElementProduct(array:number[]):number{
    let largestProduct = 0
    for(let i = 0 ; i < array.length ; i++){
        const product = array[i] * array[i+1];
        largestProduct = largestProduct < product ? product : largestProduct;
    }

    return largestProduct;
}

console.log(adjacentElementProduct([3,6,-2,-5,7,6]))