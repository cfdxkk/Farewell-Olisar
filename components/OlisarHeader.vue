<script lang="ts" setup>
</script>

<template>
	<div class="header">
		<div class="header-item-box">
			<div class="header-item"><span class="header-item-text">地图链接</span></div>
			<div class="header-item"><span class="header-item-text">参与开发</span></div>
			<div class="header-item"><span class="header-item-text">创作故事</span></div>
		</div>
		<div class="header-comment-box">
			<div class="header-comment-text-box">
				<div class="header-comment-text">
					"无与伦比的还原度，来自对每一处细节的精心雕琢。这是我在 VRChat 中游玩过的建模最精致的地图之一，由衷的敬佩制作者。"
				</div>
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
	}

	.header-comment-text-box {
		flex: 1;
		height: 36px;

		display: flex;
		align-items: center;
		justify-content: center;

		padding-left: 20px;

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
		font-size: 16px;
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
	
</style>
