import {prueba2} from './js/componentes.js';
import webpacklogo from './assets/img/webpack-logo.png';

function prueba1(){

    console.log('prueba1: OK')

}

prueba1();

prueba2();

console.log(webpacklogo);
const logo = document.createElement('img');
logo.src   = webpacklogo;
document.body.append(logo);

