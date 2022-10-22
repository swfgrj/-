<template>
  <view>
    <view class="login" @click="getUserProfile">
      <image :src="userinfo.avatarUrl" class="img"></image>
      <view class="name">{{userinfo.nickName}}</view>
    </view>
    <view class="userinfo">
      <view class="history">
        <view class="inner-box">
          <image src="../../static/history.png" class="img"></image>
          <text>历史</text>
        </view>
        <uni-icons type="right" size="20" color="rgb(204,204,204)"></uni-icons>
      </view>
      <navigator class="info" url='/subpkg/info/info'>
        <view class="inner-box">
          <image src="../../static/info.png" class="img"></image>
          <text>我的信息</text>
        </view>
        <uni-icons type="right" size="20" color="rgb(204,204,204)"></uni-icons>
      </navigator>
      <view class="save">
        <view class="inner-box">
          <image src="../../static/save.png" class="img"></image>
        <text>收藏</text>
        </view>
        <uni-icons type="right" size="20" color="rgb(204,204,204)"></uni-icons>
      </view>
      <view class="about-us">
        <view class="inner-box">
            <image src="../../static/about.png" class="img"></image>
            <text>关于</text>
        </view>
        <uni-icons type="right" size="20" color="rgb(204,204,204)"></uni-icons>
      </view>
    </view>
    
    <view>
      <tab-bar pagePath="pages/ my/ my"></tab-bar>
    </view>
  </view>
</template>

<script>
  import {mapMutations,mapState} from 'vuex'
  
  export default {
    data() {
      return {
        
      };
    },
    computed:{
      ...mapState('m_user',['userinfo']),
    },
    methods:{
      ...mapMutations('m_user',['updateUserInfo']),
      //用户授权后，获取用户基本信息
      getUserProfile(){
        //如果不为空对象就返回
        if(Object.keys(this.userinfo).length!==0) return
        uni.getUserProfile({
          desc:"获取你的昵称、头像、地区及性别",
          success:(res)=>{
            this.updateUserInfo(res.userInfo)
          },
          fail:()=>{
            uni.showToast({
              title:'您取消了登录授权',
              duration:500,
              icon:'none'
            })
          }
        })
      }
    }
  }
</script>

<style lang="scss">
.login{
  width: 100%;
  height: 220px;
  position: relative;
  background: rgba(167, 209, 146, 0.2);
  .img{
    width: 95px;
    height: 95px;
    position: absolute;
    top:80px;
    left:20px;
    border-radius: 50%;
    box-shadow: 4px 5px 6px 0px rgba(0, 0, 0, 0.25);
  }
  .name{
    position: absolute;
    top:130px;
    right:170px;
    font-size: 20px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }
}
.userinfo{
  position: relative;
  top:-20px;
  left:0;
  width: 96.5%;
  height:350px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 20px;
  padding-top: 10px;
  .history,
  .info,
  .save,
  .about-us{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:320px;
    height:65px;
    border-radius: 20px;
    box-shadow: 0px 1px 4px 0px rgba(34, 41, 43, 0.25);
    margin: 15px auto;
    background-color: #fff;
    padding-right: 5px;
  }
}
.inner-box{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    height: 100%;
    .img{
    width: 50px;
    height: 50px;
    vertical-align: middle;
  }
}
.info .inner-box{
  width: 70%;
}
</style>
