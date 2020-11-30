const op = document.querySelector('.project');
const cl = document.querySelector('.close');
const cont1 = document.querySelector('.wrap');

const op1 = document.querySelector('.cont2 .project');
const cl1 = document.querySelector('.cont2 .close');
const cont2 = document.querySelector('.cont2 .wrap');

const op2 = document.querySelector('.cont3 .project');
const cl2 = document.querySelector('.cont3 .close');
const cont3 = document.querySelector('.cont3 .wrap');

const op3 = document.querySelector('.cont4 .project');
const cl3 = document.querySelector('.cont4 .close');
const cont4 = document.querySelector('.cont4 .wrap');

const op4 = document.querySelector('.cont5 .project');
const cl4 = document.querySelector('.cont5 .close');
const cont5 = document.querySelector('.cont5 .wrap');

const op5 = document.querySelector('.cont6 .project');
const cl5 = document.querySelector('.cont6 .close');
const cont6 = document.querySelector('.cont6 .wrap');

op.addEventListener('click', () => {
    cont1.classList.toggle('open');
    
});

cl.addEventListener('click', () => {
    cont1.classList.toggle('open')
});

op1.addEventListener('click', () => {
    cont2.classList.toggle('open');
});

cl1.addEventListener('click', () => {
    cont2.classList.toggle('open');
});

op2.addEventListener('click', () => {
    cont3.classList.toggle('open');
});

cl2.addEventListener('click', () => {
    cont3.classList.toggle('open');
});

op3.addEventListener('click', () => {
    cont4.classList.toggle('open');
});

cl3.addEventListener('click', () => {
    cont4.classList.toggle('open');
});

op4.addEventListener('click', () => {
    cont5.classList.toggle('open');
});

cl4.addEventListener('click', () => {
    cont5.classList.toggle('open')
});

op5.addEventListener('click', () => {
    cont6.classList.toggle('open');
});

cl5.addEventListener('click', () => {
    cont6.classList.toggle('open')
});