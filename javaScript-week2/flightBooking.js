function getFullname(firstName, surname, useFormalName, gender) {
  const fullName = `${firstName} ${surname}`;
  if (!firstName && !surname) {
    return alert("Please enter your name");
  }
  if (useFormalName) {
    if (gender === "female") {
      return `Madam ${fullName}`;
    } else if(gender === "male"){
      return `Lord ${fullName}`;
    } else {
      return `${fullName}`
    }
  } else return `${fullName}`;
}

const printOut = getFullname("Dennis", "Agyekum", true, "");

console.log(printOut);
