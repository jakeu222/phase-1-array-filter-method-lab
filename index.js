// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(
        (matchingDriver) => matchingDriver.toUpperCase() === name.toUpperCase()
    )
}

function fuzzyMatch(drivers, firstLetter) {
    return drivers.filter(
        (letterFinder) => letterFinder.toUpperCase().indexOf(firstLetter.toUpperCase()) === 0
    )
}
function matchName(driver, identicalName) {
    return driver.filter((nameData) => nameData.name === identicalName)
}