import {NotesBoard} from './logic.js'
import {Render} from './render.js'

const notesBoard = new NotesBoard();
const render = new Render();

let localNotes = JSON.parse(localStorage.getItem("notes") || "[]");
notesBoard.fetchNotesFromDB(localNotes);
render.renderNotes(notesBoard.getNotes());


const isInputValid = str => {
    const patt = /[a-zA-z]+/;
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
        
    } else render.renderInputMessage();
})

$('#notesContainer').on('click', ".far", (e) => {
    notesBoard.deleteNote(e.target.parentNode.parentNode.id);
    let notes = notesBoard.getNotes();
    render.renderNotes(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
})