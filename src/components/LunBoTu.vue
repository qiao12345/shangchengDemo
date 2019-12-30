<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in luobotuList" :key="item.url">
                <img :src="item.img" alt=''>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: ['luobotuList']
}
</script>

<style lang="scss" scoped>
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
</style>
