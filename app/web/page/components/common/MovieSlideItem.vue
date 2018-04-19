<template>
	<li>
		<router-link :to="{ path: `subject/${this.src.id}` }" :title="parsedTitle">
			<img class="responsive-poster" :src="src.images.small" :alt="src.title"/>
			<br>
			<span :alt="parsedTitle">{{ parsedTitle }}</span>
			<el-rate
			  :value="parsedRate"
			  disabled
			  show-score
			  text-color="#ff9900">
			</el-rate>
		</router-link>
	</li>
</template>

<script>
export default {
	name: 'MovieSlideItem',
	props: {
		src: {
			type: Object,
			default: null
		},
	},
	computed: {
		parsedRate () {
			return Number((this.src.rating.average / 2).toFixed(1))
		},
		parsedTitle () {
			const t = this.src.title
			const ot = this.src.original_title
			return (t === ot ? t : `${t} / ${ot}`)
		}
	}
}
</script>

<style lang="stylus" scoped>
li
	text-align center
	display block
	margin 20px 0

@media (min-width: 992px)
	li
		display inline-block
		margin 20px

a
	color black
span
	margin 5px 0
	display inline-block
	max-width 270px
	white-space nowrap
	overflow hidden
	text-overflow ellipsis
</style>