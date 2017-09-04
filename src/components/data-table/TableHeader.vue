<template>
  <div class="header">
    <span v-for="itemHeader in items" :key="itemHeader">{{itemHeader}}</span>
  </div>
</template>

<script>
export default {
  name: 'table-header',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@scss/utils/_variables';
@import '~@scss/utils/_functions';

.header {
  >span {
    display: block;
    padding: calculateRem(10px) calculateRem(20px);
    text-align: left;
    flex-basis: 0;
    flex-grow: 1;
    font-weight: 600;
    color: $gray-semi-dark;
    text-transform: uppercase;
  }
  border-bottom: dashed 1.5px $gray;
  display: flex;
  justify-content: space-between;
  border-left: solid 4px $gray;
}
</style>
