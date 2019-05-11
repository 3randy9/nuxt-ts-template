<template>
	<section>
		<logo />
		<div>
			<HelloComponent msg="Welcome to Your Nuxt.js + TypeScript App" />
			{{ test }}
			{{ msg }}
		</div>
	</section>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'

@Component({
	components: {
		Logo: () => import('~/components/Logo.vue'),
		HelloComponent: () => import('~/components/HelloComponent.vue')
	}
})
export default class Index extends Vue {
	@Provide() test: string = 'test'
	msg: string = 'msg'
}
</script>

<style lang="scss" scoped>
section {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
