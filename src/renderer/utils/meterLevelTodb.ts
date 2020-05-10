import clamp from "./clamp"

const meterLevelTodb = (level: number) => {
    const lowerBounds = -20
    const upperBounds = 3
    const dBu = level + 18
    return clamp(dBu, lowerBounds, upperBounds)
}

export default meterLevelTodb

