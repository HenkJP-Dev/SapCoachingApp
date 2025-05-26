document.addEventListener('DOMContentLoaded', init);

function init() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    const sideNav = document.querySelector('.sideNav');

    const openOffer = document.querySelector('.openOffer');
    const closeOffer = document.querySelector('.closeOffer')
    const offerPopup = document.querySelector('.offerPopup')

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('active');
        sideNav.classList.toggle('active');
    })

    openOffer.addEventListener('click', () => {
        offerPopup.classList.toggle('open');
    })

    closeOffer.addEventListener('click', () => {
        offerPopup.classList.toggle('open');
    })

    offerPopup.addEventListener('click', (e) => {
        if (e.target === offerPopup) {
            offerPopup.classList.remove('open');
        }
    });
}

