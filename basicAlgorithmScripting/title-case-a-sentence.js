function titleCase(str){
  return str.trim(" ").toLowerCase().split(" ").map(item=>item[0].toUpperCase()+item.slice(1,)).join(" ");
}

titleCase("I'm a little tea pot");