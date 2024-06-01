import { powerUpIntervals, upgrades } from "./constants/upgrades.js"


let teller = document.querySelector('.teller-cost')
let parsedTeller = parseFloat(teller.innerHTML)

let tpcText = document.getElementById("tpc-text")
let tpsText = document.getElementById("tps-text")

let tellerImgContainer = document.querySelector('.teller-img-container')

let tpc = 1;

let tps = 0;

const bgm = new Audio('/audio/bgm.mp3')
bgm.volume = 0.00

function addCookie(event){
    const clickingSound = new Audio('/audio/click.wav')
    clickingSound.play()

    teller.innerHTML = Math.round(parsedTeller += tpc);

    const x = event.offsetX
    const y = event.offsetY

    const div = document.createElement('div')
    div.innerHTML = `+${Math.round(tpc)}`
    div.style.cssText = `color: white; position: absolute; top: ${y}px; left: ${x}px; font-size: 15px; pointer-events: none;`
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

    const upgradeDiv = document.getElementById(`${mu.name}-upgrade`)
    const nextLevelDiv = document.getElementById(`${mu.name}-next-level`)
    const nextLevelP = document.getElementById(`${mu.name}-next-p`)

    if (parsedTeller >= mu.parsedCost) {
        const upgradeSound= new Audio('/audio/upgrade.mp3')
        upgradeSound.volume = 0.3
        upgradeSound.play()

        teller.innerHTML = Math.round(parsedTeller -= mu.parsedCost);

        let index = powerUpIntervals.indexOf(parseFloat(mu.level.innerHTML))

        if ( index !== -1) {
            upgradeDiv.style.cssText = `border-color: white`;
            nextLevelDiv.style.cssText = `background-color: #5A5959; font-weight: normal`;
            mu.cost.innerHTML = Math.round(mu.parsedCost *= mu.costMultiplier)

            if ( mu.name === 'clicker' ) {
                tpc *= mu.powerUps[index].multiplier
                nextLevelP.innerHTML = `+${mu.parsedIncrease} gems per click` 
              } else {
                tps -= mu.power
                mu.power *= mu.powerUps[index].multiplier
                tps += mu.power
                nextLevelP.innerHTML = `+${mu.parsedIncrease} gems per second`
              }
        }

        mu.level.innerHTML ++

        index = powerUpIntervals.indexOf(parseFloat(mu.level.innerHTML))

        if ( index !== -1 ) {
            upgradeDiv.style.cssText = `border-color: orange`;
            nextLevelDiv.style.cssText = `background-color: #CC4500; font-weight: bold`;
            nextLevelP.innerText = mu.powerUps[index].description

            mu.cost.innerHTML = Math.round(mu.parsedCost * 2.5 * 1.004 ** parseFloat(mu.level.innerHTML))
        } else {
            mu.cost.innerHTML = Math.round(mu.parsedCost *= mu.costMultiplier)
            mu.parsedIncrease = parseFloat((mu.parsedIncrease * mu.tellerMultiplier).toFixed(2))
            
            if ( mu.name === 'clicker' ) nextLevelP.innerHTML = `+${mu.parsedIncrease} gems per click` 
            else nextLevelP.innerHTML = `+${mu.parsedIncrease} gems per second`
        }

        if ( mu.name === 'clicker' ) tpc += mu.parsedIncrease
        else {
            tps -=mu.power
            mu.power += mu.parsedIncrease
            tps += mu.power
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
bgm.play()
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