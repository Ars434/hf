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
let deadline ='1 april 2025'



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

// Обновленный код для мобильного меню
const mobileMenu = {
    menu: document.getElementById('mobileMenu'),
    openButton: document.getElementById('mobileMenuButton'),
    closeButton: document.getElementById('closeMenu'),

    init() {
        this.openButton.addEventListener('click', this.toggleMenu.bind(this));
        this.closeButton.addEventListener('click', this.closeMenu.bind(this));
        this.addMenuLinksHandlers();
        this.addWalletButtonHandler();
    },

    toggleMenu() {
        this.menu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    },

    closeMenu() {
        this.menu.classList.remove('active');
        document.body.classList.remove('no-scroll');
    },

    addMenuLinksHandlers() {
        const links = this.menu.querySelectorAll('.header__link');

        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.closeMenu();

                // Добавьте здесь свою логику перехода
                const targetSection = link.getAttribute('href');
                console.log(`Navigate to: ${targetSection}`);

                // Пример плавной прокрутки
                if(targetSection.startsWith('#')) {
                    document.querySelector(targetSection).scrollIntoView({
                        behavior: 'smooth'
                    });
                }

                // Добавляем визуальную обратную связь
                this.addClickEffect(e.target);
            });
        });
    },

    addWalletButtonHandler() {
        const walletButton = this.menu.querySelector('.header__btn');
        walletButton.addEventListener('click', () => {
            this.closeMenu();
            console.log('Connect Wallet clicked');
            // Добавьте свою логику для кнопки
            this.showWalletConnectModal();
        });
    },

    addClickEffect(element) {
        element.style.transform = 'scale(0.95)';
        setTimeout(() => {
            element.style.transform = 'scale(1)';
        }, 200);
    },

    showWalletConnectModal() {
        // Добавьте логику показа модального окна
        console.log('Show wallet connect modal');
    }
};

// Инициализация меню
mobileMenu.init();

// Закрытие при клике вне меню
document.addEventListener('click', (e) => {
    if (!mobileMenu.menu.contains(e.target) &&
        !mobileMenu.openButton.contains(e.target)) {
        mobileMenu.closeMenu();
    }
});
