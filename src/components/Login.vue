<template>
  <section id="login">
    <div class="card">
      <p class="title">We meet again!</p>
      <p class="sub">Please login with your Discord account.</p>
      <button class="login" @click="openOauth()">
        <!-- <span>Login with</span> -->
        <img src="https://discordapp.com/assets/192cb9459cbc0f9e73e2591b700f1857.svg">
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

const OAUTH_URL =
  "https://discordapp.com/api/oauth2/authorize?client_id=332971222897786892&redirect_uri=https%3A%2F%2Fbot.funo.io%2Foauth&response_type=code&scope=email%20guilds%20identify";

@Component
export default class Login extends Vue {
  private openOauth() {
    open(
      OAUTH_URL,
      "Login with Discord",
      "height=700,width=500,menubar=no,status=no"
    );
  }
}
</script>

<style scoped lang="less">
#login {
  align-items: center;
  display: flex;
  justify-content: center;

  .login {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 30px;

    img {
      height: 30px;
      width: 100px;
    }
  }
}
</style>
