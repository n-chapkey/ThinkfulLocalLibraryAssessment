function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = books.filter(book => !book.borrows[0].returned)

  const availableBooks = books.filter(book => {
    const [lastBorrowed] = book.borrows;
    return lastBorrowed.returned
  });

  return[borrowedBooks, availableBooks]; 
}

function getBorrowersForBook(book, accounts) {
  borrowerAccounts = accounts.filter(account => {
    let accountCntr = 0;
    const isBorrower = book.borrows.some(borrowedBook => borrowedBook.id === account.id);
    if (isBorrower) {
      accountCntr++;
      foundBook = book.borrows.find(borrBook => borrBook.id === account.id);
      account["returned"] = foundBook.returned;
    }
    return isBorrower && accountCntr <=10
  })
  console.log(borrowerAccounts);
  return borrowerAccounts;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
