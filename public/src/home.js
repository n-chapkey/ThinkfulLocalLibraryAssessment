function getTotalBooksCount(books) {
  return books.reduce((total, book) => total + 1, 0);
}

function getTotalAccountsCount(accounts) {
  return accounts.reduce((total, account) => total + 1, 0);
}

function getBooksBorrowedCount(books) {
  return books.reduce(((total, currBook) => {
    return !currBook.borrows[0].returned ? total + 1 : total;
  }), 0)

}
function getFiveMostPopular(mappedItems) {
  const allItemObjects = [];

  mappedItems.forEach(property => {
    if (allItemObjects.find(itemObj => property ===
      itemObj.name) === undefined) {
        allItemObjects.push({name: property, count: 1})
    } else {
      allItemObjects.find(itemObj => property ===
        itemObj.name).count++;
      }
  })

  allItemObjects.sort((property1, property2) => {
    return  property2.count - property1.count
  });

  return allItemObjects.slice(0,5);
}

function getMostCommonGenres(books) {
  const allGenres = books.map(book => book.genre);
  return getFiveMostPopular(allGenres);
}

function getMostPopularBooks(books) {
  const bookCountObjects = [];
  books.forEach(book => {
    bookCountObjects.push({ name: book.title, count: book.borrows.length })
  });
  
  bookCountObjects.sort((property1, property2) => {
    return  property2.count - property1.count
  });

  return bookCountObjects.slice(0, 5);

 }

function getMostPopularAuthors(books, authors) { 
  const popularAuthors = [];
  
  authors.forEach(author => {
    numAuthorBookBorrowed =
      books.filter(book => author.id === book.authorId)
      .reduce((total, book) => {
        return total + book.borrows.length;
      }, 0)
    authorName = author.name.first + " " + author.name.last;
    popularAuthors.push({name: authorName, count:numAuthorBookBorrowed})
    
    popularAuthors.sort((author1, author2) => {
      return  author2.count - author1.count
    });

  })

  return popularAuthors.slice(0,5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
