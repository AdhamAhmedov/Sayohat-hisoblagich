// tezlik mashqi


//DOM elementlar
var elform = document.querySelector(".form");
var elinput = elform.querySelector(".input");
var btn = elform.querySelector(".button");
var piyodaNatija = document.querySelector(".piyoda");
var velosipedNatija = document.querySelector(".velosiped");
var mashinaNatija = document.querySelector('.mashina');
var samalyotNatija = document.querySelector(".samalyot")

//Tezlik
var piyoda = 3.6;
var velosiped = 20.1;
var mashina = 70;
var samalyot = 800;

function xisob(km, speed) {
    return (km / speed)
};


elform.addEventListener("submit", function (evt) {
    evt.preventDefault();

    var input = Number(elinput.value.trim(), 10);

    piyodaNatija.textContent = xisob(input, piyoda).toFixed() + " soat " + ((xisob(input, piyoda).
        toFixed(3) - xisob(input, piyoda).toFixed(0)) * 60).toFixed() + " minut";

    velosipedNatija.textContent = xisob(input, velosiped).toFixed() + " soat " + ((xisob(input, velosiped).
        toFixed(3) - xisob(input, velosiped).toFixed(0)) * 60).toFixed() + " minut.";

    mashinaNatija.textContent = xisob(input, mashina).toFixed() + " soat " + ((xisob(input, mashina).
        toFixed(3) - xisob(input, mashina).toFixed(0)) * 60).toFixed() + " minut.";

    samalyotNatija.textContent = xisob(input, samalyot).toFixed() + " soat " + ((xisob(input, samalyot).
        toFixed(3) - xisob(input, samalyot).toFixed(0)) * 60).toFixed() + " minut.";


    elinput.value = null;

});