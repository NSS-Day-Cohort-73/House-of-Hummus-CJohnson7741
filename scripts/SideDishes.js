export const Sides =  async() => {
    const response = await fetch ("http://localhost:8088/sides")
    const sides = await response.json()
    
    //document.addEventListener("change", handleVegetableChoice);

    let html = "<h2>Sides</h2>";

    // Use map() to generate new array of strings
    const divStringArray = sides.map(side => 
        `<div>
            <input type='radio' name='sides' value='${side.id}'/> ${side.title}
        </div>`
    );

    // Concatenate the generated strings into a single HTML string
    html += divStringArray.join("");

    return html;
}

