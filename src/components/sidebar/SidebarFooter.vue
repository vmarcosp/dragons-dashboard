<template>
    <div class="footer">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'sidebar-footer'
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/utils/_variables';
@import '../../assets/scss/utils/_functions';

.footer {
    border-top: solid calculateRem(1px) $black-dark;
}
</style>
