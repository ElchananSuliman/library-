class Book {
  constructor(tiltle, outher, imgPath, price, category, bestSeler = "false") {
    this.tiltle = tiltle;
    this.outher = outher;
    this.imgPath = imgPath;
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
