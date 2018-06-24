import $ from 'jquery';					
import { MainMenu } from './modules/_main-menu.js';
import { FixedHeader } from './modules/_main-menu.js';
import  { Modal }  from './modules/_modal.js';
import RevealOnScroll from './modules/_reveal-on-scroll.js';
console.log("app.js");
var mainMenu = new MainMenu();
var fixedHeader = new FixedHeader();
var modal = new Modal();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "85%");



