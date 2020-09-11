

const botonUno = document.getElementById(`boton1`)

const botonDos = document.getElementById(`boton2`)

const botonTres = document.getElementById(`boton3`)

const fraseFinal = document.getElementById(`frasefinal`)


botonTres.onclick = () => {
    fraseFinal.textContent = `correcto`
    botonTres.classList.add(`verde`)
}

botonDos.onclick = () => {
    fraseFinal.textContent = `incorrreeeectooo.`
    botonDos.classList.add(`rojo`)
    botonTres.classList.add(`verde`)
    botonUno.classList.add(`rojo`)
}

botonUno.onclick = () => {
    fraseFinal.textContent = `incorrreeeectooo.`
    botonUno.classList.add(`rojo`)
    botonTres.classList.add(`verde`)
    botonDos.classList.add(`rojo`)
}








