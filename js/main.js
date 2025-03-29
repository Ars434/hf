document.addEventListener('DOMContentLoaded', () => {
    const caruselContainer = document.querySelector(".carusel-container");
    const items = document.querySelectorAll(".carusel-item");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    let currentIndex = 0;
    const totalItems = items.length;

    function updateCarusel() {
        const itemWidth = items[0].offsetWidth + 35;
        caruselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
        if(currentIndex < totalItems - 1) currentIndex++;
        updateCarusel();
    });

    prevBtn.addEventListener("click", () => {
        if(currentIndex > 0) currentIndex--;
        updateCarusel();
    });
});

const timers = document.querySelectorAll('.timer-numbers')
let deadline ='3 april 2025'



timers.forEach((timer) =>{
    const getTimeRemaining = () =>{
    let dateStop = new Date(deadline).getTime()
    let dateNow = new Date().getTime()
    let timeRemaining = (dateStop - dateNow) / 1000
    let hours = Math.floor(timeRemaining / 60  / 60)
    let minutes = Math.floor((timeRemaining / 60) % 60)
    let seconds = Math.floor(timeRemaining % 60)

    return {timeRemaining, hours, minutes, seconds}
}

const updateClock = () => {
    const timerHours = timer.querySelector('#timer-hours')
    const timerMinutes = timer.querySelector('#timer-minutes')
    const timerSeconds = timer.querySelector('#timer-seconds')

    let getTime = getTimeRemaining();
    timerHours.textContent = ("0" + getTime.hours).slice(-2);
    timerMinutes.textContent = ("0" + getTime.minutes).slice(-2);
    timerSeconds.textContent = ("0" + getTime.seconds).slice(-2);

};
if (getTimeRemaining > 0) {
    updateClock();
}
setInterval(()=>{
    let getTime = getTimeRemaining();
    if (getTime.timeRemaining > 0){
        updateClock();
    } else if (getTime.timeRemaining === 0) {
        clearInterval(updateClock);
    }
}
, 1000);

})


const caruselContainer1 = document.querySelector(".pop-blocks")
const items1 = document.querySelectorAll(".pop-block")
const nextBtn1 = document.querySelector(".pr")

let currentIndex1 = 0;
const totalItems1 = items1.length;

function updateCarusel() {
    const itemWidth = items1[0].getBoundingClientRect().width
    const offset = currentIndex1 * itemWidth
    caruselContainer1.style.transform = `translatex(-${offset}px)`
}

nextBtn1.addEventListener("click",function () {
    currentIndex1  = (currentIndex1 + 1) % totalItems1
    updateCarusel();
})



const expBlocks = document.querySelector('.exp-blocks');
let isDown = false;
let startX;
let scrollLeft;

// Mouse drag scroll
expBlocks.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - expBlocks.offsetLeft;
    scrollLeft = expBlocks.scrollLeft;
});

expBlocks.addEventListener('mouseleave', () => {
    isDown = false;
});

expBlocks.addEventListener('mouseup', () => {
    isDown = false;
});

expBlocks.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - expBlocks.offsetLeft;
    const walk = (x - startX) * 2;
    expBlocks.scrollLeft = scrollLeft - walk;
});

// Touch scroll support
let touchStartX = 0;
let scrollLeftTouch = 0;

expBlocks.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].pageX;
    scrollLeftTouch = expBlocks.scrollLeft;
});

expBlocks.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const x = e.touches[0].pageX;
    const walk = (x - touchStartX) * 2;
    expBlocks.scrollLeft = scrollLeftTouch - walk;
});

// Mouse wheel horizontal scroll
expBlocks.addEventListener('wheel', (e) => {
    e.preventDefault();
    expBlocks.scrollLeft += e.deltaY * 2;
});

document.addEventListener('DOMContentLoaded', function() {
    const blocks = document.querySelectorAll('.exp-block');

    // Обработка для тач-устройств
    blocks.forEach(block => {
        block.addEventListener('touchstart', function(e) {
            e.stopPropagation();
            this.classList.add('active');
        });

        block.addEventListener('touchend', function() {
            this.classList.remove('active');
        });

        block.addEventListener('touchcancel', function() {
            this.classList.remove('active');
        });
    });

    // Обработка для кликов мышью
    blocks.forEach(block => {
        block.addEventListener('mousedown', function() {
            this.classList.add('active');
        });

        block.addEventListener('mouseup', function() {
            this.classList.remove('active');
        });

        block.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
    });
});
