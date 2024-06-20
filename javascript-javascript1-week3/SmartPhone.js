const activities = [];
let limit = 0;

function setLimit(newLimit) {
  limit = newLimit;
}

function addActivity(date, activity, duration) {
  activities.push({ date, activity, duration });
}

addActivity("21/7-24", "Snapchat", 30);
addActivity("21/7-24", "Facebook", 30);
addActivity("21/7-24", "Instagram", 30);
//addActivity("21/7-24", "Games", 30);

function showStatus() {
  if (!activities.length) {
    return "Add some activities before calling showStatus";
  }

  let totalDuration = activities.reduce(
    (total, activity) => total + activity.duration,
    0
  );
  if (totalDuration > limit) {
    return "You have reached your limit, no more smartphone for you!";
  } else
    return `You have added ${activities.length} activities. They amount to ${totalDuration} min. of usage`;
}
setLimit(90);
console.log(showStatus(activities));
