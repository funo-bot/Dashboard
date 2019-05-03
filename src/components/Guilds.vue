<template>
  <section id="dashboard">
    <p class="page-title">Pick a server to continue</p>
    <div class="grid three">
      <div class="guild card" v-for="guild in guilds" :key="guild.id" @click="gotoGuild(guild.id)">
        <img v-if="guild.icon" :src="`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`">
        <div v-else class="initials">
          <p>{{ initials(guild.name) }}</p>
        </div>
        <p class="title">{{ guild.name }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { socket } from '../utils/socket';

@Component
export default class Guilds extends Vue {

  private guilds: any[] = []
  
  mounted() {
    socket.emit('me', (data: any) => {
      console.log(data)
    })

    socket.emit('guilds', (data: any) => {
      this.guilds = data
    })
  }

  private gotoGuild(id: string) {
    this.$router.push({ name: 'guild', params: { id } })
  }

  private initials(name: string) {
    if(!name) return ''

    const parts = name.split(/\s+/)
    
    const initials = []

    for(let i = 0; i < 3 && i < parts.length; i++) {
      const part = parts[i]

      initials.push(part.charAt(0))
      if(part.includes('.')) initials.push('.')
      if(part.includes(',')) initials.push(',')
    }

    return initials.join('')
  }

}
</script>

<style scoped lang="less">
@import "../assets/colors.less";

.page-title {
  color: @darker;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
}

.guild {
  cursor: pointer;
  margin: 20px;
  transition: all 200ms linear;

  img,
  .initials {
    border-radius: 50%;
    height: 120px;
    margin-bottom: 10px;
    margin-left: 50%;
    transform: translateX(-50%);
    transition: border-radius 200ms linear;
    width: 120px;
  }

  .initials {
    background-color: @dark;

    p {
      color: @grey;
      font-size: 40px;
      line-height: 120px;
      margin: 0;
      text-align: center;
    }
  }

  &:hover {
    transform: translateY(-10px);

    img,
    .initials {
      border-radius: 40px;
    }
  }
}
</style>
