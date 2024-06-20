const travelInformation = {
  speed: 120,
  destinationDistance: 1646,
};

function calculateTravelTime(info) {
  const time = info.destinationDistance / info.speed;
  const hours = Math.floor(time);
  const minutes = Math.round((time - hours) * 60);
  return `${hours} hours and ${minutes} minutes`;
}
const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime);
