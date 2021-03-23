$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        nav: true,
        items: 1,
        margin: 10,
        dots: true,
        dotsEach: true
    });

    /* Sliders */
    const ePanels = document.querySelectorAll('.Examples__item')
    const pPanels = document.querySelectorAll('.Price__item')
    const cPanels = document.querySelectorAll('.Services__item')

    function sliders(i) {
        if (i == ePanels) {
            i.forEach(panel => {
                panel.addEventListener('click', () => {
                    removeActiveClasses()
                    panel.classList.remove('Examples_passive')
                    panel.classList.add('Examples_active')

                })
            })

            function removeActiveClasses() {
                i.forEach(panel => {
                    panel.classList.remove('Examples_active')
                    panel.classList.add('Examples_passive')
                })
            }
        } else if (i == pPanels) {
            i.forEach(panel => {
                panel.addEventListener('click', () => {
                    removeActiveClasses()
                    panel.classList.remove('Price_passive')
                    panel.classList.add('Price_active')

                })
            })

            function removeActiveClasses() {
                i.forEach(panel => {
                    panel.classList.remove('Price_active')
                    panel.classList.add('Price_passive')
                })
            }
        } else if (i == cPanels) {
            i.forEach(panel => {
                panel.addEventListener('click', () => {
                    removeActiveClasses()
                    panel.classList.remove('Services_passive')
                    panel.classList.add('Services_active')

                })
            })

            function removeActiveClasses() {
                i.forEach(panel => {
                    panel.classList.remove('Services_active')
                    panel.classList.add('Services_passive')
                })
            }
        }
    }

    sliders(ePanels)
    sliders(pPanels)
    sliders(cPanels)

    /* Modal windows */
    //Need optimization!
    const article1_In = document.querySelector('.Information__article1')
    const article2_In = document.querySelector('.Information__article2')
    const article3_In = document.querySelector('.Information__article3')
    const article4_In = document.querySelector('.Information__article4')
    const article5_In = document.querySelector('.Information__article5')
    const article6_In = document.querySelector('.Information__article6')

    const article1_Out = document.querySelector('.Modal__article1')
    const article2_Out = document.querySelector('.Modal__article2')
    const article3_Out = document.querySelector('.Modal__article3')
    const article4_Out = document.querySelector('.Modal__article4')
    const article5_Out = document.querySelector('.Modal__article5')
    const article6_Out = document.querySelector('.Modal__article6')

    const contactForm = document.querySelector('.Contact__form')
    const contactField = document.querySelector('.Contact__field')
    const smallMenu = document.querySelector('.SmallMenu__contact')

    const overlay = document.querySelector('.Overlay')
    const body = document.querySelector('.b')
    const closeBtn = document.querySelectorAll('.Modal__closeBtn')
    const contClose = document.querySelectorAll('.Contact__close')
    const orderBtn = document.querySelector('.FScreen__button')
    const contactBtn = document.querySelector('.Menu__contact')

    function openModal(i) {
        if (i == article1_In) {
            i.addEventListener('click', () => {
                overlay.style.display = 'flex';
                article1_Out.style.display = 'block';
                body.classList.add('b_active');
            });
        } else if (i == article2_In) {
            i.addEventListener('click', () => {
                overlay.style.display = 'flex';
                article2_Out.style.display = 'block';
                body.classList.add('b_active');
            });
        } else if (i == article3_In) {
            i.addEventListener('click', () => {
                overlay.style.display = 'flex';
                article3_Out.style.display = 'block';
                body.classList.add('b_active');
            });
        } else if (i == article4_In) {
            i.addEventListener('click', () => {
                overlay.style.display = 'flex';
                article4_Out.style.display = 'block';
                body.classList.add('b_active');
            });
        } else if (i == article5_In) {
            i.addEventListener('click', () => {
                overlay.style.display = 'flex';
                article5_Out.style.display = 'block';
                body.classList.add('b_active');
            });
        } else if (i == article6_In) {
            i.addEventListener('click', () => {
                overlay.style.display = 'flex';
                article6_Out.style.display = 'block';
                body.classList.add('b_active');
            });
        } else if (i == orderBtn) {
            i.addEventListener('click', () => {
                overlay.style.display = 'flex';
                contactForm.style.display = 'block';
                body.classList.add('b_active');
            });
        } else if (i == contactBtn) {
            i.addEventListener('click', () => {
                overlay.style.display = 'flex';
                contactField.style.display = 'flex';
                body.classList.add('b_active');
            });
        } else if (i == smallMenu) {
            i.addEventListener('click', () => {
                overlay.style.display = 'flex';
                contactField.style.display = 'flex';
                body.classList.add('b_active');
            });
        }
    }

    function closeModal(i) {
        i.addEventListener('click', () => {
            overlay.style.display = 'none';
            article1_Out.style.display = 'none';
            article2_Out.style.display = 'none';
            article3_Out.style.display = 'none';
            article4_Out.style.display = 'none';
            article5_Out.style.display = 'none';
            article6_Out.style.display = 'none';
            contactForm.style.display = 'none';
            contactField.style.display = 'none';
            body.classList.remove('b_active');
        });
    }

    openModal(article1_In);
    openModal(article2_In);
    openModal(article3_In);
    openModal(article4_In);
    openModal(article5_In);
    openModal(article6_In);
    openModal(orderBtn);
    openModal(contactBtn);
    openModal(smallMenu);


    closeModal(closeBtn[0]);
    closeModal(closeBtn[1]);
    closeModal(closeBtn[2]);
    closeModal(closeBtn[3]);
    closeModal(closeBtn[4]);
    closeModal(closeBtn[5]);
    closeModal(contClose[0]);
    closeModal(contClose[1]);

    /*Smooth scroll and page Up */
    //scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('.pageup').fadeIn('slow');
        } else {
            $('.pageup').fadeOut('slow');
        }
    });
    //Menu button viisble
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $('.SmallMenu').fadeIn('slow');
        } else {
            $('.SmallMenu').fadeOut('slow');
        }
    });
    //Menu button click func
    const SMLink = document.querySelectorAll('.SmallMenu_closer')
    $('.SmallMenu__Hamburger').click(function () {
        /* $('.SmallMenu__list').fadeIn('slow'); */
        $('.SmallMenu__Hamburger').toggleClass('SmallMenu_activeH');
        $('.SmallMenu__list').toggleClass('SmallMenu__list_activeL');
    });

    function closeSM(i) {
        $(i).click(function () {
            $('.SmallMenu__Hamburger').toggleClass('SmallMenu_activeH');
            $('.SmallMenu__list').toggleClass('SmallMenu__list_activeL');
        });
    };
    closeSM(SMLink[0])
    closeSM(SMLink[1])
    closeSM(SMLink[2])
    closeSM(SMLink[3])
    closeSM(SMLink[4])


    //smooth
    $("a[href^='#']").click(function () {
        const _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });

});