let nameOfPerson = "";
let toDoList = [];

const commands = {
  "hello my name is": welcomeWithName,
  "what is my name": getName,
  add: addToDo,
  remove: removeToDo,
  "what is on my todo?": getToDo,
  "what day is it today?": getDate,
  "what is": getResult,
  "set a timer for": setTimer,
  "tell me a evening jokes": tellJokes,
};

function welcomeWithName(command) {
  const lowerCaseCommand = command.toLowerCase();
  const prefix = "hello my name is";

  if (lowerCaseCommand.startsWith(prefix)) {
    const userName = command.slice(prefix.length).trim();

    if (nameOfPerson) {
      return `You already mentioned your name is: ${nameOfPerson}`;
    } else {
      nameOfPerson = userName;
      return `Nice to meet you, ${userName}.`;
    }
  } else {
    return "Unknown command.";
  }
}

function getName() {
  if (nameOfPerson) {
    return `Your name is: ${nameOfPerson}`;
  } else {
    return `You haven't mentioned your name yet.`;
  }
}

function addToDo(command) {
  const task = command
    .replace(/add/i, "")
    .replace(/to my todo/i, "")
    .trim();
  const taskLower = task.toLowerCase();

  if (toDoList.map((item) => item.toLowerCase()).includes(taskLower)) {
    return `The task "${task}" is already added.`;
  } else {
    toDoList.push(task);
    return `${task} added to your todo.`;
  }
}

function removeToDo(command) {
  const task = command
    .replace(/remove/i, "")
    .replace(/from my todo/i, "")
    .trim();
  const taskLower = task.toLowerCase();
  const taskIndex = toDoList
    .map((item) => item.toLowerCase())
    .indexOf(taskLower);

  if (taskIndex !== -1) {
    toDoList.splice(taskIndex, 1);
    return `Removed ${task} from your todo.`;
  } else {
    return `${task} is not in your todo list.`;
  }
}

function getToDo() {
  if (toDoList.length === 0) {
    return "There is nothing in your todo list.";
  } else if (toDoList.length === 1) {
    return `There is 1 todo: ${toDoList[0]}.`;
  } else {
    const allButLast = toDoList.slice(0, -1).join(", ");
    const last = toDoList[toDoList.length - 1];
    return `There are ${toDoList.length} todos: ${allButLast} and ${last}.`;
  }
}

function getDate() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();
  return `${day}. of ${month} ${year}`;
}

function getResult(command) {
  const expression = command.replace(/what is/i, "").trim();

  if (expression.includes("+")) {
    operator = "+";
    const [operand1, operand2] = expression.split(operator).map(Number);
    result = operand1 + operand2;
  } else if (expression.includes("-")) {
    operator = "-";
    const [operand1, operand2] = expression.split(operator).map(Number);
    result = operand1 - operand2;
  } else if (expression.includes("*")) {
    operator = "*";
    const [operand1, operand2] = expression.split(operator).map(Number);
    result = operand1 * operand2;
  } else if (expression.includes("/")) {
    operator = "/";
    const [operand1, operand2] = expression.split(operator).map(Number);
    result = operand1 / operand2;
  } else {
    return "Invalid mathematical expression";
  }
  return `The result of the expression is ${result}`;
}

function setTimer(command) {
  const timeStr = command
    .replace(/set a timer for/i, "")
    .replace(/minutes/i, "")
    .trim();
  const time = parseInt(timeStr);

  if (isNaN(time) || time <= 0) {
    return "Please specify a valid time in minutes.";
  }

  const timeInMilliSeconds = time * 60 * 1000;
  setTimeout(() => {
    console.log("Timer done");
  }, timeInMilliSeconds);

  return `Timer set for ${time} minutes.`;
}

function tellJokes() {
  const jokesArray = [
    "What do you call an ant who fights crime? A vigilANTe!",
    "How does the ocean say hi? It waves!",
    "What did the left eye say to the right eye? Between us, something smells!",
    "What is a room with no walls? A mushroom.",
    "Why is a football stadium always cold? It has lots of fans!",
    "Why can’t you ever tell a joke around glass? It could crack up.",
    "Why did the scarecrow win a Nobel prize? Because she was outstanding in her field",
  ];
  const randomIndex = Math.floor(Math.random() * jokesArray.length);
  return jokesArray[randomIndex];
}

function getReply(command) {
  const lowerCaseCommand = command.toLowerCase();
  for (const cmd in commands) {
    if (lowerCaseCommand.startsWith(cmd)) {
      return commands[cmd](command);
    }
  }
  return "Command is not recognized.";
}

console.log(getReply("hello my Name is Dennis"));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Add going to church to my todo"));
console.log(getReply("Add going for lunch to my todo"));
console.log(getReply("Add play piano to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("What is 80 * 30"));
console.log(getReply("Set a timer for 4 minutes"));
console.log(getReply("Tell me a evening jokes"));

