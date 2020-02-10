<template>
	<div class="wrap" id="app">
		<div class="content">
			<div class="details" v-for="(item,i) in messageBoardVoList" :key="i">
				<p class="big-title">{{item.createTime}}</p>
				<p class="small-title">{{item.message}}</p>
				<p class="nickname"><span>选手：{{item.userName}}</span></p>
				<p class="number"><span>编号：{{item.messageBoardId}}号</span></p>
			</div>

		</div>
		<footer class="clearfix">
			<img src="../assets/xtb_logo.png" class="logo">
			<div class="app">下载雪托帮APP为他投票</div>
			<a href="javascript:void(0)" class="download" id="openApp">下载</a>
		</footer>
	</div>
</template>

<script>
	export default {
		name: 'HelloWorld',
		data() {
			return {
				page: 1,
				activePage: 1,
				activePageSize: 10,
				tableData: [],
				messageBoardVoList:[]
			}
		},
		methods: {

		},
		mounted: function() {
			var params = new URLSearchParams()
			params.append('page', '1'),
			axios.post('/api/messageBoard/getMessageBoardList.do', params, {
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					'appHeader': '{"openId":"owUFH41TM67cYMfRc7rVE56gJpH8"}'
				}
			})
			.then(function(res) {
				 this.messageBoardVoList= res.data.messageBoardVoList
				  console.log(this.messageBoardVoList)
				//控制台打印请求成功时返回的数据
				//bind(this)可以不用
			}.bind(this))
			.catch(function(err) {
				if (err.response) {
					console.log(err.response)
					//控制台打印错误返回的内容
				}
				//bind(this)可以不用
			}.bind(this))
		}
	}
</script>

<style scoped>
	/* scoped  限制在此组件 */

	* {
		padding: 0;
		margin: 0;
	}

	.clearfix:after {
		content: ".";
		display: block;
		height: 0;
		clear: both;
		visibility: hidden;
	}

	.clearfix {
		display: inline-block;
	}

	* html .clearfix {
		height: 1%;
	}

	body {
		overflow: hidden;
	}

	.clearfix {
		display: block;
	}

	.wrap {
		height: 100vh;
		background: url(../assets/xtb_share_bg.png) no-repeat;
		background-size: cover;
		padding-top: 0.94rem;

	}

	.content {
		width: 13.58rem;
		height: 72%;
		margin: 0 auto;
		background: url(../assets/xtb_share.png) no-repeat;
		background-size: 100% 100%;
		padding-top: 1.54rem;
	}

	.avatar {
		width: 2.8rem;
		height: 2.8rem;

		border-radius: 50%;
		margin: 0 auto;
		overflow: hidden;
	}

	.avatar img {
		width: 100%;
		height: 100%;
	}

	.details {
		text-align: center;
	}

	.big-title {
		font-size: 0.96rem;
		font-family: MFLangQian_Noncommercial-Regular;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		margin: 0.72rem auto 0.6rem;
		color: #333;
		text-align: center;
	}

	.small-title {
		font-size: 0.8rem;
		font-family: PingFang-SC-Regular;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		color: #333;
		text-align: center;
	}

	.line {
		width: 1.2rem;
		height: 0.16rem;
		background: rgba(132, 242, 255, 1);
		border-radius: 4px;
		display: block;
		margin: 0.74rem auto 0.92rem;
	}

	.nickname {
		font-size: 0.6rem;
		color: #333;
		margin-bottom: 0.2rem;
	}

	.nickname span {
		display: inline-block;
		text-align: left;
	}

	.number {
		font-size: 0.6rem;
		color: #333;
	}

	.number span {
		display: inline-block;
		text-align: left;
	}

	footer {
		width: 100%;

		background: rgba(51, 51, 51, 0.71);
		position: fixed;
		bottom: 0;
		color: #fff;
		padding: 0.38rem 0;


	}

	.logo {
		width: 1.6rem;
		height: 1.6rem;
		float: left;
		margin-right: 0.56rem;
		padding-left: 0.6rem;
	}

	.app {
		float: left;
		padding-top: 0.45rem;
		font-size: 0.6rem;

	}

	.download {
		width: 2.6rem;
		height: 1.24rem;
		line-height: 1.24rem;
		background: linear-gradient(-85deg, rgba(39, 130, 245, 1), rgba(83, 158, 255, 1));
		box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.11);
		border-radius: 6px;
		text-decoration: none;
		font-size: 0.6rem;
		font-family: PingFang-SC-Regular;
		color: rgba(255, 255, 255, 1);
		display: block;
		float: right;
		margin-right: 0.6rem;
		text-align: center;
		position: relative;
		top: 0.2rem;
	}

	.video {
		width: 10.6rem;
		height: 6rem;
		border-radius: 0.2rem;
		overflow: hidden;
		margin: 0.88rem auto;
	}

	.video video {
		width: 100%;
		height: 100%;
		border-radius: 0.2rem;

	}
</style>
