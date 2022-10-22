<template>
  <view>
    <view class="good-item">
      <swiper :indicator-dots="true" :autoplay="true" :interval="2000" :duration="1000" :circular="true" class="swiper-container">
        <swiper-item>
          <image :src="path" style="width: 100%;height: 100%;" mode="aspectFill"></image>
        </swiper-item>
        <swiper-item>
          <image :src="path" style="width: 100%;height: 100%;" mode="aspectFill"></image>
        </swiper-item>
        <swiper-item>
          <image :src="path" style="width: 100%;height: 100%;" mode="aspectFill"></image>
        </swiper-item>
      </swiper>
      <view class="box1">
        <view class="box1-son1">
          <view class="price">￥360</view>
          <view class="self-info">
            <image src="/static/logo.png" class="img"></image>
            <text class="text">昵称</text>
          </view>
        </view>
        <view class="box1-son2">
          <input type="text" placeholder="物品简介" placeholder-class="ph" disabled="true"/>
          <text style="text-overflow: ellipsis;font-size: 17px;">xxx</text>
        </view>
      </view>
      <view class="box2">
        <view class="good-detail">
          <input type="text" placeholder="物品详情" placeholder-class="ph" disabled="true"/>
          <textarea class="text">xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</textarea>
        </view>
        <view class="location">
          <image src="../../static/location.png" style="width: 30px;height: 30px;margin-right: 15px;"></image>
          <text>地点</text>
        </view>
      </view>
    </view>
    <view class="bottom-box">
      <view class="save">
        <image src="../../static/ToSave.png" class="img"></image>
        <text>收藏</text>
      </view>
      <view class="commuication">
        <image src="" class="img"></image>
        <text>沟通</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        path:''
      };
    },
    onLoad(e) {
      console.log(e.path);
      this.path=e.path;
    }
  }
</script>

<style lang="scss">
.good-item{
  width: 96%;
  height: 550px;
  margin: 0 auto;
  overflow: scroll;
  border-radius: 25px;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  .swiper-container{
    width:100%;
    height:210px;
  }
  .box1{
    width: 100%;
    height: 90px;
    border-bottom: 2px solid #efefef;
    padding: 5px;
    .box1-son1{
      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      align-items: center;
      padding: 0 5px;
      width: 100%;
      height: 40%;
      .price{
        width: 50%;
        height: 100%;
        color: #C00000;
        opacity: 0.9;
        font-size: 25px;
      }
      .self-info{
        width: 50%;
        height: 100%;
        font-size: 14px;
        font-weight: 400;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        .img{
          width:36px;
          height:36px;
          border-radius:50%;
          margin-right: 10px;
        }
     }
    }
    .box1-son2{
      margin-top: 10px;
      margin-left: 10px;
      color: rgba(0, 0, 0, 1);
      .ph{
         font-size: 24px;
        font-weight: 700;
        color: rgba(0, 0, 0, 1);
      }
    }
  }
  .box2{
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    position: relative;
    padding-top: 10px;
    .good-detail{
      width: 96%;
      height: 200px;
      font-size: 22px;
      margin: 0 auto;
      margin-bottom: 5px;
      .ph{
       font-size: 22px;
       font-weight: 400;
       color: rgba(0, 0, 0, 1);
      }
      .text{
        display: block;
        width: 100%;
        height: 80%;
        word-break: break-all;
        overflow: scroll;
        text-overflow: ellipsis;
      }
    }
    .location{
      position:absolute;
      bottom:5px;
      left:6px;
      display: flex;
      align-items: center;
      font-size: 15px;
      color:aquamarine;
    }
  }
}
.bottom-box{
  position:fixed;
  bottom: 0;
  width: 100%;
  height: 56px;
  background: rgba(255, 255, 255, 1);
  border-radius: 0 0 20px 20px;
  box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.25);
  .save{
    width: 50%;
    height: 100%;
    float: left;
    display: flex;
    justify-content: center;
    align-items: center;
    .img{
      width: 30%;
      height: 50%;
      margin-left: 8px;
    }
  }
  .commuication{
    width: 50%;
    height: 100%;
    float: left;
    background: rgba(176, 81, 81, 1);
    border-radius:0 0 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .img{
      width: 30%;
      height: 50%;
      margin-left: 8px;
    }
  }
}
</style>
