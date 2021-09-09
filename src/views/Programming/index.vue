<template>
  <div class="main-container">
    <div class="skill-container">
      <h3>Skill</h3>
      <h4>Language</h4>
      <ui>
        <li v-for="lang in langs" :key="lang">
          {{ lang }}
        </li>
      </ui>
      <h4>Tool</h4>
      <ui>
        <li v-for="tool in tools" :key="tool">
          {{ tool }}
        </li>
      </ui>
    </div>

    <div class="works-container">
      <h3>Works</h3>
      <programming-work-introduction
        v-for="work in works"
        :key="work.name"
        :work="work"
        style="display: inline-block"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Work } from '@/utils/types'
import ProgrammingWorkIntroduction from './WorkIntroduction.vue'

@Options({
  name: 'Programming',
  components: {
    ProgrammingWorkIntroduction,
  },
})
export default class Home extends Vue {
  langs = ['Vue.js', 'Typescript', 'C++']
  tools = ['Git', 'Unity']
  works: Work[] = [
    {
      name: 'sample',
      url: 'http://example.com',
      descriptions: ['This is sample', 'This work is not exist'],
    },
    {
      name: 'sample',
      url: 'http://example.com',
      descriptions: ['This is sample', 'This work is not exist'],
    },
  ]
}
</script>

<style lang="scss" scoped>
.skill-container {
  li {
    display: inline-block;
    margin: 0 10px;
  }
}

.works-container {
  margin-top: 20px;
}
</style>
