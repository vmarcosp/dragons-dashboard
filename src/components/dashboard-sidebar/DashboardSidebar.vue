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
            <div class="icons-container">
                <icon-social route="https://github.com/vmarcosp/dragons-dashboard" classIcon="github"></icon-social>
                <icon-social route="https://codepen.io/vmarcosp" classIcon="codepen"></icon-social>
            </div>
        </sidebar-footer>
    </sidebar>
</template>

<script>
import { Sidebar, SidebarHeader, SidebarBody, SidebarItem, SidebarFooter } from '@/components/sidebar';
import Logo from './Logo';
import IconSocial from './IconSocial';
import Icon from '@/components/icon/Icon';

export default {
    name: 'dashboard-sidebar',
    components: {
        Logo,
        Sidebar,
        Icon,
        SidebarHeader,
        SidebarBody,
        SidebarItem,
        SidebarFooter,
        IconSocial
    },
    data() {
        return {
            items: [
                {
                    icon: 'home',
                    label: 'Home',
                    route: '/'
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

<style lang="scss" scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

.icons-container {
    display: flex;
    justify-content: center;
    a {
        margin: .5rem;
    }
}
</style>
