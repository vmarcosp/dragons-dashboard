<template>
    <aside>
        <sidebar-header>
            <logo></logo>
        </sidebar-header>
    </aside>
</template>

<script>
import SidebarHeader from './SidebarHeader';
import Logo from './Logo';

export default {
    name: 'sidebar',
    components: {
        SidebarHeader,
        Logo
    }
};
</script>

<style lang="scss" scoped>
aside {
    max-width: 350px;
}
</style>