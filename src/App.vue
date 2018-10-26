<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

        <h2 v-show="!bcConnected && !bcConnectionError">
            Connecting...
        </h2>

        <div class="main-content" v-show="bcConnected && !bcConnectionError">
            <router-view></router-view>
        </div>

        <div v-show="bcConnectionError" class="top-20">
            <h2>Error connecting to the blockchain!</h2>
            <h3 v-show="bcSmartContractAddressError">
                It seems like the address of the smart contract is wrong!
            </h3>
            <p>
                Please check:
            </p>
            <ul>
                <li>The blockchain is running.</li>
                <li>The port in your settings (file: <b>libs/mixinViews.js</b>) match with the blockchain configuration.</li>
                <li>The smart contract compiled JSON (file: <b>assets/UsersContract.json</b>) is updated.</li>
            </ul>
</div>
  </div>
</template>
<script>
    // importing common function
    import mixinViews from './mixins/mixinViews';
    export default {
        mixins:[mixinViews],       
        name: 'App'
    }
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
