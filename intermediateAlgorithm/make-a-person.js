const Person = function(firstAndLast) {
  var firstName=firstAndLast.split(" ")[0];
  var lastName=firstAndLast.split(" ")[1];
  var fullName=firstAndLast
   this.getFullName = function() {
    return fullName;
  };
  this.getFirstName = function() {
    return firstName;
  };
this.getLastName = function() {
    return lastName;
  };
  this.setFirstName = function(name) {
    firstName=name;
    fullName=name+" "+lastName;
  };
  this.setLastName = function(name) {
    lastName=name;
    fullName=firstName+" "+name;
  };
  this.setFullName = function(name) {
    fullName=name;
    firstName=name.split(" ")[0];
    lastName=name.split(" ")[1]
  };
  return fullName; 
};

const bob = new Person('Bob Ross');
bob.getFullName();