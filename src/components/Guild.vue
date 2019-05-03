<template>
  <section id="dashboard">
    <p v-if="guild === null">Funo is not in this guild</p>
    <p v-else>{{ guild.name }}</p>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { socket } from '../utils/socket';

@Component
export default class Guild extends Vue {

  @Prop(String) private id!: string

  private guild: any = {}
  
  mounted() {
    socket.emit('guild', this.id, (data: any) => {
      this.guild = data
    })
  }

}
</script>

<style scoped lang="less">
@import "../assets/colors.less";
</style>
