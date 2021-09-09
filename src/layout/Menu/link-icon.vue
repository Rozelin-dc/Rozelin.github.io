<template>
  <span class="icon">
    <a :href="href">
      <slot />
    </a>
  </span>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'LinkIcon',
  props: {
    href: String,
  },
})
export default class extends Vue {
  href!: string
}
</script>

<style lang="scss" scoped>
.icon {
  margin: 5px;
}
</style>
