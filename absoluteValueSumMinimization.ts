function absoluteValuesSumMinimization(a:number[]){
    const isEven = a.length % 2 === 0;
    return isEven ? a[a.length / 2 - 1] : a[Math.floor( a.length / 2)];
}

console.log(absoluteValuesSumMinimization([2,4,7]));
console.log(absoluteValuesSumMinimization([2,4,6,7]));
console.log(absoluteValuesSumMinimization([2,4,6,8,7]));
console.log(absoluteValuesSumMinimization([2,4,,5,6,8,7]))