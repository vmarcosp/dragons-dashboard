<template>
  <div id="app">
    <dashboard-sidebar></dashboard-sidebar>
    <div class="app-main">
      <router-view></router-view>
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
@import '~@scss/utils/_variables';

* {
  font-family: 'Ubuntu', sans-serif;
}

html,
body,
#app {
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: row;
}

.app-main {
  overflow: auto;
  width: 100%;
  background: $gray-light;
  display: flex;
}
</style>
