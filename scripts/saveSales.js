import { saveOrder } from "./transientState.js"

export const saveSale = () => {
    //create purchase button
    document.addEventListener("click", handleSaleClick)
    let saveButtonHTML = `<button id="purchase">Purchase Combo</button>`
    
    return saveButtonHTML 
}

    //when  purchase button is clicked save the order
     const handleSaleClick = (clickEvent) => {
        if (clickEvent.target.id === "purchase") {
            saveOrder()
        }
    }