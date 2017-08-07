<template>
    <aside>
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
    </aside>
</template>

<script>
export default {
    name: 'sidebar'
};
</script>

<style lang="scss" scoped>
@import '~@scss/utils/_variables';

aside {
    display: flex;
    flex-flow: column wrap;
    min-height: 100%;
    background: $black;
    max-width: calculateRem(300px);
}
</style>