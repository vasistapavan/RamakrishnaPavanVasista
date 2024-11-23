const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];
// Write your code below

function simpleMovingAverage(prices) {
  const sum =   prices.reduce(
        (accumalator, currentValue)  => (accumalator + currentValue) 
    )
  let avg =  (sum/prices.length).toFixed(2)
  return avg
  
}

console.log("The 7-day SMA of AMD is " + simpleMovingAverage(amdPrices))