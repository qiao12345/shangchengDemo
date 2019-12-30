<template>
  <div class="photolist-content">
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <a class="mui-control-item mui-active" href="#" data-wid="tab-top-subpage-1.html">
            全部
          </a>
          <a class="mui-control-item" href="#" data-wid="tab-top-subpage-2.html">
            家居生活
          </a>
          <a class="mui-control-item" href="#" data-wid="tab-top-subpage-3.html">
            摄影设计
          </a>
        </div>
      </div>
    </div>
    <ul class="info">
      <!-- <li v-for="item in list" :key="item.id">
        <img :src='item.url_add'>
      </li> -->
      <li>
        <router-link to="/qhome/photolistinfo/1">
          <img src="../assets/jj1.jpg" alt="">
          <div class="info-content">
            <div class="info-title">
              现代简约 明亮的背景
            </div>
            <div class="info-body">
              不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/qhome/photolistinfo/2">
          <img src="../assets/jj2.jpg" alt="">
          <div class="info-content">
            <div class="info-title">
              现代简约 明亮的背景
            </div>
            <div class="info-body">
              不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/qhome/photolistinfo/3">
          <img src="../assets/jj3.jpg" alt="">
          <div class="info-content">
            <div class="info-title">
              现代简约 明亮的背景
            </div>
            <div class="info-body">
              不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/qhome/photolistinfo/4">
          <img src="../assets/jj4.jpg" alt="">
          <div class="info-content">
            <div class="info-title">
              现代简约 明亮的背景
            </div>
            <div class="info-body">
              不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/qhome/photolistinfo/5">
          <img src="../assets/jj5.jpg" alt="">
          <div class="info-content">
            <div class="info-title">
              现代简约 明亮的背景
            </div>
            <div class="info-body">
              不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/qhome/photolistinfo/6">
          <img src="../assets/jj6.jpg" alt="">
          <div class="info-content">
            <div class="info-title">
              现代简约 明亮的背景
            </div>
            <div class="info-body">
              不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/qhome/photolistinfo/7">
          <img src="../assets/jj7.jpg" alt="">
          <div class="info-content">
            <div class="info-title">
              现代简约 明亮的背景
            </div>
            <div class="info-body">
              不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/qhome/photolistinfo/8">
          <img src="../assets/jj8.jpg" alt="">
          <div class="info-content">
            <div class="info-title">
              现代简约 明亮的背景
            </div>
            <div class="info-body">
              不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/qhome/photolistinfo/9">
          <img src="../assets/jj9.jpg" alt="">
          <div class="info-content">
            <div class="info-title">
              现代简约 明亮的背景
            </div>
            <div class="info-body">
              不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。不要简朴，不要素雅简朴卧室。
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          'id': 1,
          'url_add': '../assets/jj1.jpg'
        },
        {
          'id': 2,
          'url_add': '../assets/jj2.jpg'
        },
        {
          'id': 3,
          'url_add': '../assets/jj3.jpg'
        },
        {
          'id': 4,
          'url_add': '../assets/jj4.jpg'
        },
        {
          'id': 5,
          'url_add': '../assets/jj5.jpg'
        },
        {
          'id': 6,
          'url_add': '../assets/jj6.jpg'
        },
        {
          'id': 7,
          'url_add': '../assets/jj7.jpg'
        },
        {
          'id': 8,
          'url_add': '../assets/jj8.jpg'
        },
        {
          'id': 9,
          'url_add': '../assets/jj9.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.photolist-content{
  .info{
    list-style: none;
    margin: 0px;
    padding: 10px;
    padding-bottom: 0;
    li{
      background-color: #ccc;
      text-align: center;
      margin-bottom: 10px;
      box-shadow: 0 0 9px #999;
      position: relative;
      img{
       width: 100%;
       vertical-align: middle;
      }
      .info-content{
        color: #ffffff;
        text-align: left;
        position: absolute;
        bottom: 0;
        background-color: rgba($color: #000000, $alpha: 0.4);
        max-height: 84px;
        .info-title{
          font-size: 13px;
        }
        .info-body{
          font-size: 12px;
        }
      }
    }
  }
}
</style>
