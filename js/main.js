//----- SLIDERS----//
$(document).ready(function (){    
    $('.slider').slick({
        arrows:false,
        dots: false,
        slidesToShow:1,
        adaptiveWidth:true,
        autoplay:true,
        speed:500,
        asNavFor: '.slider-small',
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
        asNavFor: '.slider'
    })
    $('.popular1-slider').slick({
        arrows: true,
        dots:false,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth:true,
        infinite:false,
        waitForAnimate:false,
        swipe:false,
        appendArrows:$('.popular1-arrows'),
        responsive:[
            {
                breakpoint:767,
                settings:{
                    slidesToScroll:2,
                    swipe:true,
                }
            },
            {
                breakpoint:500,
                settings:{
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    swipe:true,
                }
            }
        ]
    })
    $('.popular2-slider').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1500,
        variableWidth:true,
        infinite:false,
        waitForAnimate:false,
        swipe:false,
        appendArrows:$('.popular2-arrows'),
        responsive:[
            {
                breakpoint:767,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    swipe:true,
                }
            },
            {
                breakpoint:500,
                settings:{
                    slidesToScroll: 1,
                    swipe:true,
                }
            }
        ]
    })
    $('.popular3-slider').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1500,
        variableWidth:true,
        infinite:false,
        waitForAnimate:false,
        swipe:false,
        appendArrows:$('.popular3-arrows'),
        responsive:[
            {
                breakpoint:767,
                settings:{
                    slidesToScroll:2,
                    swipe:true,
                }
            },
            {
                breakpoint:500,
                settings:{
                    slidesToScroll: 1,
                    swipe:true,
                }
            }
        ]
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
                breakpoint:500,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true
                }
            }
        ],
    })
});
//-----MODAL-WINDOW----//
$('#offer-btn,#abilities-btn').on('click', function () {
    $('.modal-wrapper').toggle();
})
$('.modal-close,#overlay-order').on('click', function () {
    $('.modal-wrapper').hide();
})
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
// ---BURGER-MENU---//
const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger-menu');
burgerBtn.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('vision')
    burgerBtn.classList.toggle('vision')
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
// ----QUESTION----//
window.addEventListener('click', (e)=>{
    if(e.target.dataset.items === 'ass'){
       let dataItem = e.target.closest('[data-item]')
       let dataDesc = dataItem.querySelector ('.question-item__desc')
       if(dataItem.dataset.item === dataDesc.dataset.desc){
            dataDesc.classList.toggle('show')
            dataItem.classList.toggle('dagger')
       }
    }
})
    // ----COUNTER---- // 
window.addEventListener('click', (e)=>{
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
// ----BUTTONS IN POPULAR CARDS--- //
const slideItem = document.querySelectorAll('.popular-slider__item');
const sliderBtn = document.querySelectorAll('.slider-btn');
const modalWindow = document.querySelector('.modal-wrapper')
slideItem.forEach((item)=>{
    sliderBtn.forEach((btn)=>{
        let dataItemSlide = item.getAttribute('data-item')
        let dataBtnSlide = btn.getAttribute('data-btn')
        item.addEventListener('mouseenter',()=>{
            if(dataItemSlide === dataBtnSlide) {
                btn.style.display = 'block';
            }
        })
        item.addEventListener('mouseleave',()=>{
                btn.style.display = 'none';
        })
        btn.addEventListener('click', (e)=>{
            modalWindow.style.display = 'block';
        })
    })
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
// const token = '5889186084:AAHNVVeoKYwBce41EYKO9Kr7yPgHNTyBN60'; blume29-tg-source
const token = '5896828511:AAEiDBUhNM9x4qDDYqEhhgnJ1PiMlgErwjI';
// const chatId = '-1001839678616'; blume29-tg-source
const chatId = '1784239120';
const uriApi = `https://api.telegram.org/bot${token}/sendMessage`;
const successMessage = document.getElementById('success-quest');
const successOffer = document.getElementById('success-offer');
const reload = () => location.reload();
const formOffer = document.getElementById('form-offer');
const formQuestion = document.getElementById('form-question');
let checkbox = document.getElementById('checkbox__real');
let checkboxOffer = document.getElementById('checkbox__real-offer');
formOffer.addEventListener('submit', function(e){
    e.preventDefault();
    if(checkboxOffer.checked){
        let message = `<b>Заявка с сайта</b>\n`;
            message += `<b>Отправитель:</b> ${this.name.value}\n`;
            message += `<b>Телефон:</b> ${this.tel.value}\n`;
            message += `<b>Букет:</b> ${this.boquets.value}`;
    axios.post(uriApi, {
        chat_id:chatId,
        parse_mode:'html',
        text:message
    })
    .then((result) =>{
        this.name.value = '';
        this.tel.value = '';
        successOffer.style.display = 'block';
    })
    .catch((error) =>{
        console.log(error);
    })
    .finally(() =>{
        setTimeout(reload,1500)
    })
    }
})
formQuestion.addEventListener('submit', function(e){
        e.preventDefault();
        if(checkbox.checked){
            let message = `<b>Вопрос с сайта</b>\n`;
            message += `<b>Отправитель:</b> ${this.name.value}\n`;
            message += `<b>Телефон:</b> ${this.tel.value}`;
        axios.post(uriApi, {
            chat_id:chatId,
            parse_mode:'html',
            text:message
        })
        .then((result) =>{
            this.name.value = '';
            this.tel.value = '';
            successMessage.classList.add('look');
        })
        .catch((error) =>{
            console.log(error);
        })
        .finally(() =>{
            setTimeout(reload,1500)
        })
        }
})
