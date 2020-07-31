/* navbar links */
const linkStart = document.querySelector('.nav__link--start')
const linkAbout = document.querySelector('.nav__link--about')
const linkPlan = document.querySelector('.nav__link--plan')
const linkContact = document.querySelector('.nav__link--contact')

const clearLinksBorder = function () {
    const linkElements = document.querySelectorAll('.nav__link');
    linkElements.forEach(function (linkElement, index) {
        linkElement.classList.remove("nav__link--selected");
    });
}

// start section //
const $start = $('.wrapStart');
const startFromTop = $start.offset().top;
const startHeight = $start.outerHeight();

// about section //
const $about = $('.wrapAbout');
const aboutFromTop = $about.offset().top;
const aboutHeight = $about.outerHeight();

const $aboutBlockTexts = $('.columnTextsAbout__blockTypography');
const aboutBlockTextsFromTop = $aboutBlockTexts.offset().top;
const aboutBlockTextsHeight = $aboutBlockTexts.outerHeight();

const $aboutTitle = $('.columnTextsAbout_title');
const $aboutText = $('.columnTextsAbout__descriptionText')
const $aboutLogoElement = $('.columnTextsAbout__imgLogo')
const $aboutImageDawid = $('.columnImagesAbout__imgDawid')
const fadeIntexts = document.querySelectorAll('.columnImagesAbout__text');

// contact section //
const $columnTextsContact = $('.columnTextsContact');
const columnTextsContactFromTop = $columnTextsContact.offset().top;
const columnTextsContactHeight = $columnTextsContact.outerHeight();
const allContactTexts = [...document.querySelectorAll('.columnTextsContact>*,address>*')];

// hamburger //
const $hambPop = $('.navBurger');
const $hambButton = $('.navBurger__btn');
const $hambSpan = $('.navBurger__span');

const $navLinks = $('.nav__link');
let hambActiveFlag = false;
let mql = window.matchMedia("(orientation: portrait)");

if (mql.matches) {
    $hambSpan.removeClass('navBurger__span--white');
    $hambSpan.addClass('navBurger__span--black');
} else {
    $hambSpan.removeClass('navBurger__span--black');
    $hambSpan.addClass('navBurger__span--white');
}




// appear elements when scroll //
$(window).on('scroll', function () {

    var isSafari = window.safari !== undefined;
    let bodyelem = '';

    if (isSafari) {
        bodyelem = $("body");
    } else {
        bodyelem = window;
    }


    const windowHeight = $(bodyelem).height();
    const scrollValue = $(bodyelem).scrollTop();

    // change link border on scroll //
    if ((scrollValue < windowHeight)) {
        clearLinksBorder();
        linkStart.classList.add('nav__link--selected');
        if (mql.matches && !hambActiveFlag) {
            $hambSpan.removeClass('navBurger__span--white');
            $hambSpan.addClass('navBurger__span--black');
            $navLinks.removeClass('nav__link--black');
        } else if (!mql.matches && !hambActiveFlag) {
            $hambSpan.removeClass('navBurger__span--black');
            $hambSpan.addClass('navBurger__span--white');
        }

    } else if ((scrollValue >= windowHeight) && (scrollValue < windowHeight * 2)) {
        clearLinksBorder();
        linkAbout.classList.add('nav__link--selected');
        if (mql.matches && !hambActiveFlag) {
            $hambSpan.addClass('navBurger__span--white');
            $hambSpan.removeClass('navBurger__span--black');
            $navLinks.removeClass('nav__link--black');
        } else if (!mql.matches && !hambActiveFlag) {
            $hambSpan.addClass('navBurger__span--white');
            $hambSpan.removeClass('navBurger__span--black');
            $navLinks.addClass('nav__link--white');
            // $navLinks.removeClass('nav__link--black');
        }

    } else if ((scrollValue >= windowHeight) && (scrollValue < windowHeight * 3)) {
        clearLinksBorder();
        linkPlan.classList.add('nav__link--selected');
        if (mql.matches && !hambActiveFlag) {
            $hambSpan.addClass('navBurger__span--black');
            $hambSpan.removeClass('navBurger__span--white');
            // $navLinks.addClass('nav__link--black');
        } else if (!mql.matches && !hambActiveFlag) {
            $hambSpan.addClass('navBurger__span--black');
            $hambSpan.removeClass('navBurger__span--white');
            // $navLinks.addClass('nav__link--black');
            // $navLinks.removeClass('nav__link--white');
        }

    } else if ((scrollValue >= windowHeight) && (scrollValue < windowHeight * 4)) {
        clearLinksBorder();
        linkContact.classList.add('nav__link--selected');
        $navLinks.removeClass('nav__link--black');
        if (mql.matches && !hambActiveFlag) {
            $hambSpan.addClass('navBurger__span--white');
            $hambSpan.removeClass('navBurger__span--black');
        } else if (!mql.matches && !hambActiveFlag) {
            $hambSpan.addClass('navBurger__span--white');
            $hambSpan.removeClass('navBurger__span--black');
            // $navLinks.addClass('nav__link--white');
            // $navLinks.removeClass('nav__link--black');
        }
    }



    if (scrollValue > aboutBlockTextsHeight + aboutBlockTextsFromTop - windowHeight - 200) {
        $aboutTitle.addClass("columnTextsAbout_title--active");
        $aboutText.addClass("columnTextsAbout__descriptionText--active");
        $aboutLogoElement.addClass("columnTextsAbout__imgLogo--active");
        $aboutImageDawid.addClass("columnImagesAbout__imgDawid--active");

        fadeIntexts.forEach(function (fadeInText, index) {
            fadeInText.classList.add("columnImagesAbout__text--fadeIn");
        });
    }


    if (scrollValue > columnTextsContactHeight + columnTextsContactFromTop - windowHeight - 500) {
        allContactTexts.forEach(function (allContactText, index) {
            allContactText.classList.add("columnImagesAbout__text--fadeIn");
        });
    }

})

