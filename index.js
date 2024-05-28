let teller = document.querySelector('.teller-cost')
let parsedTeller = parseFloat(teller.innerHTML)

let tpcText = document.getElementById("tpc-text")
let tpsText = document.getElementById("tps-text")

let tellerImgContainer = document.querySelector('.teller-img-container')

let tpc = 1;

let tps = 0;

const upgrades = [
    {
        name: 'clicker',
        cost: document.querySelector(".clicker-cost"),
        parsedCost: parseFloat(document.querySelector(".clicker-cost").innerHTML),
        increase: document.querySelector(".clicker-increase"),
        parsedIncrease: parseFloat(document.querySelector(".clicker-increase").innerHTML),
        level: document.querySelector(".clicker-level"),
        tellerMultiplier: 1.025,
        costMultiplier: 1.12,
    },
    {
        name: 'pickaxe',
        cost: document.querySelector(".pickaxe-cost"),
        parsedCost: parseFloat(document.querySelector(".pickaxe-cost").innerHTML),
        increase: document.querySelector(".pickaxe-increase"),
        parsedIncrease: parseFloat(document.querySelector(".pickaxe-increase").innerHTML),
        level: document.querySelector(".pickaxe-level"),
        tellerMultiplier: 1.025,
        costMultiplier: 1.12,
    },
    {
        name: 'miner',
        cost: document.querySelector(".miner-cost"),
        parsedCost: parseFloat(document.querySelector(".miner-cost").innerHTML),
        increase: document.querySelector(".miner-increase"),
        parsedIncrease: parseFloat(document.querySelector(".miner-increase").innerHTML),
        level: document.querySelector(".miner-level"),
        tellerMultiplier: 1.025,
        costMultiplier: 1.12,
    },
    {
        name: 'factory',
        cost: document.querySelector(".factory-cost"),
        parsedCost: parseFloat(document.querySelector(".factory-cost").innerHTML),
        increase: document.querySelector(".factory-increase"),
        parsedIncrease: parseFloat(document.querySelector(".factory-increase").innerHTML),
        level: document.querySelector(".factory-level"),
        tellerMultiplier: 1.025,
        costMultiplier: 1.12,
    },
]

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