<template lang="pug">
include ../../../pug/mixins/mixins.pug
.catalog__item
  .catalog__item__wrapper
      .catalog__item-img(:style="{backgroundImage: `url(${itemImage})`}")
      .catalog__item__content
          .catalog__item-text
              .catalog__item__content-title {{product.title}}
              .catalog__item__content-subtitle {{product.subtitle}}
          .catalog__item__price
              .catalog__item__price-text {{product.count * product.price | fix-namber}} ₽ 
              .catalog__item__price__count
                  .catalog__item__price__count__btn-min(@click="minCart()")  
                      +icon('min')
                  .catalog__item__price__count__btn-text {{product.count}}
                  .catalog__item__price__count__btn-plus(@click="addCart()")  
                      +icon('add')
                      
      .catalog__item__btn.button(@click="addItemToCartt()") В корзину
          
                        
                        

</template>

<script>
import noImage from "~/images/no-image.svg";
import { mapActions } from "vuex";
export default {
    props: {
        product: Object
    },

    methods: {
        ...mapActions("cart", ["addItemToCart"]),
        addItemToCartt() {
            const dataItem = {
                id: this.product.id,
                count: this.product.count
            };
            this.addItemToCart(dataItem);
        },
        addCart() {
            if (this.product.count < 100) {
                this.product.count++;
                this.product.total = this.product.count * this.product.price;
            } else {
                return;
            }
        },
        minCart() {
            if (this.product.count <= 1) {
                return;
            } else {
                this.product.count--;
                this.product.total -= this.product.price;
            }
        }
    },
    computed: {
        itemImage() {
            return this.product.picture ? this.product.picture : noImage;
        }
    }
};
</script>
