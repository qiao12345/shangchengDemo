<template>
  <div class="shop_content">
      <router-link to="/qhome/shoppinglistinfo/1" class="shop_item" tag="div">
        <img src="../shoppingImg/20191210103326.jpg" alt="">
        <h1>小米（Mi）小米Note 16G双网通版</h1>
        <div class="info">
            <p class="sprice">
                <span class="now">￥888</span>
                <span class="old">￥2699</span>
            </p>
            <p class="infomsg">
                <span class="msgleft">热卖中</span>
                <span class="msgright">剩余60件</span>
            </p>
        </div>
      </router-link>
      <router-link to="/qhome/shoppinglistinfo/2" class="shop_item" tag="div">
        <img src="../shoppingImg/20191210103326.jpg" alt="">
        <h1>小米（Mi）小米Note 16G双网通版小米Note 16G双网通版</h1>
        <div class="info">
            <p class="sprice">
                <span class="now">￥888</span>
                <span class="old">￥2699</span>
            </p>
            <p class="infomsg">
                <span class="msgleft">热卖中</span>
                <span class="msgright">剩余60件</span>
            </p>
        </div>
      </router-link>
      <router-link to="/qhome/shoppinglistinfo/3" class="shop_item" tag="div">
        <img src="../shoppingImg/20191210103326.jpg" alt="">
        <h1>小米（Mi）小米Note 16G双网通版</h1>
        <div class="info">
            <p class="sprice">
                <span class="now">￥888</span>
                <span class="old">￥2699</span>
            </p>
            <p class="infomsg">
                <span class="msgleft">热卖中</span>
                <span class="msgright">剩余60件</span>
            </p>
        </div>
      </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.shop_content{
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    justify-content: space-between;
    .shop_item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 3px #ccc;
        padding: 3px;
        margin: 3px 0px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 254px;
        h1{
            padding: 3px;
            font-size: 12px;
            font-weight: bold;
        }
        img{
            width: 100%;
        }
        .info{
            padding: 3px;
            background-color: #edeaed;
            p{
                margin: 0;
            }
            .now{
                color: #ce5c53;
                font-weight: bold;
                font-size: 16px;
            }
            .old{
                margin-left: 15px;
                font-size: 12px;
                font-weight: bold;
                text-decoration: line-through;
            }
        }
        .infomsg{
            font-size: 12px;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>
