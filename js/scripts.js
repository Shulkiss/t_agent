//боковое меню
$(document).ready(function ()
{
    let isOpen = false;

    $('.openButton').click(function (){
        if ($(window).width() <= 800)
        {
            isOpen = !isOpen;
            if(isOpen) {
                $('.openButton').addClass('MenuOpen');
                $('.nav_menu').css("display", "block");
            }else {
                $('.openButton').removeClass('MenuOpen');
                $('.nav_menu').css("display", "none");
            }
        }
    });

    $(window).resize(function ()
    {
        if ($(window).width() > 800)
        {
            $('.nav_menu').css("display", "block")
        }
    })
});





//открытие модального окна для входа
var modal_window = $('.modal_window');

function modal_open(id){
    $(id).fadeIn(); 
    modal_window.hide();
    $(modal_window[id]).fadeIn();
}
function modal_close(id){
    $(id).fadeOut();
}





//смена фона кнопки при нажатии
let elems = document.getElementsByClassName("btnTypeTour");
for (let i = 0; i < elems.length; i++) {
    elems[i].onclick = function () {
        let color = window.getComputedStyle(this, null)
            .getPropertyValue("background-color");
        this.style.backgroundColor = color === "rgba(26, 26, 26, 0.6)"
            ? "rgba(26, 26, 26, 0.85)" : "rgb(26, 26, 26, 0.6)";
    };
}


// кнопки filterTypeTour
let isSelectedActiveTour = false
let btn1 = document.getElementById("btnTypeTourActive");

console.log(btn1)
btn1.addEventListener("click", function() {
    isSelectedActiveTour = !isSelectedActiveTour
    let input = document.getElementById("district_alt");
    input.checked = isSelectedActiveTour
    input = document.getElementById("district_kav");
    input.checked = isSelectedActiveTour
    input = document.getElementById("district_elbr");
    input.checked = isSelectedActiveTour
    input = document.getElementById("district_sbr");
    input.checked = isSelectedActiveTour
});


let isSelectedSeaTour = false
let btn2 = document.getElementById("btnTypeTourSea");
btn2.addEventListener("click", function() {
    isSelectedSeaTour = !isSelectedSeaTour
    let input = document.getElementById("district_kr");
    input.checked = isSelectedSeaTour
    input = document.getElementById("district_kl");
    input.checked = isSelectedSeaTour
});




