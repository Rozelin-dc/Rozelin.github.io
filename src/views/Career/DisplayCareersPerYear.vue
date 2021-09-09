<template>
  <div class="display-careers-per-year-container">
    <h4>{{ career.year }} 年</h4>
    <ui>
      <li v-for="careerIndividual in career.careers" :key="careerIndividual">
        {{ careerIndividual }}
      </li>
    </ui>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

export interface CareersPerYear {
  year: number
  careers: Array<String>
}

@Options({
  name: 'DisplayCareersPerYear',
  props: {
    career: Object,
  },
})
export default class Home extends Vue {
  career!: CareersPerYear
}
</script>

<style lang="scss" scoped>
.display-careers-per-year-container {
  margin: 10px 0;

  li {
    line-height: 1em;
  }
}
</style>
