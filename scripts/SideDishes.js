import { setSidesSelection } from "./transientState.js";

export const Sides =  async() => {
    const response = await fetch ("http://localhost:8088/sides")
    const sides = await response.json()
    
    //sides change listener
    document.addEventListener("change", handleSidesChange);

    let html = "<h2>Sides</h2>";

    // Use map() to generate new array of strings
    const divStringArray = sides.map(side => 
        `<div>
            <input type='radio' name='sides' value='${side.id}' id="sides"/> ${side.title}
        </div>`
    );

    // Concatenate the generated strings into a single HTML string
    html += divStringArray.join("");

    return html;
}

// sides change handler
const handleSidesChange = (changeEvent) => {
    if (changeEvent.target.id === "sides") {
       const chosenOption = changeEvent.target.value
       setSidesSelection(chosenOption)
    }
 }
