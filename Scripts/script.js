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

async function Fetchdata2() {
    try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef")

        if (!response.ok) {
            throw new Error(`Error HTTP ${response.status} `)
        }


        const data = await response.json()
        console.log(data)
        return data


    } catch (error) {
        console.error("Ocurrió un error", error)
    }


}

Fetchdata2()

async function Displaydata() {
    let info = ""
    for (i = 0; i < 10; i++) {

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





document.getElementById("Filtrar").addEventListener("change", async function (e) {

    e.preventDefault()


    const Opt = document.getElementById("Filtrar").value
    if (Opt === "Beef") {

        try {
            const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef")

            if (!response.ok) {
                throw new Error(`Error HTTP ${response.status} `)
            }


            const data = await response.json()
            console.log(data)
            Displaybeef(data.meals)
        } catch (error) {
            console.error("Ocurrió un error", error)
        }


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





    }
}


)