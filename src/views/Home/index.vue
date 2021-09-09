<template>
  <div class="main-container">
    <!-- Replace with your icon -->
    <img class="icon" src="@/icons/png/icon.png" />
    This is a portfolio template made with Vue.js + TypeScript that can be
    published on github-pages.
    <br />
    View on <a href="https://github.com/Rozelin-dc/vue-portfolio">GitHub</a>
    <hello-world msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Options({
  name: 'Home',
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.icon {
  float: right;
}
</style>
