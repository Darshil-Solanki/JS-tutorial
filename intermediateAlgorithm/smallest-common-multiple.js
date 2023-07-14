function smallestCommons(arr) {
  if(arr[0]>arr[1]){
    return getScm(arr[1],arr[0]);
  }
  else{
    return getScm(arr[0],arr[1]);
  }
}
function getCount(arr, val) {
      return arr.filter((v) => (v === val)).length;
  }
function getScm(min,max){
  let primeFactornum=[];
  for(let i=min;i<=max;i++){
    let factor=[];
    let num=i;
    for(let j=2;j<=i/2;j++){
      while(num%j===0){
        factor.push(j);
        num/=j;
      }  
    }
    if(factor.length==0){
      primeFactornum.push(i);
    }
    else{
      for(let i=0;i<factor.length;i++){
        if(getCount(primeFactornum,factor[i])<getCount(factor,factor[i])){
          primeFactornum.push(factor[i]);
        }
      }
    }
  }
  return primeFactornum.reduce((accum,item)=>accum*=item);
}


smallestCommons([2,10]);