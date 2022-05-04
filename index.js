let player = "circle"
const policko = document.querySelectorAll("button")

const udelejTah = (e) => {
    e.target.classList.add("zahrany_tah")
    e.target.disabled = true
    const playerIcon = document.querySelector(".icon")
    e.target.classList.add(`play__btn--${player}`)
    player = player === "circle" ? "cross" : "circle"
    playerIcon.src = `img/${player}.svg`

    if(isWinningMove(e.target)){
           if (player === 'cross') {
			const confrimCross = confirm('Kolečko vyhrává! Spustit novou hru?')
            if (confrimCross == true){
				location.reload()
            }
          } else {
            const confrimCircle = confirm('Křížek vyhrává! Spustit novou hru?')
            if (confrimCircle == true){
                location.reload()
            }
          }
    }
}

const getSymbol = (field) => {
   	if (field.classList.contains('play__btn--cross')) {
        return 'cross'
	} else if (field.classList.contains('play__btn--circle')) {
        return 'circle'
	}
}

const boardSize = 10 // 10x10
const fields = document.querySelectorAll("button") 

const getField = (row, column) => {
   return fields[row * boardSize + column]
}

const getPosition = (field) => {
	let fieldIndex = 0
	while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
		fieldIndex++
	}
	return {
		row: Math.floor(fieldIndex / boardSize),
		column: fieldIndex % boardSize,
	}
}

const symbolsToWin = 5
const isWinningMove = (field) => {
    const origin = getPosition(field)
    const symbol = getSymbol(field)
    
	let i
    let inRow = 1 // Jednička pro právě vybrané políčko
    
	// Koukni doleva
	i = origin.column
    while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
		inRow++
		i--
	}

	// Koukni doprava
	i = origin.column
	while (i < boardSize - 1 &&	symbol === getSymbol(getField(origin.row, i + 1))) {
		inRow++
		i++
	}
	if (inRow >= symbolsToWin) {
		return true
	}

	let inColumn = 1
	// Koukni nahoru
	i = origin.row
	while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
		inColumn++
		i--
	}

	// Koukni dolu
	i = origin.row
	while (i < boardSize - 1 && symbol === getSymbol(getField(i + 1, origin.column))) {
		inColumn++
		i++
	}

	if (inColumn >= symbolsToWin) {
		return true
	}
	return false
}


for (let i = 0; i < policko.length; i++){
    policko[i].addEventListener("click", udelejTah)
    }





