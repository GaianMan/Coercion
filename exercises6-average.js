function findAverage(arr){
    let mid = arr.reduce((sum, el) => sum + el, 0);
    return mid/arr.length;
}
