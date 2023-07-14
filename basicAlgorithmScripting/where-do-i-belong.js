function getIndexToIns(arr, num) {
  if(arr.length==0){
    return 0;
  }
  arr.sort((a,b)=>a-b);
  let i;
  for(i=0;i<arr.length;i++){
    if(arr[i]>=num){
      return i;
    }
  }
  return i;
}

getIndexToIns([40,60], 50);