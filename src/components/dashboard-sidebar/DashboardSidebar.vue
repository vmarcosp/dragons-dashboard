<template>
    <sidebar>
        <sidebar-header slot="header">
            <logo></logo>
        </sidebar-header>
        <sidebar-body slot="body"></sidebar-body>
        <sidebar-footer slot="footer"></sidebar-footer>
    </sidebar>
</template>

<script>
import { Sidebar, SidebarHeader } from '../sidebar';
import Logo from './Logo';
export default {
    name: 'dashboard-sidebar',
    components: {
        Logo,
        Sidebar,
        SidebarHeader
    }
};
</script>

<style lang="scss">

</style>
