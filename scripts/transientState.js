let transientState ={
   "entreeId": 0,
   "vegetableId": 0,
   "sideId": 0
}

export const setEntreeSelection = (chosenEntree) => {
    transientState.entreeId = chosenEntree
    console.log(transientState)
}

export const setVegetableSelection = (chosenVegetable) => {
    transientState.vegetableId = chosenVegetable
    console.log(transientState)
}

export const setSidesSelection = (chosenSide) => {
    transientState.sideId = chosenSide
    console.log(transientState)
}

export const saveOrder = async () => {
    const postOptions ={
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/purchases", postOptions)
    
    transientState.entreeId = 0
    transientState.vegetableId = 0
    transientState.sidesId = 0

    const customEvent = new CustomEvent("newSaleMade")
    document.dispatchEvent(customEvent)
}