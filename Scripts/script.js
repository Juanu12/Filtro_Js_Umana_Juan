const Food = document.getElementById("Diaplayfood")


 async function Fetchdata(){
    try{
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")

        if(!response.ok){
            throw new Error ( `Error HTTP ${response.status} `)
        }        


        const data = await response.json()
        console.log(data)
        return data.meals[0]

    } catch(error)
    {
        console.error( "Ocurrió un error", error)
    }


}



async function Displaydata(){
    let info = ""
    for(i=0; i<10; i++){

        let comida = await Fetchdata()
    console.log(comida)
        info += `   <div class="Food_container">
        <img src="${comida.strMealThumb}" alt="">
       <p>${comida.strMeal}</p>
       <p>${comida.strCategory}</p>
       <p>${comida.strArea}</p>
       
        <button>Mas información</button>
         </div>`



    }
    Food.innerHTML = info
}


Displaydata()





