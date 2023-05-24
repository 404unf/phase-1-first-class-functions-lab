// Code your solution in this file!

const returnFirstTwoDrivers = (arrayOfDrivers) => {
    return [arrayOfDrivers[0],arrayOfDrivers[1]]
}


const returnLastTwoDrivers = (arrayOfDrivers) => {
    return arrayOfDrivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return (fare)=>{return fare*multiplier}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers)
}