
    function slider() {
        let slider_item = document.querySelectorAll(".slider-item ");
        let sliderIndex = 1;
        let prev = document.querySelector(".prev");
        let next = document.querySelector(".next");
        let dotsWrapper = document.querySelector(".slider-dots");
        let dot = document.querySelectorAll(".dot");

        function showSlides(n) {
            if (n > slider_item.length) {
                sliderIndex = 1;
            }
            if (n < 1) {
                sliderIndex = slider_item.length;
            }

            for (let i = 0; i < slider_item.length; i++) {
                slider_item[i].style.display = "none";
                slider_item[sliderIndex - 1].style.display = "block";
            }
            for (let i = 0; i < dot.length; i++) {
                dot[i].classList.remove("dot-active");
                dot[sliderIndex - 1].classList.add("dot-active");
            }

        }
        showSlides(sliderIndex);

        function plusSlider(n) {
            showSlides(sliderIndex += n);
        }

        function currentSlider(n) {
            showSlides(sliderIndex = n);
        }

        prev.addEventListener("click", function () {
            plusSlider(-1);
        });

        next.addEventListener("click", function () {
            plusSlider(1);
        });

        dotsWrapper.addEventListener("click", function (event) {
            for (let i = 0; i < dot.length + 1; i++) {
                if (event.target.classList.contains("dot") && event.target == dot[i - 1]) {
                    currentSlider(i);
                }
            }
        });
    }

module.exports = slider;