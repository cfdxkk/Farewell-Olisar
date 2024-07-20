<script lang="ts" setup>
	function jump2World() {
		window.open("https://vrchat.com/home/world/wrld_fbbcac35-6290-4db1-bd61-9178863e9b3b", "_blank")
	}

</script>

<template>
	<div class="background-box"/>
	<picture style="display: none;">
    <source srcset="../public/images/background-vrchat-olisar.png" media="(min-width: 1140px)">
    <source srcset="../public/images/background-vrchat-olisar-phone.png" media="(max-width: 1139px)">
    <img src="../public/images/background-vrchat-olisar-phone.png" alt="Preload background images">
  </picture>

	<div class="title1">FAREWELL</div>
	<div class="title2">OLISAR</div>
	<div class="title-mini"><span>FAREWELL OLISAR</span></div>

	<div class="mask" />

	<div class="playable-now-box">
		<div class="playable-now" @click="jump2World">
			<div class="playable-now-box-text">
				进入世界（Beta 测试版）
				<Icon name="tdesign:jump" />
			</div>
		</div>
	</div>

	<div class="info-box">
		Powered By: KitasanYuu
	</div>
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

		@media screen and (max-aspect-ratio: 1.2/1) {
			background-image: url('../public/images/background-vrchat-olisar-phone.png');
		}
	}

	.mask {
		position: absolute;
		top: 0;
		left: 0;
		height: 100dvh;
		width: 100dvw;

		background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.3) 100%);

		z-index: 110;

		@media screen and (max-aspect-ratio: 1.2/1) {
			display: none;
		}
		
		@media (width < 1140px) {
			display: none;
		}
	}

	.title1 {
		display: block;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		position: absolute;
		top: 80px;
		right: 100px;
		font-size: 270px;
		color: white;
		font-family: 'Staatliches';
		font-style: italic;
		filter: drop-shadow(20px 40px 60px #000000A0);
		z-index: 120;

		@media screen and (max-aspect-ratio: 1.2/1) {
			display: none;
		}
		
		@media (height < 750px) {
			display: none;
		}

		@media (width > 2100px) {
			right: 15dvw;
		}

		@media (width > 1140px) and (height > 1100px) {
			top: 25dvh;
		}

		@media (width < 1140px) {
			display: none;
		}
	}

	.title2 {
		display: block;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		position: absolute;
		top: 310px;
		right: 140px;
		font-size: 270px;
		color: white;
		font-family: 'Staatliches';
		font-style: italic;
		filter: drop-shadow(20px 40px 60px #000000A0);
		z-index: 120;

		@media screen and (max-aspect-ratio: 1.2/1) {
			display: none;
		}
		
		@media (height < 750px) {
			display: none;
		}

		@media (width > 2100px) {
			right: calc(15dvw + 40px);
		}

		@media (width > 1140px) and (height > 1100px) {
			top: calc(25dvh + 230px);
		}

		@media (width < 1140px) {
			display: none;
		}
	}

	.title-mini {
		display: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		z-index: 120;

		@media screen and (max-aspect-ratio: 1.2/1) {
			position: absolute;
			top: 80px;
			width: 100dvw;

			display: flex;
			justify-content: center;
			align-items: center;

			font-size: 100px;
			color: white;
			font-family: 'Staatliches';
			font-style: italic;
			filter: drop-shadow(20px 40px 60px #000000A0);
		}

		@media (width < 1140px) {
			position: absolute;
			top: 80px;
			width: 100dvw;

			display: flex;
			justify-content: center;
			align-items: center;

			font-size: 100px;
			color: white;
			font-family: 'Staatliches';
			font-style: italic;
			filter: drop-shadow(20px 40px 60px #000000A0);
		}
		
		@media (width < 660px) {
			min-width: 350px;
			font-size: 55px;
		}
	}

	.playable-now-box {
		position: absolute;
		top: 650px;
		right: 180px;
		
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		

		z-index: 120;

		@media (width > 1140px) and (height > 1100px) {
			top: calc(25dvh + 570px);
		}
		
		@media (width > 2100px) {
			right: calc(15dvw + 80px);
		}

		@media screen and (max-aspect-ratio: 1.2/1) {
			position: absolute;
			top: 200px;
			right: auto;

			width: 100dvw;

			display: flex;
			justify-content: center;
		}

		@media (height < 750px) and (width > 1140px) {
			top: 0;
			height: 100dvh;
			display: flex;
			align-items: center;
		}

		@media (width < 1140px) {
			position: absolute;
			top: 200px;
			right: auto;

			width: 100dvw;

			display: flex;
			justify-content: center;
		}
	}

	.playable-now {
		height: 56px;
		width: 300px;

		display: flex;
		justify-content: center;
		align-items: center;

		color: white;
		font-size: 18px;
		background-color: #FFFFFF40;
		border-radius: 30px;
		border: 2px solid #FFFFFF25;
		cursor: pointer;
		filter: drop-shadow(10px 20px 40px #FFFFFFFF);

		transition: all 0.3s ease;
		&:hover {
			border: 2px solid #FFFFFF50;
			backdrop-filter: blur(20px);
			filter: drop-shadow(5px 10px 20px #FFFFFFFF);
		}

		.playable-now-box-text {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 10px;
		}
	}

	.info-box {
		position: absolute;
		bottom: 10px;
		left: 10px;

		cursor: help;
		color: #FFFFFF00;

		z-index: 130;
		&:hover {
			color: #FFFFFF50;
		}
	}
</style>
