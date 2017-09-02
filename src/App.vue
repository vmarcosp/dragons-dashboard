<template>
  <div id="app">
    <dashboard-sidebar></dashboard-sidebar>
    <div class="app-main">
    </div>
  </div>
</template>

<script>
import DashboardSidebar from '@/components/dashboard-sidebar/DashboardSidebar';
import InputField from '@/components/inputs/InputField';

export default {
  name: 'app',
  components: {
    DashboardSidebar,
    InputField
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Ubuntu');

* {
  font-family: 'Ubuntu', sans-serif;
}

html,
body,
#app {
  display: flex;
  height: 100%;
  padding: 0;
  margin: 0;
}

.app-main{
  display: flex;
}
</style>
