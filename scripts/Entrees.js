export const entrees = async () => {
    
    const response = await fetch ("http://localhost:8088/entrees")
    const entrees = await response.json()
    
    //document.addEventListener("change", handleVegetableChoice);

    let html = "<h2>Entrees</h2>";

    // Use map() to generate new array of strings
    const divStringArray = entrees.map(entree => 
        `<div>
            <input type='radio' name='vegetables' value='${entree.id}'/> ${entree.name}
        </div>`
    );

    // Concatenate the generated strings into a single HTML string
    html += divStringArray.join("");

    return html;
}