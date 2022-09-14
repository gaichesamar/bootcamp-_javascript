//const header = document.querySelector("h1");
//console.log(header);

const paras = document.querySelectorAll(".sucess");
paras.forEach(para => console.log(para));
const header = document.getElementById('title');

console.log(header);
const division = document.getElementsByClassName('content');
console.log(division);
const pargraphe = document.getElementsByTagName('p');
console.log(pargraphe);
const title = document.querySelector('#title');
console.log(title.innerHTML);
title.innerHTML = title.innerHTML+"workshop javascript by samar gaiche";
const mycontent = document.querySelector('.mycontent');
console.log(mycontent.innerHTML);
mycontent.innerHTML = mycontent.innerHTML+ "<a href='https://samargaiche@gmail.com'>mail</a>";
const anchor = document.querySelector('a');
console.log(anchor.getAttribute('href'));
anchor.setAttribute('href','https://www.google.com');
anchor.innerText = 'google';
const pp=document.querySelector('p');
pp.setAttribute('class','error');
pp.setAttribute('style','color:green');
const hh = document.querySelector('h1');
header.setAttribute('style','margin:50px');
header.style.margin = '100';
header.style.color='red';
header.style.fontSzie ='2100px';
console.log(header.style.margin);
console.log(header.style.color);
console.log(header.style.fontSzie);

const para = document.querySelector('p');
para.classList.add('success'); // ou remove
let btn = document.querySelector('button');
const ul = document.querySelector('ul');


btn.ad$('click',() => {
    alert('button clicked');
})  
let items = document.querySelectorAll('li');
items.forEach(item => {
    item.addEventListener('click' , e => {
        e.target.style.textDecoration ="line-through";
    })
})
