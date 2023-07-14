const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  arr=[...arr]
  arr.sort((a,b)=>a-b)
  return arr;
  // Only change code above this line
}

nonMutatingSort(globalArray);