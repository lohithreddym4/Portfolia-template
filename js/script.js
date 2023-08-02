const menubtn=document.querySelector('.menu-button')
const navbtn=document.querySelector('.bar')

let showNav=false;

menubtn.addEventListener('click',function (){
    if(!showNav){
        navbtn.classList.add('open');
        document.querySelector('.menu-nav').classList.add('open')
        document.querySelector('.menu-nav').classList.remove('itemup')
        showNav=true;
    }
    else{
        navbtn.classList.remove('open');
        document.querySelector('.menu-nav').classList.add('itemup')
        document.querySelector('.menu-nav').classList.remove('open')
        showNav=false;
    }


})