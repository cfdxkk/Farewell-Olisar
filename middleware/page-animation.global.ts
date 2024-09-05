import { useSystemSettingStore } from "~/store/SystemSettings"

export default defineNuxtRouteMiddleware((to, from) => {
  const systemSettingStore = useSystemSettingStore()
	console.log('aaaaaaaaaaaaaaaaa', from.path, to.path)
	if ((to.path === '/' && from.path !== '/') || (to.path !== '/' && from.path === '/')) {
		systemSettingStore.pageAnimationName = 'page'
	} else {
		systemSettingStore.pageAnimationName = 'none'
	}
})