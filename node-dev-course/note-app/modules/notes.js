const fs = require('fs');

let fetchNotes = () => {
    try {
        notesStr = fs.readFileSync('./model/notes.json')
        return JSON.parse(notesStr);
    } catch(e) {
        console.log(e);
        return [];
    }

    return notes;
}

let saveNotes = (notes) => {
    try {
        fs.writeFileSync('./model/notes.json', JSON.stringify(notes));
        console.log('notes saved');
    } catch(e) {
        console.log(e);
    }
}

let findNote = (notes, title) => {
    return notes.filter(note => note.title === title);
}

let addNote = (title, body) => {
    let notes = fetchNotes();
    console.log('addnote notes:');
    console.log(title);
    console.log(body);

    let note = {
        title,
        body
    }

    let duplNotes = findNote(notes, title);
    if (duplNotes.length > 0) {
        return `note hasnt been created since a same note already exist`;
    } else {
        notes.push(note);
        saveNotes(notes);
        return `note created\n---\ntitle: ${note.title}, body: ${note.body}\n`;
    }
}

let getAll = () => {
    return fetchNotes();
}

let logNote = (title) => {
    let notes = fetchNotes();
    let matchingNotes = findNote(notes, title);

    if (matchingNotes !== []) {
        return matchingNotes;
    } else {
        return false;
    }
}

let remove = (title) => {
    let notes = fetchNotes();

    if (notes === []) {
        return 'Your Dont have notes yet, so there is nothing to remove'
    }

    let matchingNotes = findNote(notes, title);

    if (matchingNotes === []) {
        return 'Your Dont have any notes with this title'
    }

    let filteredNotes = notes.filter(note => {
        return matchingNotes.every(matchingNote => matchingNote !== note)
    })

    saveNotes(filteredNotes);
    return `given notes have been removed`;
}

module.exports = {
    addNote,
    getAll,
    logNote,
    remove
}