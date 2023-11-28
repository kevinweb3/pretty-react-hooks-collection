/**
 * 检查是否是开发环境
 */

const isDevelopment = (
  typeof process !== 'undefined' && typeof process.env !== 'undefined' && (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')
)

export default isDevelopment