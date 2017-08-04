<template>
    <div class="body">
        <ul>
            <sidebar-item v-for="(item,index) in items" :route="item.route" :key="index" :icon="item.icon" :label="item.label"></sidebar-item>
        </ul>
    </div>
</template>

<script>
import SidebarItem from './SidebarItem';

export default {
    name: 'sidebar-body',
    components: {
        SidebarItem
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

<style lang="scss" scoped>
@import '../../assets/scss/utils/_variables';
@import '../../assets/scss/utils/_functions';

.body {
    margin-top: 3rem;
    >ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
}
</style>
