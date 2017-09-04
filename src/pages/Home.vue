<template>
  <div class="container">
    <page-title value="The project"></page-title>
    <p>This project has intention of show how consume a API rest using VueJS. The layout was developed using the components of <strong>UI Kit HBSIS</strong>. The UI Kit HBSIS is a project developed by HBSIS's front-end engineers and designers, that has as objective define a pattern for user interface.</p>
  </div>
</template>

<script>
import PageTitle from '@/components/page-title/PageTitle';

export default {
  name: 'home',
  components: {
    PageTitle
  }
};
</script>

<style lang="scss" scoped>
@import '~@scss/utils/_variables';
@import '~@scss/utils/_mixins';

.container{
  >p{
    color:$black;
    @include fontSize(20px);
  }
}
</style>
