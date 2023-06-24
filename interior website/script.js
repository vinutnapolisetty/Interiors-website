let searchForm=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
    shopCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}

let shopCart=document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick=()=>{
    shopCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}
let loginForm=document.querySelector('.login-form');
document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.toggle('active');
    shopCart.classList.remove('active');
    searchForm.classList.remove('active');
    navBar.classList.remove('active');
}

let navBar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
    navBar.classList.toggle('active');
    shopCart.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll=() =>{
    shopCart.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}

var swiper=new Swiper(".decor-slider",{
   loop:true,
    spaceBetween:20,
    autoplay:{
        delay:7500,
        disableOnInteraction:false,
    },
    centeredSlides:true,
    breakpoints:{
        0:{
            slidesPerView:1,
            
        },
        768:{
            slidesPerView:2, 
        },
        1020:{
            slidesPerView:3,
        },
    },
});

var swiper1=new Swiper(".review-slider",{
    loop:true,
     spaceBetween:20,
     autoplay:{
         delay:7500,
         disableOnInteraction:false,
     },
     centeredSlides:true,
     breakpoints:{
         0:{
             slidesPerView:1,
             
         },
         768:{
             slidesPerView:2, 
         },
         1020:{
             slidesPerView:3,
         },
     },
 });