// animation to section when click menu //
$('nav a').on('click', function (e) {
    e.preventDefault();
    const goToSection = "[data-sectionin=" + $(this).data('section') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 500)

})

$('.navBurger a').on('click', function () {
    hambActiveFlag = !hambActiveFlag;
    $hambButton.toggleClass('navBurger__btn--active');
    $hambButton.toggleClass('navBurger__btn--notActive');
    $hambPop.toggleClass('navBurger__show');
    $hambPop.toggleClass('navBurger__hide');
    $hambSpan.toggleClass('navBurger__span--black');

    const goToSection = "[data-sectionin=" + $(this).data('section') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 500)
})

$('.navBurger__box').on('click', function (e) {
    hambActiveFlag = !hambActiveFlag;
    e.preventDefault();
    $hambButton.toggleClass('navBurger__btn--active');
    $hambButton.toggleClass('navBurger__btn--notActive');
    $hambSpan.toggleClass('navBurger__span--black');

    $hambPop.toggleClass('navBurger__show');
    $hambPop.toggleClass('navBurger__hide');
    $hambPop.show();
})

// PLAN SCROLL SLIDE ON CLICK //


const rightSlide = document.querySelector('.offer__navigation--right');
const leftSlide = document.querySelector('.offer__navigation--left');
const widthMedia = window.matchMedia("(max-width: 1365px)")
const widthMinMedia = window.matchMedia("(min-width: 1365px)")
let offers = [];
let cleanOffersSmallFlag = true;
let cleanOffersLargeFlag = true;

function cleanOfferOption() {
    document.querySelectorAll('.offer__option').forEach(function (offer, index) {
        offer.classList.remove('offer__option--showInLeft');
        offer.classList.remove('offer__option--showInRight');
        offer.classList.remove('offer__option--removalLeft');
        offer.classList.remove('offer__option--removalRight');
        offer.classList.remove('offer__option--active');
    })
    document.querySelectorAll('.offer__option')[0].classList.add('offer__option--active');
    document.querySelectorAll('.offerWrap3')[0].classList.add('offer__option--active');
    cleanOffersSmallFlag = false;
}

function cleanOfferWrap3Option() {
    document.querySelectorAll('.offerWrap3').forEach(function (offer, index) {
        offer.classList.remove('offer__option--showInLeft');
        offer.classList.remove('offer__option--showInRight');
        offer.classList.remove('offer__option--removalLeft');
        offer.classList.remove('offer__option--removalRight');
        offer.classList.remove('offer__option--active');
    })
    document.querySelectorAll('.offerWrap3')[0].classList.add('offer__option--active');
    cleanOffersLargeFlag = false;
}

// clear animations on resize //
let width = $(window).width(),
    height = $(window).height();

$(window).on('resize orientationchange', function () {

    if ((!widthMinMedia.matches) && ($(window).width() != width || $(window).height() != height)) {

        cleanOffersLargeFlag = true;
        if (cleanOffersSmallFlag) {
            console.log('dzialam1');
            cleanOfferOption();
            cleanOfferWrap3Option();
            document.querySelectorAll('.offer__option')[0].classList.add('offer__option--showInRight');
            leftSlide.classList.remove('offer__navigation--active');
            rightSlide.classList.add('offer__navigation--active');
        }


    } else if ((widthMinMedia.matches) && ($(window).width() != width || $(window).height() != height)) {
        cleanOffersSmallFlag = true;
        if (cleanOffersLargeFlag) {
            console.log('dzialam2');
            cleanOfferWrap3Option();
            cleanOfferOption();
            // document.querySelectorAll('.offerWrap3')[0].classList.add('offer__option--showInRight');
            leftSlide.classList.remove('offer__navigation--active');
            rightSlide.classList.add('offer__navigation--active');
        }
    }
})

$(window).on('orientationchange', function () {

    if ((!widthMinMedia.matches) && ($(window).width() != width || $(window).height() != height)) {

        cleanOfferOption();
        cleanOfferWrap3Option();
        document.querySelectorAll('.offer__option')[0].classList.add('offer__option--showInRight');
        leftSlide.classList.remove('offer__navigation--active');
        rightSlide.classList.add('offer__navigation--active');



    } else if ((widthMinMedia.matches) && ($(window).width() != width || $(window).height() != height)) {

        cleanOfferWrap3Option();
        cleanOfferOption();
        // document.querySelectorAll('.offerWrap3')[0].classList.add('offer__option--showInRight');
        leftSlide.classList.remove('offer__navigation--active');
        rightSlide.classList.add('offer__navigation--active');

    }
})

