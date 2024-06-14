const boughtCandyPrices = [];

const candyPrices = {
  "sweet": 0.5,
  "chocolate": 0.7,
  "toffee": 1.1,
  "chewing-gum": 0.03,
};

function addCandy(candyType, weight) {
  const totalCost = candyPrices[candyType] * weight;
  boughtCandyPrices.push(totalCost);
}

let amountToSpend = Math.random() * 100;

function canBuyMoreCandy() {
  let totalSpent = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalSpent += boughtCandyPrices[i];
  }

  if (totalSpent < amountToSpend) {
    console.log("You can buy more, so please do!");
    return true;
  } else {
    console.log("Enough candy for you!");
    return false;
  }
}

addCandy("sweet", 10);
addCandy("chocolate", 15);
addCandy("", 10);
addCandy("sweet", 10);
canBuyMoreCandy();
