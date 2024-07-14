<script lang="ts" setup>

</script>

<template>
	<div class="background-box"/>
	<picture style="display: none;">
    <source srcset="../public/images/background-vrchat-olisar.png" media="(min-width: 1140px)">
    <source srcset="../public/images/background-vrchat-olisar-phone.png" media="(max-width: 1139px)">
    <img src="../public/images/background-vrchat-olisar-phone.png" alt="Preload background images">
  </picture>
</template>

<style lang="scss" scoped>
	.background-box {
		position: absolute;
		top: 0;
		left: 0;

		height: 100%;
		width: 100%;

		background-image: url('../public/images/background-vrchat-olisar.png');
		background-position: center;
		background-size: cover;

		@media (width < 1140px) {
			background-image: url('../public/images/background-vrchat-olisar-phone.png');
		}
	}

	.farewell-olisar-box {
		position: absolute;
		top: 50px;
		left: 0;

		width: 100%;

		display: flex;
		justify-content: center;

		filter: drop-shadow(0 0 4px black);
	}

	.farewell-olisar {
		max-width: 1300px;
		width: 90%;
	}
</style>
