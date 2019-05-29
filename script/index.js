const burger = document.querySelector('.top-menu-right');
const about = document.querySelector('#menu-about-link');
var work = document.querySelector('#menu-work-link'); 
var contact = document.querySelector('#menu-contact-link'); 
const menu = document.querySelector('.menu');

burger.addEventListener ('click',()=> {
    burger.classList.toggle('active');
    opacity0();
    
});

about.addEventListener ('click',()=> {  
    opacity0();
});

work.addEventListener ('click',()=> {  
    opacity0();
});

contact.addEventListener ('click',()=> {  
    opacity0();
});

function opacity0() {
    console.log("hello");
    var menu = document.querySelector('.menu');    
    if (menu.style.opacity==="1"){
        menu.style.opacity="0";
    } else {
        menu.style.opacity="1";
    }
}




work.addEventListener("mouseover",function( event ) {
    work.style.transform = 'translateX(30%)';
    menu.style.backgroundColor = 'rgb(66, 52, 52)';
    
    setTimeout(function(){
        event.target.style.transform = "";
        menu.style.backgroundColor = '';

    }, 1500);
}), false;

contact.addEventListener("mouseover",function( event ) {
    contact.style.transform = 'translateX(30%)';
    menu.style.backgroundColor = 'red';

    setTimeout(function(){
        event.target.style.transform = "";
        menu.style.backgroundColor = '';
    }, 1500);
}), false;

about.addEventListener("mouseover",function( event ) {
    about.style.transform = 'translateX(30%)';
    menu.style.backgroundColor = 'red';

    setTimeout(function(){
        event.target.style.transform = "";
        menu.style.backgroundColor = '';
    }, 1500);
}), false;

