<template>
    <div class="header">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'sidebar-header'
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/utils/_variables';
@import '../../assets/scss/utils/_functions';

.header {
    display: flex;
    justify-content: center;
    padding: 1rem;
    border-bottom: solid calculateRem(1px) $black-dark;
}
</style>
