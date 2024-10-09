import { Sales } from "./Sales.js"
import { Veggies } from "./Vegetables.js"
import { Sides } from "./SideDishes.js"
import { entrees } from "./Entrees.js"


export const FoodTruck = async () => {
    //const salesHTML = await Sales()
    const vegetables = await Veggies()
    
    const sideDishes = await Sides()
    
    const entree = await entrees()

    let html = ""

     html += `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article>${vegetables}</article>

        <article>${entree}</article>

        <article>${sideDishes}</article>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            
        </article>

    `
    return html
}
// ${salesHTML}