<template>
	<div v-if="src">
		<h1>
			{{ src.date }} {{ src.title }}
		</h1>
		<ol>
			<MovieRankItem class="rank-item" v-for="item in src.subjects" :key="item.id" :src="item"/>
		</ol>
	</div>
</template>

<script>
import MovieRankItem from './MovieRankItem.vue'
export default {
	name: 'MovieRankList',
	data: function () {
		return {
			src: null
		}
	},
	props: [ 'api' ],
	mounted () {
		this.loadRank()
	},
	methods: {
		loadRank () {
			this.$jsonpHelper(this.api, null, (err, json) => {
				if (!err) this.src = json
			})
		}
	},
	components: {
		MovieRankItem
	}
}
</script>

<style lang="stylus" scoped>
h1
	text-align center
.rank-item
	margin 10px 0
</style>