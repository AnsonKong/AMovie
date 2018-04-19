<template>
	<div class="main" v-if="src">
		<div class="center">
			<h1>
				<span>{{ `${src.title} / ${src.original_title}` }}</span>
				<span class="year">{{ `(${src.year})` }}</span>
			</h1>
			<p>
				<el-rate
				  :value="parsedRate"
				  disabled
				  show-score
				  text-color="#ff9900">
				</el-rate>
				<small>{{ src.ratings_count }}人评价</small>
			</p>
			<p>
				<img class="responsive-poster" :src="src.images ? src.images.large : ''"/>
			</p>
		</div>
		<ul class="info-list">
			<li>导演: 
				<Aka :src="src.directors" routeName="celebrity"/>
			</li>
			<li>主演: 
				<Aka :src="src.casts" routeName="celebrity"/>
			</li>
			<li>类型: 
				<Aka :src="src.genres"/>
			</li>
			<li>制片国家/地区: 
				<Aka :src="src.countries"/>
			</li>
			<li>又名: 
				<Aka :src="src.aka"/>
			</li>
			<li>
				{{ src.collect_count }}人看过 / {{ src.wish_count }}人想看
			</li>
		</ul>

		<h3 class="related-title">
			{{ src.title }}的剧情简介
		</h3>
		<p class="summary">
			{{ src.summary }}
		</p>
		
	</div>
</template>

<script>
import Aka from '../common/Aka.vue'

export default {
	name: 'Subject',
	data: function () {
		return {
			src: null,
		}
	},
	mounted () {
		this.loadApi()
	},
	props: [ 'api' ],
	methods: {
		loadApi () {
			const targetId = this.$route.params.id
			this.$jsonpHelper(this.api + targetId, null, (err, json) => {
				if (!err) this.src = json
			})
		},
	},
	computed: {
		parsedRate () {
			return Number((this.src.rating.average / 2).toFixed(1))
		}
	},
	components: {
		Aka
	}
}
</script>

<style lang="stylus" scoped>
.year
	color #888
.main
	width 100%
	margin 0 auto
@media (min-width: 992px)
	.main
		width 60%
.center
	text-align center
.summary
	text-indent 2rem
.related-title
	color #409EFF
	clear both
ul
	margin 0
.el-rate
	display inline-block
</style>
