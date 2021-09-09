<template>
  <div class="main-container">
    <h3>Composition Environment</h3>
    <h3>Works</h3>
    <music-work-introduction
      v-for="work in works"
      :key="work.name"
      :work="work"
      style="display: inline-block"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Work } from '@/utils/types'
import MusicWorkIntroduction from './WorkIntroduction.vue'

@Options({
  name: 'Musics',
  components: {
    MusicWorkIntroduction,
  },
})
export default class Home extends Vue {
  works: Work[] = [
    {
      name: 'hoge',
      url: 'https://soundcloud.com/mitchiem/hatsune-miku-kaito-ohedo-julia-night',
      descriptions: [],
    },
  ]
}
</script>
