$(document).ready(function () {
    const body = document.querySelector('.b');
    const modal = document.querySelector('.overlay');
    //YouTube modal elements
    const BLBtn = document.querySelector('.IntMat_LIcon');
    const SUpLBtn = document.querySelector('.IntMat_VSIcon_UpL');
    const SDnLBtn = document.querySelector('.IntMat_VSIcon_DnL');
    const SUpRBtn = document.querySelector('.IntMat_VSIcon_UpR');
    const SDnRBtn = document.querySelector('.IntMat_VSIcon_DnR');

    const LCont = document.querySelector('.modal_YTCont');
    const CloseEl = document.querySelector('.modal_closeElement');
    const Video = document.querySelector('.imgVideoCont');

    //Modal YT video
    function openYTmodal(i) {
        if (i == BLBtn) {
            i.addEventListener('click', () => {
                modal.style.display = 'block';
                LCont.style.display = 'flex';
                Video.src = "https://www.youtube.com/embed/IjscQ0HtaCg"
                body.classList.add('SwitchScroll');
            });
        } else if (i == SUpLBtn) {
            i.addEventListener('click', () => {
                modal.style.display = 'block';
                LCont.style.display = 'flex';
                Video.src = "https://www.youtube.com/embed/8R5t3a2jT4A"
                body.classList.add('SwitchScroll');
            });
        } else if (i == SDnLBtn) {
            i.addEventListener('click', () => {
                modal.style.display = 'block';
                LCont.style.display = 'flex';
                Video.src = "https://www.youtube.com/embed/-IJuKT1mHO8"
                body.classList.add('SwitchScroll');
            });
        } else if (i == SUpRBtn) {
            i.addEventListener('click', () => {
                modal.style.display = 'block';
                LCont.style.display = 'flex';
                Video.src = "https://www.youtube.com/embed/IhVf_3TeTQE"
                body.classList.add('SwitchScroll');
            });
        } else if (i == SDnRBtn) {
            i.addEventListener('click', () => {
                modal.style.display = 'block';
                LCont.style.display = 'flex';
                Video.src = "https://www.youtube.com/embed/UIEnhYio0VQ"
                body.classList.add('SwitchScroll');
            });
        }
    }

    function closeModal(i) {
        i.addEventListener('click', () => {
            modal.style.display = 'none';
            LCont.style.display = 'none';
            Video.src = " "
            body.classList.remove('SwitchScroll');
        });
    }

    openYTmodal(BLBtn);
    openYTmodal(SUpLBtn);
    openYTmodal(SDnLBtn);
    openYTmodal(SUpRBtn);
    openYTmodal(SDnRBtn);

    closeModal(CloseEl);
});