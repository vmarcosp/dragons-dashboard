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
@import '~@scss/utils/_functions';
@import '~@scss/utils/_variables';

.footer {
    border-top: solid calculateRem(1px) $black-dark;
}
</style>
