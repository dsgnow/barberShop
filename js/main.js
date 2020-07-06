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

// hamburger //
const $hambPop = $('.navBurger');
const $hambButton = $('.navBurger__btn');
const $hambSpan = $('.navBurger__span');


// appear elements when scroll //
$(document).on('scroll', function () {

    const windowHeight = $(window).height();
    const scrollValue = $(window).scrollTop();

    // change link border on scroll //
    if ((scrollValue < windowHeight)) {
        clearLinksBorder();
        linkStart.classList.add('nav__link--selected');

    } else if ((scrollValue >= windowHeight) && (scrollValue < windowHeight * 2)) {
        clearLinksBorder();
        linkAbout.classList.add('nav__link--selected');

    } else if ((scrollValue >= windowHeight) && (scrollValue < windowHeight * 3)) {
        clearLinksBorder();
        linkPlan.classList.add('nav__link--selected');

    } else if ((scrollValue >= windowHeight) && (scrollValue < windowHeight * 4)) {
        clearLinksBorder();
        linkContact.classList.add('nav__link--selected');
    }

    // let orientation = window.screen.orientation;
    /* change burger icon color on scroll */
    if ((scrollValue > aboutHeight + aboutFromTop - windowHeight - 50)) {
        $hambSpan.addClass('navBurger__span--white');
    } else {
        $hambSpan.removeClass('navBurger__span--white');
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

$('.navBurger__btn').on('click', function (e) {
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

const offers = [...document.querySelectorAll('.offer__option')];

const slideIt = function () {
    let planIndex = '';
    offers.forEach(function (offer, index) {
        if (offer.classList.contains('offer__option--active')) {
            planIndex = index;
        }

    });

    if (planIndex !== offers.length - 1) {
        offers[planIndex].classList.remove('offer__option--active');
        offers[planIndex + 1].classList.add('offer__option--active');
        planIndex++;
    }

    if (planIndex == 0) {
        leftSlide.classList.remove('offer__navigation--active');
    } else if ((planIndex > 0) && (planIndex !== offers.length)) {
        leftSlide.classList.add('offer__navigation--active');
    } else if ((planIndex > 0) && (planIndex == offers.length)) {
        rightSlide.classList.remove('offer__navigation--active');
    }


}

rightSlide.addEventListener('click', slideIt);