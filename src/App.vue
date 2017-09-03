<template>
  <div id="app">
    <dashboard-sidebar></dashboard-sidebar>
    <div class="app-main">
      <navbar></navbar>
      <div class="view-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardSidebar from '@/components/dashboard-sidebar/DashboardSidebar';
import Navbar from '@/components/navbar/Navbar';

export default {
  name: 'app',
  components: {
    DashboardSidebar,
    Navbar
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Ubuntu');
@import '~@scss/utils/_variables';
@import '~@scss/utils/_functions';

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
  flex-flow: column wrap;
  >.view-container{
    padding:calculateRem(25px) calculateRem(36px);
  }
}
</style>
