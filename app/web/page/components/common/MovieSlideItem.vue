<template>
	<li>
		<router-link :to="{ path: `subject/${this.src.id}` }" :title="parsedTitle">
			<img :src="src.images.small" :width="imgWidth" :height="imgHeight" :alt="src.title"/>
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
		imgWidth: {
			type: String,
			default: '270px'
		},
		imgHeight: {
			type: String,
			default: '403px'
		}
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
	margin 20px
	display inline-block
a
	color black
img
	display block
span
	margin 10px 0
	display block
	width 270px
	white-space nowrap
	overflow hidden
	text-overflow ellipsis
</style>