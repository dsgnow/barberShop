// appear elements when scroll //
$(document).on('scroll', function () {

    const windowHeight = $(window).height();
    const scrollValue = $(window).scrollTop();

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

const $hambPop = $('.navBurger');
const $hambButton = $('.navBurger__btn');
const $hambSpan = $('.navBurger__span');

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