// appear elements when scroll //
$(document).on('scroll', function () {

    const windowHeight = $(window).height();
    const scrollValue = $(window).scrollTop();

    // about section //

    const $aboutBlockTexts = $('.columnTextsAbout__blockTypography');
    const aboutBlockTextsFromTop = $aboutBlockTexts.offset().top;
    const aboutBlockTextsHeight = $aboutBlockTexts.outerHeight();

    const $aboutTitle = $('.columnTextsAbout_title');
    const $aboutText = $('.columnTextsAbout__descriptionText')
    const $aboutLogoElement = $('.columnTextsAbout__imgLogo')
    const $aboutImageDawid = $('.columnImagesAbout__imgDawid')

    const fadeIntexts = document.querySelectorAll('.columnImagesAbout__text');


    if (scrollValue > aboutBlockTextsHeight + aboutBlockTextsFromTop - windowHeight - 200) {
        $aboutTitle.addClass("columnTextsAbout_title--active");
        $aboutText.addClass("columnTextsAbout__descriptionText--active");
        $aboutLogoElement.addClass("columnTextsAbout__imgLogo--active");
        $aboutImageDawid.addClass("columnImagesAbout__imgDawid--active");

        fadeIntexts.forEach(function (fadeInText, index) {
            fadeInText.classList.add("columnImagesAbout__text--fadeIn");
        });
    }

    //clean
    if (scrollValue < 100) {

    }

})


// animation to section when click menu //
$('nav a').on('click', function () {
    const goToSection = "[data-sectionin=" + $(this).data('section') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 500)
})

$('.hambPopup a').on('click', function () {
    hambPop.classList.remove('show');
    hambButtonI.classList.toggle('fa-times');
    const goToSection = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
        scrollTop: $(goToSection).offset().top
    }, 500)
})