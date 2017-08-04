<template>
    <span :class="classIcon">
    </span>
</template>

<script>
export default {
    name: 'icon',
    props: {
        value: {
            type: String,
            required: true
        }
    },
    computed: {
        classIcon() {
            return `fa fa-${this.value}`;
        }
    }
};
</script>

<style lang="scss">

</style>
