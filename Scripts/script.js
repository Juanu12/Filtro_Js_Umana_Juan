const Food = document.getElementById("Diaplayfood")


 async function Fetchdata(){
    try{
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")

        if(!response.ok){
            throw new Error ( `Error HTTP ${response.status} `)
        }        


        const data = await response.json()
        console.log(data)
        return data

    } catch(error)
    {
        console.error( "Ocurrió un error", error)
    }


}



async function Displaydata(){
    let data = await Fetchdata()
    let info = ""
    for(i=0; i<data.meals.length; i++){

        let comida = data.meals[i]
    console.log(comida)
        info += `   <div class="Food_container">
        <img src="${comida.strMealThumb}" alt="">
       <p>${comida.strMeal}</p>
       <p>${comida.strCategory}</p>
         </div>`



    }
    Food.innerHTML = info
}


Displaydata()





