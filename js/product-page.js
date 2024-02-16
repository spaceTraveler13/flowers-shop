// ТАЩИМ ДАННЫЕ ИЗ ЛОКАЛ
let localData = JSON.parse(localStorage.getItem('card'))
// Данные о букетах
let dataBoquetsArray = [
    {
        data: 'air',
        name: 'Букет Воздушный',
        desc: 'Гортензия розовая - 1 шт.<br/>Роза куст - 3 шт.<br/> Роза Сорти крем - 3 шт.<br/> Гвоздика ст.белая - 4 шт.<br/> Зелень: полынь,<br/> Упаковка: плёнка',
        price: 3250,
        img: 'img/img-autors1.webp'
    },
    {
        data: 'zeffo',
        name: 'Букет Зефирный',
        desc: 'Роза Кения - 7 шт.<br/>Эустома белая + фиолетов - 6 шт.<br/>Роза куст. - 5 шт.<br/>Гипсофила - 1 шт.<br/>Зелень: рябинник,<br/>Упаковка: плёнка + лента',
        price: 5200,
        img: 'img/img-autors2.webp'
    },
    {
        data: 'garmony',
        name: 'Букет Гармония',
        desc: 'Аллиум - 1 шт.<br/>Эустома - 7 шт.<br/>Альстромерия - 3 шт.<br/>Гипсофила - 1 шт.<br/>Упаковка: плёнка + лента',
        price: 3400,
        img: 'img/img-autors3.webp'
    },
    {
        data: 'feeling',
        name: 'Букет Яркость чувств',
        desc: 'Роза Эквадор - 7 шт.<br/>Роза куст - 6 шт.<br/>Эустома- 5 шт.<br/>Роза куст - 4 шт.<br/>Зелень: рябинник - 5 шт.<br/>Упаковка: плёнка + лента',
        price: 4200,
        img: 'img/img-autors4.webp'
    },
    {
        data: 'passion',
        name: 'Букет Страсть',
        desc: ' Роза Эквадор - 7 шт.<br/>Роза куст - 6 шт.<br/>Эустома- 5 шт.<br/>Роза куст - 4 шт.<br/>Зелень: рябинник - 5 шт.<br/>Упаковка: плёнка + лента',
        price: 3000,
        img: 'img/img-autors5.webp'
    },
    {
        data: 'emerald',
        name: 'Букет Изумрудный',
        desc: ' Роза сорти 5 - шт.<br/>Альстромерия - 4 шт.<br/>Эустома - 3 шт.<br/>Лагурус - 15 шт.<br/>Фисташка - 4 шт.<br/>Упаковка: фетр + плёнка + лента',
        price: 3650,
        img: 'img/img-autors6.webp'
    },
]
// РЕНДЕРИМ НА СТРАНИЦУ
const renderBox = document.querySelector('.product-data')
function renderData (currentCardAttr) {
    dataBoquetsArray.forEach((dataBoquet)=> {
        if(currentCardAttr === dataBoquet.data) {
            let template = `<h1 class="product-name">${dataBoquet.name}</h1>
                            <ul class="breadcrumb">
                                <li><a href="index.html">Главная</a></li>
                                <li class="breadcrumb-item">Страница букета</li>
                            </ul>
                            <div class="product-body">
                                <div class="product-img">
                                    <img src="${dataBoquet.img}">
                                </div>
                                <div class="product-info">
                                    <div class="product-desc">
                                        <h2 class="product-info__title">${dataBoquet.name}</h2>
                                        <p class="product-info__text">${dataBoquet.desc}<p>
                                        <span class="product-info__price">${dataBoquet.price} ₽</span>
                                    </div>
                                <button type="button" class="product-info__btn form-btn">заказать букет</button>
                            </div>`
            renderBox.insertAdjacentHTML('beforeend', template)
        }
    })
}
renderData(localData.dataAtr);
// ---MODAL-WINDOW-PRODUCT-CARD
const cardModal = document.querySelector('.modal-wrapper-card')
const cardBtn = document.querySelector('.product-info__btn')
let boquetName = document.querySelector('.boquet-name')
const cardOverlay = document.querySelector('.modal-overlay-card')
const cardCloseBtn = document.querySelector('.close-btn-card')
cardBtn.addEventListener('click', function(e) {
        let titleName = e.target.previousElementSibling.firstElementChild.textContent
        titleName.trim()
        cardModal.style.display = 'block'
        cardModal.addEventListener('click', (e)=> {
            if(e.target == cardOverlay || e.target == cardCloseBtn) {
                cardModal.style.display = 'none'
            }
        })
        boquetName.textContent = titleName
    })
// // AXIOS PRODUCT CARD
// const uriApi = `https://api.telegram.org/bot${token}/sendMessage`;
// const successMessage = document.getElementById('success-quest');
// const successOffer = document.getElementById('success-offer');
// const reload = () => location.reload();
// const formCard = document.getElementById('form-card');
// const checkboxCard = document.getElementById('checkbox__real-card');
// // ---AXIOS---- //
// formCard.addEventListener('submit', function(e){
//     e.preventDefault();
//     if(checkboxCard.checked){
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
//         location.href = '/index.html'
//     })
//     .catch((error) =>{
//         console.log(error);
//     })
//     .finally(() =>{
//         setTimeout(reload,1500)
//     })
//     }
// })
