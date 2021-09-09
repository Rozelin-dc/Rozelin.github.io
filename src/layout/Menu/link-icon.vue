<template>
  <span class="icon">
    <a :href="href">
      <img :src="iconName" />
    </a>
  </span>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'LinkIcon',
  props: {
    href: String,
    iconName: String,
  },
})
export default class extends Vue {
  href!: string
  iconName!: string
}
</script>

<style lang="scss" scoped>
.icon {
  margin: 5px;
}
</style>
