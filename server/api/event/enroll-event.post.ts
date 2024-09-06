import pool from '../../db/index'

export default defineEventHandler(async (event) => {
  const query = `
    INSERT INTO events_enroll (event_id, phone_number)
    VALUES ($1, $2) 
    RETURNING *;
  `
  try {
    const body = await readBody(event)
    if (!body.eventId || !body.phoneNumber) {
      setResponseStatus(event, 400)
      return {
        success: false,
        message: '参数不合法！',
      }
    }
    await pool.query(query, [body.eventId, body.phoneNumber]);

    return {
      success: true,
      message: '报名成功！',
    }
  } catch (err) {
    const err2 = err as { message: any }
    console.error('Error inserting data:', err, err2?.message);

    setResponseStatus(event, 500)
    return {
      success: false,
      message: '数据库查询失败！',
    }
  }
})
