<template>
    <div class="body">
        <ul>
            <sidebar-item v-for="(item,index) in items" :key="index" :label="item.label"></sidebar-item>
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
                    icon: 'nome-icone',
                    label: 'Cadastrar'
                },
                {
                    icon: 'nome-icone',
                    label: 'Editar'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
@import '../../assets/scss/utils/_variables';

.body {
    border-top: solid .2rem $black-dark;
    >ul{
        list-style: none;
        margin:0;
        padding:0;
    }
}
</style>
