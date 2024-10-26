$('body').css({ 'opacity': 1 });

let ch2 = false, hght;

function scrollChecker() {
    if (pageYOffset > 0) {
        $('header').addClass("smallHeader");
        $('.banner, .banner_fone').css({ "border-radius": "0 0 40px 20px" });
    } else {
        $('header').removeClass("smallHeader");
        $('.banner, .banner_fone').css({ "border-radius": "0" });
    }

    hght = document.documentElement.clientHeight;
    for (i = 1; i <= 4; i++) {
        sObj = document.getElementById(`s${i}`);

        eltop_elhght = sObj.offsetTop + sObj.clientHeight - 10 // element scrolltop + element height
        if (i == 2) eltop_elhght = sObj.offsetTop + sObj.clientHeight - 100

        if (window.pageYOffset >= sObj.offsetTop - 100 && window.pageYOffset < eltop_elhght) {
            $(`#s${i}B`).removeClass('hSelectedOut');
            $(`#s${i}B`).addClass('hSelectedIn');
        } else {
            $(`#s${i}B`).removeClass('hSelectedIn');
            $(`#s${i}B`).addClass('hSelectedOut');
        }

        translateSet = {'x': 0, 'y': 300};
        if (i == 4) translateSet = {'x': -300, 'y': 0};
        
        if (window.pageYOffset + hght >= sObj.offsetTop + (hght * 0.1)) $(`#s${i}`).children("h2.moveMaker").css({ "transform": "translate(0, 0)", "opacity": "1" });
        else $(`#s${i}`).children("h2").css({ "transform": `translate(${translateSet.x}px, ${translateSet.y}px)`, "opacity": "0" });
        if (window.pageYOffset + hght >= sObj.offsetTop + (hght * 0.2)) $(`#s${i}`).children("div.moveMaker").css({ "transform": "translate(0, 0)", "opacity": "1" });
        else $(`#s${i}`).children("div.moveMaker").css({ "transform": `translate(${translateSet.x}px, ${translateSet.y}px)`, "opacity": "0" });
    }
}
window.addEventListener('scroll', () => { scrollChecker() });
scrollChecker();

function scroller(elem, par = false) { 
    window.scrollTo(0, elem.offsetTop - 100); 
    if (par) darker.click();
}
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
function star(num, root = false, act = false) {
    if (!ch2 || root) switch (act) {
        case 'add': document.querySelector(".stars").childNodes[num * 2 - 1].classList.add('sSelected'); break;
        case 'rem': document.querySelector(".stars").childNodes[num * 2 - 1].classList.remove('sSelected'); break;
        case false: document.querySelector(".stars").childNodes[num * 2 - 1].classList.toggle('sSelected'); break;
    }
    if (num > 1) star(num - 1, root, act);
}

document.querySelector('.stars').addEventListener('mouseover', function (e) {
    if (e.target.id) {
        star(5, false, 'rem');
        star(+String(e.target.id).split('')[4]);
    } else this.onmouseleave = () => { star(5, false, 'rem'); };
});

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

window.addEventListener('mousemove', function(event) {
    document.querySelectorAll('.fone_icon').forEach((element) => {
        translateX = (event.clientX - window.innerWidth / 2) * 0.03;
        translateY = (event.clientY - window.innerHeight / 2) * 0.03;
        element.style.transform = `translate(${ translateX }px, ${ translateY }px)`;
    });
});