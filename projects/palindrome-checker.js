function palindrome(str) {
  let strArr=str.split("").filter(item=>/[a-zA-Z0-9]/.test(item));
  let revArr=[...strArr].reverse();
  return strArr.join("").toLowerCase()==revArr.join("").toLowerCase()?true:false;
  
}

palindrome("eye");