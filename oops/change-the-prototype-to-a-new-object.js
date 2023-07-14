function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs:4,
  eat(){
    console.log("amm mmaam");
  },
  describe(){
    console.log("I am a dog and my name is "+this.name);
  }
};