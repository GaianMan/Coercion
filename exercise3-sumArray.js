function sumArray(arr){
    let sum=0;
    for(let item of arr){
        sum += item;
    }
    return  sum;
}
console.log(sumArray([1,1,1]))