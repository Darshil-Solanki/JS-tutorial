function sumPrimes(num) {
  if(num<2){
    return "Provide proper number";
  }
  let primeArr =[];
  for(let i=2;i<=num;i++){
    let flag=true;
    for(let j=2;j<=i/2;j++){
      if(i%j==0){
        flag=false;
      }
    }
    if(flag){
    primeArr.push(i);
    }
  }
  return primeArr.reduce((accum,item)=>accum+item,0);
}

sumPrimes(10);