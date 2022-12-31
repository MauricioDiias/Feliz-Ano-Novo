const dias = document.querySelector('#dias')
const horas =document.querySelector('#horas')
const minutos =document.querySelector('#minutos')
const segundos =document.querySelector('#segundos')

const currentYear = new Date().getFullYear()

const newYearTime = new Date(`january 1 ${currentYear + 1} 00:00:00`)

//atualize o tempo contagem regresiva
function updateCountdownTime(){
    const currentTime = new Date()
    const diff = newYearTime - currentTime
    console.log(newYearTime)
    console.log(currentTime)

    const d = Math.floor(diff/1000/60/60/24)
    const h = Math.floor(diff/1000/60/60)%24
    const m = Math.floor(diff/1000/60)%60
    const s = Math.floor(diff/1000)%60



    dias.innerHTML = d
    horas.innerHTML = h
    minutos.innerHTML = m
    segundos.innerHTML = s

    if(diff < 0){
        document.getElementById("container").style.display='none'
        document.getElementById("ano-novo").style.display='flex'

    }
}
setInterval(updateCountdownTime, 1000)
