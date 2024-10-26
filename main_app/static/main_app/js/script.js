$('body').css({ 'opacity': 1 });
let ch1 = false, ch2 = false, hght;
window.addEventListener('scroll', function () {
    if (pageYOffset > 0) {
        $('header').addClass("smallHeader");
        $('.banner, .banner_fone').css({ "border-radius": "0 0 40px 20px" });
        if (!ch1) {
            $('.topButton').css({ "display": "flex" });
            setTimeout(() => { $('.topButton').css({ "opacity": "1" }) }, 200);
        } else { $('.topButton').css({ "display": "flex" }) }
        ch1 = true;
    } else {
        $('header').removeClass("smallHeader");
        $('.banner, .banner_fone').css({ "border-radius": "0" });
        if (ch1) {
            $('.topButton').css({ "opacity": "0" });
            setTimeout(() => { $('.topButton').hide() }, 200);
        } else { $('.topButton').hide() }
        ch1 = false;
    }
    hght = document.documentElement.clientHeight;
    if (pageYOffset >= s1.offsetTop - 100 && pageYOffset < s1.offsetTop + s1.clientHeight - 10) { $("#s1B").removeClass('hSelectedOut'); $("#s1B").addClass('hSelectedIn'); }
    else { $("#s1B").removeClass('hSelectedIn'); $("#s1B").addClass('hSelectedOut'); }
    if (pageYOffset >= s2_fone.offsetTop - 100 && pageYOffset < s2_fone.offsetTop + s2_fone.clientHeight - 100) { $("#s2B").removeClass('hSelectedOut'); $("#s2B").addClass('hSelectedIn'); }
    else { $("#s2B").removeClass('hSelectedOut'); $("#s2B").addClass('hSelectedOut'); }
    if (pageYOffset >= s3.offsetTop - 100 && pageYOffset < s3.offsetTop + s3.clientHeight - 100) { $("#s3B").removeClass('hSelectedOut'); $("#s3B").addClass('hSelectedIn'); }
    else { $("#s3B").removeClass('hSelectedOut'); $("#s3B").addClass('hSelectedOut'); }
    if (pageYOffset >= s4.offsetTop - 100 && pageYOffset < s4.offsetTop + s4.clientHeight - 100) { $("#s4B").removeClass('hSelectedOut'); $("#s4B").addClass('hSelectedIn'); }
    else { $("#s4B").removeClass('hSelectedOut'); $("#s4B").addClass('hSelectedOut'); }
    if (pageYOffset + hght >= s1.offsetTop + (hght * 0.2)) { $("#s1").children("h2").css({ "transform": "translate(0, 0)", "opacity": "1" }) }
    if (pageYOffset + hght >= s1.offsetTop + (hght * 0.4)) { $("#s1").children("span").css({ "transform": "translate(0, 0)", "opacity": "1" }) }
    if (pageYOffset + hght >= s2.offsetTop + (hght * 0.2)) { $("#s2").children("h2").css({ "transform": "translate(0, 0)", "opacity": "1" }) }
    if (pageYOffset + hght >= s2.offsetTop + (hght * 0.4)) { $("#s2").children("div").css({ "transform": "translate(0, 0)", "opacity": "1" }) }
    if (pageYOffset + hght >= s3.offsetTop + (hght * 0.2)) { $("#s3").children("h2").css({ "transform": "translate(0, 0)", "opacity": "1" }) }
    if (pageYOffset + hght >= s3.offsetTop + (hght * 0.4)) { $("#s3").children("div").css({ "transform": "translate(0, 0)", "opacity": "1" }) }
    if (pageYOffset + hght >= s4.offsetTop + (hght * 0.2)) { $("#s4").children("h2").css({ "transform": "translate(0, 0)", "opacity": "1" }) }
    if (pageYOffset + hght >= s4.offsetTop + (hght * 0.4)) { $("#s4").children("div").css({ "transform": "translate(0, 0)", "opacity": "1" }) }
});
function scroller(elem) { window.scrollTo(0, elem.offsetTop - 100); }
jQuery(document).ready(function ($) {
    $('.banner_fone').slick({
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        fade: true,
        autoplaySpeed: 5000,
        speed: 1000,
    });
});
function star(num, root) {
    if (ch2 == false || root) document.querySelector(".stars").childNodes[num * 2 - 1].classList.toggle('sSelected');
    if (num > 1) star(num - 1, true);
}
document.querySelector(".stars").childNodes[1].onmouseenter = () => {
    star(1);
    document.querySelector(".stars").childNodes[1].onmouseleave = () => { star(1); }
}
document.querySelector(".stars").childNodes[3].onmouseenter = () => {
    star(2);
    document.querySelector(".stars").childNodes[3].onmouseleave = () => { star(2); }
}
document.querySelector(".stars").childNodes[5].onmouseenter = () => {
    star(3);
    document.querySelector(".stars").childNodes[5].onmouseleave = () => { star(3); }
}
document.querySelector(".stars").childNodes[7].onmouseenter = () => {
    star(4);
    document.querySelector(".stars").childNodes[7].onmouseleave = () => { star(4); }
}
document.querySelector(".stars").childNodes[9].onmouseenter = () => {
    star(5);
    document.querySelector(".stars").childNodes[9].onmouseleave = () => { star(5); }
}
let cont1 = true, cont2 = true;
function menu_open() {
    if (cont1) {
        header_b.style.right = "0px";
        burger_svg.style.right = "300px";
        burger_svg.classList.add("close");
        darker.style.display = "block";
        setTimeout(() => { darker.style.opacity = "1" }, 0.001);
        cont1 = false;
    } else {
        header_b.style.right = "-300px";
        burger_svg.style.right = "0px";
        burger_svg.classList.remove("close");
        darker.style.opacity = "0";
        setTimeout(() => { darker.style.display = "none" }, 300);
        cont1 = true;
        cont2 = false;
    }
}
darker.onclick = () => { 
    cont1 = false; 
    menu_open();
}

function star_thanks_show() {
    document.querySelector('.stars').innerHTML += '<div class="star_thanks">Спасибо!</div>';
    document.querySelector('.star_thanks').style.display = 'flex';
    setTimeout(() => { document.querySelector('.star_thanks').style.opacity = 1 }, 0.001);
}