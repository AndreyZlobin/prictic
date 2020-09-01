import { porductItem } from '../components/product-item.js';
import { initFooterMap }  from '../components/footer-map';
import Header from '../../vue/header';
new Header('#Header');

export default () => {
    porductItem();
    initFooterMap();
};