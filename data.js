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
  constructor(title, author, imgPath, price, category, bestSeller = "false") {
    this.title = title;
    this.author = author;
    this.imgPath = imgPath;
    this.price = price;
    this.category = category;
    this.bestSeller = bestSeller;
  }
}
// const books = [
//     // Fiction
//     new Book("To Kill a Mockingbird", "Harper Lee", "./images/To Kill a Mockingbird.jpg", 12.99, "Fiction"),
//     new Book("1984", "George Orwell", "./images/1984.jpg", 10.99, "Fiction"),
//     new Book("The Great Gatsby", "F. Scott Fitzgerald", "./images/The Great Gatsby.jpg", 9.99, "Fiction"),
//     new Book("Pride and Prejudice", "Jane Austen", "./images/Pride and Prejudice.jpg", 8.99, "Fiction"),
//     new Book("Moby-Dick", "Herman Melville", "./images/Moby-Dick.jpg", 11.99, "Fiction"),
//     new Book("Brave New World", "Aldous Huxley", "./images/Brave New World.jpg", 10.49, "Fiction"),
//     new Book("The Catcher in the Rye", "J.D. Salinger", "./images/The Catcher in the Rye.jpg", 10.99, "Fiction"),
//     new Book("The Road", "Cormac McCarthy", "./images/The Road.jpg", 13.49, "Fiction"),
//     // Science Fiction
//     new Book("Dune", "Frank Herbert", "./images/Dune.jpg", 14.99, "Science Fiction"),
//     new Book("Neuromancer", "William Gibson", "./images/Neuromancer.jpg", 12.49, "Science Fiction"),
//     new Book("Foundation", "Isaac Asimov", "./images/Foundation.jpg", 11.99, "Science Fiction"),
//     new Book("Snow Crash", "Neal Stephenson", "./images/Snow Crash.jpg", 13.99, "Science Fiction"),
//     new Book("The Left Hand of Darkness", "Ursula K. Le Guin", "./images/The Left Hand of Darkness.jpg", 12.99, "Science Fiction"),
//     new Book("Hyperion", "Dan Simmons", "./images/Hyperion.jpg", 14.49, "Science Fiction"),
//     new Book("The Martian", "Andy Weir", "./images/The Martian.jpg", 12.99, "Science Fiction"),
//     new Book("The War of the Worlds", "H.G. Wells", "./images/The War of the Worlds.jpg", 9.99, "Science Fiction"),
//     // Biography
//     new Book("The Diary of a Young Girl", "Anne Frank", "./images/The Diary of a Young Girl.jpg", 10.99, "Biography"),
//     new Book("Long Walk to Freedom", "Nelson Mandela", "./images/Long Walk to Freedom.jpg", 12.99, "Biography"),
//     new Book("Steve Jobs", "Walter Isaacson", "./images/Steve Jobs.jpg", 15.99, "Biography"),
//     new Book("Becoming", "Michelle Obama", "./images/Becoming.jpg", 16.49, "Biography"),
//     new Book("Educated", "Tara Westover", "./images/Educated.jpg", 14.99, "Biography"),
//     new Book("Elon Musk", "Ashlee Vance", "./images/Elon Musk.jpg", 13.99, "Biography"),
//     new Book("The Wright Brothers", "David McCullough", "./images/The Wright Brothers.jpg", 12.99, "Biography"),
//     new Book("Benjamin Franklin", "Walter Isaacson", "./images/Benjamin Franklin.jpg", 14.99, "Biography"),
//     // Best Sellers
//     new Book("The Alchemist", "Paulo Coelho", "./images/The Alchemist.jpg", 11.99, "Best Seller", "true"),
//     new Book("Atomic Habits", "James Clear", "./images/Atomic Habits.jpg", 13.99, "Best Seller", "true"),
//     new Book("The Power of Now", "Eckhart Tolle", "./images/The Power of Now.jpg", 12.99, "Best Seller", "true"),
//     new Book("The Subtle Art of Not Giving a F*ck", "./images/the-subtle-art-of-not-giving-a-fuck.jpg", "subtl", 14.49, "Best Seller", "true"),
//     new Book("Where the Crawdads Sing", "Delia Owens", "./images/Where the Crawdads Sing.jpg", 10.99, "Best Seller", "true"),
//     new Book("It Ends With Us", "Colleen Hoover", "./images/It Ends With Us.jpg", 11.99, "Best Seller", "true"),
//     new Book("Verity", "Colleen Hoover", "./images/Verity.jpg", 13.49, "Best Seller", "true"),
//     new Book("The Four Agreements", "Don Miguel Ruiz", "./images/The Four Agreements.jpg", 9.99, "Best Seller", "true")
// ];
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
        <button class= "btn-cart" onclick='addToCart(${JSON.stringify(
          book
        ).replace(/"/g, "&quot;")})'>ADD TO CART</button>
    </div>`;
}
