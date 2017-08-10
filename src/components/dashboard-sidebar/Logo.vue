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
    display: flex;
    text-align: center;
    justify-content: space-around;
    flex-flow: row wrap;
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
