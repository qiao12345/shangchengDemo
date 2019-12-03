<template>
  <div class="commentSty">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容(最多吐槽120个字)" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title">
          第12楼&nbsp;&nbsp;用户&nbsp;:&nbsp;匿名用户&nbsp;&nbsp;发表时间&nbsp;:&nbsp;2019-12-03 09:59:56
        </div>
        <div class="cmt-body">
          呼儿嘿呦呼儿嘿呦
        </div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">
          第12楼&nbsp;&nbsp;用户&nbsp;:&nbsp;匿名用户&nbsp;&nbsp;发表时间&nbsp;:&nbsp;2019-12-03 09:59:56
        </div>
        <div class="cmt-body">
          呼儿嘿呦呼儿嘿呦
        </div>
      </div>
      <div class="cmt-item">
        <div class="cmt-title">
          第12楼&nbsp;&nbsp;用户&nbsp;:&nbsp;匿名用户&nbsp;&nbsp;发表时间&nbsp;:&nbsp;2019-12-03 09:59:56
        </div>
        <div class="cmt-body">
          呼儿嘿呦呼儿嘿呦
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain>加载更多</mt-button>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.commentSty{
  h3{
    font-size: 16px;
  }
  textarea{
      font-size: 14px;
      height: 85px;
      margin: 0;
  }
  .cmt-title{
      font-size: 12px;
      background-color: #cccccc;
      margin-top: 5px;
      padding: 3px;
      font-weight: bold;
  }
  .cmt-body{
      font-size: 14px;
      padding: 5px;
      text-indent: 2em;
  }
}
</style>
