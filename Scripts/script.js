const Food = document.getElementById("Diaplayfood")
const Beef = document.getElementById("DiaplayBeef")

async function Fetchdata() {
    try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")

        if (!response.ok) {
            throw new Error(`Error HTTP ${response.status} `)
        }


        const data = await response.json()
        console.log(data)
        return data.meals[0]

    } catch (error) {
        console.error("Ocurrió un error", error)
    }


}


function traer(key){
    fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${key}`)
}

async function Displaydata() {
    let info = ""
    for (i = 0; i < 15; i++) {
        let ingredientes =""
        let comida = await Fetchdata()
        for(let q=0;q<20;q++){
            let enlace = `strIngredient${q}`
            if (comida[enlace]=="" || comida[enlace] == null){
                ingredientes += ""
            }
            else{
                ingredientes += `${comida[enlace]}<br>`
            }
        }
        console.log(comida)
        info += `   <div class="Food_container">
        <img src="${comida.strMealThumb}" alt="">
       <p>${comida.strMeal}</p>
       <p>${comida.strCategory}</p>
       <p>${comida.strArea}</p>
       
        <button>Mas información</button>
        <div id="Card">
        <p>Ingredients: <br>${ingredientes}<br></p>
        <p>${comida.strInstructions}</p>
        </div>
         </div> `



    }
    Food.innerHTML = info
}


Displaydata()

async function Fetchbeef(){

try {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef")

    if (!response.ok) {
        throw new Error(`Error HTTP ${response.status} `)
    }


    const data = await response.json()
    console.log(data)
    return data.meals
} catch (error) {
    console.error("Ocurrió un error", error)
}
}
document.getElementById("Filtrar").addEventListener("click", async function (e) {

    e.preventDefault()
    let comidita = document.getElementById("Diaplayfood")
    comidita.style.display = "none";

    const Opt = document.getElementById("Filtrar").value
    if (Opt === "Beef") {
Beef.innerHTML="";
const beefdata = await Fetchbeef();

        async function Displaybeef(meals) {
            let info2 = ""
            for (i = 0; i < meals.length; i++) {
                const meal = meals[i]
                info2 += `   <div class="Food_container">
                <img src="${meal.strMealThumb}" alt="">
               <p>${meal.strMeal}</p>
               <p>${meal.idMeal}</p>
               
                <button>Mas información</button>
                 </div>`



            }
                        Beef.innerHTML = info2
        }

        Displaybeef(beefdata);

    }else{
        Beef.innerHTML =`<p>No se encontraron recetas</p>`;
    }




    }



)

