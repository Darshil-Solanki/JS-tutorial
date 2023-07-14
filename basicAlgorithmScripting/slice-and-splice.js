function frankenSplice(arr1, arr2, n) {
  let tarr=[...arr2]
  tarr.splice(n,0,...arr1);
  return tarr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);