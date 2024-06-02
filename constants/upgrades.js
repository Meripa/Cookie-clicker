import { defaultUpgradeValues } from "./defaultValues.js"

function createUpgrades() {
    const upgradesContainer = document.getElementById('upgrades-container')
    const template = document.getElementById('upgrade-template').textContent

    defaultUpgradeValues.forEach((obj) => {
        let html = template;

        Object.keys(obj).forEach((key) => {
            const regex = new RegExp(`{{${key}}}`, 'g');
            html = html.replace(regex, obj[key])
        });

        upgradesContainer.innerHTML += html
    })
}

createUpgrades()

export const upgrades = [
    {
        name: 'clicker',
        cost: document.querySelector(".clicker-cost"),
        parsedCost: parseFloat(document.querySelector(".clicker-cost").innerHTML),
        increase: document.querySelector(".clicker-increase"),
        parsedIncrease: parseFloat(document.querySelector(".clicker-increase").innerHTML),
        level: document.querySelector(".clicker-level"),
        powerUps: [
            {
                name: "2x clicker",
                description: "double your clicking power",
                multiplier: 2,
            },
            {
                name: "3x clicker",
                description: "triple your clicking power",
                multiplier: 3,
            },
            {
                name: "4x clicker",
                description: "double your clicking power",
                multiplier: 4,
            },
        ],
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
        powerUps: [
            {
                name: "2x pickaxe",
                description: "double your pickaxe effeciency",
                multiplier: 2,
            },
            {
                name: "3x pickaxe",
                description: "triple your pickaxe effeciency",
                multiplier: 3,
            },
            {
                name: "4x clicker",
                description: "double your pickaxe effeciency",
                multiplier: 4,
            },
        ],
        power: 0,
        tellerMultiplier: 1.025,
        costMultiplier: 1.115,
    },
    {
        name: 'miner',
        cost: document.querySelector(".miner-cost"),
        parsedCost: parseFloat(document.querySelector(".miner-cost").innerHTML),
        increase: document.querySelector(".miner-increase"),
        parsedIncrease: parseFloat(document.querySelector(".miner-increase").innerHTML),
        level: document.querySelector(".miner-level"),
        power: 0,
        tellerMultiplier: 1.025,
        costMultiplier: 1.11,
    },
    {
        name: 'factory',
        cost: document.querySelector(".factory-cost"),
        parsedCost: parseFloat(document.querySelector(".factory-cost").innerHTML),
        increase: document.querySelector(".factory-increase"),
        parsedIncrease: parseFloat(document.querySelector(".factory-increase").innerHTML),
        level: document.querySelector(".factory-level"),
        power: 0,
        tellerMultiplier: 1.025,
        costMultiplier: 1.10,
    }, 
    {
        name: 'viiner',
        cost: document.querySelector(".viiner-cost"),
        parsedCost: parseFloat(document.querySelector(".viiner-cost").innerHTML),
        increase: document.querySelector(".viiner-increase"),
        parsedIncrease: parseFloat(document.querySelector(".viiner-increase").innerHTML),
        level: document.querySelector(".viiner-level"),
        power: 0,
        tellerMultiplier: 1.025,
        costMultiplier: 1.10,
    },
]

export const powerUpIntervals = [10, 20, 30 ,40 ,50, 70, 100, 150, 200, 250, 300]