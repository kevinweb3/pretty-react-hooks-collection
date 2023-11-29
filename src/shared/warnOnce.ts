/**
 * @dev 主要用于避免污染服务器端日志
 * @param message
 */

const cache = new Map()

const warnOnce = (message: string) => {
  if (cache.has(message)) {
    return
  }
  cache.set(message, true);
  console.warn(message)
}

export default warnOnce