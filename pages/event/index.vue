<script setup lang="ts">
</script>

<template>
	<div class="event-list-box">
		<div class="event-item-box">
			<EventItem />
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.event-list-box {
		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		height: 100%;

		display: flex;
		justify-content: center;

		.event-item-box {
			width: min(80%, 1200px);

			@media screen and (max-aspect-ratio: 1.2/1) {
				width: min(95%, 1200px);
			}
		}
	}
</style>
