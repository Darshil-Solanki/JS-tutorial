function addTogether(...arg){
  let flag=arg.every(item=>typeof(item)=="number");
  if(flag){
    if(arg.length==2){
      return arg[0]+arg[1];
    }
    if(arg.length==1){
      return (x)=>typeof(x)=="number"?x+arg[0]:undefined;;
    }
  }
  else{
    return undefined;
  }
}
addTogether(2,3);