const yargs = require('yargs');
const notes = require('./notes');

yargs.version('1.1.0');

yargs.command({
    command: "add",
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'remove note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'lists the notes',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read',
    builder: {
        title: {
            describe: "title to search",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

// yargs.command({
//     command: "append",
//     describe: 'Append a new note',
//     builder: {
//         title: {
//             describe: 'Note title',
//             demandOption: true,
//             type: 'string'
//         },
//         body: {
//             describe: 'Note body',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler(argv) {
//         notes.appendNote(argv.title, argv.body)
//     }
// })

yargs.argv;