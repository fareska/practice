

class NotesBoard {
    constructor() {
        this.notes = [];
    }

    addNote = (noteObj) => this.notes.push(noteObj);

    getNotes = () => this.notes;

    deleteNote = (noteIndex) => {
        this.notes.splice(noteIndex, 1)
    }

    fetchNotesFromDB = (notes) => this.notes = [...notes];
}
const notesBoard = new NotesBoard();


class Render {
    constructor(){
    }
    
    renderNotes = (notesArr) => {
        $("#notesContainer").empty();
        notesArr.forEach((note, index) => this.renderNote(note, index));
    }
    
    renderNote = (note, index) => {
        const noteEle = document.createElement('div');
        noteEle.className = "note";
        noteEle.id = index;
        const textEle = document.createElement('p');
        textEle.innerText = note.text;
        const dateEle = document.createElement('h5');
        dateEle.innerText = note.date;
        const timeEle = document.createElement('h5');
        timeEle.innerText = note.time;
        
        const iconEle = document.createElement('div');
        iconEle.className = 'icon';
        const icon = document.createElement('i');
        icon.className = 'far fa-trash-alt';
        iconEle.appendChild(icon);
        
        noteEle.appendChild(textEle);
        noteEle.appendChild(dateEle);
        noteEle.appendChild(timeEle);
        noteEle.appendChild(iconEle);
        
        $("#notesContainer").append(noteEle);
    }
    
    renderInputMessage = () => {
        $("#message").remove();
        const messageEle = document.createElement('p');
        messageEle.innerText = 'you should fill a note';
        messageEle.className = 'message';
        messageEle.id = 'message';
        $("#noteSection").append(messageEle);
    }
    
    
}
const render = new Render();



const isInputValid = str => {
    patt = /[a-zA-z]+/;
    return patt.test(str);
}

const createDate = () => {
    let d = new Date();

    let day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate();
    let month = d.getMonth() < 10 ? '0' + d.getMonth() : d.getMonth();
    let noteDate = '';
    noteDate += day + "/" + month + "/" + d.getFullYear();
    return noteDate;
}

const createTime = () => {
    let d = new Date();
    return d.toLocaleTimeString();
}



let localNotes = JSON.parse(localStorage.getItem("notes") || "[]");
notesBoard.fetchNotesFromDB(localNotes);
render.renderNotes(notesBoard.getNotes());

let noteVal;
let dateVal;
let timeVal;

$("#confirm").on("click", () => {
    noteVal = $("#note").val();
    if (isInputValid(noteVal)) {
        $("#message").remove();
        dateVal = $("#dateInput").val() === '' ? createDate() : $("#dateInput").val();
        timeVal = $("#timeInput").val() === '' ? createTime() : $("#timeInput").val();

        let note = {
            text: noteVal,
            date: dateVal,
            time: timeVal,
        };

        $("#note").val('');
        $("#dateInput").val('');
        $("#timeInput").val('');

        notesBoard.addNote(note);
        let notes = notesBoard.getNotes();
        render.renderNotes(notes);

        localStorage.setItem("notes", JSON.stringify(notes));
        
    } else {
        render.renderInputMessage();
    }
})

$('#notesContainer').on('click', ".far", (e) => {
    notesBoard.deleteNote(e.target.parentNode.parentNode.id);
    let notes = notesBoard.getNotes();
    render.renderNotes(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
})