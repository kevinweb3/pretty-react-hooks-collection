/**
 * 检查窗口对象是客户端还是服务器端
 */
const isClient = !!(
  typeof window !== 'undefined' && window.document && window.document.createElement
)

export default isClient;