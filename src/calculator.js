function calculator(){
    let people = document.querySelectorAll(".counter-block-input")[0];
    let days = document.querySelectorAll(".counter-block-input")[1];
    let places = document.getElementById("select");
    let totalValue = document.getElementById("total");
    let peopleSum = 0;
    let daysSum = 0;
    let totalSum = 0;

    totalValue.innerHTML = 0;

    people.addEventListener("change", function () {
        peopleSum = +this.value;
        totalSum = (daysSum + peopleSum) * 4000;

        if (days.value == "" || people.value == "") {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = totalSum;
        }
    });

    days.addEventListener("change", function () {
        daysSum = +this.value;
        totalSum = (daysSum + peopleSum) * 4000;

        if (people.value == "" || days.value == "") {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = totalSum;
        }
    });

    places.addEventListener("change", function () {
        if (days.value == "" || people.value == "") {
            totalValue.innerHTML = 0;
        } else {
            let t = totalSum;
            totalValue.innerHTML = t * this.options[this.selectedIndex].value;
        }
    });
}
module.exports = calculator;