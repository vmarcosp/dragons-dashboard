<template>
    <li>
        <span class="icon">
            <icon :value="icon"></icon>
        </span>
        <span class="label">{{label}}
    
        </span>
    </li>
</template>

<script>
import Icon from '../icon/Icon';
export default {
    name: 'sidebar-item',
    components: {
        Icon
    },
    props: {
        label: {
            required: true,
            type: String
        },
        icon: {
            required: true,
            type: String
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/utils/_variables';
@import '../../assets/scss/utils/_mixins';

li {
    display: flex;
    align-items: center;
    padding: 1.4rem;
    >.label {
        @include fontSize(16px);
        color: $gray;
    }
    >.icon {
        @include fontSize(18px);
        color: $gray;
        margin-right:1rem;
    }
}
</style>
