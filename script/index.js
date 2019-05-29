const burger = document.querySelector('.top-menu-right');
const about = document.querySelector('#menu-about-link');
var work = document.querySelector('#menu-work-link'); 
var contact = document.querySelector('#menu-contact-link'); 
const menu = document.querySelector('.menu');

burger.addEventListener ('click',()=> {
    burger.classList.toggle('active');
    opacity0();
    opacity0Accroche();

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
    
    setTimeout(function(){
        event.target.style.transform = "";
    }, 1500);
}), false;

contact.addEventListener("mouseover",function( event ) {
    contact.style.transform = 'translateX(30%)';

    setTimeout(function(){
        event.target.style.transform = "";
    }, 1500);
}), false;

about.addEventListener("mouseover",function( event ) {
    about.style.transform = 'translateX(30%)';

    setTimeout(function(){
        event.target.style.transform = "";
    }, 1500);
}), false;

