function pairElement(str) {
  return str.split("").map(item=>{
    switch(item){
      case "A":
        return ["A","T"];
      case "T":
        return ["T","A"];
      case "C":
        return ["C","G"];
      case "G":
        return ["G","C"];
    }
  });
}

pairElement("GCG");