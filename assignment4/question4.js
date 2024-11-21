const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
function avgClosingPrice(prices) {
	let dayClose = 0;
	let avgClosePrice = 0;
	for (let price of prices) {
		dayClose += price[3]
	}
	avgClosePrice = dayClose/prices.length
    console.log("Average closing price of MSFT is " +  avgClosePrice.toFixed(2))
}

avgClosingPrice(msftData);