async function postData(data) {
    try {
        const response = await fetch(
            "https://67aedfbb9e85da2f020e9f92.mockapi.io/blogs/blogs", {
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
        this.category = category
        this.bestSeler = bestSeler;
    }
}
const books = [
    // Fiction
    new Book("To Kill a Mockingbird", "Harper Lee", "images\mockinbird.png", 12.99, "Fiction"),
    new Book("1984", "George Orwell", "images\mockinbird.png", 10.99, "Fiction"),
    new Book("The Great Gatsby", "F. Scott Fitzgerald", "images\mockinbird.png", 9.99, "Fiction"),
    new Book("Pride and Prejudice", "Jane Austen", "images\mockinbird.png", 8.99, "Fiction"),
    new Book("Moby-Dick", "Herman Melville", "images\mockinbird.png", 11.99, "Fiction"),
    new Book("Brave New World", "Aldous Huxley", "images\mockinbird.png", 10.49, "Fiction"),
    new Book("The Catcher in the Rye", "J.D. Salinger", "images\mockinbird.png", 10.99, "Fiction"),
    new Book("The Road", "Cormac McCarthy", "images\mockinbird.png", 13.49, "Fiction"),

    // Science Fiction
    new Book("Dune", "Frank Herbert", "images\mockinbird.png", 14.99, "Science Fiction"),
    new Book("Neuromancer", "William Gibson", "images\mockinbird.png", 12.49, "Science Fiction"),
    new Book("Foundation", "Isaac Asimov", "images\mockinbird.png", 11.99, "Science Fiction"),
    new Book("Snow Crash", "Neal Stephenson", "images\mockinbird.png", 13.99, "Science Fiction"),
    new Book("The Left Hand of Darkness", "Ursula K. Le Guin", "images\mockinbird.png", 12.99, "Science Fiction"),
    new Book("Hyperion", "Dan Simmons", "images\mockinbird.png", 14.49, "Science Fiction"),
    new Book("The Martian", "Andy Weir", "images\mockinbird.png", 12.99, "Science Fiction"),
    new Book("The War of the Worlds", "H.G. Wells", "images\mockinbird.png", 9.99, "Science Fiction"),

    // Biography
    new Book("The Diary of a Young Girl", "Anne Frank", "images\mockinbird.png", 10.99, "Biography"),
    new Book("Long Walk to Freedom", "Nelson Mandela", "images\mockinbird.png", 12.99, "Biography"),
    new Book("Steve Jobs", "Walter Isaacson", "images\mockinbird.png", 15.99, "Biography"),
    new Book("Becoming", "Michelle Obama", "images\mockinbird.png", 16.49, "Biography"),
    new Book("Educated", "Tara Westover", "images\mockinbird.png", 14.99, "Biography"),
    new Book("Elon Musk", "Ashlee Vance", "images\mockinbird.png", 13.99, "Biography"),
    new Book("The Wright Brothers", "David McCullough", "images\mockinbird.png", 12.99, "Biography"),
    new Book("Benjamin Franklin", "Walter Isaacson", "images\mockinbird.png", 14.99, "Biography"),

    // Best Sellers
    new Book("The Alchemist", "Paulo Coelho", "images\mockinbird.png", 11.99, "Best Seller", "true"),
    new Book("Atomic Habits", "James Clear", "images\mockinbird.png", 13.99, "Best Seller", "true"),
    new Book("The Power of Now", "Eckhart Tolle", "images\mockinbird.png", 12.99, "Best Seller", "true"),
    new Book("The Subtle Art of Not Giving a F*ck", "images\mockinbird.png", "subtl", 14.49, "Best Seller", "true"),
    new Book("Where the Crawdads Sing", "Delia Owens", "images\mockinbird.png", 10.99, "Best Seller", "true"),
    new Book("It Ends With Us", "Colleen Hoover", "images\mockinbird.png", 11.99, "Best Seller", "true"),
    new Book("Verity", "Colleen Hoover", "images\mockinbird.png", 13.49, "Best Seller", "true"),
    new Book("The Four Agreements", "Don Miguel Ruiz", "images\mockinbird.png", 9.99, "Best Seller", "true")
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
        <div class="title">${book.tiltle}</div>
        <div class="author">${book.author}</div>
        <img src="${book.imgPath}" alt="${book.tiltle}" class="b-card">
        <div class="price">$${book.price}</div>
        <button>ADD TO CART</button>
    </div>`;
}