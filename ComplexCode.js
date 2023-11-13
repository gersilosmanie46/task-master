/*
Filename: ComplexCode.js
Content: A complex JavaScript code implementation demonstrating a currency converter and stock analyzer.
*/

// Currency Converter Class
class CurrencyConverter {
  constructor(baseCurrency, rates) {
    this.baseCurrency = baseCurrency;
    this.rates = rates;
  }

  convert(amount, toCurrency) {
    const rate = this.rates[toCurrency];
    if (!rate) {
      throw new Error("Conversion rate not available");
    }

    return amount * rate;
  }
}

// Stock Analyzer Class
class StockAnalyzer {
  constructor(stocks) {
    this.stocks = stocks;
  }

  analyze(stockName) {
    const stock = this.stocks[stockName];
    if (!stock) {
      throw new Error("Stock not available");
    }

    const averagePrice = this.calculateAveragePrice(stock);
    const latestPrice = stock.prices[stock.prices.length - 1];

    return {
      stock: stockName,
      averagePrice,
      latestPrice,
    };
  }

  calculateAveragePrice(stock) {
    const pricesSum = stock.prices.reduce((sum, price) => sum + price, 0);
    return pricesSum / stock.prices.length;
  }
}

// Usage Example
const currencyConverter = new CurrencyConverter("USD", {
  EUR: 0.85,
  GBP: 0.73,
  CAD: 1.25,
  AUD: 1.29,
});

const stockAnalyzer = new StockAnalyzer({
  Apple: { prices: [150.5, 152.1, 154, 155.5, 158] },
  Google: { prices: [2500, 2525, 2480, 2420, 2460] },
  Amazon: { prices: [3200, 3220, 3185, 3270, 3250] },
});

const amount = 1000;
const convertedAmount = currencyConverter.convert(amount, "EUR");

console.log(`Converted amount: ${convertedAmount} EUR`);

const appleAnalysis = stockAnalyzer.analyze("Apple");
const googleAnalysis = stockAnalyzer.analyze("Google");
const amazonAnalysis = stockAnalyzer.analyze("Amazon");

console.log(appleAnalysis);
console.log(googleAnalysis);
console.log(amazonAnalysis);

// ... continued code with additional functionalities, e.g., user interactions, data fetching, etc.