import "swiper/css/swiper.min.css";
import Swiper from 'swiper';
import sliderConfig from '../config/sliders';

export function initMainSlider() {
    const section = document.querySelector('.main-slider');
    if (section == null) return;
    const swiperContainer = section.querySelector('.swiper-container');
    const swiper = new Swiper(swiperContainer, sliderConfig.main);

}

export function initProductSlider() {
    const section = document.querySelector('.product-slider');
    if ( section == null ) return;
    const swiperContainer = section.querySelector('.swiper-container');
    const swiper = new Swiper(swiperContainer, sliderConfig.product);

}
export function initProductSliderTwo() {
    const section = document.querySelector('.product-slider.two');
    if (section == null) return;
    const swiperContainer = section.querySelector('.swiper-container');
    const swiper = new Swiper(swiperContainer, sliderConfig.productTwo);

}
export function initProductSliderThree() {
    const section = document.querySelector('.product-slider.three');
    if (section == null) return;
    const swiperContainer = section.querySelector('.swiper-container');
    const swiper = new Swiper(swiperContainer, sliderConfig.productThree);

};
export function initCatalogSilder() {

    const section = document.querySelector('.catalog-slider');
    console.log(section)
    if (section == null) return;
    const swiperContainer = section.querySelector('.swiper-container');
    const swiper = new Swiper(swiperContainer, sliderConfig.catalogSilder);

}
export function initWithProductSlider() {

    const section = document.querySelector('.product-slider-with');
    console.log(section)
    if (section == null) return;
    const swiperContainer = section.querySelector('.swiper-container');
    const swiper = new Swiper(swiperContainer, sliderConfig.withProductSlider);
};
export function initProductSliderCart() {
    const section = document.querySelector('.product-slider-cart');
    if (section == null) return;
    const swiperContainer = section.querySelector('.swiper-container');
    const swiper = new Swiper(swiperContainer, sliderConfig.productCart);
};

export default function () {
    initMainSlider();
    initProductSlider();
    initProductSliderTwo();
    initProductSliderThree();
    initCatalogSilder();
    initWithProductSlider();
    initProductSliderCart();
}
