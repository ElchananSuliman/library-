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
    "mockingbird.jpg",
    12.99,
    "Fiction"
  ),
  new Book("1984", "George Orwell", "1984.jpg", 10.99, "Fiction"),
  new Book(
    "The Great Gatsby",
    "F. Scott Fitzgerald",
    "gatsby.jpg",
    9.99,
    "Fiction"
  ),
  new Book("Pride and Prejudice", "Jane Austen", "pride.jpg", 8.99, "Fiction"),
  new Book("Moby-Dick", "Herman Melville", "mobydick.jpg", 11.99, "Fiction"),
  new Book(
    "Brave New World",
    "Aldous Huxley",
    "bravenew.jpg",
    10.49,
    "Fiction"
  ),
  new Book(
    "The Catcher in the Rye",
    "J.D. Salinger",
    "catcher.jpg",
    10.99,
    "Fiction"
  ),
  new Book("The Road", "Cormac McCarthy", "road.jpg", 13.49, "Fiction"),

  // Science Fiction
  new Book("Dune", "Frank Herbert", "dune.jpg", 14.99, "Science Fiction"),
  new Book(
    "Neuromancer",
    "William Gibson",
    "neuromancer.jpg",
    12.49,
    "Science Fiction"
  ),
  new Book(
    "Foundation",
    "Isaac Asimov",
    "foundation.jpg",
    11.99,
    "Science Fiction"
  ),
  new Book(
    "Snow Crash",
    "Neal Stephenson",
    "snowcrash.jpg",
    13.99,
    "Science Fiction"
  ),
  new Book(
    "The Left Hand of Darkness",
    "Ursula K. Le Guin",
    "lefthand.jpg",
    12.99,
    "Science Fiction"
  ),
  new Book("Hyperion", "Dan Simmons", "hyperion.jpg", 14.49, "Science Fiction"),
  new Book("The Martian", "Andy Weir", "martian.jpg", 12.99, "Science Fiction"),
  new Book(
    "The War of the Worlds",
    "H.G. Wells",
    "warworlds.jpg",
    9.99,
    "Science Fiction"
  ),

  // Biography
  new Book(
    "The Diary of a Young Girl",
    "Anne Frank",
    "annefrank.jpg",
    10.99,
    "Biography"
  ),
  new Book(
    "Long Walk to Freedom",
    "Nelson Mandela",
    "mandela.jpg",
    12.99,
    "Biography"
  ),
  new Book(
    "Steve Jobs",
    "Walter Isaacson",
    "stevejobs.jpg",
    15.99,
    "Biography"
  ),
  new Book("Becoming", "Michelle Obama", "becoming.jpg", 16.49, "Biography"),
  new Book("Educated", "Tara Westover", "educated.jpg", 14.99, "Biography"),
  new Book("Elon Musk", "Ashlee Vance", "elonmusk.jpg", 13.99, "Biography"),
  new Book(
    "The Wright Brothers",
    "David McCullough",
    "wright.jpg",
    12.99,
    "Biography"
  ),
  new Book(
    "Benjamin Franklin",
    "Walter Isaacson",
    "benfranklin.jpg",
    14.99,
    "Biography"
  ),

  // Best Sellers
  new Book(
    "The Alchemist",
    "Paulo Coelho",
    "alchemist.jpg",
    11.99,
    "Best Seller",
    "true"
  ),
  new Book(
    "Atomic Habits",
    "James Clear",
    "atomichabits.jpg",
    13.99,
    "Best Seller",
    "true"
  ),
  new Book(
    "The Power of Now",
    "Eckhart Tolle",
    "powernow.jpg",
    12.99,
    "Best Seller",
    "true"
  ),
  new Book(
    "The Subtle Art of Not Giving a F*ck",
    "Mark Manson",
    "subtleart.jpg",
    14.49,
    "Best Seller",
    "true"
  ),
  new Book(
    "Where the Crawdads Sing",
    "Delia Owens",
    "crawdads.jpg",
    10.99,
    "Best Seller",
    "true"
  ),
  new Book(
    "It Ends With Us",
    "Colleen Hoover",
    "itends.jpg",
    11.99,
    "Best Seller",
    "true"
  ),
  new Book(
    "Verity",
    "Colleen Hoover",
    "verity.jpg",
    13.49,
    "Best Seller",
    "true"
  ),
  new Book(
    "The Four Agreements",
    "Don Miguel Ruiz",
    "fouragreements.jpg",
    9.99,
    "Best Seller",
    "true"
  ),
];
async function uploadBooks() {
  for (const book of books) {
    await postData(book);
  }
  console.log("Tous les livres ont été envoyés.");
}

// uploadBooks();
console.log(books);

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
