function findLargest(arr){
    let def=arr[0];
    for(let item in arr){
        item>def
        def=item}
    return def;
}
