import pool from '../../db/index'

type enrolledNumberResponseDto = { success: boolean, enrolledNumber: number, message: string }
export default defineEventHandler(async (event): Promise<enrolledNumberResponseDto> => {
	try {
		const query = getQuery(event)
		const eventId = query?.['event']

    const enrolledNumberQuery = 'SELECT COUNT(*) FROM events_enroll WHERE event_id = $1'
    const enrolledNumberResult = await pool.query(enrolledNumberQuery, [eventId]);
		const enrolledNumber = enrolledNumberResult?.rows?.[0]?.count
		if (enrolledNumber === undefined || enrolledNumber === null) {
			setResponseStatus(event, 500)
			return { success: false, message: '获取数据失败！', enrolledNumber: -1 }
		}
		return { success: true, message: `已有${enrolledNumber}人注册`, enrolledNumber: parseInt(enrolledNumber, 10) }
	} catch (error) {
    console.error('ERROR', '查询注册数量失败', error)
    setResponseStatus(event, 500)
    return { success: false, message: '数据库查询失败！', enrolledNumber: -1 }
	}
})
