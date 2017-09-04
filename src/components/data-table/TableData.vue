<template>
  <div class="data">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'table-data'
};
</script>

<style lang="scss" scoped>
@import '~@scss/utils/_variables';
@import '~@scss/utils/_functions';

.data {
  display: flex;
  align-items: center;
  flex-basis: 0;
  flex-grow: 1;
  padding: calculateRem(10px) calculateRem(20px);
  border-bottom: dashed 1.5px $gray;
}
</style>
