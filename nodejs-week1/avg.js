const args = process.argv.slice(2);
const numbers = args.map(Number);


function calculateAverage(numbers) {
    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
}

if (numbers.includes(0)) {
    console.log("Add list of NUmber");
} else if (numbers.some(isNaN)) {
    console.log("Error: All arguments must be valid numbers.")
}else {
    const average = calculateAverage(numbers);
    console.log(`The average is: ${average}`);
}


