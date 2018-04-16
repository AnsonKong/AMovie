<template>
	<el-menu :default-active="activeIndex"
	  mode="horizontal"
	  :router="true">
		  <el-menu-item index="/">首页</el-menu-item>
		  <el-menu-item index="/in_theaters">正在上映</el-menu-item>
		  <el-menu-item index="/coming_soon">即将上映</el-menu-item>
		  <el-menu-item index="/top250">Top250</el-menu-item>
		  <el-menu-item index="/us_box">北美票房榜</el-menu-item>


			<el-menu-item class="menu-item-right" index="/about">关于</el-menu-item>
			<el-menu-item class="menu-item-right" index="/search">搜索</el-menu-item>
	</el-menu>
</template>

<script>
export default {
	name: 'NavMenu',
	computed: {
		activeIndex () {
			return this.$route.path
		}
	},
}
</script>

<style lang="stylus" scoped>
.menu-item-right
	float right
</style>