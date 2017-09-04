<template>
  <div class="container">
    <h1>{{value}}</h1>
  </div>
</template>

<script>
export default {
  name: 'page-title',
  props: {
    value: {
      required: true,
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@scss/utils/_variables';
@import '~@scss/utils/_mixins';

.container {
  >h1 {
    font-weight: 300;
    @include fontSize($title-size);
    color: $black;
  }
}
</style>
