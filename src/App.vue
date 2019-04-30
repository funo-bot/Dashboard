<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template><script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Dashboard from "./components/Dashboard.vue";
import Login from "./components/Login.vue";

@Component({
  components: {
    Dashboard,
    Login
  }
})
export default class App extends Vue {}
</script><style lang="less">
@import (css) url("https://fonts.googleapis.com/css?family=Roboto:300,400");
@import "assets/colors.less";

html,
body {
  background-color: @blurple;
  font-family: "Roboto", sans-serif;
  margin: 0;
}

html,
body,
#app,
section {
  height: 100%;
  width: 100%;
}

.card {
  background-color: @dark;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  color: @white;
  padding: 40px;
  width: 480px;

  .title,
  .sub {
    font-weight: 300;
    text-align: center;
  }

  .title {
    font-size: 26px;
    line-height: 32px;
    margin: 0;
    margin-bottom: 8px;
  }

  .sub {
    color: @darkish;
    font-size: 18px;
    line-height: 22px;
  }

  button {
    background-color: @blurple;
    border: none;
    border-radius: 3px;
    color: @white;
    cursor: pointer;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    height: 44px;
    line-height: 24px;
    padding: 2px 16px;
    transition: background-color 200ms linear;
    width: 100%;

    &:hover {
      background-color: darken(@blurple, 5%);
    }
  }
}
</style>