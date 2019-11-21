<template>
  <div id="app" class="app-container">
    <mt-header fixed title="qiao-Vue项目"></mt-header>

    <router-view/>
    <nav class="mui-bar mui-bar-tab">
			<router-link to='/' class="mui-tab-item" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link to='/qcontact' class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link to='/qcart' class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link to='/qsearch' class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<style lang="scss" scoped>
.app-container{
  padding: 40px 0px 50px 0px;
}
</style>
