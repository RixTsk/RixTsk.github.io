$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        margin: 10,
        dots: true,
        dotsEach: true
    });

    //HTML Modal windows
    let testvar = 1111;
    const body = document.querySelector('.b');
    const modal = document.querySelector('.overlay'); //почему-то криво работает закрытие, т.е. модальное окно закрывается при клике в лююбое место на экране!
    const LUpLink = document.querySelector('.ULeft');
    const LUContent = document.querySelector('.ULeftCnt');
    const RUpLink = document.querySelector('.URight');
    const RUContent = document.querySelector('.URightCnt');

    const LDLink = document.querySelector('.DLeft');
    const LDContent = document.querySelector('.DLeftCnt');
    const RDLink = document.querySelector('.DRight');
    const RDContent = document.querySelector('.DRightCnt');

    const CloseBtn = document.querySelectorAll('.modal_CBtn');



    function openModal(i) {
        if (i == LUpLink) {
            i.addEventListener('click', () => {
                modal.style.display = 'block';
                LUContent.style.display = 'block';
                body.classList.add('SwitchScroll');
            });
        } else if (i == RUpLink) {
            i.addEventListener('click', () => {
                modal.style.display = 'block';
                RUContent.style.display = 'block';
                body.classList.add('SwitchScroll');
            });
        } else if (i == LDLink) {
            i.addEventListener('click', () => {
                modal.style.display = 'block';
                LDContent.style.display = 'block';
                body.classList.add('SwitchScroll');
            });
        } else if (i == RDLink) {
            i.addEventListener('click', () => {
                modal.style.display = 'block';
                RDContent.style.display = 'block';
                body.classList.add('SwitchScroll');
            });
        }
    }

    function closeModal(i) {
        i.addEventListener('click', () => {
            modal.style.display = 'none';
            LUContent.style.display = 'none';
            RUContent.style.display = 'none';
            LDContent.style.display = 'none';
            RDContent.style.display = 'none';
            body.classList.remove('SwitchScroll');
        });
    }

    openModal(LUpLink);
    openModal(LDLink);
    openModal(RUpLink);
    openModal(RDLink);
    /* closeModal(modal); */
    closeModal(CloseBtn[0]);
    closeModal(CloseBtn[1]);
    closeModal(CloseBtn[2]);
    closeModal(CloseBtn[3]);

});