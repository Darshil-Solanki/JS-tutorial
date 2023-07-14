// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookArr,bookName) {
  let bookArrcp=[...bookArr];
  bookArrcp.push(bookName);
  return bookArrcp;
  
  // Change code above this line
}

// Change code below this line
function remove(bookArr,bookName) {
  let bookArrcp=[...bookArr];
  const book_index = bookArrcp.indexOf(bookName);
  if (book_index >= 0) {

    bookArrcp.splice(book_index, 1);
    return bookArrcp;

    // Change code above this line
    }
}