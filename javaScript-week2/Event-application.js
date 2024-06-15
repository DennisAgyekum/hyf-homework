function getEventWeekday(numOfDaysToBeAdded) {
    const date = new Date(); //gives present date
    const dayNum = date.getDay(); //is zero based, returns a number from 0-6 and weekday No. in the date.(starts from sunday)
    const namesOfDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const i = numOfDaysToBeAdded + dayNum; //retuns this if the sum is less than 7
   return namesOfDays[i % 7]
  console.log(getEventWeekday(200));
