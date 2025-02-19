async function postData(data) {
  try {
    const response = await fetch(
      "https://67aedfbb9e85da2f020e9f92.mockapi.io/blogs/blogs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      const result = await response.json();
      console.log("Response:", result);
    }
  } catch (error) {
    console.log("Erreur:", error);
  }
}

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
const books = [
  // Fiction
  new Book(
    "To Kill a Mockingbird",
    "Harper Lee",
    "imagesmockinbird.png",
    12.99,
    "Fiction"
  ),
  new Book("1984", "George Orwell", "imagesmockinbird.png", 10.99, "Fiction"),
  new Book(
    "The Great Gatsby",
    "F. Scott Fitzgerald",
    "imagesmockinbird.png",
    9.99,
    "Fiction"
  ),
  new Book(
    "Pride and Prejudice",
    "Jane Austen",
    "imagesmockinbird.png",
    8.99,
    "Fiction"
  ),
  new Book(
    "Moby-Dick",
    "Herman Melville",
    "imagesmockinbird.png",
    11.99,
    "Fiction"
  ),
  new Book(
    "Brave New World",
    "Aldous Huxley",
    "imagesmockinbird.png",
    10.49,
    "Fiction"
  ),
  new Book(
    "The Catcher in the Rye",
    "J.D. Salinger",
    "imagesmockinbird.png",
    10.99,
    "Fiction"
  ),
  new Book(
    "The Road",
    "Cormac McCarthy",
    "imagesmockinbird.png",
    13.49,
    "Fiction"
  ),

  // Science Fiction
  new Book(
    "Dune",
    "Frank Herbert",
    "imagesmockinbird.png",
    14.99,
    "Science Fiction"
  ),
  new Book(
    "Neuromancer",
    "William Gibson",
    "imagesmockinbird.png",
    12.49,
    "Science Fiction"
  ),
  new Book(
    "Foundation",
    "Isaac Asimov",
    "imagesmockinbird.png",
    11.99,
    "Science Fiction"
  ),
  new Book(
    "Snow Crash",
    "Neal Stephenson",
    "imagesmockinbird.png",
    13.99,
    "Science Fiction"
  ),
  new Book(
    "The Left Hand of Darkness",
    "Ursula K. Le Guin",
    "imagesmockinbird.png",
    12.99,
    "Science Fiction"
  ),
  new Book(
    "Hyperion",
    "Dan Simmons",
    "imagesmockinbird.png",
    14.49,
    "Science Fiction"
  ),
  new Book(
    "The Martian",
    "Andy Weir",
    "imagesmockinbird.png",
    12.99,
    "Science Fiction"
  ),
  new Book(
    "The War of the Worlds",
    "H.G. Wells",
    "imagesmockinbird.png",
    9.99,
    "Science Fiction"
  ),

  // Biography
  new Book(
    "The Diary of a Young Girl",
    "Anne Frank",
    "imagesmockinbird.png",
    10.99,
    "Biography"
  ),
  new Book(
    "Long Walk to Freedom",
    "Nelson Mandela",
    "imagesmockinbird.png",
    12.99,
    "Biography"
  ),
  new Book(
    "Steve Jobs",
    "Walter Isaacson",
    "imagesmockinbird.png",
    15.99,
    "Biography"
  ),
  new Book(
    "Becoming",
    "Michelle Obama",
    "imagesmockinbird.png",
    16.49,
    "Biography"
  ),
  new Book(
    "Educated",
    "Tara Westover",
    "imagesmockinbird.png",
    14.99,
    "Biography"
  ),
  new Book(
    "Elon Musk",
    "Ashlee Vance",
    "imagesmockinbird.png",
    13.99,
    "Biography"
  ),
  new Book(
    "The Wright Brothers",
    "David McCullough",
    "imagesmockinbird.png",
    12.99,
    "Biography"
  ),
  new Book(
    "Benjamin Franklin",
    "Walter Isaacson",
    "imagesmockinbird.png",
    14.99,
    "Biography"
  ),

  // Best Sellers
  new Book(
    "The Alchemist",
    "Paulo Coelho",
    "imagesmockinbird.png",
    11.99,
    "Best Seller",
    "true"
  ),
  new Book(
    "Atomic Habits",
    "James Clear",
    "imagesmockinbird.png",
    13.99,
    "Best Seller",
    "true"
  ),
  new Book(
    "The Power of Now",
    "Eckhart Tolle",
    "imagesmockinbird.png",
    12.99,
    "Best Seller",
    "true"
  ),
  new Book(
    "The Subtle Art of Not Giving a F*ck",
    "imagesmockinbird.png",
    "subtl",
    14.49,
    "Best Seller",
    "true"
  ),
  new Book(
    "Where the Crawdads Sing",
    "Delia Owens",
    "imagesmockinbird.png",
    10.99,
    "Best Seller",
    "true"
  ),
  new Book(
    "It Ends With Us",
    "Colleen Hoover",
    "imagesmockinbird.png",
    11.99,
    "Best Seller",
    "true"
  ),
  new Book(
    "Verity",
    "Colleen Hoover",
    "imagesmockinbird.png",
    13.49,
    "Best Seller",
    "true"
  ),
  new Book(
    "The Four Agreements",
    "Don Miguel Ruiz",
    "imagesmockinbird.png",
    9.99,
    "Best Seller",
    "true"
  ),
];
// async function uploadBooks() {
//     for (const book of books) {
//         await postData(book);
//     }
//     console.log("Tous les livres ont été envoyés.");
// }
// uploadBooks()

function createDivBook(book) {
  return `
    <div class="book">
        <div class="title">${book.title}</div>
        <div class="author">${book.author}</div>
        <img src="${book.imgPath}" alt="${book.title}" class="b-card">
        <div class="price">$${book.price}</div>
        <button>ADD TO CART</button>
    </div>`;
}
