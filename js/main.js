// ---LOADER--- //
let loader = document.querySelector('.loader-wrapper');
let loaderInit = () =>{
    window.addEventListener('load',() => {
        loader.classList.add('loader-out');
        setTimeout(() =>{
            loader.remove()
        },600);
    })
}
loaderInit();
//----- SLIDERS----//
$(document).ready(function (){    
    $('.slider').slick({
        arrows:false,
        dots: false,
        slidesToShow:1,
        adaptiveWidth:true,
        autoplay:true,
        speed:300,
        asNavFor: '.slider-small',
        dragable: false,
        swipe: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        responsive:[
            {
                breakpoint:767,
                settings:{
                    dots: true
                }
            }
        ]
    });
    $('.slider-small').slick({
        arrows: false,
        dots: false,
        fade: true,
        asNavFor: '.slider',
        dragable: false,
        swipe: false,
        pauseOnFocus: false,
        pauseOnHover: false,
    })
    $('.slider-review').slick({
        arrows: true,
        dots:false,
        slidesToShow: 4,
        slidesToScroll: 4,
        speed: 1000,
        variableWidth:true,
        infinite:false,
        waitForAnimate:false,
        appendArrows:$('.review-arrows'),
        responsive:[
            {
                breakpoint:767,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots:true
                }
            },
            {
                breakpoint:570,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true
                }
            }
        ],
    })
});

//-----MODAL-WINDOW-OFFER---//
const offerBtn = document.querySelector('#modal-btn')
const offerModal = document.querySelector('.modal-wrapper')
const offerOverlay = document.querySelector('.overlay-order')
const offerCloseBtn = document.querySelector('.close-btn')
offerBtn.addEventListener('click', ()=> {
offerModal.style.display = 'block'
})
offerModal.addEventListener('click', (e)=> {
    if(e.target == offerOverlay || e.target == offerCloseBtn) {
        offerModal.style.display = 'none'
    }
})

// ---MODAL-WINDOW-POPULAR
const popModal = document.querySelector('.modal-wrapper-pop')
const popBtn = document.querySelectorAll('.slider-btn-small')
let boquetName = document.querySelector('.boquet-name')
const popOverlay = document.querySelector('.modal-overlay-pop')
const popCloseBtn = document.querySelector('.close-btn-pop')
popBtn.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        let titleName = e.target.previousElementSibling.firstElementChild.textContent
        titleName.trim()
        popModal.style.display = 'block'
        popModal.addEventListener('click', (e)=> {
            if(e.target == popOverlay || e.target == popCloseBtn) {
                popModal.style.display = 'none'
            }
        })
        boquetName.textContent = titleName
    })
})

// ----TABS-----//
const tabs = document.querySelector('.tabs');
const contents = document.querySelector('.contents-wrapper');
const changeClass = (el) => {
    for(tab of tabs.children){
        tab.classList.remove('active');
    }
    el.classList.add('active')
}
for(tab of tabs.children){
    tab.addEventListener('click', (e)=>{
        changeClass(e.target)
        let currTab = e.target.getAttribute('data-btn')
        for(data of contents.children){
            let currSlider = data.getAttribute('data-slider');
            if(currTab === currSlider){
                data.classList.add('active')
            } else{
                data.classList.remove('active')
            }     
        } 
    })   
} 

// ----QUESTION,COUNTER,BURGER-MENU----//
window.addEventListener('click', (e)=>{
  
    // ---- BURGER-MENU ----
    const burgerMenu = document.querySelector('.burger-menu');
    const burgeritem = document.querySelectorAll('.burger-menu__item');
    if(e.target.classList == 'burger-btn' ){
        burgerMenu.classList.toggle('vision');
    }
    burgeritem.forEach(function(item){
        item.addEventListener('click', function(){
            burgerMenu.classList.remove('vision')
        }) 
    })
    // ---- QUESTION ----
    if(e.target.dataset.items === 'ass'){
       let dataItem = e.target.closest('[data-item]')
       let dataDesc = dataItem.querySelector ('.question-item__desc')
       if(dataItem.dataset.item === dataDesc.dataset.desc){
            dataDesc.classList.toggle('show')
            dataItem.classList.toggle('dagger')
       }
    }
    //--- COUNTER--- //
    let totalNumb;
    let numb;
    if(e.target.textContent === 'Next' || e.target.textContent === 'Previous'){
        const counterBox = e.target.closest('[data-action]')
        totalNumb = counterBox.querySelector('.counter-itr-num')
        numb = counterBox.querySelector('.counter-num');
    }
    if(e.target.textContent === 'Next'){
        if(parseInt(numb.innerText) < parseInt(totalNumb.innerText)){
            numb.innerText = ++numb.innerText;
        }
    }
    if(e.target.textContent === 'Previous'){    
        if(parseInt(numb.innerText) > 1) {
            numb.innerText = --numb.innerText;
        }
    }
})

