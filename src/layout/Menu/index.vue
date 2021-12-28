<template>
  <div class="menu-container">
    <span class="contents">
      <router-link
        v-for="route in routesRef"
        :key="route.name"
        :to="route"
        class="link"
      >
        {{ route.name }}
      </router-link>
      <span class="link-icons">
        <link-icon href="https://atcoder.jp/users/Rozelin">
          <img src="@/icons/svg/atcoder.svg" />
        </link-icon>
      </span>
      <span class="link-icons">
        <link-icon href="https://github.com/Rozelin-dc/">
          <img src="@/icons/svg/github-fill.svg" />
        </link-icon>
      </span>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { routes } from '@/router'
import LinkIcon from './link-icon.vue'

export default defineComponent({
  name: 'HeaderMenu',
  components: {
    LinkIcon,
  },
  setup() {
    const routesRef = ref(routes)

    return { routesRef }
  },
})
</script>

<style lang="scss" scoped>
.menu-container {
  position: absolute;
  margin-top: -20px;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #956a4c;

  .contents {
    padding: 0 20px;

    .link {
      font-size: 25px;
      line-height: 2em;
      margin-right: 20px;
      color: white;
      text-decoration: none;
    }

    .link-icons {
      float: right;
      margin-top: 10px;
      margin-right: 10px;
    }
  }
}
</style>
