const widerScreenWidth = window.matchMedia("(min-width: 1300px)");
const startPageDescriptionTexts = document.querySelectorAll('.columnTexts__descriptionText')

if (widerScreenWidth.matches) {

    startPageDescriptionTexts.forEach(function (element, index) {
        element.classList.toggle("columnTexts__descriptionText--visible");
    });

}