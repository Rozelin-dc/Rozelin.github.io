<template>
  <transition name="fade">
    <div v-show="showMenu" class="menu-container">
      <span class="contents">
        <router-link
          v-for="route in routes"
          :key="route.name"
          :to="route"
          class="link"
        >
          {{ route.name }}
        </router-link>
        <div>
          <link-icon
            v-for="link in links"
            :key="link.url"
            :href="link.url"
            :icon-name="link.img"
          />
        </div>
      </span>
    </div>
  </transition>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { routes } from '@/router'
import LinkIcon from './link-icon.vue'

@Options({
  name: 'HeaderMenu',
  components: {
    LinkIcon,
  },
  props: {
    showMenu: Boolean,
  },
})
export default class extends Vue {
  showMenu!: boolean
  routes = routes

  links = [
    {
      url: 'https://github.com/Rozelin-dc/vue-web-page',
      img: '@/icons/svg/github-fill.svg',
    },
    {
      url: 'https://twitter.com/',
      img: '@/icons/svg/twitter-fill.svg',
    },
    {
      url: 'https://soundcloud.com/',
      img: '@/icons/svg/soundcloud-fill.svg',
    },
    {
      url: 'https://www.youtube.com/',
      img: '@/icons/svg/youtube-fill.svg',
    },
  ]
}
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
      line-height: 2em;
      margin-right: 20px;
      color: white;
      text-decoration: none;
    }
  }
}
</style>