// ----MAP----//
function init() {
    let map = new ymaps.Map('map', {
        center: [64.53950575169014,40.53234117474925],
        zoom: 13
    });
    let markerBlumePomor = new ymaps.Placemark([64.53950575169014,40.53234117474925], {
        balloonContent: `<div class="balloon-box">
                            <h2 class="balloon-title">г. Архангельск,</h2>
                            <h2 class="balloon-address">Поморская, 51</h2>
                            <p balloon-time>пн-сб 9-20, вс 10-19</p>
                         </div>`
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icon-map.svg',
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -30]
    })
    let markerBlumeEmbankment = new ymaps.Placemark([64.5301370865436, 40.54128114376505], {
        balloonContent: `<div class="balloon-box">
                            <h2 class="balloon-title">г. Архангельск,</h2>
                            <h2 class="balloon-address">Наб.Северной Двины, 32</h2>
                            <p balloon-time>пн-сб 9-20, вс 10-19</p>
                         </div>`
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/icon-map.svg',
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -30]
    })
    map.geoObjects.add(markerBlumePomor);
    map.geoObjects.add(markerBlumeEmbankment);
    map.controls.remove('geolocationControl');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('zoomControl');
    map.controls.remove('rulercontrol');
}   
ymaps.ready(init);
// ---SEND MESSAGE---//
// const uriApi = `https://api.telegram.org/bot${token}/sendMessage`;
// const successMessage = document.getElementById('success-quest');
// const successOffer = document.getElementById('success-offer');
// const reload = () => location.reload();
// const formOffer = document.getElementById('form-offer');
// const formPop = document.getElementById('form-popular')
// const formQuestion = document.getElementById('form-question');
// const checkbox = document.getElementById('checkbox__real');
// const checkboxOffer = document.getElementById('checkbox__real-offer');
// const checkBoxPop = document.getElementById('checkbox__real-pop')
// // ---TEL-MASK--- //
// const forms = document.querySelectorAll('form')
// forms.forEach((form) => {
//     const telField = form.querySelector('input[type="tel"]')
//     const inputMask = new Inputmask('+79999999999');
//     inputMask.mask(telField);
// }) 
// // ---AXIOS---- //
// formOffer.addEventListener('submit', function(e){
//     e.preventDefault();
//     if(checkboxOffer.checked){
//         let message = `<b>Заявка с сайта</b>\n`;
//             message += `<b>Отправитель:</b> ${this.name.value}\n`;
//             message += `<b>Телефон:</b> ${this.tel.value}\n`;
//             message += `<b>Букет:</b> ${this.boquets.value}`;
//     axios.post(uriApi, {
//         chat_id:chatId,
//         parse_mode:'html',
//         text:message
//     })
//     .then((result) =>{
//         this.name.value = '';
//         this.tel.value = '';
//         this.boquets.value = '';
//         location.href = '/thanks-page.html'
//     })
//     .catch((error) =>{
//         console.log(error);
//     })
//     .finally(() =>{
//         setTimeout(reload,1500)
//     })
//     }
// })
// formPop.addEventListener('submit', function(e){
//     e.preventDefault();
//     if(checkBoxPop.checked){
//         let message = `<b>Заявка с сайта</b>\n`;
//             message += `<b>Отправитель:</b> ${this.name.value}\n`;
//             message += `<b>Телефон:</b> ${this.tel.value}\n`;
//             message += `<b>Букет:</b> ${boquetName.textContent.trim()}`;
//     axios.post(uriApi, {
//         chat_id:chatId,
//         parse_mode:'html',
//         text:message
//     })
//     .then((result) =>{
//         this.name.value = '';
//         this.tel.value = '';
//         // this.boquets.value = '';
//         location.href = '/thanks-page.html'
//     })
//     .catch((error) =>{
//         console.log(error);
//     })
//     .finally(() =>{
//         setTimeout(reload,1500)
//     })
//     }  
// })
// formQuestion.addEventListener('submit', function(e){
//         e.preventDefault();
//         if(checkbox.checked){
//             let message = `<b>Вопрос с сайта</b>\n`;
//             message += `<b>Отправитель:</b> ${this.name.value}\n`;
//             message += `<b>Телефон:</b> ${this.tel.value}`;
//         axios.post(uriApi, {
//             chat_id:chatId,
//             parse_mode:'html',
//             text:message
//         })
//         .then((result) =>{
//             this.name.value = '';
//             this.tel.value = '';
//             successMessage.classList.add('look');
//         })
//         .catch((error) =>{
//             console.log(error);
//         })
//         .finally(() =>{
//             setTimeout(reload,1500)
//         })
//         }
// })

// PRODUCT PAGE
const btnMore = document.querySelectorAll('.product-link')
const cards = document.querySelectorAll('.popular-card')
btnMore.forEach((btnItem)=> {
    btnItem.addEventListener('click', (e)=> {        
        let cardData = {
            img: e.target.parentElement.previousElementSibling.firstElementChild.src,
            name: e.target.parentElement.firstElementChild.textContent,
            price: e.target.parentElement.firstElementChild.nextElementSibling.textContent,
        }
        let dataToLocal = localStorage.setItem('card', JSON.stringify(cardData))
        location.href = 'product-page.html'
})
})  