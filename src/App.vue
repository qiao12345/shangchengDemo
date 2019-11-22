<template>
  <div id="app" class="app-container">
	<!-- 头部 -->
    <mt-header fixed title="qiao-Vue项目"></mt-header>
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
			<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
			<span class="mui-tab-label">购物车</span>
		</router-link>
		<router-link class="mui-tab-item" to='/qsearch'>
			<span class="mui-icon mui-icon-search"></span>
			<span class="mui-tab-label">搜索</span>
		</router-link>
	</nav>
  </div>
</template>

<style lang="scss" scoped>
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
