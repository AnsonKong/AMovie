<template>
	<span>
		<template v-for="(item, index) in src">
			<span v-if="index !== 0">/</span>

			<span v-if="routeName && item.id">
				<router-link :to="{ name: routeName, params: { id: item.id } }">
					{{ item.name }}
				</router-link>
			</span>
			<span v-else>
				{{ item.name || item }}
			</span>

		</template>
	</span>
</template>

<script>
export default {
	name: 'Aka',
	props: [ 'src', 'routeName' ]
}
</script>
