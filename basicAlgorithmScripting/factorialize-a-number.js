function factorialize(num) {
  if(num==1){
    return 1;
  }
  else if(num==0){
    return 1;
  }
  else if(num<0){
    return "Bad Number!";
  }
  return num*factorialize(num-1);
}

factorialize(5);