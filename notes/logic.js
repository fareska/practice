

 export  class NotesBoard {
    constructor() {
        this.notes = [];
    }

    addNote = (noteObj) => this.notes.push(noteObj);

    getNotes = () => this.notes;

    deleteNote = (noteIndex) => {
        this.notes.splice(noteIndex, 1);
    }

    fetchNotesFromDB = (notes) => this.notes = [...notes];
}

