<template>
    <div class="body">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'sidebar-body'
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/utils/_variables';
@import '../../assets/scss/utils/_functions';

.body {
    margin-top: 2.5rem;
    flex-grow: 1;
}
</style>
