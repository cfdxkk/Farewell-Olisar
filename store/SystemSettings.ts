import { defineStore } from "pinia"

export const useSystemSettingStore = defineStore(
	'systemSetting',
	() => {
		const pageAnimationName = ref<'none' | 'page'>('page') // Page 进入或退出动画，none 表示不启用动画
		return { pageAnimationName }
	}
)