/*Para fazer o menu ganhar a cor*/
window.addEventListener("scroll", function(e) {
    var header  =   document.querySelector(".menu_desktop");
    header.classList.toggle("sticky",window.scrollY > 0);
})

var menu_mobile = document.querySelector("header .menu_mobile .mobile");
var open_menu  =   document.querySelector("#open_menu");
var exit_menu   = document.querySelector("#exit_menu");
console.log(open_menu);
open_menu.addEventListener('click',function(){
    menu_mobile.style.top = '0px';
    menu_mobile.style.transition =  '1s';

});
exit_menu.addEventListener('click',function(){
    menu_mobile.style.top = '-500px';
    menu_mobile.style.transition =  '1s';
});
var saldo = document.getElementById('saldo');
var input  = document.getElementById('number');
function addSaldo(){
    saldo.innerHTML =   number.value;
}