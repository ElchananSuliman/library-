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
// class Book {
//     constructor(tiltle, outher, imgPath, price, category, bestSeler = "false") {
//         this.tiltle = tiltle;
//         this.outher = outher;
//         this.imgPath = imgPath;
//         this.category = category;
//         this.bestSeler = bestSeler;
//     }
// }

// let b1 = new Book(
//     "harry potter",
//     " J k ROLING",
//     "imagesharry potter even smarts.webp",
//     "fantasy"
// );

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

let b1 = new Book(
    "harry potter",
    "J K ROWLING",
    "imagesharry potter even smarts.webp",
    29.99, // prix ajouté
    "fantasy",
    false // bestSeller optionnel
);
postData(b1);