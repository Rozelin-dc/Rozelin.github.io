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
      <div class="work-items">
        <programming-work-introduction
          v-for="work in works"
          :key="work.name"
          :work="work"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Work } from '/@/utils/types'
import ProgrammingWorkIntroduction from './WorkIntroduction.vue'

export default defineComponent({
  name: 'Programming',
  components: {
    ProgrammingWorkIntroduction
  },
  setup() {
    const langs = ref([
      'Vue.js',
      'React',
      'TypeScript / JavaScript',
      'Go',
      'C / C++',
      'C#',
      'Java',
      'Python'
    ])
    const tools = ref(['Git', 'Unity', 'Docker', 'SQL'])
    const works = ref<Work[]>([
      {
        name: 'traPortal',
        url: 'https://trap.jp/post/1181/',
        descriptions: [
          'サークル内で利用されている部員情報管理などができるWebサービスです',
          'チームで開発・運用を行っており、2021/04~2023/07の期間クライアントサイドのプロジェクトリーダーをしていました',
          'クライアントサイドはVue Element Adminを元にVue.js+TypeScript+SCSSで構成されています'
        ]
      },
      {
        name: 'Matter.ts',
        url: 'https://www.npmjs.com/package/@rozelin/matter-ts',
        descriptions: [
          'ブラウザで動作する2D物理演算ライブラリMatter.jsのTypeScript移植です',
          '独自機能として文字の描画に対応しました'
        ]
      },
      {
        name: 'Typing Lyrics',
        url: 'https://trap.jp/post/1983/',
        descriptions: [
          '初音ミク「マジカルミライ2023」プログラミング・コンテストに応募し、入選した作品です',
          '楽曲の歌唱に合わせて歌詞をタイプするタイピングゲームです',
          'Text Alive App API+React+TypeScript+SCSSで構成されています'
        ]
      },
      {
        name: "Rozelin's App",
        url: 'https://rozelin-dc.github.io/SimpleApp/',
        descriptions: [
          'Vue.js+TypeScriptで個人開発したWeb上で使えるアプリです',
          'TODOリストやzoomリンクの管理ができます',
          'データはブラウザのローカルストレージに保存されます'
        ]
      },
      {
        name: 'あつまれ おんがくの民',
        url: 'https://trap.jp/post/1103/',
        descriptions: [
          'サークル内のハッカソンでチーム開発したゲームです',
          'C++、DXライブラリを使用しています',
          'リザルト画面を担当しました'
        ]
      },
      {
        name: 'HiQidas',
        url: 'https://trap.jp/post/1441/',
        descriptions: [
          'サークル内のハッカソンでチーム開発したWebアプリです',
          'ブラウザで複数人でブレインストーミングができるツールです',
          'クライアントはVue.js+TypeScript、サーバーはGoで作られています',
          'クライアントサイドを担当しました'
        ]
      }
    ])

    return { langs, tools, works }
  }
})
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

  .work-items {
    display: grid;
    gap: 10px;
  }
}
</style>
