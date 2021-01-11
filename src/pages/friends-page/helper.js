export const shelf = (friendBook, num) => {
  return friendBook.filter((book) => book.shelf === num);
};
