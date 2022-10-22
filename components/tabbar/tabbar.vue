<template>
	<view>
		<view class="uni-tabbar">
		<!-- //遍历tabbar -->
			<view class="uni-tabbar__item" v-for="(item,index) in tabbar" :key="index" @tap="changeTab(item)">
				<view class="uni-tabbar__bd" v-if="index!==1">
					<view class="uni-tabbar__icon">
					<!-- //判断tabbar点击过后的图片路径 -->
						<image  class="icon-img" :src="item.selectedIconPath" mode="aspectFit" v-if="item.pagePath == pagePath"></image>
						<image  class="icon-img" mode="aspectFit" :src="item.iconPath" v-else></image>
					</view>
				</view>
         <navigator class="publish-circle" v-else url="../../subpkg/publish/publish">
          <view class="inner-circle">
             <image class="img" src="../../static/tab-icons/publish.png"></image>
          </view>
        </navigator>
			</view>
		</view>
	</view>
</template>


<script>
	export default {
    props:{
      pagePath:String
    },
		data() {
			return {
				// page: '',
				showPage: false,
				containerHeight: 400,
				//公共的tabbar
				tabbar: [
               {
                  "pagePath": "pages/home/home",
                  "iconPath": "/static/tab-icons/home.png",
                  "selectedIconPath":"/static/tab-icons/homeSelected.png"
                },
                {
                  "pagePath": "subpkg/publish/publish",
                  "iconPath": "/static/tab-icons/publish.png",
                  "selectedIconPath": "/static/tab-icons/publish.png"
                },
                {
                  "pagePath": "pages/ my/ my",
                  "iconPath": "/static/tab-icons/my.png",
                  "selectedIconPath": "/static/tab-icons/mySelected.png"
                }
			
				]
			};
		},
		watch: {
			pagePath: {
				handler(pagePath) {
					console.log(pagePath)
				},
				immediate: true
			}
		},
		methods: {
			changeTab(item) {
				this.page = item.pagePath;
				// 使用reLaunch关闭所有的页面，打开新的栏目页面
				// console.log(item.pagePath)
				// console.log(this.page)
				uni.switchTab({
					url: '/' + this.page,
				});
			},
		}
	}
</script>

<style lang="scss">
	.uni-tabbar {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 999;
		width: 100%;
		display: flex;
		justify-content: space-around;
		height: 100rpx;
		padding: 16rpx 0;
		box-sizing: border-box;
		border-top: solid 1rpx #ccc;
		background-color: #fff;
		box-shadow: 0px 0px 17rpx 1rpx rgba(206, 206, 206, 0.32);

		.uni-tabbar__item {
			display: block;
			line-height: 40rpx;
			font-size: 40rpx;
			text-align: center;
			width: 25%;
		}

		.uni-tabbar__icon {
			height: 40px;
			line-height: 40px;
			text-align: center;
      margin-bottom: 4rpx;
		}

		.icon {
			display: inline-block;
		}

		.uni-tabbar__label {
			line-height: 24rpx;
			font-size: 24rpx;
			color: #999;

		}

		.icon-img {
			height: 34px;
			width: 46px;
		}
	}
  
  
    .publish-circle{
      width: 130rpx;
      height: 130rpx;
      background-color: #fff;
      box-shadow: 0 0 3px 0 #ccc;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      bottom: 25px;
      left:15px;
      .inner-circle{
        width: 100rpx;
        height: 100rpx;
        background-color: greenyellow;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        .img{
          width: 70%;
          height: 70%;
        }
      }
    }
</style>

