const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];


function avgClosingPrice(prices) {
	let dayClose = 0;
	let avgClosePrice = 0;
	for (let price of prices) {
		dayClose += parseFloat(price['close'])
	}
	avgClosePrice = dayClose/prices.length
    console.log("Average closing price of MSFT is " +  avgClosePrice.toFixed(2))
}
// Write your code below

avgClosingPrice(disneyData);