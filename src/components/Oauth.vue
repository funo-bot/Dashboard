<template>
  <section id="oauth">
    <div class="loader"></div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Oauth extends Vue {}
</script>

<style scoped lang="less">
@import "../assets/colors.less";

#oauth {
  align-items: center;
  display: flex;
  justify-content: center;

  .loader {
    border-radius: 50%;
    box-shadow: inset 0 0 0 1em;
    color: @dark;
    font-size: 11px;
    height: 10em;
    margin: 55px auto;
    position: relative;
    width: 10em;
    text-indent: -99999em;
    transform: translateZ(0);
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);

    &:before,
    &:after {
      border-radius: 50%;
      content: "";
      position: absolute;
    }

    &:before {
      width: 5.2em;
      height: 10.2em;
      background: @blurple;
      border-radius: 10.2em 0 0 10.2em;
      top: -0.1em;
      left: -0.1em;
      -webkit-transform-origin: 5.2em 5.1em;
      transform-origin: 5.2em 5.1em;
      -webkit-animation: load2 2s infinite ease 1.5s;
      animation: load2 2s infinite ease 1.5s;
    }

    &:after {
      width: 5.2em;
      height: 10.2em;
      background: @blurple;
      border-radius: 0 10.2em 10.2em 0;
      top: -0.1em;
      left: 5.1em;
      -webkit-transform-origin: 0px 5.1em;
      transform-origin: 0px 5.1em;
      -webkit-animation: load2 2s infinite ease;
      animation: load2 2s infinite ease;
    }

    @-webkit-keyframes load2 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes load2 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
}
</style>
