<template>
  <div id="app">
    <layout />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Layout from '@/layout/index.vue'

@Options({
  components: {
    Layout,
  },
})
export default class extends Vue {}
</script>
