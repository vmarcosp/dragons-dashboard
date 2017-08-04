<template>
    <div class="body">
        <ul>
            <sidebar-item v-for="(item,index) in items" :key="index" :icon="item.icon" :label="item.label"></sidebar-item>
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
                    icon: 'list',
                    label: 'Cadastrar'
                },
                {
                    icon: 'list',
                    label: 'Editar'
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
    border-top: solid calculateRem(1px) $black-dark;
    >ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
}
</style>
