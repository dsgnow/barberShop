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


    if (scrollValue > aboutBlockTextsHeight + aboutBlockTextsFromTop - windowHeight - 200) {
        $aboutTitle.addClass("columnTextsAbout_title--active");
        $aboutText.addClass("columnTextsAbout__descriptionText--active");
        $aboutLogoElement.addClass("columnTextsAbout__imgLogo--active");
    }

    //clean
    if (scrollValue < 100) {

    }

})