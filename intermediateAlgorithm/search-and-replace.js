function myReplace(str, before, after) {
  if(/^[A-Z]/.test(before) && /^[a-z]/.test(after)){
    after=after[0].toUpperCase()+after.split("").slice(1,).join("");
  }
  if(/^[a-z]/.test(before) && /^[A-Z]/.test(after)){
    after=after[0].toLowerCase()+after.split("").slice(1,).join("");
  }
  return str.replace(before,after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");