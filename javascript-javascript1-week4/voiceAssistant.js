let nameOfPerson = "";
let toDoList = [];

const commands = {
  "Hello my name is": welcomeWithName,
  "What is my name": getName,
  Add: addToDo,
  Remove: removeToDo,
  "What is on my todo?": getToDo,
  "What day is it today?": getDate,
  "What is": getResult,
  "Set a timer for": setTimer,
  "Tell me a evening jokes": tellJokes,
};

function welcomeWithName(command) {
  const userName = command.replace("Hello my name is", "").trim();
  if (nameOfPerson) {
    return `You already mentioned your name is: ${nameOfPerson}`;
  } else {
    nameOfPerson = userName;
    return `Nice to meet you, ${userName}.`;
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
  const task = command.replace("Add", "").replace("to my todo", "").trim();
  if (toDoList.includes(task)) {
    return `The task "${task}" is already added.`;
  } else {
    toDoList.push(task);
    return `${task} added to your todo.`;
  }
}

function removeToDo(command) {
  const task = command.replace("Remove", "").replace("from my todo", "").trim();
  const taskIndex = toDoList.indexOf(task);
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
  const expression = command.replace("What is", "").trim();

  let operator;
  if (expression.includes("+")) {
    operator = "+";
  } else if (expression.includes("-")) {
    operator = "-";
  } else if (expression.includes("*")) {
    operator = "*";
  } else if (expression.includes("/")) {
    operator = "/";
  } else {
    return "Invalid mathematical expression";
  }

  const [operand1, operand2] = expression.split(operator).map(Number);

  if (isNaN(operand1) || isNaN(operand2)) {
    return "Invalid mathematical expression";
  }

  let result;
  switch (operator) {
    case "+":
      result = operand1 + operand2;
      break;
    case "-":
      result = operand1 - operand2;
      break;
    case "*":
      result = operand1 * operand2;
      break;
    case "/":
      if (operand2 === 0) {
        return "Division by zero is not allowed";
      }
      result = operand1 / operand2;
      break;
    default:
      return "Invalid mathematical expression";
  }

  return `The result of the expression is ${result}`;
}
function setTimer(command) {
  const timeStr = command
    .replace("Set a timer for", "")
    .replace("minutes", "")
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
  for (const cmd in commands) {
    if (command.startsWith(cmd)) {
      return commands[cmd](command);
    }
  }
  return "Command is not recognized.";
}

console.log(getReply("Hello my name is Benjamin"));
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
