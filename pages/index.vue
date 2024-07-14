<script lang="ts" setup>

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

	<div class="mask"></div>

	<div class="play-now-box">
		<div class="play-now">
			<div class="play-now-box-text">
				进入世界
				<Icon name="tdesign:jump" />
			</div>
		</div>
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
	}

	.mask {
		position: absolute;
		top: 0;
		left: 0;
		height: 100dvh;
		width: 100dvw;

		background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.3) 100%);

		z-index: 110;

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

	.play-now-box {
		position: absolute;
		top: 650px;
		right: 180px;

		z-index: 120;
		
		@media (width < 1140px) {
			position: absolute;
			top: 200px;
			right: auto;

			width: 100dvw;

			display: flex;
			justify-content: center;
		}
	}

	.play-now {
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
		filter: drop-shadow(20px 40px 60px #000000A0);

		transition: all 0.3s ease;
		&:hover {
			border: 2px solid #FFFFFF50;
			backdrop-filter: blur(20px);
		}

		.play-now-box-text {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 10px;
		}
	}
</style>
