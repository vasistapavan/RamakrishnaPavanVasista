const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below

function simpleMovingAverage(prices) {
    let sum_of_prices = 0
    let sma = 0
    for (let value of prices) {
        sum_of_prices += value;
    }
    sma = (sum_of_prices/prices.length).toFixed(2)
    return sma
    
}

function daysGreaterThanSMA(prices, sma) {
    let no_of_days = 0;
    for (value of prices) {
        if (value > sma) {
            no_of_days += 1
        }
    }
    return no_of_days;
}

days = daysGreaterThanSMA(amdPrices, simpleMovingAverage(amdPrices))

console.log("Number of days AMD was above the 7-day SMA is: " + days )