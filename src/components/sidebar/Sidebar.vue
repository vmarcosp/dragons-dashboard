<template>
    <aside>
        <sidebar-header>
            <logo></logo>
        </sidebar-header>
        <sidebar-body></sidebar-body>
    </aside>
</template>

<script>
import SidebarHeader from './SidebarHeader';
import SidebarBody from './SidebarBody';
import Logo from './Logo';

export default {
    name: 'sidebar',
    components: {
        SidebarHeader,
        Logo,
        SidebarBody
    }
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/utils/_variables';

aside {
    min-height: 100%;
    background: $black;
    max-width: 350px;
}
</style>