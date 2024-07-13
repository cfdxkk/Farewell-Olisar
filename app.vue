<script lang="ts" setup>
	useHead({
		title: 'Farewell Olisar',
	})
</script>

<template>
  <NuxtLayout>
		<template v-slot:header>
			<OlisarHeader />
		</template>
		<template v-slot:content>
			<NuxtPage />
		</template>
  </NuxtLayout>
</template>

<style>
	body {
		padding: 0;
		margin: 0;
	}
</style>
