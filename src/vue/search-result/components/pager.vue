<template lang="pug">

.pager
  .pager__pages
      svg
          use(href='icons/icons.svg#arrow-prev')
      span.pager__page(href="#").pager__page_active 1
      a.pager__page(href="#") 2
      a.pager__page(href="#") 3
      a.pager__page(href="#") 4
      a.pager__page(href="#") 5
      svg
          use(href='icons/icons.svg#arrow-next')             
                        

</template>

<script>
export default {
  // props: {
  //   filters: Array
  // },

  methods: {},
  computed: {}
};
</script>
