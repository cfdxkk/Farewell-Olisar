<script lang="ts" setup>
	const isLoading = ref(true)

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
	<div class="header-box">
		<slot name="header" />
	</div>
	<div class="content-box">
		<slot name="content" />
	</div>
	<Transition name="loading-screen" mode="out-in">
		<div v-if="isLoading" class="loading" >
			加载中
		</div>
	</Transition>
</template>

<style scoped>
	.header-box {
		position: absolute;
		top: 0;
		left: 0;

		width: 100dvw;

		color: white;
		overflow-x: auto;

		z-index: 110;
	}
	.content-box {
		position: absolute;
		top: 0;
		left: 0;

		height: 100dvh;
		width: 100dvw;


		color: white;
		background-color: #222222FF;

		z-index: 100;
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