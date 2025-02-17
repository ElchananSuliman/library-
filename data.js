async function postData(data) {
    try {
        const response = await fetch("https://67aedfbb9e85da2f020e9f92.mockapi.io/blogs/blogs", {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            console.log("Response:", result);

        }
    } catch (error) {
        console.log("Erreur:", error);

    }
}

class Book {
    constructor(title, author, imgPath, price, category, bestSeller = false) {
        this.title = title;
        this.author = author;
        this.imgPath = imgPath;
        this.price = price;
        this.category = category;
        this.bestSeller = bestSeller;
    }
}
function createDivBook(book){
    return `
    <div class book>
    <div>
    ${book.title}
    ${book.author}
    </div>
    <button>הוסף לעגלה</button>
    </div>`
}

let b1 = new Book(
    "harry potter",
    "J K ROWLING",
    "imagesharry potter even smarts.webp",
    29.99, // prix ajouté
    "fantasy",
    false // bestSeller optionnel
);
postData(b1);