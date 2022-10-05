function findAccountById(accounts, id) {
  return accounts.find(acc => acc.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a,b) => a.name.last.toLowerCase() > b.name.last.toLowerCase() ? 1:-1)
}

function getTotalNumberOfBorrows(account, books) {
  const numBorrows = books.reduce((total, currBook) => {

    let currBookTotal = currBook.borrows.reduce((borrowedTotal, currBorrow) => {
      return (currBorrow.id === account.id
        ? borrowedTotal + 1 : borrowedTotal);


    },0)
    return total + currBookTotal;
    
  }, 0);

  return numBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
  let checkedOutBooks = books.filter(book => {
    if (book.borrows.some(borrowedBook => {
      if (borrowedBook.returned === false && borrowedBook.id === account.id) return true;
    })) { return book }

  });
  console.log(checkedOutBooks);
  booksAndAuthors = checkedOutBooks.map(book => {
    book["author"] =  authors.find(author => author.id === book["authorId"])
  })

  return checkedOutBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
