<template>
  <view>
    <view class="goods-container" @click="clickHandler">
      <image :src="goodPath" class="img"></image>
      <view class="box">
        <text>{{goodName}}</text>
        <image src="../../static/storge.png" class="photo"></image>
      </view>
      <view class="number">
         <view class="rmb">￥</view>
      <view class="price">{{goodPirce}}</view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name:"my-goods",
    props:{
      goodPath:String,
      goodName:String,
      goodPirce:Number
    },
    data() {
      return {
      };
    },
    methods:{
      clickHandler(){
        uni.navigateTo({
          url:'/subpkg/goods/goods?path='+this.goodPath
        })
      }
    },
  }
</script>

<style lang="scss">
.goods-container{
  width: 175px;
  height: 220px;
  opacity: 1;
  border-radius: 10px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 4px 0px rgba(18, 38, 41, 0.25);
  position: relative;
  .img{
    width: 100%;
    height: 150px;
  }
  .box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:5px 10px;
    .photo{
      width:28px;
      height:28px;
    }
  }
  .number{
    display: flex;
    flex-wrap: nowrap;
    position: absolute;
    bottom: 0;
    left: 5px;
    .rmb{
      color: #C00000;
      font-size: 20px;
      font-weight: 300;
    }
    .price{
      color: #C00000;
      font-size: 22px;
      font-weight: 300;
    }
  }
}
</style>