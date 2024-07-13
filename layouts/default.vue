<template>
	<div class="header-box">
		<slot name="header" />
	</div>
	<div class="content-box">
		<slot name="content" />
	</div>
</template>

<style scoped>
	.header-box {
		position: absolute;
		bottom: 0;
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
</style>