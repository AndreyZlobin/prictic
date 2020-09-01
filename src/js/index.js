import "../scss/main.scss";

import select from "./components/select"

// import initGlobalScripts from "./global";

// import ProductSlider from '../vue/poduct-slider';
// new ProductSlider('#product-slider');

const initPage = () => {
    select();
};

document.addEventListener('DOMContentLoaded', () => initPage);

