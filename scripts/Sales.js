export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases").then(res => res.json())
    const purchases = await response.json()
   
   
    // let salesDivs = purchases.map(purchase =>

    // )


    salesDivs = salesDivs.join("")

    return salesDivs
}

