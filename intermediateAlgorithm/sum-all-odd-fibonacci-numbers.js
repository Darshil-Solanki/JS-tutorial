function sumFibs(num) {
  let fib=[0,1];
  for(let i=1;i<=num;i+=fib[fib.length-2]){
    fib.push(i);
  }
  return fib.reduce((accum,item)=>item%2==1?
      accum+item:accum
  ,0);
}

sumFibs(4);