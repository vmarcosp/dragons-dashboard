<template>
    <router-link tag="li" :to="routeTo" exact>
        <span class="icon">
            <icon :value="icon"></icon>
        </span>
        <span class="label">{{label}}</span>
    </router-link>
</template>

<script>
import Icon from '@/components/icon/Icon';
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
        },
        route: {
            required: true,
            type: String
        }
    },
    computed: {
        routeTo() {
            return { path: this.route };
        }
    }
};
</script>

<style lang="scss" scoped>
@import '~@scss/utils/_variables';
@import '~@scss/utils/_mixins';


li {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 1.4rem;
    @include transition(all 200ms);
    >.label {
        @include fontSize(16px);
        color: $gray;
    }
    >.icon {
        @include fontSize(18px);
        color: $gray;
        margin-right: 1rem;
    }
    &.router-link-exact-active {
        background: $black-dark;
        border-right: solid calculateRem(4px) $primary;
        >.icon {
            color: $primary;
        }
    }
}
</style>
