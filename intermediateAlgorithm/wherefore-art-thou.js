function whatIsInAName(collection, source) {
  let keys=Object.keys(source)
  return collection.filter(item=>{
    for(let i=0;i<keys.length;i++){
      if(item[keys[i]]!==source[keys[i]]){return false;}
    }
      return true;
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", las: "Capulet" }], { last: "Capulet" });