<script setup lang="ts">
	const isStartingEnroll = ref(false)
	const enrollInput = ref()
	const enrollPhoneNumber = ref('')

	/**
	 * 开启或关闭电话号输入框
	 */
	function handleStartingEnroll() {
		isStartingEnroll.value = !isStartingEnroll.value;
	}

	/**
	 * 通过电话号提交报名
	 */
	async function enrollByPhone() {
		try {
			const { data, error } = await useFetch('/api/event/enroll-event', {
				method: 'POST',
				body: {
					eventId: 1,
					phoneNumber: enrollPhoneNumber.value
				}
			})

			if (error.value) {
				console.error('Error during request:', error.value)
			} else {
				console.log('Enrollment successful:', data.value)
			}
		} catch (err) {
			console.error('Request failed:', err)
		}
	}
</script>

<template>
	<div class="event-item">
		<!-- <div class="event-title">
			2954 公民控 - 虚拟线上观赏会
		</div> -->
		<div class="event-title">
			2954 CItizenCon - VRChat Online
		</div>

		<div class="event-date">
			<div class="event-date-title">
				开始日期
			</div>
			<div>
				2024/10/19 00:00 (CIG 未公开公民控详细日程)
			</div>
		</div>

		<div class="event-info">
			<div class="event-info-title">
				简介
			</div>
			<div class="event-info-body">
				<div class="event-info-text">
					This extraordinary two day event brings the pan-galactic celebration of our incredible community to Manchester, England. Building on last year’s phenomenal show, CitizenCon 2954 promises to be an even more expansive and immersive affair, and a place where we can once again come together to share our victories, while looking forward to an ever brighter tomorrow.
					<br />
					Strap in pilot, and prepare yourself for an interstellar adventure you’ll never forget. If there was ever a CitizenCon NOT to miss, it’s this one. The countdown starts now. 
				</div>
				<div class="event-info-image">
					<img src="../public/images/background-vrchat-olisar.png" alt="2954 CitizenCon VRChat Event Cover Image.">
				</div>
			</div>
		</div>

		<div class="enroll-box">
			<div class="enroll-button" @click="handleStartingEnroll">{{ isStartingEnroll ? '取消报名' : '开始报名' }}</div>
			<Transition name="enroll-input" mode="out-in">
				<div class="enroll" v-if="isStartingEnroll">
					<div class="enroll-phone-input-box">
						<div class="enroll-phone-location-number">+86</div>
						<input id="enroll-phone-input" ref="enrollInput" type="text" class="enroll-phone-input" placeholder="请输入手机号" v-model="enrollPhoneNumber"/>
					</div>
					<div class="enroll-submit-button" @click="enrollByPhone">提交</div>
				</div>
				<div class="enroll-count" v-else>3/50</div>
			</Transition>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	$margin-left-right: 60px;
	
	@media screen and (max-aspect-ratio: 1.2/1) {
		$margin-left-right: 20px;
	}

	.invert {
		filter: invert(1);
	}

	.event-item {
		--margin-left-right: 60px;

		margin-top: 50px;

		width: 100%;
		border-radius: 10px;

		overflow: hidden;
		
		transition: all 0.2s ease;
		&:hover {
			background-color: #F1F1F1FF;
			box-shadow: 5px 10px 25px #00000011;
		}

		.event-title {
			margin-left: var(--margin-left-right);
			margin-top: 40px;

			width: calc(100% - var(--margin-left-right) - var(--margin-left-right));
			font-size: 30px;
		}

		.event-info, .event-date {
			margin-left: var(--margin-left-right);
			margin-top: 20px;

			width: calc(100% - var(--margin-left-right) - var(--margin-left-right));

			display: flex;
			flex-wrap: wrap;
			
			.event-info-title, .event-date-title {
				width: 100%;
				color: gray;
				margin-bottom: 3px;
			}

			.event-info-body {
				width: 100%;

				display: flex;

				@media screen and (max-aspect-ratio: 1.2/1) {
					flex-direction: column;
				}

				.event-info-text {
					flex: 1;
					max-height: 150px;
					height: 150px;
					overflow: hidden;
				}

				.event-info-image {
					width: 250px;
					height: 150px;

					margin-top: 0;
					margin-left: 30px;

					border-radius: 10px;

					overflow: hidden;

					@media screen and (max-aspect-ratio: 1.2/1) {
						width: 100%;
						margin-top: 20px;
						margin-left: 0;
					}

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}
			}
		}

		.enroll-box {
			margin-left: var(--margin-left-right);
			margin-top: 15px;
			margin-bottom: 40px;

			width: calc(100% - var(--margin-left-right) - var(--margin-left-right));

			display: flex;
			align-items: center;

			@media screen and (max-aspect-ratio: 1.2/1) {
				margin-top: 20px;
				flex-direction: column;
			}

			.enroll-button {
				@include disable-user-select;

				height: 50px;
				width: 200px;

				display: flex;
				justify-content: center;
				align-items: center;

				border-radius: 25px;
				cursor: pointer;
				color: #000000DD;
				background-color: #00000010;

				transition: background-color 0.3s ease, color 0.3s ease;
				&:hover {
					color: #000000EE;
					background-color: #00000020;
				}

				@media screen and (max-aspect-ratio: 1.2/1) {
					width: 100%;
				}
			}

			.enroll {
				width: 600px;
				display: flex;
				gap: 10px;

				.enroll-phone-input-box {
					margin-left: 10px;

					height: 50px;
					flex: 0.6;

					border-radius: 25px;
					color: #000000DD;
					background-color: #00000010;

					display: flex;
					justify-content: center;
					align-items: center;
					gap: 8px;

					transition: background-color 0.3s ease, color 0.3s ease;
					&:hover {
						color: #000000EE;
						background-color: #00000020;
					}
					
					@media screen and (max-aspect-ratio: 1.2/1) {
						margin-left: 0;
						width: 100%;
					}

					.enroll-phone-location-number {
						@include disable-user-select;

						margin-left: 20px;

						flex: 0.2;
    				max-width: 35px;
					}

					.enroll-phone-input {
						margin-right: 20px;

						flex: 1;
						height: 30px;
						
						border: none;       /* 移除边框 */
						outline: none;      /* 移除点击时的高亮框 */
						background: none;   /* 移除默认背景 */
						box-shadow: none;   /* 移除阴影 */
						padding: 0;         /* 重置内边距 */
						margin: 0;          /* 重置外边距 */

						padding-top: 3px;
						font-size: 17px;
					}
				}

				.enroll-submit-button {
					@include disable-user-select;

					height: 50px;
					flex: 0.4;

					display: flex;
					justify-content: center;
					align-items: center;

					border-radius: 25px;
					cursor: pointer;
					color: #000000DD;
					background-color: #00000010;

					transition: background-color 0.3s ease, color 0.3s ease;
					&:hover {
						color: #000000EE;
						background-color: #00000020;
					}

					@media screen and (max-aspect-ratio: 1.2/1) {
						width: 100%;
					}
				}

				@media screen and (max-aspect-ratio: 1.2/1) {
					width: 100%;
					margin-top: 10px;
				}
			}

			.enroll-count {
				margin-left: 20px;

				height: 50px;

				display: flex;
				align-items: center;
				
				@media screen and (max-aspect-ratio: 1.2/1) {
					margin-top: 5px;
					margin-left: 0;
				}
			}
		}
		
		@media screen and (max-aspect-ratio: 1.2/1) {
			--margin-left-right: 20px;
		};
	}

	.enroll-input-enter-active,
	.enroll-input-leave-active {
		transition: opacity 0.3s ease;
	}

	.enroll-input-enter-from,
	.enroll-input-leave-to {
		opacity: 0;
	}
</style>
