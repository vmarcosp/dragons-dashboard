<template>
  <div class="container">
    <label>{{label}}</label>
    <input placeholder="Nome" :type="type">
  </div>
</template>

<script>
export default {
  props: {
    type: {
      required: true,
      type: String
    },
    label: {
      type: String,
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@scss/utils/_mixins';
@import '~@scss/utils/_variables';
@import '~@scss/utils/_functions';

.container {
  display: flex;
  flex-flow: column wrap;
  >label {
    color: $black;
    font-weight: 600;
    text-transform: uppercase;
    padding: calculateRem(7px) 0;
    @include fontSize($label-size);
  }
  >input {
    border-radius: 2px;
    padding: calculateRem(10px) calculateRem(10px);
    box-shadow: inset -1px 0 0 0 $gray, inset 0 -1px 0 0 $gray, inset 1px 0 0 0 $gray, inset 0 2px 0 0 $blue-semi-light;
    outline: none;
    border: none;
    &:focus {
      box-shadow: inset -1px 0 0 0 $gray, inset 0 -1px 0 0 $gray, inset 1px 0 0 0 $gray, inset 0 2px 0 0 $blue-semi-dark;
    }
  }
}
</style>
