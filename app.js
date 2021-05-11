'use strict'

const icon = document.querySelector(".icon");
const search = document.querySelector(".search");


icon.onclick = function(){
    search.classList.toggle('active')
  //   ASSIGNMENT LINK THE ICON TO URL  return "https://www.google.com/search"
}
 
//mysearch.onclick().value = '#mysearch';


const clear =  document.querySelector('.clear');

clear.onclick=function(){
 document.getElementById('mysearch').value='';
}
 
