

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

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const allItem = document.querySelectorAll('.item');
let imgCounter = 0;

nextButton.addEventListener('click', function(){
    
    if(imgCounter != allItem.length - 1){
        allItem[imgCounter].classList.remove('active');

        imgCounter++;

        allItem[imgCounter].classList.add('active');
    }
});

prevButton.addEventListener('click', function(){
    if(imgCounter > 0){
        allItem[imgCounter].classList.remove('active');
 
        imgCounter--;
    
        allItem[imgCounter].classList.add('active'); 
    }
 });