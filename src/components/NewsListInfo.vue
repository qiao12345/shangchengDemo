<template>
    <div class="newsinfo-content">
        <h1 class="title">新闻标题</h1>
        <p class="subtitle">
            <span>发表时间：2019-12-02 14:36:26</span>
            <span>点击：0 次</span>
        </p>
        <hr>
        <div class="content">
          <p>2019年度国际足联金球奖即将在明天凌晨正式公布，根据最新的消息，
          巴萨球星梅西将捧起生涯第六座金球奖，利物浦双星范迪克和萨拉赫分列二三位。
          葡萄牙球星C罗仅得133分，无缘前三。</p>
          <p>显然，这样的结果C罗并不满意！
          上赛季，C罗转会意甲之后，虽然状态有所下滑，但C罗依然快速适应意甲，
          单赛季打进21球率领尤文豪取意甲7连冠。在欧冠赛场，尤文止步八强，
          不过C罗在与马竞的1/8决赛次回合大演帽子戏法，率队完成惊天大逆转。
          C罗最出色的状态在国家队，2019年，C罗率领葡萄牙捧起了第一届欧洲国家联赛的冠军奖杯，
          并在半决赛独中三元。</p>
          <p>与梅西、范迪克等人相比，C罗最大的优势是国家队荣誉。
          但是，很明显，第一届欧洲国家联赛的冠军并没有得到金球奖评委的青睐。
          在评委心中，欧洲国家联赛完全无法与欧洲杯、世界杯等国际大赛相提并论。
          而一旦没有了这个优势，C罗无缘金球奖几乎早已成定局。但是，C罗跌出前三，依然出人意料。</p>
        </div>
        <comment-box></comment-box>
    </div>
</template>

<script>
import comment from './comment.vue'
export default {
  data () {
    return {
      id: this.$route.params.id
    }
  },
  components: {
    'comment-box': comment
  }
}
</script>

<style lang="scss" scoped>
.newsinfo-content{
    padding: 0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: #ff0000;
    }
    .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content{}
}
</style>
