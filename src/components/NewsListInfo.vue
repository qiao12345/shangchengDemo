<template>
    <div class="newsinfo-content">
        <h1 class="title">新闻标题</h1>
        <p class="subtitle">
            <span>发表时间：2019-12-02 14:36:26</span>
            <span>点击：0 次</span>
        </p>
        <hr>
        <dic class="content"></dic>
    </div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id
    }
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
