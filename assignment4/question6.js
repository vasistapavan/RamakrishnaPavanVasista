// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]
amdPrices.sort(function(a, b) {return a - b});

let data = [];
for (price in amdPrices) {
    if (price < 3) {
         data.push(amdPrices[price])       
        }
}

console.log("The three lowest prices are " + data[0] + ", " + data[1] + ", " + "and " + data[2])