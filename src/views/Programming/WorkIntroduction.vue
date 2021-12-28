<template>
  <div class="works-intriduction-container">
    <h4>
      <a :href="work.url">{{ work.name }}</a>
    </h4>
    <ui>
      <li v-for="description in work.descriptions" :key="description">
        {{ description }}
      </li>
    </ui>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Work } from '@/utils/types'

export default defineComponent({
  name: 'ProgrammingWorkIntroduction',
  props: {
    work: { required: true, type: Object as PropType<Work> },
  },
  setup(props) {
    return { ...props }
  },
})
</script>

<style lang="scss" scoped>
.works-intriduction-container {
  margin: 0 20px 10px 0;

  li {
    line-height: 1.5em;
  }
}
</style>
