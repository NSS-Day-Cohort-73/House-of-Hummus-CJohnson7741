export const Veggies = async () => {
    
    const response = await fetch ("http://localhost:8088/vegetables")
    const vegetables = await response.json()
    
    //document.addEventListener("change", handleVegetableChoice);

    let html = "<h2>Vegetables</h2>";

    // Use map() to generate new array of strings
    const divStringArray = vegetables.map(vegetable => 
        `<div>
            <input type='radio' name='vegetables' value='${vegetable.id}'/> ${vegetable.type}
        </div>`
    );

    // Concatenate the generated strings into a single HTML string
    html += divStringArray.join("");

    return html;
}
