type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };

const book1: Book = {
  id: 1,
  name: 'how to cook a dragon',
  price: 15,
};

const book2: Book = {
  id: 2,
  name: 'how secret life of unicorns',
  price: 18,
};

const discountedBook: DiscountedBook = {
  id: 3,
  name: 'Gnomes vs. Goblins: The Ultimate Guide',
  price: 25,
  discount: 0.15,
};
