<template>
  <div>
    <page-title value="List of dragons"></page-title>
    <data-table>
      <table-header></table-header>
    </data-table>
  </div>
</template>

<script>
import PageTitle from '@/components/page-title/PageTitle';
import { DataTable, TableHeader } from '@/components/data-table';

export default {
  name: 'all-dragons',
  components: {
    PageTitle,
    DataTable,
    TableHeader
  }
};
</script>

<style lang="scss" scoped>

</style>
