// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction.
// If you cannot achieve any profit, return 0.

const prices = [7, 1, 5, 3, 6, 4];

function maxProfit(prices) {
  // we extract the element we buy
  let buy = prices[0]; // 7
  prices[0] = 0;
  // this is our profit that we will return
  let profit = 0;

  // itirate through array of prices
  for (let i = 1; i < prices.length; i++) {
    // if our buy (element we itirate through) is bigger than price listed on the the day
    if (buy > prices[i]) {
      // set new lower price
      buy = prices[i];
      // price of day is 0; turns element in array 0
      prices[i] = 0;
    } else {
      // profit becomes the price of day - buy = profit
      profit = Math.max(prices[i] - buy, profit);
    }
  }
  return profit;
}
