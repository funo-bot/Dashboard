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
import { socket } from "../utils/socket";

const REDIRECT_URL = `${location.origin}/oauth`;

const SCOPE = encodeURIComponent(["email", "guilds", "identify"].join(" "));
const OAUTH_URL = `https://discordapp.com/api/oauth2/authorize?client_id=332971222897786892&redirect_uri=${encodeURI(
  REDIRECT_URL
)}&response_type=code&scope=${SCOPE}`;

@Component
export default class Login extends Vue {
  private accessToken: string | null = null;

  private openOauth() {
    const popup = open(
      OAUTH_URL,
      "Login with Discord",
      "height=700,width=500,menubar=no,status=no"
    );
    if (!popup) return;

    const interval = setInterval(() => {
      try {
        popup.location.href; // Will continously throw an error until redirected
        clearInterval(interval);

        this.handleCode(popup.location.search.replace("?code=", ""), popup);
      } catch (e) {}
    }, 1000);
  }

  private handleCode(code: string, popup: Window) {
    socket.emit("oauthCode", code, REDIRECT_URL, SCOPE, async (data: any) => {
      popup.close();

      if (!data.access_token) return;

      this.accessToken = data.access_token;

      data.createdAt = Date.now() - 5000 // 5 second process buffer
      localStorage.setItem('user', JSON.stringify(data))

      socket.emit('login', this.accessToken)

      this.$router.push({ name: 'dashboard' })
    });
  }
}
</script>

<style scoped lang="less">
#login {
  align-items: center;
  display: flex;
  justify-content: center;

  .card {
    width: 480px;

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
}
</style>
