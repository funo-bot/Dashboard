<template>
  <section id="dashboard">
    <p v-if="guild === null">Funo is not in this guild</p>
    <p v-else>{{ guild.name }}</p>

    <div class="input">
      <input type="text" v-model="searchQuery" />
      <button class="append" @click="play(searchQuery)">play</button>
    </div>

    <div v-if="track" class="track">
      <img class="thumb" :src="track.thumb" />
      <h3 class="title">{{ track.title }}</h3>
      <h4 class="author">{{ track.author }}</h4>
      <div class="controls">
        <div class="control previous">
          <Icon icon="media-previous" />
        </div>
        <div class="control pause">
          <Icon icon="media-pause" />
        </div>
        <div class="control next" @click="next()">
          <Icon icon="media-next" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import Icon from '@/components/common/Icon.vue'

import { socket } from '../utils/socket';

@Component({
  components: { Icon },
})
export default class Guild extends Vue {

  @Prop(String) private id!: string

  private guild: any = {}
  private track: any = null
  private searchQuery: string = ''
  
  mounted() {

    socket.emit('guild', this.id, (data: any) => {
      this.guild = data
    })

    socket.emit('playing', this.id, (data: any) => {
      console.log(data)
      this.track = data
    })

    socket.on('funo:queued', (data: any) => {
      console.log('queued', data.track.title)
    })

    socket.on('funo:playing', (data: any) => {
      console.log('playing', data.track.title)
      this.track = data.track
    })
  }

  private next() {
    socket.emit('next', this.id)
  }

  private play(query: string) {
    socket.emit('play', this.id, query)
  }

}
</script>

<style scoped lang="less">
@import "../assets/colors.less";

.track {
  width: 40%;

  .thumb {
    margin-left: 50%;
    transform: translateX(-50%);
  }

  .title, .author {
    text-align: center;
  }

  .title {
    color: @darker;
    margin-bottom: 0;
  }

  .author {
    color: @dark;
    margin-top: 5px;
  }

  .controls {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    margin-left: 50%;
    transform: translateX(-50%);
    width: 300px;
    
    .control {
      @size: 20px;

      // background-color: @dark;
      // border-radius: 50%;
      // box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
      cursor: pointer;
      height: @size;
      padding: 25px;
      transition: all 200ms linear;
      width: @size;

      &.play, &.pause {
        @size: 50px;
        height: @size;
        width: @size;
      }

      // &:hover {
      //   background-color: @darker;
      //   box-shadow: none;
      // }

      svg {
        fill: @dark;
      }
    }
  }
}
</style>
