// memanggil local module function.js
const func = require('./function')

//memanggil module yargs
const yargs = require('yargs');
 
yargs.command({
    // membuat perintah add
    command: 'add',
    describe: 'add new contact',
    builder: {
        // membuat argument
        name: {
            describe: 'contact Name',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'contact Email',
            demandOption: false,
            type: 'string',
        },
        mobile: {
            describe: 'contact mobile phone number',
            demandOption: true,
            type: 'string',
        },
    },
    //menangkap hasil dari argument
    handler(argv) {
        const contact = {
            name: argv.name,
            email: argv.email,
            mobile: argv.mobile,


        };

        // memanggil funsi savedata
        func.savedata(argv.name, argv.email, argv.mobile)
        // menampilkan tulisa ke terminal
        console.log(contact);
    },
})
yargs.parse()