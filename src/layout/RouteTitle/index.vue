<template>
  <div>
    <h2>{{ $route.name }}</h2>
    <div class="title-background" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'RouteTitle',
})
export default class extends Vue {}
</script>

<style lang="scss" scoped>
.title-background {
  display: absolute;
  background: #c68662;
  width: 300px;
  height: 35px;
  margin-left: -20px;
  margin-top: -50px;
}
</style>
