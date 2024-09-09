import { checkInputPhoneNumber } from '~/common/check/PhoneNumer'
import pool from '../../db/index'

type enrollResponseDto = { success: boolean, exists: boolean, message: string }
export default defineEventHandler(async (event): Promise<enrollResponseDto> => {
  try {
    // FIXME: 当前后端并没有限制报名人数
    const body = await readBody(event)
    const eventId = body.eventId
    const phoneNumber = body.phoneNumber
    if (!eventId || !phoneNumber) {
      setResponseStatus(event, 400)
      return { success: false, exists: false, message: '缺少必要参数！' }
    }

    if (checkInputPhoneNumber(phoneNumber)) {
      setResponseStatus(event, 400)
      return { success: false, exists: false, message: '参数不合法！' }
    }

    const eventExistsQuery = 'SELECT EXISTS(SELECT 1 FROM events WHERE id = $1)'
    const eventExistsResult = await pool.query(eventExistsQuery, [eventId]);
    if (!eventExistsResult?.rows?.[0]?.exists) {
      setResponseStatus(event, 404)
      return { success: false, exists: false, message: '您报名的活动不存在！' }
    }

    const enrollExistsQuery = 'SELECT EXISTS(SELECT 1 FROM events_enroll WHERE event_id = $1 and phone_number = $2)'
    const enrollExistsResult = await pool.query(enrollExistsQuery, [eventId, phoneNumber]);
    if (enrollExistsResult?.rows?.[0]?.exists) {
      return { success: false, exists: true, message: '禁止重复报名！' }
    }

    const insertEnrollQuery = `INSERT INTO events_enroll(event_id, phone_number) VALUES ($1, $2)`
    await pool.query(insertEnrollQuery, [body.eventId, body.phoneNumber]);
    return { success: true, exists: false, message: '报名成功！' }
  } catch (error) {
    console.error('ERROR', '报名失败', error)
    setResponseStatus(event, 500)
    return { success: false, exists: false, message: '数据库查询失败！' }
  }
})
