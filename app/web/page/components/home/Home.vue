<template>
	<div>
		<h1>
			<router-link to="/in_theaters">
			正在上映
			</router-link>
		</h1>
		<ul v-if="in_theatersSrc">
			<MovieSlideItem v-for="item in in_theatersSrc.subjects" :key="item.id" :src="item"/>
		</ul>
		<h1>
			<router-link to="/coming_soon">
			即将上映
			</router-link>
		</h1>
		<ul v-if="coming_soonSrc">
			<MovieSlideItem v-for="item in coming_soonSrc.subjects" :key="item.id" :src="item"/>
		</ul>
	</div>
</template>

<script>
import MovieSlideItem from '../common/MovieSlideItem.vue'

export default {
	name: 'Home',
	data: function () {
		return {
			in_theatersSrc: null,
			coming_soonSrc: null
		}
	},
	mounted () {
		this.loadApi()
	},
	props: [ 'in_theatersApi', 'coming_soonApi' ],
	methods: {
		loadApi () {
			this.$jsonpHelper(this.in_theatersApi, {
				count: 5
			}, (err, json) => {
				if (!err) this.in_theatersSrc = json
			})

			this.$jsonpHelper(this.coming_soonApi, {
				count: 5
			}, (err, json) => {
				if (!err) this.coming_soonSrc = json
			})
		},
	},
	components: {
		MovieSlideItem
	}
}
</script>
