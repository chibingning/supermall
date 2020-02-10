<template>
	<div id="app">
    <h2>我是选项卡</h2>
    <div>我是选项卡</div>
	</div>
</template>

<script>
	export default {
		name: 'tab',
		data() {
			return {

			}
		},
		methods: {

		}

	}
</script>

<style scoped>
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


</style>
