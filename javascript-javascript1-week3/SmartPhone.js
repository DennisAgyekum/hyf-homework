const activities = [];
let limit = 90;


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
  
console.log(showStatus(activities));


/* const activities = [];

function addActivity(date, activity, duration) {
  activities.push({ date, activity, duration });
}

addActivity("23/10-18", "Youtube", 30);
addActivity("24/2-18", "Netflix", 50);
addActivity("29/1-18", "Writing", 90);

function showStatus(activities) {
  if (!activities.length) {
    return "Add some activities before calling showStatus";
  }

  const totalActivities = activities.length;
  const durationLimit = 200;
  let totalDuration = 0;

  for (let index = 0; index < activities.length; index++) {
    const activity = activities[index];
    totalDuration += activity.duration;
  }

  if (totalDuration > durationLimit) {
    return "You have reached your limit, no more smartphoning for you!";
  }

  return `You have added ${totalActivities} activities. They amount to ${totalDuration} min. of usage.`;
}

const activitiesStatus = showStatus(activities);
console.log(activitiesStatus);

function longestActivity(activities) {
  let longest = activities[0];

  for (let index = 0; index < activities.length; index++) {
    const activity = activities[index];
    if (activity.duration > longest.duration) {
      longest = activity;
    }
  }

  return `The longest activity is ${longest.activity} with ${longest.duration} minutes.`;
}

console.log(longestActivity(activities));

 */
