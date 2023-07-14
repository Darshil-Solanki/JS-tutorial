function steamrollArray(arr){
  let flatArr=[];
  for(let item of arr){
    if(Array.isArray(item)){
      let items=steamrollArray(item);
      flatArr.push(...items);
    }
    else{
      flatArr.push(item);
    }
  }
  return flatArr;
}

steamrollArray([1, [2], [3, [[4]]]]);