import { saveOrder } from "./transientState.js"

export const saveSale = () => {

    document.addEventListener("click", handleSaleClick)
    let saveButtonHTML = `<button id="purchase">Purchase Combo</button>`
    
    return saveButtonHTML 
}


     const handleSaleClick = (clickEvent) => {
        if (clickEvent.target.id === "purchase") {
            saveOrder()
        }
    }