<template>
  <div class="qhome">
	<!-- 轮播图组件 -->
	<lunbotu :luobotuList = "luobotuList"></lunbotu>
	<!-- 九宫格区域 -->
	<ul class="mui-table-view mui-grid-view mui-grid-9">
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
			<router-link to="/qhome/newslist">
				<img src="../assets/menu1.png" alt="">
				<div class="mui-media-body">新闻资讯</div>
			</router-link>
		</li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
			<router-link to="/qhome/photolist">
				<img src="../assets/menu2.png" alt="">
				<div class="mui-media-body">图片分享</div>
			</router-link>
		</li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
			<router-link to="/qhome/shoppinglist">
				<img src="../assets/menu3.png" alt="">
				<div class="mui-media-body">商品购买</div>
			</router-link>
		</li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
			<a href="#">
				<img src="../assets/menu4.png" alt="">
				<div class="mui-media-body">留言反馈</div>
			</a>
		</li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
			<a href="#">
				<img src="../assets/menu5.png" alt="">
				<div class="mui-media-body">视频专区</div>
			</a>
		</li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
			<a href="#">
				<img src="../assets/menu6.png" alt="">
				<div class="mui-media-body">联系我们</div>
			</a>
		</li>
	</ul>
  </div>
</template>

<script>
// import { Toast } from 'mint-ui'
import lunbotu from '../components/LunBoTu.vue'
export default {
  name: 'qhome',
  data () {
    return {
      luobotuList: [
        { url: 'www.baidu.com', img: '../assets/001.png' },
        { url: 'www.imooc.com', img: '../assets/002.jpg' },
        { url: 'www.runoob.com', img: '../assets/003.jpg' }
      ]
    }
  },
  components: {
    lunbotu
  },
  created () {
    // this.getLuobotu()
  },
  methods: {
    // 请求轮播图方法
    // getLuobotu () {
    //   this.$http.get('http://vue.studyit.io/api/getlunbo').then(result => {
    //     if (result.body.status === 0) {
    //       this.luobotuList = result.body.message
    //     } else {
    //       Toast('请求失败')
    //     }
    //   })
    // }
  }
}
</script>

<style lang="scss" scoped>

.mui-grid-view.mui-grid-9{
	background: #ffffff;
	border: none;
	img{
		width: 60px;
		height: 60px;
	}
	.mui-media-body{
		font-size: 13px;
	}
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
	border: none;
}
</style>
