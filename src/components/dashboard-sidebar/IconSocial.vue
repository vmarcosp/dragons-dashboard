<template>
    <a :href="route" class="icon-social" target="_blank">
        <icon :value="classIcon"></icon>
    </a>
</template>

<script>
import Icon from '../icon/Icon';

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
@import '../../assets/scss/utils/_variables';
@import '../../assets/scss/utils/_mixins';
.icon-social {
    @include fontSize(35px);
    color: $black-dark;
}
</style>
