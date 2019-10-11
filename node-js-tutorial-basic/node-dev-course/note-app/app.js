const fs = require('fs');

const _ = require('lodash');

const yargs = require('yargs');
const notes = require('./modules/notes.js');

const argv = prepareCliCommands(yargs);
console.log('argv:');
console.log(argv);
console.log('-----------');
let command = process.argv[2];

function notesFactory(){
    if (command === 'add') {
        addNote()
    } else if (command === 'list') {
        logAllNotes();
    } else if (command === 'get') {
        logSingleNote()        
    } else if (command === 'remove') {
        let removedMsg = notes.remove(argv.title);
        console.log(removedMsg);
    } else {
        console.log('command is not recognized');
    }
}

function logAllNotes() {
    let allNotes = notes.getAll();
    console.log(`List of all notes (${allNotes.length} notes):`);
    allNotes.forEach((note, i) => {
        console.log(`note ${i}.:`);
        console.log(note);
    })    
}

function addNote() {
    console.log('argv.title:');
    console.log(argv.title);
    let createdMsg = notes.addNote(argv.title, argv.body);
    debugger;
    console.log(createdMsg);
}

function logSingleNote() {
    console.log('argv.title:');
    console.log(argv.title);
    let requestedNotes = notes.logNote(argv.title)
    if (requestedNotes !== false) {
        console.log('your requested notes:');
        console.log('---');
        console.log(requestedNotes);
    } else {
        console.log('requested note not found');
    }
}

function prepareCliCommands(yargs){
    let titlOptions = {
        describe : 'Title of Note',
        demand : true,
        alias : 't'
    }

    let bodyOptions = {
        describe : 'Body of Note',
        demand : true,
        alias : 'b'
    }

    createAddComm(yargs, titleOptions, bodyOptions);
    createListComm(yargs);
    createGetComm(yargs, titleOptions);
    createRemoveComm(yargs, titleOptions);
    return yargs
        .help()
        .argv;
}

function createAddComm(yargs, titleOptions, bodyOptions){
    yargs
    .command('add', 'add a new Note', {titleOptions, bodyOptions});
}

function createListComm(yargs){
    yargs
    .command('list', 'log out all notes by title');
}

function createGetComm(yargs, titleOptions){
    yargs
    .command('get', 'add a particular note by title', {titleOptions});
}

function createRemoveComm(yargs, titleOptions){
    yargs
    .command('remove', 'remove a given note by title', {titleOptions});
}

notesFactory();