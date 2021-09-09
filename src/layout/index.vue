<template>
  <div>
    <el-container>
      <el-header height="70px">
        <router-link :to="{ name: 'Home' }" class="top-link">
          Rozelin's Portfolio
        </router-link>
        <span class="menu-icon">
          <img
            v-if="!showMenu"
            src="@/icons/svg/menu-line.svg"
            @click="showMenu = true"
          />
          <img
            v-else
            src="@/icons/svg/close-line.svg"
            @click="showMenu = false"
          />
        </span>
      </el-header>

      <el-main>
        <header-menu :show-menu="showMenu" />

        <route-title />

        <transition name="fade-transform" mode="out-in">
          <keep-alive :include="cachedViews">
            <router-view :key="key" />
          </keep-alive>
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HeaderMenu from './Menu/index.vue'
import RouteTitle from './RouteTitle/index.vue'

@Options({
  name: 'Layout',
  components: {
    HeaderMenu,
    RouteTitle,
  },
  watch: {
    $route() {
      this.showMenu = false
    },
  },
})
export default class extends Vue {
  showMenu = false
}
</script>

<style lang="scss">
.el-header {
  background: #4e2d1a;
  margin: 0;
}

.el-main {
  background: #eedac9;
  min-height: 100vh;
  padding: 0;
  margin: 0;
}
</style>

<style lang="scss" scoped>
.top-link {
  font-size: 40px;
  color: white;
  text-decoration: none;
}

.menu-icon {
  position: relative;
  vertical-align: middle;
  margin-top: 10px;
  float: right;
}
</style>
