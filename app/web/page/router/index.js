import Vue from 'vue'
import Router from 'vue-router'

const in_theatersApi = 'https://api.douban.com/v2/movie/in_theaters'
const coming_soonApi = 'https://api.douban.com/v2/movie/coming_soon'
const top250Api = 'https://api.douban.com/v2/movie/top250'
const us_boxApi = 'https://api.douban.com/v2/movie/us_box'
const searchApi = 'https://api.douban.com/v2/movie/search'

const routes = [
	{ 
		path: '/', 
		component: () => import('../components/home/Home.vue'),
		props: {
			in_theatersApi,
			coming_soonApi
		}
	},
	{ path: '/about', component: () => import('../components/about/About.vue')  },
	{ 
		path: '/search', 
		component: () => import('../components/search/Search.vue'),
		props: {
			api: searchApi
		}
	},
	{ 
		path: '/(in_theaters|coming_soon|top250)', 
		component: () => import('../components/common/MovieSlideList.vue'), 
		props: (route) => {
			let api
			switch (route.path) {
				case '/in_theaters':
					api = in_theatersApi
					break
				case '/coming_soon':
					api = coming_soonApi
					break
				case '/top250':
					api = top250Api
					break
			}
			return {
				api,
				page: route.query.page
			}
		}
	},
	{
		path: '/us_box',
		component: () => import('../components/common/MovieRankList.vue'),
		props: {
			api: us_boxApi
		}
	},
	{
		name: 'subject',
		path: '/subject/:id',
		component: () => import('../components/subject/Subject.vue'), 
		props: (route) => {
			return {
				api: 'https://api.douban.com/v2/movie/subject/'
			}
		}  
	},
	{
		name: 'celebrity',
		path: '/celebrity/:id', 
		component: () => import('../components/celebrity/Celebrity.vue'), 
		props: (route) => {
			return {
				api: 'https://api.douban.com/v2/movie/celebrity/'
			}
		}
	}
]

Vue.use(Router)

export default () => {
	return new Router({
		mode: 'history',
		routes
	})
}
