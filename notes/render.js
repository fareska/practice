export class Render {
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