<template>
    <a :href="route" class="icon-social" target="_blank">
        <icon :value="classIcon"></icon>
    </a>
</template>

<script>
import Icon from '@/components/icon/Icon';

export default {
    name: 'icon-social',
    components: {
        Icon
    },
    props: {
        route: {
            type: String,
            required: true
        },
        classIcon: {
            type: String,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
@import '~@scss/utils/_mixins';
@import '~@scss/utils/_variables';

.icon-social {
    @include fontSize(35px);
    color: $black-dark;
    &:hover{
        color:$blue;
        @include transition(200ms ease-in-out);
    }
}
</style>
