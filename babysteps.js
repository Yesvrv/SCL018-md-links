/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-useless-escape */
// #!/usr/bin/env node //shebang

const fs = require('fs');
// const fetch = require('node-fetch');
const path = require('path');
// const http = require('http');


// const log = console.log;
// const folder = './';

// fs.readdirSync( folder ).forEach( file => {
//     const extname = path.extname( file );
//     const filename = path.basename( file, extname );
//     const absolutePath = path.resolve( folder, file );

//     log( "File : ", file );
//     log( "filename : ", filename );
//     log( "extname : ", extname );
//     log( "absolutePath : ", absolutePath);

// });

const myFile = process.argv[2];
// //función para leer un archivo 
// fs.readFile(myFile, 'utf8' , (err, data) => {
//     if (err) {
//     console.error(err);
//     }
// //variable que devuelve un array con los links que emparejó
//     const readLinks = data.match(/(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])/gi);
//     // ///\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/g
//     // /\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/g

//     // const regExpTxt = /\[([\w\s\d\-]+)\]/g;
//     // const regExpHref = /\(([^\)]+)\)/g;
    

//     // console.log(data);
//     console.log(readLinks);

// });


//Función para extraer los files md
fs.readdir(__dirname, (err, files) => {
    // console.log(__dirname);
    console.log(__dirname);
    if (err) return console.error(err);
    // console.log(files);
//     files.forEach(file => {
//         if (path.extname(file) === '.md') { 
//             console.log(file);
//     }
// });
});


// const url = "https://www.google.com";
// fetch(url)
//     .then((response) => console.log(response.status))
//     .catch((error) => console.log(error));


// module.exports = () => {
//   // ...
// };