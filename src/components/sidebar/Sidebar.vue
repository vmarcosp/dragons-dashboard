<template>
    <aside>
        <sidebar-header>
            <logo></logo>
        </sidebar-header>
        <sidebar-body></sidebar-body>
        <sidebar-footer></sidebar-footer>
    </aside>
</template>

<script>
import SidebarHeader from './SidebarHeader';
import SidebarBody from './SidebarBody';
import SidebarFooter from './SidebarFooter';
import Logo from './Logo';

export default {
    name: 'sidebar',
    components: {
        SidebarHeader,
        Logo,
        SidebarBody,
        SidebarFooter
    }
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/utils/_variables';
@import '../../assets/scss/utils/_functions';

aside {
    display: flex;
    flex-wrap: wrap;
    min-height: 100%;
    background: $black;
    max-width: calculateRem(300px);
    .header,
    .body,
    .footer {
        border:solid 1px red;
        flex: 1 100%;
    }
}
</style>