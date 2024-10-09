export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side").then(res => res.json())
    
    
   //create an HTML string with the id of the sale as a receipt number and adding up all component prices and displaying them as the price.
    let salesDivs = sales.map(sale => {
      
        const salePrice = sale.entree.price + sale.side.price + sale.vegetable.price
      
        return `
        <div>
            Receipt #${sale.id} = ${salePrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })}
        </div>
        ` 
    }

    )


    salesDivs = salesDivs.join("")

    return salesDivs
}

