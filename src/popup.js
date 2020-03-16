function popup(){
    let moreBTN = document.querySelector(".more");
    let descrBTN = document.querySelectorAll(".description-btn");
    let overlay = document.querySelector(".overlay");
    let popup_close = document.querySelector(".popup-close");

    moreBTN.addEventListener("click", function () {
        overlay.style.display = "block";
        document.body.style.overflow = "hidden";
    });

    descrBTN.forEach(item => item.addEventListener("click", function () {
        overlay.style.display = "block";
        document.body.style.overflow = "hidden";
    }));

    popup_close.addEventListener("click", function () {
        overlay.style.display = "none";
        document.body.style.overflow = "";
    });
}
module.exports = popup;
