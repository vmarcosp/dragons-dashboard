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

<style>
@import url('https://fonts.googleapis.com/css?family=Ubuntu');
* {
  font-family: 'Ubuntu', sans-serif;
}
html,body,#app{
  height: 100%;
}
</style>
