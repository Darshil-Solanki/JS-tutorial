function translatePigLatin(str) {
  if(/^[a|e|i|o|u]/.test(str)){
    return str+"way";
  }
  return str.replace(/([^a|e|i|o|u]+)([a|e|i|o|u]*\w*)/,"$2$1ay");
}

translatePigLatin("cs");