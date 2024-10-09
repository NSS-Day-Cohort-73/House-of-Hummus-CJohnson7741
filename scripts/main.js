import { FoodTruck } from "./FoodTruck.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()
}

renderAllHTML()

document.addEventListener("newSaleMade", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})
