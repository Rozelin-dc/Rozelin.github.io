<template>
  <div class="main-container">
    <div class="skill-container">
      <h3>Skill</h3>
      <h4>Language</h4>
      <ui>
        <li v-for="lang in langs" :key="lang">
          {{ lang }}
        </li>
      </ui>
      <h4>Tool</h4>
      <ui>
        <li v-for="tool in tools" :key="tool">
          {{ tool }}
        </li>
      </ui>
    </div>

    <div class="works-container">
      <h3>Works</h3>
      <programming-work-introduction
        v-for="work in works"
        :key="work.name"
        :work="work"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Work } from '@/utils/types'
import ProgrammingWorkIntroduction from './WorkIntroduction.vue'

@Options({
  name: 'Programming',
  components: {
    ProgrammingWorkIntroduction,
  },
})
export default class Home extends Vue {
  langs = [
    'Vue.js',
    'TypeScript / JavaScript',
    'C++',
    'C#',
    'C',
    'Java',
    'Python',
  ]
  tools = ['Git', 'Unity', 'Docker']
  works: Work[] = [
    {
      name: 'traPortal',
      url: 'https://trap.jp/post/1181/',
      descriptions: [
        'サークル内で利用されている部員管理のwebサービスです',
        'チームで開発・運用を行っており、2021/04からクライアントサイドのプロジェクトリーダーをしています',
        'クライアントサイドはVue Element Adminを元にVue.js+TypeScript+SCSSで構成されています',
      ],
    },
    {
      name: `Rozelin's App`,
      url: 'https://rozelin-dc.github.io/SimpleApp/',
      descriptions: [
        'Vue.js+TypeScriptで個人開発したweb上で使えるアプリです',
        'TODOリストやzoomリンクの管理ができます',
        'データはブラウザのローカルストレージに保存されます',
      ],
    },
    {
      name: 'あつまれ おんがくの民',
      url: 'https://trap.jp/post/1103/',
      descriptions: [
        'サークル内のハッカソンでチーム開発したゲームです',
        'C++、DXライブラリを使用しています',
        'リザルト画面を担当しました',
      ],
    },
  ]
}
</script>

<style lang="scss" scoped>
.skill-container {
  li {
    display: inline-block;
    margin: 0 10px;
  }
}

.works-container {
  margin-top: 20px;
}
</style>
