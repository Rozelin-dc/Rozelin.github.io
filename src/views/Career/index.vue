<template>
  <div class="main-container">
    <display-careers-per-year
      v-for="career in careers"
      :key="career.year"
      :career="career"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { CareersPerYear } from '/@/utils/types'
import DisplayCareersPerYear from './DisplayCareersPerYear.vue'

export default defineComponent({
  name: 'Career',
  components: {
    DisplayCareersPerYear
  },
  setup() {
    const careers = ref<CareersPerYear[]>([
      {
        year: 2021,
        careers: [
          'Google STEP Development Course 参加',
          'ISUCON11 参加',
          'ICTトラブルシューティングコンテスト2021 夏の陣 参加'
        ]
      },
      {
        year: 2022,
        careers: [
          '3月～ピクシブ株式会社にてフロントエンドエンジニアとしてアルバイト勤務',
          'ISUCON12本選出場(チーム: xxRARxx)',
          '株式会社サイバーエージェントのACEインターンシップに参加'
        ]
      }
    ])

    return { careers }
  }
})
</script>
