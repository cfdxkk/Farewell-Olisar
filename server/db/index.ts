import pg from 'pg';

const { Pool } = pg;
// 创建一个共享的连接池
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  max: 10, // 最大连接数
  idleTimeoutMillis: 30000, // 空闲连接最大保持时间（毫秒）
  connectionTimeoutMillis: 2000, // 连接超时时间（毫秒）
})

// const pool = new Pool({
//   user: process.env.POSTGRES_USER,   // 确保数据库用户名正确
//   host: process.env.POSTGRES_HOST,            // 确保数据库主机名正确
//   database: process.env.POSTGRES_DATABASE, // 确保数据库名称正确
//   password: process.env.POSTGRES_PASSWORD, // 确保数据库密码正确
//   port: 5432,                   // 确保端口号正确，PostgreSQL 的默认端口是 5432
// });

export default pool
