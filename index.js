import { upgrades } from "./constants/upgrades.js"


let teller = document.querySelector('.teller-cost')
let parsedTeller = parseFloat(teller.innerHTML)

let tpcText = document.getElementById("tpc-text")
let tpsText = document.getElementById("tps-text")

let tellerImgContainer = document.querySelector('.teller-img-container')

let tpc = 1;

let tps = 0;

function addCookie(event){
    teller.innerHTML = Math.round(parsedTeller += tpc);

    const x = event.offsetX
    const y = event.offsetY

    const div = document.createElement('div')
    div.innerHTML = `+${Math.round(tpc)}`
    div.style.cssText = `color: red; margin-left: 410px; margin-top: 130px; position: absolute; top: ${y}px; left: ${x}px; font-size: 35px; pointer-events: none`
    tellerImgContainer.appendChild(div)

    div.classList.add('fade-up')

    timeout(div)
}

const timeout = (div) => {
    setTimeout(() => {
        div.remove()
    }, 800)
}

function buyUpgrade(upgrade) {
    const mu = upgrades.find((u) => {
        if (u.name === upgrade) return u
    })

    if (parsedTeller >= mu.parsedCost) {
        teller.innerHTML = Math.round(parsedTeller -= mu.parsedCost);

        mu.level.innerHTML ++

        mu.parsedIncrease = parseFloat((mu.parsedIncrease * mu.tellerMultiplier).toFixed(2))
        mu.increase.innerHTML = mu.parsedIncrease

        mu.parsedCost *= mu.costMultiplier;
        mu.cost.innerHTML = Math.round(mu.parsedCost)

        if (mu.name === 'clicker') {
            tpc += mu.parsedIncrease
        } else {
            tps += mu.parsedIncrease
        }
    }
}

function save () {
    localStorage.clear()

    upgrades.map((upgrade) => {

        const obj = JSON.stringify({
            parsedLevel: parseFloat(upgrade.level.innerHTML),
            parsedCost: upgrade.parsedCost,
            parsedIncrease: upgrade.parsedIncrease
        })

        localStorage.setItem(upgrade.name, obj)
    })

    localStorage.setItem('tpc', JSON.stringify(tpc))
    localStorage.setItem('tps', JSON.stringify(tpc))
    localStorage.setItem('teller', JSON.stringify(parsedTeller))
}

function load () {
    upgrades.map((upgrade) => {
        const savedValues = JSON.parse(localStorage.getItem(upgrade.name))

        upgrade.parsedCost = savedValues.parsedCost
        upgrade.parsedIncrease = savedValues.parsedIncrease

        upgrade.level.innerHTML = savedValues.parsedLevel
        upgrade.cost.innerHTML = Math.round(upgrade.parsedCost)
        upgrade.increase.innerHTML = upgrade.parsedIncrease
    })

    tpc = JSON.parse(localStorage.getItem('tpc'))
    tps = JSON.parse(localStorage.getItem('tps'))
    parsedTeller = JSON.parse(localStorage.getItem('teller'))

    teller.innerHTML = Math.round(parsedTeller)
}

setInterval(() => {
parsedTeller += tps / 10
teller.innerHTML = Math.round(parsedTeller)
tpcText.innerHTML = Math.round(tpc)
tpsText.innerHTML = Math.round(tps);
}, 100)




var nightMode = false;

function switchMode(){
    nightMode = !nightMode;
    if (nightMode){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    else{
        document.body.style.backgroundColor = "lightgrey";
        document.body.style.color = "black";                    
    }
}

window.addCookie = addCookie
window.buyUpgrade = buyUpgrade
window.save = save
window.load = load