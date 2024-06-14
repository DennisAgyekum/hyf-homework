function getFullname(firstname, surname, useFormalName, isFemale) {
  if (firstname === "" && surname === "") {
    return alert("Please enter your name");
  } else if (useFormalName) {
    if (isFemale) {
      return `Madam ${firstname} ${surname}`;
    } else {
      return `Lord ${firstname} ${surname}`;
    }
  } else {
    return `${firstname} ${surname}`;
  }
}

const fullName1 = "Dennis";
const fullName2 = "Agyekum";
const useFormalName = true;
const female = false;
const printOut = getFullname(fullName1, fullName2, useFormalName, female);

console.log(printOut);
