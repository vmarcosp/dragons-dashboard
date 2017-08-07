<template>
    <div class="container-logo">
        <span>DRAGONS API</span>
        <span>Dashboard</span>
    </div>
</template>

<script>
export default {
    name: 'logo'
};
</script>

<style lang="scss" scoped>
@import '~@scss/utils/_variables';

.container-logo {
    padding: 0;
    margin: 0;
    list-style: none;
    -ms-box-orient: horizontal;
    display: flex;
    text-align: center;
    -webkit-justify-content: space-around;
    justify-content: space-around;
    -webkit-flex-flow: row wrap;
    flex-flow: row wrap;
    -webkit-align-items: stretch;
    align-items: stretch;
    span {
        width: 100%;
        flex: 1 100%;
    }
    span:nth-child(1) {
        font-weight: bold;
        font-size: 1.4rem;
        text-transform: uppercase;
        color: white;
    }
    span:nth-child(2) {
        font-size: 1.2rem;
        text-transform: uppercase;
        color: $blue;
    }
}
</style>
