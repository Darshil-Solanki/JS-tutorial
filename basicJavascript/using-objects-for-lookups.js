// Setup
function phoneticLookup(val) {
  // Only change code below this line
  let lookup={
    alpha:"Adams",
    bravo:"Boston",
    charlie:"Chicago",
    delta:"Denver",
    echo:"Easy",
    foxtrot:"Frank"
  }
  let result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");