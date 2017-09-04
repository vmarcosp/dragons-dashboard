<template>
  <table class="table">
    <slot></slot>
  </table>
</template>

<script>
export default {
  name: 'data-table'
};
</script>
<style lang="scss" scoped>
@import '~@scss/utils/_variables';

.table {
  width: 100%;
  background: white;
  border: {
    top: dashed 1.5px $gray;
    bottom: dashed 1.5px $gray;
  }
}
</style>
