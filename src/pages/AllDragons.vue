<template>
  <div>
    <page-title value="List of dragons"></page-title>
    <data-table>
      <table-header slot="header" :items="items"></table-header>
      <table-body slot="body">
        <table-row>
          <table-data>Marcos</table-data>
          <table-data>Marcos</table-data>
          <table-data>Marcos</table-data>
          <table-data>Marcos</table-data>
        </table-row>
      </table-body>
    </data-table>
  </div>
</template>

<script>
import PageTitle from '@/components/page-title/PageTitle';
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
  data() {
    return {
      items: [
        'NAME',
        'TYPE',
        'CREATED AT',
        'SLUG'
      ]
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
