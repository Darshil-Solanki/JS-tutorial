let username = "JackOfAllTrades";
let userCheck = /(^[a-zA-Z]{2,}\d*$)|(^[a-zA-Z]+\d\d+$)/; // Change this line
let result = userCheck.test(username);