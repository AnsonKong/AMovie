<template>
	<div>
		<ul>
			<MovieSlideItem v-for="item in src.subjects" :key="item.id" :src="item"/>
		</ul>
		<el-pagination
		  background
		  layout="prev, pager, next"
		  @current-change="onCurrentPageChange"
		  :page-size="pageSize"
		  :current-page="currentPage"
		  :total="src.total">
		</el-pagination>
	</div>
</template>

<script>
import MovieSlideItem from './MovieSlideItem.vue'

export default {
	name: 'MovieSlideList',
	data: function () {
		return {
			src: {},
			pageSize: 10
		}
	},
	computed: {
		currentPage () {
			return parseInt(this.$route.query.page || 1)
		}
	},
	props: [ 'api', 'page' ],
	mounted () {
		this.loadPage()
	},
	watch: {
		'$route': 'onRouteChange'
	},
	methods: {
		loadPage () {
			window.scrollTo(0, 0)
			this.$jsonpHelper(this.api, {
				start: (this.currentPage - 1) * this.pageSize,
				count: this.pageSize
			}, (err, json) => {
				if (!err) this.src = json
			})
		},
		onCurrentPageChange (targetPage) {
			this.$router.push({ query: { page: targetPage } })
		},
		onRouteChange (route) {
			this.loadPage()
		}
	},
	components: {
		MovieSlideItem
	}
}
</script>

<style lang="stylus" scoped>
div
	text-align center
ul
	padding 0
	margin 0
</style>