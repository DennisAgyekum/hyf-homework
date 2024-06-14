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
    if (i >= 7) {
      let r = i % 7; //retuns this if the sum is more or equal to 7 (dividing by 7 an using the remainder)
      return namesOfDays[r];
    } else {
      return namesOfDays[i];
    }
  }
  console.log(getEventWeekday(200));