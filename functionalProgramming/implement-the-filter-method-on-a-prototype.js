Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach((item,index,arr)=>{
    if(callback(item,index,arr)){
      newArray.push(item);
    }
  });
  // Only change code above this line
  return newArray;
};