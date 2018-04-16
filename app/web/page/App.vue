<template>
	<el-container v-loading.body.fullscreen.lock="loading">
		<el-header>
			<NavMenu/>
		</el-header>
		<el-main>
			<router-view/>
		</el-main>
	</el-container>
</template>

<script>
import NavMenu from './components/NavMenu.vue';

export default {
	name: 'App',
	computed: {
		loading () {
			return this.$store.state.loading
		}
	},
	components: {
		NavMenu
	}
}
</script>

<style>
html {
	font-size: 13px
}
body {
	margin: 0;
}
a {
	text-decoration: none;
	color: #409EFF
}
ul {
	list-style: none;
}
ol {
	list-style: none;
}
li {
	line-height: 1.5rem;
}
</style>

<style lang="stylus" scoped>
.el-header
	padding 0
</style>

<style src="element-ui/lib/theme-chalk/menu.css"></style>
<style src="element-ui/lib/theme-chalk/menu-item.css"></style>
<style src="element-ui/lib/theme-chalk/button.css"></style>
<style src="element-ui/lib/theme-chalk/container.css"></style>
<style src="element-ui/lib/theme-chalk/header.css"></style>
<style src="element-ui/lib/theme-chalk/icon.css"></style>
<style src="element-ui/lib/theme-chalk/input.css"></style>
<style src="element-ui/lib/theme-chalk/loading.css"></style>
<style src="element-ui/lib/theme-chalk/main.css"></style>
<style src="element-ui/lib/theme-chalk/message.css"></style>
<style src="element-ui/lib/theme-chalk/pagination.css"></style>
<style src="element-ui/lib/theme-chalk/rate.css"></style>
<style src="element-ui/lib/theme-chalk/tag.css"></style>
