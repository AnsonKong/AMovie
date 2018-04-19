<template>
	<div v-if="src">
		<h1>
			{{ src.name }} / {{ src.name_en }}
		</h1>
		<ul class="info-list">
			<li>性别: {{ src.gender }}</li>
			<li v-if="src.born_place">出生地: {{ src.born_place }}</li>
			<li v-if="src.aka_en && src.aka_en.length">更多外文名: 
				<Aka :src="src.aka_en"/>
			</li>
			<li v-if="src.aka && src.aka.length">更多中文名: 
				<Aka :src="src.aka"/>
			</li>
		</ul>
		<h3>
			最受好评的5部作品
		</h3>
		<ul class="list-rank">
			<MovieRankItem class="rank-item" v-for="item in src.works" :key="item.id" :src="item"/>
		</ul>
	</div>
</template>

<script>
import Aka from '../common/Aka.vue'
import MovieRankItem from '../common/MovieRankItem.vue'

export default {
	name: 'Celebrity',
	data: function () {
		return {
			src: null,
		}
	},
	mounted () {
		this.loadApi()
	},
	watch: {
		'$route': 'loadApi'
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
	components: {
		Aka,
		MovieRankItem
	}
}
</script>

<style lang="stylus" scoped>
.rank-item
	margin 10px 0
</style>
