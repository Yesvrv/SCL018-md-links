/* eslint-disable no-undef */
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
const route = process.argv[2];

const absolutePath = (route) => path.isAbsolute(route) ? route : path.resolve(route);
const fileOrDir = (path) => fs.lstatSync(path).isDirectory() ? 'directory' : 'file';
const readFile = (file) => path.extname(file) === '.md' ? fs.readFileSync(file, 'utf8') : '\nInvalid format';

const getLinks = (fileContent) => {
    // console.log('file:' + fileContent);
    const matchedLinks = fileContent.matchAll(/\[([^\]]+)]\((https?:\/\/[^\s)]+)\)/gi);
    let allLinks = [];
    for (const match of matchedLinks){
        const data = {
            text: match[1],
            href: match[2],
            file: route
        }
        allLinks.push(data);
    }
    return allLinks;
};

const validateLinks = (links) => {
    const validation = links.map((link)=> 
    fetch(link.href)

    .then((response) => {
        return {
            text: link.text,
            href: link.href,
            file: link.file,
            status: response.status,
            ok: response.statusText,
        };
    })
    );
        return Promise.all(validation)
};

const mdLinks = (path, options) => {
    return new Promise((resolve, reject) => {
        const newPath = absolutePath(path);
        fs.existsSync(path) ? newPath : reject(new TypeError('Argument is not valid'));
        if (fileOrDir(newPath) == 'file') {
            const readContent = readFile(newPath);
            const arrayObjLinks = getLinks(readContent);
            options.validate ? resolve(validateLinks(arrayObjLinks)) : resolve(getLinks(readContent));
        } 
    })
};

export { absolutePath, fileOrDir, readFile, getLinks, mdLinks, validateLinks };
