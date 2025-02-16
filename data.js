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