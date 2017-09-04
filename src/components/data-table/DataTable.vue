<template>
  <div class="table">
    <slot name="header"></slot>
    <slot name="body"></slot>
  </div>
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
  border-spacing: 0;
  background: white;
  border: {
    top: dashed 1.5px $gray;
    right: dashed 1.5px $gray;
  }
}
</style>
