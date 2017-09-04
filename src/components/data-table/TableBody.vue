<template>
  <div class="body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'table-body'
};
</script>

<style lang="scss" scoped>
.body {
  display: flex;
  flex-flow: column wrap;
}
</style>
