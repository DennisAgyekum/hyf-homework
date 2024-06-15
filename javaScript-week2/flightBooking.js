function getFullname(firstName, surname, useFormalName, isFemale) {
    const fullName = `${firstName} ${surname}`;
  if (!firstName && !surname) {
    return alert("Please enter your name");
  } else if (useFormalName) {
    if (!isFemale) {
        return `Lord ${fullName}`;
    } else if (isFemale) {
      return `Madam ${fullName}`;
    }
  } else {
    return `${fullName}`;
  }
}


const printOut = getFullname("Dennis", "Agyekum", true, false);

console.log(printOut);
