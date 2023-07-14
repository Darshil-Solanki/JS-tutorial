function chunkArrayInGroups(arr, size) {
  let nArr=[];
  for(let i=0;i<arr.length;i+=size){
    nArr.push(arr.slice(i,i+size));
  }
  console.log(nArr)
  return nArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);