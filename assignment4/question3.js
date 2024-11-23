const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];


// Write your code below


function daysGreaterThanSMA(prices) {
    let no_of_days = 0;
    let sma = prices.reduce((acc, currVal) => acc + currVal ) / prices.length
    
    for (value of prices) {
        if (value > sma) {
            no_of_days += 1
        }
    }
    return no_of_days;
}

console.log("Number of days AMD was above the 7-day SMA is: " + daysGreaterThanSMA(amdPrices) )