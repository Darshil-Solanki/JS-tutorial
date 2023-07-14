function mutation(arr) {
  let mstrArr=arr[0].toLowerCase().split("");
  let cstrArr=arr[1].toLowerCase().split("");
  for(let i=0;i<cstrArr.length;i++){
    if(!mstrArr.includes(cstrArr[i])){
      return false;
    }
  }
  return true;
}

mutation(["hello", "hey"]);