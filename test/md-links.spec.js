/* eslint-disable no-undef */
// const mdLinks = require('../');

import { absolutePath, fileOrDir, readFile, getLinks } from '../index.js'
// import { mdLinks, validateLinks } from '../index.js'

//test para función que resuelve la ruta a absoluta
describe('absolutePath', () => {
  it('deberia ser una funcion', () => {
    expect(typeof (absolutePath)).toBe('function');
  })
  it('deberia retornar la ruta absoluta', () => {
    expect(absolutePath('C:\\Users\\Vrysk\\Documents\\Bootcamp-Laboratoria\\SCL018-md-links\\README.md')).toBeTruthy();
  })
  it('deberia resolver la ruta a absoluta', () => {
    expect(absolutePath('README.md')).toBe('C:\\Users\\Vrysk\\Documents\\Bootcamp-Laboratoria\\SCL018-md-links\\README.md');
  })
});

//test función que retorna directorio o archivo
describe('fileOrDir', () => {
  it('deberia ser una funcion', () => {
    expect(typeof (fileOrDir)).toBe('function');
  })
  it('deberia retornar directory', () => {
    expect(fileOrDir('C:\\Users\\Vrysk\\Documents\\Bootcamp-Laboratoria\\SCL018-md-links\\README.md')).toBeTruthy();
  })
  it('deberia retornar file', () => {
    expect(fileOrDir('README.md')).toBe('file');
  })
});

//test función que determina validez del formato de la extensión
describe('readFile', () => {
  it('deberia ser una funcion', () => {
    expect(typeof (readFile)).toBe('function');
  })
  it('deberia leer el archivo .md', () => {
    expect(readFile('prueba.md')).toBeTruthy();
  })
  it('deberia retornar formato inválido si la extensión del archivo no es .md', () => {
    expect(readFile('readme.txt')).toBe('\nInvalid format');
  })
});

//test de getLinks
describe('getLinks', () => {
  it('deberia ser una funcion', () => {
    expect(typeof (getLinks)).toBe('function');
  })

  it('deberia retornar un arreglo', () => {
    const path = 'prueba.md';
    const result = getLinks(path);
    expect(result).toBeInstanceOf(Array);
  })
  
  it('deberia retornar un arreglo de objetos', () => {
    const fileContent = '[URL test1](https://github.com/andreacarrascor/SCL018-md-links)';
    expect(getLinks(fileContent)[0].href).toBe('https://github.com/andreacarrascor/SCL018-md-links');
  })
  // it('deberia retornar un arreglo de objetos', () => {
  //   const path = 'C:\\Users\\Vrysk\\Documents\\Bootcamp-Laboratoria\\SCL018-md-links\\prueba.md';
  //   const result = [
  //     {
  //       text: 'URL test1',
  //       href: 'https://github.com/andreacarrascor/SCL018-md-links',
  //       file: 'prueba.md'
  //     },
  //     {
  //       text: 'URL test2',
  //       href: 'https://github.com/andre/SCL018-md-links',
  //       file: 'prueba.md'
  //     }];
  //   expect(getLinks(path)).toEqual(result);
  // })
});