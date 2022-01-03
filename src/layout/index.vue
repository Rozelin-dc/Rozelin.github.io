<template>
  <div>
    <el-container>
      <el-header :height="headerHeight">
        <router-link :to="{ name: 'Home' }" class="top-link">
          Rozelin's Portfolio
        </router-link>

        <header-menu class="header-menu" />
      </el-header>

      <el-main>
        <route-title />

        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import HeaderMenu from './Menu/index.vue'
import RouteTitle from './RouteTitle/index.vue'

export default defineComponent({
  name: 'Layout',
  components: {
    HeaderMenu,
    RouteTitle,
  },
  setup() {
    const headerHeight = computed(() => {
      if (
        window.matchMedia &&
        window.matchMedia('(max-device-width: 640px)').matches
      ) {
        return '150px'
      } else {
        return '110px'
      }
    })

    return { headerHeight }
  },
})
</script>

<style lang="scss">
.el-header {
  background: #4e2d1a;
  margin: 0;
  padding: 0;
}

.el-main {
  background: #eedac9;
  min-height: 100vh;
  padding: 0;
  margin: 0;
}
</style>

<style lang="scss" scoped>
.header-menu {
  margin-top: 10px;
}

.top-link {
  font-size: 40px;
  color: white;
  text-decoration: none;
}
</style>
