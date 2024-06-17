const boughtCandyPrices = [];

const candyPrices = {
  "sweet": 0.5,
  "chocolate": 0.7,
  "toffee": 1.1,
  "chewing-gum": 0.03,
};

function addCandy(candyType, weight){
    const pricePerGram = candyPrices[candyType];
    if(pricePerGram){
        const totalPrice = pricePerGram * weight;
        boughtCandyPrices.push(totalPrice);
    }else{
        console.log("Invalid candy type");
    }
}
let amountToSpend = Math.random() * 100;

function canBuyMoreCandy() {
  let totalSpent = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalSpent += boughtCandyPrices[i];
   /*  console.log("totalSpent: ", totalSpent);
    console.log("amountToSpend: ", amountToSpend) */
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
addCandy("toffee", 15);
addCandy("chewing-gum", 15);
addCandy("", 10);
canBuyMoreCandy();
