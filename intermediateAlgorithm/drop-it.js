function dropElements(arr, func) {
  let i;
  for(i=0;i<arr.length;i++){
    if(func(arr[i])){
      break;
    }
  }
  return arr.slice(i,);
}

dropElements([1, 2, 3], function(n) {return n < 3; });