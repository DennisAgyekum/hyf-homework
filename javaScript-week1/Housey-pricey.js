// Housey pricey

function sumVolume(width, height, depth) {
    return width * height * depth;
  }
  
  function trueHousePrice(volumeInMeters, gardenSize) {
    return volumeInMeters * 2.5 * 1000 + gardenSize * 300;
  }
  
  function compare(truePrice, costPrice) {
    if (truePrice > costPrice) {
      console.log(`paying too little. The real price is: ${truePrice}`);
    } else {
      console.log(
        `paying more than the estimated cost. The real price is: ${truePrice}`
      );
    }
  }
  const marketPricePeter = 2.5e6;
  const marketPriceJulia = 1e6;

  const volumeInMetersP = sumVolume(8, 10, 10); 
  const volumeInMetersJ = sumVolume(5, 8, 11);
  
  const truePricePeter = trueHousePrice(volumeInMetersP, 100);
  const truePriceJulia = trueHousePrice(volumeInMetersJ, 70);
  
  const comparePricePeter = compare(truePricePeter, marketPricePeter);
  const comparePriceJulia = compare(truePriceJulia, marketPriceJulia);
