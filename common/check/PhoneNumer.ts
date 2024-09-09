/**
 * 校验用户输入的手机号，返回错误信息，如果校验通过则返回空字符串。
 * @param phoneNumber 用户输入的手机号
 */
export function checkInputPhoneNumber(phoneNumber: string): string {
	const regex = /^1[3-9]\d{9}$/;
	return regex.test(phoneNumber) ? '' : '您输入的手机号格式不正确。'
}
