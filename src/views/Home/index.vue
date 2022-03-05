<template>
  <div class="main-container">
    <!-- Replace with your icon -->
    <img class="icon" src="/@/icons/png/icon.png" />
    <div class="content">
      <h3>Rozelin</h3>
      所属: <a href="https://trap.jp/">デジタル創作同好会traP</a>
    </div>
    <div class="content">
      <h4>活動</h4>
      Webクライアントサイドの開発・運用を中心に、競技プログラミング(AtCoder)などのプログラミングを行っています
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
})
</script>

<style lang="scss" scoped>
.icon {
  float: right;
  width: 150px;
}

.content {
  margin-bottom: 20px;
}
</style>
