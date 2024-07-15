<script lang="ts" setup>
	const comments = ref<string[]>([
		'"难以置信的还原度，可见制作者对每一处细节的精心雕琢。这是我在 VRChat 中游玩过的建模最精致的地图之一。"',
		'"奥丽莎港是每个星际公民的家，我想没有人会不喜欢这张地图。"',
		'"It was incredible that I could go to the Port Olisar again. The one-to-one restoration of the in-game model was so touching!"',
		'"太强了！"　　"有一瞬间还以为在玩星际公民！"　　"和星际公民一样会被走廊的扶手卡住！"　　"不穿基底服真的没事吗？"',
	])
	const activeCommentsIndex = ref(0)
	const isHoverComment = ref(false)

	onMounted(() => {
		setInterval(() => {
			if (!isHoverComment.value) {
				if (activeCommentsIndex.value < comments.value.length - 1) {
					activeCommentsIndex.value += 1
				} else {
					activeCommentsIndex.value = 0
				}
			}
		}, 15000)
	})
</script>

<template>
	<div class="header">
		<div class="header-item-box">
			<div class="header-item"><span class="header-item-text">活动预告</span></div>
			<div class="header-item"><span class="header-item-text">参与开发</span></div>
			<div class="header-item"><span class="header-item-text">创作故事</span></div>
		</div>
		<div class="header-comment-box">
			<div class="header-comment-text-box" @mouseenter="isHoverComment = true" @mouseleave="isHoverComment = false">
				<Transition name="comments" mode="out-in">
					<div :key="activeCommentsIndex" class="header-comment-text">
						{{ comments[activeCommentsIndex] }}
					</div>
				</Transition>
			</div>
			<div class="header-item header-comment-add-box" title="添加留言">
				<Icon name="material-symbols:add" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.header {
		min-width: 530px;
		height: 56px;

		display: flex;
		justify-content: center;
		align-items: center;

	}

	.header-item-box {
		margin-left: 40px;
		
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;

		height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
	}

	.header-item {
		height: 40px;

		display: flex;
		justify-content: center;
		align-items: center;

		border-radius: 20px;

		cursor: pointer;
		color: #BBBBBBFF;

		transition: background-color 0.3s ease, color 0.3s ease;
		&:hover {
			color: #FFFFFFFF;
			background-color: #FFFFFF20;
		}
	}

	.header-item-text {
		font-size: 16px;
		margin: 0 30px;
	}

	.header-comment-box {
		flex: 1;

		display: flex;
		gap: 10px;

		margin-left: 10px;
		
		@media (width < 1140px) {
			flex: none;
		}
	}

	.header-comment-text-box {
		flex: 1;
		height: 36px;

		display: flex;
		align-items: center;
		justify-content: center;

		padding-left: 20px;
		overflow-y: hidden;

		cursor: text;
		border-radius: 20px;
		background-color: #FFFFFF20;
		border: 2px solid #FFFFFF25;
		backdrop-filter: blur(20px);
		transition: border 0.3s ease, backdrop-filter 0.3s ease;
		&:hover {
			border: 2px solid #FFFFFF80;
			backdrop-filter: blur(50px);
			color: #EEEEEEFF;
		}

		@media (width < 1500px) {
			display: none;
		}
	}

	.header-comment-text {
		filter: drop-shadow(0 0 4px #222222FF);
		font-size: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
	}

	.header-comment-add-box {
		height: 36px;
		width: 36px;
		
		display: flex;
		justify-content: center;
		align-items: center;

		border-radius: 20px;
		font-size: 20px;

		margin-right: 40px;

		cursor: pointer;
		color: #FFFFFFFF;
		background-color: #FFFFFF20;
		border: 2px solid #FFFFFF25;
		backdrop-filter: blur(0px);
		transition: border 0.3s ease, backdrop-filter 0.3s ease;
		&:hover {
			border: 2px solid #FFFFFF50;
			backdrop-filter: blur(20px);
		}
	}

	.comments-enter-active,
	.comments-leave-active {
		transition: all 0.25s ease-out;
	}

	.comments-enter-from {
		opacity: 0;
		transform: translateY(30px);
	}
	
	.comments-leave-to {
		opacity: 0;
		transform: translateY(-30px);
	}
	
</style>
