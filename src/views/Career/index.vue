<template>
  <div class="main-container">
    <h3>Career</h3>
    <display-careers-per-year
      v-for="career in careers"
      :key="career.year"
      :career="career"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import DisplayCareersPerYear, {
  CareersPerYear,
} from './DisplayCareersPerYear.vue'

@Options({
  name: 'Career',
  components: {
    DisplayCareersPerYear,
  },
})
export default class Home extends Vue {
  careers: CareersPerYear[] = [
    {
      year: 2021,
      careers: [
        'Google STEP Development Course 参加',
        'ISUCON11 参加',
        'ICTトラブルシューティングコンテスト2021 夏の陣 参加',
      ],
    },
  ]
}
</script>
