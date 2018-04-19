<template>
	<div>
		<div id="input-container">
			<el-input
			  placeholder="请输入关键字"
			  v-model="keyword"
			  clearable>
			</el-input>
			<el-button type="primary" icon="el-icon-search" :loading="searching" @click="onSearch">搜索</el-button>
		</div>
		<template v-if="src">
			<h1>
				{{ src.title }}，共有 {{ src.total }} 条结果
			</h1>
			<ul>
				<MovieRankItem v-for="item in src.subjects" :key="item.id" :src="item"/>
			</ul>
			<el-pagination
			  background
			  layout="prev, pager, next"
			  @current-change="onCurrentPageChange"
			  :page-size="pageSize"
			  :current-page="currentPage"
			  :total="src.total">
			</el-pagination>
		</template>
	</div>
</template>

<script>
import MovieRankItem from '../common/MovieRankItem.vue'

export default {
	name: 'Search',
	data: function () {
		return {
			searching: false,
			src: null,
			pageSize: 10,
			keyword: '',
		}
	},
	props: [ 'api' ],
	mounted () {
		this.keyword = this.$route.query.q
		this.loadPage()
	},
	computed: {
		currentPage () {
			return parseInt(this.$route.query.page || 1)
		}
	},
	watch: {
		'$route': 'onRouteChange'
	},
	methods: {
		onSearch () {
			if (this.keyword) {
				this.$router.push({ 
					query: { 
						q: this.keyword
					} 
				})
			} else {
				this.$message({
	        message: '请输入搜索关键字',
				})
			}
		},
		loadPage () {
			if (this.$route.query.q) {
				window.scrollTo(0, 0)
				this.searching = true

				this.$jsonpHelper(this.api, {
					q: this.$route.query.q,
					start: (this.currentPage - 1) * this.pageSize,
					count: this.pageSize
				}, (err, json) => {
					if (!err) this.src = json
					this.searching = false
				})
			}
		},
		onCurrentPageChange (targetPage) {
			this.$router.push({ 
				query: { 
					q: this.$route.query.q,
					page: targetPage,
				} 
			})
		},
		onRouteChange (route) {
			this.loadPage()
		}
	},
	components: {
		MovieRankItem
	}
}
</script>

<style lang="stylus" scoped>
#input-container
	text-align center
.el-input
	display block
	margin-bottom 10px
@media (min-width: 992px)
	.el-input
		width 300px
		display inline-block
		margin-bottom 0
	#input-container
		text-align left
ul
	padding 0
</style>
