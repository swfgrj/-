<template>
  <view>
    <view v-if="!isShowMask">
      <swiper :indicator-dots="true" :autoplay="true" :interval="1500" :duration="1000" :circular="true" class="swiper-container" >
        <swiper-item class="swiper-item">
          <image src="../../static/20221014184711.png" class="img" mode="aspectFill"></image>
        </swiper-item>
        <swiper-item class="swiper-item">
          <image src="../../static/20221014184655.png" class="img" mode="aspectFill"></image>
        </swiper-item>
      </swiper>
    </view> 
    
    <view class="search-container">
       <input confirm-type="search" type="text" placeholder="搜索二手物品的名称或相关标签" placeholder-class="ph" @input="inputHandler" :value="inputValue" @focus="showMask" @blur="HideMask" style="display: block;width: 270px;">
        <uni-icons type="search" size="30" class="icon" @click="gotoSearch"></uni-icons>
      </view>
    
    <view class="goods-list" v-if="!isShowMask" :style="{height:wh+'px'}">
      <my-goods class="goods-item" @click="gotoGoods" goodPath="/static/156be91c3a36b70d8f316d56cb999a8.png" goodName="台灯" goodPirce="26"></my-goods>
      <my-goods class="goods-item" @click="gotoGoods" goodPath="/static/aed0bc67c4029a90559478ae9162ee8.png" goodName="自行车" goodPirce="210"></my-goods>
      <my-goods class="goods-item" @click="gotoGoods" goodPath="/static/b53ac8872afc2b78bdc324e336c01c1.png" goodName="电脑" goodPirce="1800"></my-goods>
      <my-goods class="goods-item" @click="gotoGoods" goodPath="/static/20221014184703.png" goodName="洗衣机" goodPirce="114514"></my-goods>
      <my-goods class="goods-item" @click="gotoGoods" goodPath="/static/db58535aa368af966ccf575a4f48efe.png" goodName="8848钛金手机" goodPirce="8848"></my-goods>
      <my-goods class="goods-item" @click="gotoGoods"></my-goods>
      <my-goods class="goods-item" @click="gotoGoods"></my-goods>
      <my-goods class="goods-item" @click="gotoGoods"></my-goods>
    </view>
    
    <view v-if="!isShowMask">
       <tab-bar pagePath="pages/home/home"></tab-bar>
    </view>
   
    <view class="mask" v-if="isShowMask">
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        inputValue:'',//保存输入框输入内容
        isShowMask:false,
        wh:0//屏幕可获取的高度
      };
    },
    onLoad(){
        const sysInfo=uni.getSystemInfoSync()//得到设备信息的接口
        this.wh=sysInfo.windowHeight-230//获取屏幕的可以高度，减去搜索框的高度
      },
    methods:{
      gotoGoods(){
        console.log(1);
      },
      inputHandler(e){
        this.inputValue=e.detail.value
      },
      gotoSearch(){
        if(this.inputValue==='')
        {
          uni.showToast({
            title:'您输入的搜索内容为空',
            duration:600,
            icon:'none'
          })
          return
        }
        this.inputValue=''
        uni.navigateTo({
          url:'/subpkg/search/search'
        })
      },
      showMask(){
        this.isShowMask=true
      },
      HideMask(e){
        this.isShowMask=false
        this.inputValue=''
      }
    }
  }
</script>

<style lang="scss">
.swiper-container{
   width: 100%;
   height: 230px;
  .swiper-item{
   width: 100%;
   height: 230px;
   .img{
     width:100%;
     height:100%;
   }
  }
}
.wx-swiper-dots{//设置小圆点的位置，这个为小圆点的父类
  position: absolute;
  top:150px;
  z-index:998;
}
.search-container{
  position:absolute;
  top:170px;
  left:50%;
  transform: translate(-50%,0);
  z-index: 998;
  width: 310px;
  height: 46px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 4px 0px rgba(76, 88, 94, 0.25);
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
}

.goods-list{
  width: 100%;
  margin: 10px auto;
  padding: 0 5rpx;
  padding-bottom: 20rpx;
  box-sizing: border-box;
  overflow:auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .goods-item{
    float: left;
    margin: 14rpx auto;
  }
}

.mask{
  width:100%;
  height:1500rpx;
  background-color: #000;
  opacity: 0.5;
}
</style>
