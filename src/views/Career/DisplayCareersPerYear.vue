<template>
  <div class="display-careers-per-year-container">
    <h3>{{ career.year }} 年</h3>
    <ui>
      <li v-for="careerIndividual in career.careers" :key="careerIndividual">
        {{ careerIndividual }}
      </li>
    </ui>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { CareersPerYear } from '/@/utils/types'

export default defineComponent({
  name: 'DisplayCareersPerYear',
  props: {
    career: { required: true, type: Object as PropType<CareersPerYear> }
  },
  setup(props) {
    return { ...props }
  }
})
</script>

<style lang="scss" scoped>
.display-careers-per-year-container {
  margin: 10px 0;

  li {
    line-height: 1.5em;
  }
}
</style>
