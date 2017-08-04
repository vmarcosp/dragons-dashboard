<template>
  <div id="app">
    <sidebar>
  
    </sidebar>
  </div>
</template>

<script>
import Sidebar from './components/sidebar/Sidebar';

export default {
  name: 'app',
  components: {
    Sidebar
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Ubuntu');

* {
  font-family: 'Ubuntu', sans-serif;
}

html,body,#app{
  height: 100%;
  padding:0;
  margin:0;
}
</style>
