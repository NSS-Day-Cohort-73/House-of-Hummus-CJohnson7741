import { FoodTruck } from "./FoodTruck.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()
}

renderAllHTML()


//when a new order is saved refresh HTML to display new order
document.addEventListener("newSaleMade", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})