// end //

const slideIt = function (side) {

    if (widthMedia.matches) {
        offers = [...document.querySelectorAll('.offer__option')];
    } else {
        offers = [...document.querySelectorAll('.offerWrap3')];
    }

    rightSlide.style.pointerEvents = "none";
    leftSlide.style.pointerEvents = "none";
    setTimeout(function () {
        rightSlide.style.pointerEvents = "auto";
        leftSlide.style.pointerEvents = "auto";
    }, 700);

    offers.forEach(function (offer, index) {
        if (offer.classList.contains('offer__option--active')) {
            planIndex = index;
        }

    });

    if (this.classList.contains('offer__navigation--right')) {

        if (planIndex !== offers.length - 1) {
            offers[planIndex].classList.remove('offer__option--removalLeft');
            offers[planIndex].classList.remove('offer__option--active');
            offers[planIndex].classList.remove('offer__option--showInRight');
            offers[planIndex].classList.remove('offer__option--showInLeft');
            offers[planIndex].classList.add('offer__option--removalRight');
            offers[planIndex + 1].classList.add('offer__option--showInRight', 'offer__option--active');
            planIndex++;
        }
    } else if (this.classList.contains('offer__navigation--left')) {

        if (planIndex !== 0) {
            offers[planIndex].classList.remove('offer__option--removalRight');
            offers[planIndex].classList.remove('offer__option--active');
            offers[planIndex].classList.remove('offer__option--showInLeft');
            offers[planIndex].classList.remove('offer__option--showInRight');
            offers[planIndex].classList.add('offer__option--removalLeft');
            offers[planIndex - 1].classList.add('offer__option--showInLeft', 'offer__option--active');
            planIndex--;
        }
    }
    console.log(planIndex);

    if (widthMedia.matches) {
        if (planIndex == 0) {
            leftSlide.classList.remove('offer__navigation--active');
            rightSlide.classList.add('offer__navigation--active');
        } else if ((planIndex > 0) && (planIndex !== offers.length - 1)) {
            leftSlide.classList.add('offer__navigation--active');
            rightSlide.classList.add('offer__navigation--active');
        } else if ((planIndex > 0) && (planIndex == offers.length - 1)) {
            rightSlide.classList.remove('offer__navigation--active');
        }
    } else {
        if (planIndex == 0) {
            leftSlide.classList.remove('offer__navigation--active');
            rightSlide.classList.add('offer__navigation--active');
        } else if ((planIndex > 0) && (planIndex == offers.length - 1)) {
            rightSlide.classList.remove('offer__navigation--active');
            leftSlide.classList.add('offer__navigation--active');
        }
    }
}
const right = "right";
const left = "left";
rightSlide.addEventListener('click', slideIt);
leftSlide.addEventListener('click', slideIt);

// change nav visiblity when scroll //
const $hamburger = $('.navBurger__box');
const $nav = $('.nav');

var lastScrollTop = 0;
$(window).scroll(function (event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
        // if (hambActiveFlag === false) {
        //     $hamburger.addClass('opacityNone');
        // }
        $nav.addClass('opacityNone');
    } else {
        // if (hambActiveFlag === false) {
        //     $hamburger.removeClass('opacityNone');
        // }
        $nav.removeClass('opacityNone');
    }
    lastScrollTop = st;
});


//button redirections//

const btnMeetUs = $('.columnTexts_button--meetUs');
const btnPlans = $('.columnTexts_button--offer');

const btnReservation = $('.offer_button');
const btnFacebook = $('.fa-facebook');
const btnInsta = $('.fa-instagram');

btnMeetUs.on('click', function () {
    const goToSection = "[data-sectionin=nav__link--about]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 500)
})

btnPlans.on('click', function () {
    const goToSection = "[data-sectionin=nav__link--plan]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 500)
})

btnReservation.on('click', function () {
    window.open('https://www.moment.pl/kuznia-dzentelmenow-barber-shop', '_blank');
})

btnFacebook.on('click', function () {
    window.open('https://www.facebook.com/KUZNIADZENTELMENOW/', '_blank');
})

btnInsta.on('click', function () {
    window.open('https://www.instagram.com/kuznia_dzentelmenow/?igshid=1erm1rgcgohtt&fbclid=IwAR3SSynwriXx75SGl2Tt1WRjsjQ6IJuUhJKzWo0k6fcw-O7aTkd538FBDSE', '_blank');
})

//cookies//
function WHCheckCookies() {
    if (!localStorage.cookies_accepted) {
        var cookies_message = document.getElementById("cookies-message");
        cookies_message.style.display = "block"
    }
}
window.onload = WHCheckCookies;

function WHCloseCookiesWindow() {
    localStorage.cookies_accepted = true;
    document.getElementById("cookies-message-container").removeChild(document.getElementById("cookies-message"));
}