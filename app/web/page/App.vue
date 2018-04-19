<template>
	<div v-loading.body.fullscreen.lock="loading">
		<NavMenu/>
		<div id="main">
			<router-view/>
		</div>
	</div>
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
	padding: 0;
	list-style: none;
}
li {
	line-height: 1.5rem;
}

.responsive-poster {
  width: 117px;
	height: 171px;
}
@media (min-width: 992px) {
  .responsive-poster {
    width: 270px;
		height: 403px;
  }
}
</style>

<style lang="stylus" scoped>
#main
	padding 20px
</style>

<style src="element-ui/lib/theme-chalk/menu.css"></style>
<style src="element-ui/lib/theme-chalk/menu-item.css"></style>
<style src="element-ui/lib/theme-chalk/button.css"></style>
<style src="element-ui/lib/theme-chalk/icon.css"></style>
<style src="element-ui/lib/theme-chalk/input.css"></style>
<style src="element-ui/lib/theme-chalk/loading.css"></style>
<style src="element-ui/lib/theme-chalk/message.css"></style>
<style src="element-ui/lib/theme-chalk/pagination.css"></style>
<style src="element-ui/lib/theme-chalk/rate.css"></style>
<style src="element-ui/lib/theme-chalk/tag.css"></style>
