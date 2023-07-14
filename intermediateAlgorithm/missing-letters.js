function fearNotLetter(str) {
  for(let i=1;i<str.length;i++){
    if(str.charCodeAt(i)==str.charCodeAt(i-1)+2){
      return String.fromCharCode(str.charCodeAt(i)-1);
    }
  }
  return undefined;
}

fearNotLetter("abce");