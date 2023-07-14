function uniteUnique(...arr) {
  let uArr=[];
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
      if(!uArr.includes(arr[i][j])){
        uArr.push(arr[i][j]);
      }
    }
  }
  return uArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);