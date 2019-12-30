<template>
  <div id="app" class="app-container">
	<!-- 头部 -->
	<mt-header fixed title="qiao-Vue项目">
		<span slot="left">
			<mt-button icon="back" @click="goback" v-show="backtxt">返回</mt-button>
		</span>
		<mt-button icon="more" slot="right"></mt-button>
	</mt-header>
	<!-- 显示区域 -->
	<transition>
		<router-view/>
	</transition>
	<!-- 底部菜单栏 -->
    <nav class="mui-bar mui-bar-tab">
		<router-link class="mui-tab-item" to='/qhome'>
			<span class="mui-icon mui-icon-home"></span>
			<span class="mui-tab-label">首页</span>
		</router-link>
		<router-link class="mui-tab-item" to='/qcontact'>
			<span class="mui-icon mui-icon-contact"></span>
			<span class="mui-tab-label">会员</span>
		</router-link>
		<router-link class="mui-tab-item" to='/qcart'>
			<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">{{ msgaa }}</span></span>
			<span class="mui-tab-label">购物车</span>
		</router-link>
		<router-link class="mui-tab-item" to='/qsearch'>
			<span class="mui-icon mui-icon-search"></span>
			<span class="mui-tab-label">搜索</span>
		</router-link>
	</nav>
  </div>
</template>

<script>
import store from '@/store'
export default {
  store,
  data () {
    return {
      msgaa: this.$store.state.count,
      backtxt: false
    }
  },
  created () {
    this.backtxt = this.$route.path !== '/qhome'
  },
  methods: {
    goback () {
      this.$router.go(-1)
    }
  },
  watch: {
    '$route.path': function (newval) {
      if (newval === '/qhome') {
        this.backtxt = false
      } else {
        this.backtxt = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mint-header{
	z-index: 999;
}
.app-container{
  padding: 40px 0px 50px 0px;
  overflow-x: hidden;
}
.v-enter{
	opacity: 0;
	transform: translateX(100%);
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,.v-leave-active{
	transition: all 0.5s ease;
}
</style>
