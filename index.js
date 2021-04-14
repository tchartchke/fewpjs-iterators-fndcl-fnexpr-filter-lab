function findMatching(drivers, str){
  return drivers.filter( driver => {
    return driver.toUpperCase() === str.toUpperCase()
  })
}

function fuzzyMatch(drivers, str){
  return drivers.filter( driver => {
    return driver.slice(0, str.length).toUpperCase() === str.toUpperCase()
  })
}

function matchName(drivers, str){
  return drivers.filter( driver => {
    return driver.name.toUpperCase() === str.toUpperCase()
  })
}