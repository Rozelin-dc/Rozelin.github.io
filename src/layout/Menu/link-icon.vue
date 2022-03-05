<template>
  <span class="icon">
    <a :href="href">
      <slot class="icon-body" />
    </a>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LinkIcon',
  props: {
    href: { required: true, type: String }
  },
  setup(props) {
    return { ...props }
  }
})
</script>

<style lang="scss" scoped>
.icon {
  margin: 5px;

  .icon-body {
    height: 36px;
    width: 36px;
  }
}
</style>
