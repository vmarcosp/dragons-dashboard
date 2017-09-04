<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'slot'
};
</script>

<style lang="scss" scoped>
@import '~@scss/utils/_variables';
.row {
  display: flex;
  justify-content: space-around;
  border-left: solid 4px $gray;
}
</style>
