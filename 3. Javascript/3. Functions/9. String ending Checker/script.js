function confirmEnding(str, ending){
  let endLen = ending.length;
  let strEnd = str.slice(-endLen);
  
  if(strEnd == ending){
    return true;
  }else{
    return false;
  }
}

console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"))