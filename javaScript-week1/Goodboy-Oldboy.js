// Goodboy-Oldboy

const dogYearOfBirth = 2020;
let dogYearFuture = 2030;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears === false) {
    dogYear *= 7;
  console.log(
    `Your dog will be ${dogYear} human years old in ${dogYearFuture}`);
} else {
  console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`);
}
