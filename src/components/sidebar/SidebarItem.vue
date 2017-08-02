<template>
    <li>
        <span class="icon">
        </span>
        <span class="label">{{label}}</span>
    </li>
</template>

<script>
export default {
    name: 'sidebar-item',
    props: {
        label: {
            required: true,
            type: String
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/utils/_variables';
li {
    display: flex;
    align-items: center;
    padding: 1.4rem;
    >.label {
        font-size: 16px;
        color: $gray;
    }
    >.icon {
        color: $gray;
    }
}
</style>
