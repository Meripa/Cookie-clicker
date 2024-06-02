export const defaultUpgradeValues = [
    {name: 'clicker', image:'./assets/clicker-white.png', cost: 10, increase: 1, type: "upgrade"},
    {name: 'pickaxe', image:'./assets/pickaxe.png', cost: 60, increase: 4, type: "upgrade"},
    {name: 'miner', image:'./assets/miner.png', cost: 380, increase: 16, type: "upgrade"},
    {name: 'factory', image:'./assets/factory.png', cost: 3111, increase: 82, type: "upgrade"},
    {name: 'viiner', image:'./assets/vinku.png', cost: 5111, increase: 8200, type: "upgrade"},
]

export const defaultSkillValues = [
    {
        name: "Stronger Clicks",
        description: "Double your clicking power for 30seconds",
        image: "./skills/skill1.png",
        cd: 600,
        cost: 12000,
        type: "skill"
    },
    {
        name: "Lucky Day",
        description: "Gain 600 x TPS worth of gems instantly",
        image: "./skills/skill1.png",
        cd: 900,
        cost: 120000,
        type: "skill"
    }
]

export const defaultArtifactValues = [
    {
        name: "Artifact 1",
        description: "Permanently increase all gems gained by x amount",
        image: "",
        type: "artifact"
    }
]