<template>
  <component v-if="component" :is="component"></component>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Guild extends Vue {

  @Prop(String) private icon!: string
  private component: Vue | null = null

  async created() {
    console.log(this.icon)
    const data = await import(`@/assets/icons/${this.icon}.svg`)
    this.component = data.default
  }

}
</script>
