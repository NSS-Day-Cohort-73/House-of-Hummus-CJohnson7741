import { setEntreeSelection } from "./transientState.js";

export const entrees = async () => {
    
    const response = await fetch ("http://localhost:8088/entrees")
    const entrees = await response.json()
    
    //entrees change listener
    document.addEventListener("change", handleEntreesChange);
    let html = "<h2>Entrees</h2>";

    // Use map() to generate new array of strings
    const divStringArray = entrees.map(entree => 
        `<div>
            <input type='radio' name='vegetables' value='${entree.id}' id="entrees"/> ${entree.name}
        </div>`
    );

    // Concatenate the generated strings into a single HTML string
    html += divStringArray.join("");

    return html;
}


// entrees change handler
const handleEntreesChange = (changeEvent) => {
    if (changeEvent.target.id === "entrees") {
       const chosenOption = changeEvent.target.value
       setEntreeSelection(chosenOption)
    }
 }
