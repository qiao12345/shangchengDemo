<template>
  <div class="photoinfo-content">
      <h1 class="title">现代简约、明亮的背景</h1>
      <p class="subtitle">
          <span>发表时间:&nbsp;&nbsp;2019-12-09 10:21:22</span>
          <span>点击:&nbsp;&nbsp;1次</span>
      </p>
      <hr>
      <!-- 缩略图 -->
      <div class="thumbs">
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
      </div>
      <!-- 图片内容区域 -->
      <div class="content">
          不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。
          不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。
      </div>
      <!-- 评论子组件 -->
      <comment-box></comment-box>
  </div>
</template>

<script>
import comment from './comment.vue'
export default {
  data () {
    return {
      id: this.$route.params.id,
      slide1: [
        {
          src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
          msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
          alt: 'picture1',
          title: 'Image Caption 1',
          w: 600,
          h: 400
        },
        {
          src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
          msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
          alt: 'picture2',
          title: 'Image Caption 2',
          w: 600,
          h: 400
        }
      ]
    }
  },
  components: {
    'comment-box': comment
  },
  methods: {
    handleClose () {
      console.log('close event')
    }
  }
}
</script>

<style lang="scss" scoped>
.photoinfo-content{
  padding: 0 4px;
  .title{
      font-size: 14px;
      text-align: center;
      margin: 15px 0;
      color: #226aff;
  }
  .subtitle{
      font-size: 12px;
      display: flex;
      justify-content: space-between;
  }
  .content{
      font-size: 12px;
  }
}
</style>
