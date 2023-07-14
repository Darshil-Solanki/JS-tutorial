function rot13(str) {
  console.log(str.split("").map(item=>/[A-Z]/.test(item)?getCode(item):item).join(""));
  return str.split("").map(item=>/[A-Z]/.test(item)?getCode(item):item).join("");
}
function getCode(c){
  let i;
  for(i=1;i<27;i++){
    if(c.charCodeAt(0)==i+64){break ;}
  }
  if(i<14){
    return String.fromCharCode(c.charCodeAt(0)+13);
  }
  else{
    return String.fromCharCode(c.charCodeAt(0)-13);
  }
}
rot13("SERR PBQR PNZC");