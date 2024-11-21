const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below

function simpleMovingAverage(prices) {
    let sum_of_prices = 0
    for (let value of prices) {
        sum_of_prices += value;
    }
    return (sum_of_prices/prices.length).toFixed(2)
}

console.log("The 7-day SMA of AMD is " + simpleMovingAverage(amdPrices))