const seriesDurations = [
  {
    title: "The Big Bang Theory",
    days: 4,
    hours: 6,
    minutes: 18,
  },
  {
    title: "Better Call Saul",
    days: 2,
    hours: 1,
    minutes: 21,
  },
  {
    title: "Rick and Morty ",
    days: 1,
    hours: 2,
    minutes: 2,
  },
];

const age = 80;

function logOutSeriesText() {
  let totalSumWatched = 0;
  seriesDurations.forEach((series) => {
    const totalMinutes =
      series.days * 24 * 60 + series.hours * 60 + series.minutes;
    const ageInMinutes = age * 365.24 * 1440;
    const percentageOfYear = (totalMinutes / ageInMinutes) * 100;
    totalSumWatched += percentageOfYear;
    console.log(
      `${series.title} took ${percentageOfYear.toFixed(3)}% of my life`
    );
  });
  console.log(`In total that is ${totalSumWatched.toFixed(3)}% of my life`);
}
logOutSeriesText();
