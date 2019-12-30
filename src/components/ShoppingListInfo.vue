<template>
  <div class="shopping_content">
    <!-- 点击加入购物车小球动画 -->
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="ballflag"></div>
    </transition>
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner lunbotu">
          <lunbotu :luobotuList="luobotuList"></lunbotu>
        </div>
      </div>
    </div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">小米（Mi）小米Note 16G双网通版</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p >
              市场价：<del>2699</del><span class="now-txt">销售价：<label class="now-price">2199</label></span>
          </p>
          <p class="num">购买数量：<numbox @getcount="getNumber"></numbox></p>
          <p class="num-btn">
            <mt-button type="primary" size="small">立即购买</mt-button>&nbsp;&nbsp;
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
          <p>{{ getSelectNum }}</p>
        </div>
      </div>
    </div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：SD2932214404</p>
          <p>库存情况：60件</p>
          <p>上架时间：2015-2-12 12:14:50</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(11)">图片介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(11)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import lunbotu from '../components/LunBoTu.vue'
import numbox from '../components/Numbox.vue'
import store from '@/store'
export default {
  store,
  data () {
    return {
      luobotuList: [
        { src: '../assets/001.png' },
        { src: '../assets/002.jpg' },
        { src: '../assets/003.jpg' }
      ],
      ballflag: false,
      getSelectNum: this.$store.state.count
    }
  },
  components: {
    lunbotu,
    numbox
  },
  created () {
    this.getLuobo()
  },
  methods: {
    getLuobo () {
      this.luobotuList.forEach(item => {
        item.img = item.src
      })
    },
    goDesc (id) {
      this.$router.push({ name: 'goodsdesc', params: { id } })
    },
    goComment (id) {
      this.$router.push({ name: 'goodscomment', params: { id } })
    },
    addToShopCar () {
      this.ballflag = !this.ballflag
      const num = document.getElementById('box').value
      store.commit('increase', num)
    },
    beforeEnter (el) {
      el.style.transform = 'translate(0px, 0px)'
    },
    enter (el, done) {
      // el.offsetHeight
      el.style.transform = 'translate(57px, 166px)'
      el.transition = 'all 1s cubic-bezier(.4,-0.3,1,.68)'
      done()
    },
    afterEnter (el) {
      this.ballflag = !this.ballflag
    },
    getNumber (num) {
      this.getSelectNum = num
      store.commit('increase', num)
    }
  }
}
</script>

<style lang="scss" scoped>
.shopping_content{
  background-color: #eeeeee;
  overflow: hidden;
  .lunbotu{
    padding: 0;
  }
  .now-txt{
    margin-left:15px;
  }
  .now-price{
    color: #ff0000;
    font-size: 16px;
    font-weight: bold;
  }
  .mui-card-footer{
    display: block;
    button{
      margin: 10px 0;
    }
  }
  .num{
    display: flex;
  }
  .ball{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #ff0000;
    position: absolute;
    z-index: 99;
    top: 355px;
    left: 146px;
  }
  .mint-swipe{
    height: 200px;
    .mint-swipe-item{
      &:nth-child(1){
        background-image: url(../assets/001.png)
      }
      &:nth-child(2){
        background-image: url(../assets/002.jpg)
      }
      &:nth-child(3){
        background-image: url(../assets/003.jpg)
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
