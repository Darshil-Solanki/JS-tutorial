function Cat(name) {
  this.name = name;
}
function Bear(name) {
  this.name = name;
}

  

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};