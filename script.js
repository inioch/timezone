let hour = document.getElementById("hour");
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let h = document.getElementById('h')

let strefa = 0;


var t = setInterval(function () {
    let sekundy;
    let godziny;
    let minuty;

    godziny = new Date().getHours() + parseInt(strefa);
    minuty = new Date().getMinutes();
    sekundy = new Date().getSeconds();


    if (sekundy < 10) {
        sec.innerText = "0" + sekundy;
    } else {
        sec.innerText = sekundy;
    }

    if (minuty < 10) {
        min.innerText = "0" + minuty;
    } else {
        min.innerText = minuty;
    }

    if (godziny < 10) {
        hour.innerText = "0" + godziny;
    } else {
        hour.innerText = godziny;
    }

$("#was").on("click", function(){
    
    strefa = -6;
    console.log(strefa);
});
$("#kra").on("click", function(){
    
    strefa = 0;
    console.log(strefa);
});
$("#pek").on("click", function(){
    
    strefa = +7;
    console.log(strefa);
});

})