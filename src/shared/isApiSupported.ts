/**
 * 检查API是否支持
 */

const isApiSupported = (api: string): boolean => (typeof window !== 'undefined' ? api in window : false)

export default isApiSupported