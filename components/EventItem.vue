<script setup lang="ts">
	import { checkInputPhoneNumber } from '~/common/check/PhoneNumer';

	const numberOfEnrollPeople = ref(0) // 活动已报名人数
	const maxEnrollPeopel = 50 // 活动最大人数
	const isFull = computed(() => numberOfEnrollPeople.value >= maxEnrollPeopel) // 活动是否已满
	const isStartingEnroll = ref(false) // 用户是否点击报名按钮
	const enrollPhoneNumber = ref('') // 输入的电话号
	const enrollErrorMessage = ref('') // 报名失败时的错误信息
	const isEnrolling = ref(false) // 是否正在提交报名请求
	const enrollSuccess = ref(false) // 是否报名成功

	/**
	 * 获取参加人数
	 */
	async function getNumberOfEnrollPeople() {
		try {
			const { data } = await useFetch(`/api/event/enrolled-number?event=${1}`)
			if (data.value?.success && data.value.enrolledNumber >= 0) {
				numberOfEnrollPeople.value = data.value.enrolledNumber
			}

		} catch (error) {
			console.error('Enrolled-Number request failed:', error)
		}
	}
	await getNumberOfEnrollPeople()

	/**
	 * 开启或关闭电话号输入框
	 */
	function handleStartingEnroll() {
		isStartingEnroll.value = !isStartingEnroll.value;
	}

	/**
	 * 处理电话号输入事件
	 * 因为电话号输入事件关联若干副作用，为了避免使用 watch，此处未使用 v-model 双向绑定语法糖
	 * @param event 电话号输入事件
	 */
	function handlePhoneInputChange(event: Event) {
		const inputElement = event.target as HTMLInputElement
		const phoneNumber = inputElement.value
		enrollPhoneNumber.value = phoneNumber
		enrollErrorMessage.value = checkInputPhoneNumber(phoneNumber)
	}

	/**
	 * 通过电话号提交报名
	 */
	async function enrollByPhone() {
		try {
			enrollErrorMessage.value = ''

			if (isEnrolling.value === true) {
				console.warn('正在报名中，请勿重复点击！')
				return;
			}

			isEnrolling.value = true
			const { data, error } = await useFetch('/api/event/enroll-event', {
				method: 'POST',
				body: {
					eventId: 1,
					phoneNumber: enrollPhoneNumber.value
				}
			})
			isEnrolling.value = false

			if (error.value) {
				console.error('Error during request:', error.value)
				enrollErrorMessage.value = "报名失败，请刷新页面后重试。"
				return;
			}

			if (data.value?.exists) {
				console.error('Error during request:', error.value)
				enrollErrorMessage.value = "您已报名该活动，不能重复报名。"
				return;
			}

			if (!data.value?.success) {
				console.error('Error during request:', error.value)
				enrollErrorMessage.value = "服务器错误，请刷新页面后重试。"
				return;
			}

			enrollSuccess.value = true
		} catch (error) {
			console.error('Enroll request failed:', error)
		}
	}
</script>

