console.log("funguju")

let player = "circle"

const policko = document.querySelectorAll("button")



const udelejTah = (e) => {
    e.target.classList.add("zahrany_tah")
    e.target.disabled = true
    const playerIcon = document.querySelector(".icon")
    e.target.style.backgroundImage = `url('img/${player}.svg')`
    player = player === "circle" ? "cross" : "circle"
    playerIcon.src = `img/${player}.svg`
    }

for (let i = 0; i < policko.length ; i++){
    policko[i].addEventListener("click", udelejTah)
}