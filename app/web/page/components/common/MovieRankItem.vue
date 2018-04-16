<template>
	<table>
		<tbody>
			<tr>
				<td valign="top">
					<router-link class="info-pic" :to="parsedTo" :title="parsedTitle">
						<img :src="realSubject.images.small" width="115px" height="171px" :alt="realSubject.title"/>
					</router-link>
				</td>
				<td valign="top">
					<ul class="info-list">
						<li>
							<router-link :to="parsedTo" :title="parsedTitle">
								<span :alt="parsedTitle">{{ parsedTitle }}</span>
							</router-link>
							<span class="year">{{ `(${realSubject.year})` }}</span>
							<el-tag v-if="src.new" size="mini">新上映</el-tag>
						</li>
						<li v-if="src.rank">
							<span>排名: {{ src.rank }}</span>
						</li>
						<li v-if="src.box">
							<span>票房: {{ src.box }}</span>
						</li>
						<li>类型: 
							<Aka :src="realSubject.genres"/>
						</li>
						<li v-if="realSubject.directors && realSubject.directors.length">导演: 
							<Aka :src="realSubject.directors" routeName="celebrity"/>
						</li>
						<li v-if="realSubject.casts && realSubject.casts.length">主演: 
							<Aka :src="realSubject.casts" routeName="celebrity"/>
						</li>
						<li>
							<el-rate
							  :value="parsedRate"
							  disabled
							  show-score
							  text-color="#ff9900">
							</el-rate>
						</li>
						<li>
							<span>{{ realSubject.collect_count }}人看过</span>
						</li>
					</ul>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
import Aka from './Aka.vue'

export default {
	name: 'MovieRankItem',
	props: [ 'src' ],
	computed: {
		parsedTo () {
			return { path: `/subject/${this.realSubject.id}` }
		},
		parsedRate () {
			return Number((this.realSubject.rating.average / 2).toFixed(1))
		},
		parsedTitle () {
			const t = this.realSubject.title
			const ot = this.realSubject.original_title
			return (t === ot ? t : `${t} / ${ot}`)
		},
		realSubject () {
			return this.src.subject || this.src
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
ul
	padding-left 20px
</style>