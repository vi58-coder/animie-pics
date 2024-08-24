const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container")
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name")


btnEl.addEventListener("click", async function(){
    try {
        const response = await fetch("https://api.catboys.com/img")
        const data = await response.json();
        console.log(data)
    } catch (error) {
        
    }
})



