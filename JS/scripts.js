

const imgArr = [
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp'
]

/* ` */

const imgContainer = document.querySelector('.items');

for(let i = 0; i < imgArr.length; i++){
    
    if(i == 0){
        imgContainer.innerHTML += `
        <div class="item active">
            <img src="${imgArr[i]}" alt="">
        </div> `;
    }
    else{
        imgContainer.innerHTML += `
        <div class="item">
            <img src="${imgArr[i]}" alt="">
        </div> `;
    }
    
    
    
    




}