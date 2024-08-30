function reverseString(str){
    let reversedArr=[];
    let arrToSTR="";
    for(letter in str){
        reversedArr.unshift(str[letter]);
    }

    for(let i =0 ; i<reversedArr.length;i++){
        arrToSTR+=reversedArr[i];
    }
    return  arrToSTR;
}
console.log(reverseString("hello"));