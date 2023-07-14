function destroyer(arr,...args) {
  let newArr=arr.filter(item=>!args.includes(item));
  console.log(newArr);
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);