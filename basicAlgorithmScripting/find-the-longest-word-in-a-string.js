function findLongestWordLength(str) {
  return str.split(" ").reduce((accum,item)=>accum<item.length?item.length:accum,0);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");