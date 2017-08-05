<template>
    <sidebar>
        <sidebar-header slot="header">
            <logo></logo>
        </sidebar-header>
        <sidebar-body slot="body">
            <ul>
                <sidebar-item v-for="(item,index) in items" :route="item.route" :key="index" :icon="item.icon" :label="item.label"></sidebar-item>
            </ul>
        </sidebar-body>
        <sidebar-footer slot="footer">
    
        </sidebar-footer>
    </sidebar>
</template>

<script>
import { Sidebar, SidebarHeader, SidebarBody, SidebarItem, SidebarFooter } from '../sidebar';
import Logo from './Logo';
export default {
    name: 'dashboard-sidebar',
    components: {
        Logo,
        Sidebar,
        SidebarHeader,
        SidebarBody,
        SidebarItem,
        SidebarFooter
    },
    data() {
        return {
            items: [
                {
                    icon: 'home',
                    label: 'Home',
                    route: '/home'
                },
                {
                    icon: 'plus-square-o',
                    label: 'Register new dragon',
                    route: '/register-dragon'
                },
                {
                    icon: 'list-alt',
                    label: 'View all dragons',
                    route: '/all-dragons'
                }
            ]
        };
    }
};
</script>

<style lang="scss">
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>