<template>
	<div class="event-item">
		<div class="event-title">
			2954 公民控 - 虚拟线上观赏会
		</div>

		<div class="event-date">
			<div class="event-date-title">开始日期</div>
			<div>2024/10/19 00:00（CIG 未公开公民控详细日程）</div>
		</div>

		<div class="event-info">
			<div class="event-info-title">简介</div>
			<div class="event-info-body">
				<div class="event-info-text">
					This extraordinary two day event brings the pan-galactic celebration of our incredible community to Manchester, England. Building on last year’s phenomenal show, CitizenCon 2954 promises to be an even more expansive and immersive affair, and a place where we can once again come together to share our victories, while looking forward to an ever brighter tomorrow.
					<br />
					Strap in pilot, and prepare yourself for an interstellar adventure you’ll never forget. If there was ever a CitizenCon NOT to miss, it’s this one. The countdown starts now. 
				</div>
				<div class="event-info-image">
					<img
						src="../public/images/background-vrchat-olisar.png"
						alt="2954 CitizenCon VRChat Event Cover Image."
					/>
				</div>
			</div>
		</div>

		<div v-if="!isFull" class="enroll-box">
			<Transition name="enroll-button" mode="out-in">
				<div v-if="!enrollSuccess" class="enroll-button" @click="handleStartingEnroll">
					{{ isStartingEnroll ? '取消报名' : '开始报名' }}
				</div>
				<div v-else class="enroll-success-button">
					<div class="success-icon">
						<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#5f6368"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
					</div>
					报名成功
				</div>
			</Transition>
			<Transition name="enroll-input" mode="out-in">
				<div class="enroll" v-if="isStartingEnroll && !enrollSuccess">
					<div class="enroll-phone-input-box" :class="{ error: enrollErrorMessage }">
						<div class="enroll-phone-location-number">+86</div>
						<input
							id="enroll-phone-input"
							type="text"
							class="enroll-phone-input"
							placeholder="请输入手机号。"
							autocomplete="off"
							:value="enrollPhoneNumber"
  						@input="handlePhoneInputChange"
						/>
					</div>
					<Transition name="enroll-error-message">
						<div v-if="enrollErrorMessage" class="enroll-error-message">{{ enrollErrorMessage }}</div>
					</Transition>
					<div class="enroll-submit-button" :class="{ disabled: isEnrolling || enrollErrorMessage }" @click="enrollByPhone">
						<div v-if="isEnrolling" class="loading-icon">
							<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="currentColor"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q17 0 28.5 11.5T520-840q0 17-11.5 28.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q133 0 226.5-93.5T800-480q0-17 11.5-28.5T840-520q17 0 28.5 11.5T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Z"/></svg>
						</div>
						提交
					</div>
				</div>
				<div class="enroll-count" v-else>{{ numberOfEnrollPeople }}/{{ maxEnrollPeopel }}</div>
			</Transition>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	$margin-left-right: 60px;
	
	@media screen and (max-aspect-ratio: 1.2/1) {
		$margin-left-right: 20px;
	}

	// 旋转动画
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	.invert {
		filter: invert(1);
	}

	.event-item {
		--margin-left-right: 60px;

		margin-top: 50px;

		padding-bottom: 40px;

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

			.enroll-success-button {
				@include disable-user-select;

				height: 50px;
				width: 200px;

				display: flex;
				justify-content: center;
				align-items: center;

				border-radius: 25px;
				color: #000000DD;
				background-color: #00000010;

				transition: background-color 0.3s ease, color 0.3s ease;

				@media screen and (max-aspect-ratio: 1.2/1) {
					width: 100%;
				}

				.success-icon {
					position: absolute;
					transform: translate(-40px, 4px);
				}
			}

			.enroll {
				width: 600px;
				display: flex;
				gap: 10px;

				.enroll-phone-input-box {
					margin-left: 10px;

					height: 50px;
					flex: calc(60%);

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

					&.error {
						border: 4px solid #FF000040;
						flex: calc(60% - 8px);
						height: 42px;
						background: #FF000020;

						.enroll-phone-location-number {
							margin-left: 16px;
						}
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

				// HACK: 不优雅的布局方式
				.enroll-error-message {
					@include disable-user-select;
					position: absolute;
					margin-top: 50px;
					margin-left: 25px;

					font-size: 16px;
					color: #D00000FF
				}

				.enroll-submit-button {
					@include disable-user-select;

					height: 50px;
					flex: calc(40%);
					min-width: 55px;

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

					&.disabled {
						pointer-events: none !important;
						color: #00000040 !important;
						background-color: #00000020 !important;
					}

					// HACK: 不优雅的布局方式
					.loading-icon {
						position: absolute;
						transform: translate(-26px, 4px);
						
						svg {
							@include rotate-animation(1s);
						}
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
					margin-top: 10px;
					margin-left: 0;
				}
			}
		}
		
		@media screen and (max-aspect-ratio: 1.2/1) {
			--margin-left-right: 20px;
		};
	}

	.enroll-button-enter-active,
	.enroll-button-leave-active {
		transition: opacity 0.3s ease;
	}
	.enroll-button-enter-from,
	.enroll-button-leave-to {
		opacity: 0;
	}

	.enroll-input-enter-active,
	.enroll-input-leave-active {
		transition: opacity 0.3s ease;
	}
	.enroll-input-enter-from,
	.enroll-input-leave-to {
		opacity: 0;
	}

	.enroll-error-message-enter-active,
	.enroll-error-message-leave-active {
		transition: opacity 0.2s ease;
	}
	.enroll-error-message-enter-from,
	.enroll-error-message-leave-to {
		opacity: 0;
	}
</style>
