const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (typeof id !== "number") {
      return "ERROR: ID must be a number";
    } else if (notes[i].id === id) {
      return notes[i];
    } else {return "ID not found"};
  }
}
const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

function logOutNotesFormatted() {
  for (let index = 0; index < notes.length; index++) {
    const { id, content } = notes[index];
    console.log(
      `The note with id: ${id}, has the following note text: ${content}`
    );
  }
}

logOutNotesFormatted();
