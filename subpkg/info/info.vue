<template>
  <view>
    <view class="info-container">
      <view class="info-item">
        <image src="/static/logo.png" class="img"></image>
        <view class="box">
          <view class="name">wx_e24tgwerr4vf3e3</view>
          <view class="message">你好</view>
        </view>
        <view class="badge">
          <uni-badge size="normal" :text="100" type="error">
          </uni-badge>
       </view>
      </view>
      <view class="info-item">
        <image src="/static/logo.png" class="img"></image>
        <view class="box">
          <view class="name">wx_e24tgwerr4vf3e3</view>
          <view class="message">你好</view>
        </view>
        <view class="badge">
          <uni-badge size="normal" :text="100" type="error">
          </uni-badge>
       </view>
      </view>
      <view class="info-item">
        <image src="/static/logo.png" class="img"></image>
        <view class="box">
          <view class="name">wx_e24tgwerr4vf3e3</view>
          <view class="message">你好</view>
        </view>
        <view class="badge">
          <uni-badge size="normal" :text="100" type="error">
          </uni-badge>
       </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      };
    }
  }
</script>

<style lang="scss">
.info-container{
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  .info-item{
    width: 100%;
    height: 70px;
    background-color: #fff;
    display: flex;
    align-items: center;
    padding-left: 8px;
    margin-bottom: 8px;
    position: relative;
    .img{
      width:47px;
      height:42px;
      border-radius:50%;
      margin-right: 12px;
    }
    .box{
      display: flex;
      flex-direction: column;
      .name{
        font-size: 18px;
        color: rgba(0, 0, 0, 1);
        margin-bottom: 5px;
      }
      .message{
        font-size: 14px;
        color: rgba(89, 89, 89, 1);
      } 
    }   
   .badge{
    display: flex;
    align-items: center;
    position: absolute;
    top:20px;
    right: 20px;
    }
  }
}
</style>
