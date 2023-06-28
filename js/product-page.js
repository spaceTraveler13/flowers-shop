
// ТАЩИМ ДАННЫЕ ИЗ ЛОКАЛ
let localData = JSON.parse(localStorage.getItem('card'))

// РЕНДЕРИМ НА СТРАНИЦУ
const renderBox = document.querySelector('.product-data')
function renderData (data) {
    let template = `<h1 class="product-name">${data.name}</h1>
                    <ul class="breadcrumb">
                        <li><a href="index.html">Главная</a></li>
                         <li class="breadcrumb-item">Страница букета</li>
                    </ul>
                    <div class="product-body">
                        <div class="product-img">
                            <img src="${data.img}">
                        </div>
                        <div class="product-info">
                            <div class="product-desc">
                                <h2 class="product-info__title">${data.name}</h2>
                                <p class="product-info__text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                         do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                         aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                         deserunt mollit anim id est laborum."
                                </p>
                                <span class="product-info__price">${data.price}</span>
                            </div>
                        <button type="button" class="product-info__btn form-btn">заказать букет</button>
                    </div>`
                    renderBox.insertAdjacentHTML('beforeend', template)
}
renderData(localData);
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
