const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
  if (!saveNote.content) {
    alert("Write down a note");
  }
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    if (typeof id !== "number") {
      return "ERROR: ID must be a number";
    } else if (notes[i].id === id) {
      return notes[i];
    } else return "ID not found";
  }
}
function logOutNotesFormatted() {
  notes.forEach((notes) => {
    return `The note with id: ${notes.id}, has the following note text: ${notes.content}`;
  });
}
logOutNotesFormatted();
