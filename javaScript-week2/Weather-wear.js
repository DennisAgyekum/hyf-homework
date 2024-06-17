const attireForToday = function (temperature) {
    if (temperature < 0) {
        return "Heavy Jackets, Thermo Pants and Boot";
    } else if (temperature >= 0 && temperature <= 10)  {
        return " Jackets, Jeans and Sneakers";
    }else if (temperature > 10 && temperature < 17)  {
        return " Summer Jackets, Pants and Sneakers";
    }  else {
        return "Shorts, Skirts, T-shirt and Tanktops"
    }   
};
 
const todaysTempreture = attireForToday;
console.log(todaysTempreture(16)); 