import './styles/styles.scss'
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import './js/img'
import * as $ from 'jquery'
import 'slick-carousel'


//slider_vertical
$(document).ready(function() {
    // slick carousel
    $('.vertical-slider__body').slick({
        dots: false,
        vertical: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        //arrows: true,
        //nextArrow: '<button type="button" class="slick-next"></button>',
        //prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [{
            breakpoint: 768,
            settings: {},
        }],
        verticalSwiping: true,
        asNavFor: '.gorizontal-slider__body',
    });
    $('.gorizontal-slider__body').slick({
        dots: false,
        arrows: false,               
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 768,
            settings: {},
        }],
        //fade: true,
        //verticalSwiping: true,
    });
});

//func animates burger menu lines/cross
document.querySelector('.icon-menu').addEventListener("click", ()=> {
    document.querySelector('.icon-menu').classList.toggle('active');
    document.querySelector('.menu__body').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
    document.querySelector('.slider').classList.toggle('hidden');
    document.querySelector('.search').classList.toggle('hidden');
});
