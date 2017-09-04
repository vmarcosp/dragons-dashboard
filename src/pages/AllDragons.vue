<template>
  <div>
    <page-title value="List of dragons"></page-title>
    <data-table>
      <table-header slot="header" :items="items" />
      <table-body slot="body">
        <table-row v-for="dragon in dragons" :key="dragon">
          <table-data>{{dragon.name}}</table-data>
          <table-data>{{dragon.type}}</table-data>
          <table-data>{{dragon.created_at}}</table-data>
          <table-data>{{dragon.slug}}</table-data>
          <table-data>EDIT | DELETE</table-data>
        </table-row>
      </table-body>
    </data-table>
  </div>
</template>

<script>
import PageTitle from '@/components/page-title/PageTitle';
import { ENDPOINTS } from '@/constants';
import axios from 'axios';
import { DataTable, TableHeader, TableBody, TableRow, TableData } from '@/components/data-table';

export default {
  name: 'all-dragons',
  components: {
    PageTitle,
    DataTable,
    TableHeader,
    TableBody,
    TableRow,
    TableData
  },
  created() {
    axios.get(ENDPOINTS.ALL_DRAGONS)
      .then((response) => {
        this.dragons = response.data.items;
        this.$store.commit('setAllDragons', response.data.items);
      })
      .catch(console.log);
  },
  data() {
    return {
      dragons: [],
      items: [
        'NAME',
        'TYPE',
        'CREATED AT',
        'SLUG',
        'ACTIONS'
      ]
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
