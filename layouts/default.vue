<script lang="ts" setup>
	import { useSystemSettingStore } from '~/store/SystemSettings';

	const systemSettingStore = useSystemSettingStore()
	const isLoading = ref(true)
	const route = useRoute()
	const isLightBackground = computed(() => route.path !== '/')

	onNuxtReady(() => {
		if (document.readyState === 'complete') {
			isLoading.value = false
		} else {
			window.addEventListener('load', () => {
				isLoading.value = false
			})
		}
		setTimeout(() => {
			isLoading.value = false
		}, 20000)
	})
</script>

<template>
	<div class="header-box" :class="{ 'shadow-bottom': isLightBackground}">
		<slot name="header" />
	</div>
	<div class="background-box">
		<slot name="background" />
	</div>
	<Transition :name="systemSettingStore.pageAnimationName">
		<div :key="systemSettingStore.pageAnimationName" class="content-box">
			<NuxtPage />
		</div>
	</Transition>
	<Transition name="loading-screen" mode="out-in">
		<div v-if="isLoading" class="loading" :class="{ invert: isLightBackground }">
			加载中
		</div>
	</Transition>
</template>

<style lang="scss" scoped>
	.invert {
		filter: invert(1);
	}

	.header-box {
		position: absolute;
		top: 0;
		left: 0;

		width: 100dvw;

		color: white;
		overflow-x: auto;

		z-index: 120;

		transition: box-shadow 0.3s ease;
		&.shadow-bottom {
			box-shadow: 0 0 24px #00000030;
		}
	}
	.background-box {
		position: absolute;
		top: 0;
		left: 0;

		height: 100dvh;
		width: 100dvw;


		color: white;
		background-color: #222222FF;

		z-index: 100;
	}

	.content-box {
		position: absolute;
		top: $header-height;
		left: 0;

		width: 100dvw;
		height: calc(100dvh - #{$header-height});

		z-index: 110
	}

	.loading {
		position: absolute;
		top: 0;
		left: 0;

		height: 100dvh;
		width: 100dvw;

		display: flex;
		justify-content: center;
		align-items: center;

		backdrop-filter: blur(30px) grayscale(100%);

		color: white;
		background-color: #222222FF;

		z-index: 1000;
	}

	.loading-screen-leave-active {
		transition: color 0s, background-color 0.25s ease-out, backdrop-filter 1s ease-out;
	}

	.loading-screen-leave-to {
		color: #00000000;
		backdrop-filter: blur(0) grayscale(0);
		background-color: #22222200;
	}
</style>