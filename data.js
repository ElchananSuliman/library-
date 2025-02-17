class Book {
  constructor(tiltle, author, imgPath, price, category, bestSeler = "false") {
    this.tiltle = tiltle;
    this.author = author;
    this.imgPath = imgPath;
    this.price = price;
    this.category = category;
    this.bestSeler = bestSeler;
  }
}

let b1 = new Book(
  "harry potter",
  " J k ROLING",
  "imagesharry potter even smarts.webp",
  "fantasy"
);
function createDivBook(book) {
  return `
    <div class book>
    <div>
    ${book.title}
    ${book.author}
    </div>
    <button>הוסף לעגלה</button>
    </div>`;
}
