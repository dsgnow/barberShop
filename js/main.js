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

const $navLinks = $('.nav__link');


// appear elements when scroll //
$(document).on('scroll', function () {

    const windowHeight = $(window).height();
    const scrollValue = $(window).scrollTop();
    let orientation = window.screen.orientation;

    // change link border on scroll //
    if ((scrollValue < windowHeight)) {
        clearLinksBorder();
        linkStart.classList.add('nav__link--selected');
        if (orientation.type == 'landscape-primary') {
            $hambSpan.addClass('navBurger__span--white');
            $hambSpan.removeClass('navBurger__span--black');
            $navLinks.removeClass('nav__link--black');
        } else if (orientation.type == 'portrait-primary') {
            $hambSpan.addClass('navBurger__span--black');
            $hambSpan.removeClass('navBurger__span--white');
        }

    } else if ((scrollValue >= windowHeight) && (scrollValue < windowHeight * 2)) {
        clearLinksBorder();
        linkAbout.classList.add('nav__link--selected');
        if (orientation.type == 'landscape-primary') {
            $hambSpan.addClass('navBurger__span--white');
            $hambSpan.removeClass('navBurger__span--black');
            $navLinks.removeClass('nav__link--black');
        } else if (orientation.type == 'portrait-primary') {
            $hambSpan.addClass('navBurger__span--white');
            $hambSpan.removeClass('navBurger__span--black');
        }

    } else if ((scrollValue >= windowHeight) && (scrollValue < windowHeight * 3)) {
        clearLinksBorder();
        linkPlan.classList.add('nav__link--selected');
        if (orientation.type == 'landscape-primary') {
            $hambSpan.addClass('navBurger__span--black');
            $hambSpan.removeClass('navBurger__span--white');
            $navLinks.addClass('nav__link--black');
        } else if (orientation.type == 'portrait-primary') {
            $hambSpan.addClass('navBurger__span--black');
            $hambSpan.removeClass('navBurger__span--white');
        }

    } else if ((scrollValue >= windowHeight) && (scrollValue < windowHeight * 4)) {
        clearLinksBorder();
        linkContact.classList.add('nav__link--selected');
        if (orientation == 'landscape-primary') {
            $hambSpan.addClass('navBurger__span--white');
            $hambSpan.removeClass('navBurger__span--black');
        } else if (orientation.type == 'portrait-primary') {
            $hambSpan.addClass('navBurger__span--white');
            $hambSpan.removeClass('navBurger__span--black');
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

const slideIt = function (side) {

    rightSlide.style.pointerEvents = "none";
    leftSlide.style.pointerEvents = "none";
    setTimeout(function () {
        rightSlide.style.pointerEvents = "auto";
        leftSlide.style.pointerEvents = "auto";
    }, 2000);

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

    console.log(offers.length);
    if (planIndex == 0) {
        leftSlide.classList.remove('offer__navigation--active');
        rightSlide.classList.add('offer__navigation--active');
    } else if ((planIndex > 0) && (planIndex !== offers.length - 1)) {
        leftSlide.classList.add('offer__navigation--active');
        rightSlide.classList.add('offer__navigation--active');
    } else if ((planIndex > 0) && (planIndex == offers.length - 1)) {
        rightSlide.classList.remove('offer__navigation--active');
    }
}
const right = "right";
const left = "left";
rightSlide.addEventListener('click', slideIt);
leftSlide.addEventListener('click', slideIt);