Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach((item,index,arr)=>newArray.push(callback(item,index,arr)));
  // Only change code above this line
  return newArray;
};