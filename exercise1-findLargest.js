function findLargest(arr){
    let def=arr[0];
    for(let item of arr){
        if( item>def) def=item;
    }
    return def;
}
console.log(findLargest([8900,55,99,101,2]));


