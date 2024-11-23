const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

function findHihghestStockPrice(prices) {
    let maxprice = 0;
    for (let value of prices) {
        if (value > maxprice) {
            maxprice = value;
        }
    }
    return maxprice;
}

// Write your code below

console.log("AMD 52-week high is " + Math.max(...amdPrices))