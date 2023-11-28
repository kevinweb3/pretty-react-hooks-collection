/**
 * 检查是否是函数
 */

type SomeFunction = (...args: any[]) => any

const isFunction = (functionToCheck: unknown): functionToCheck is SomeFunction => (
  typeof functionToCheck === 'function' &&
  !!functionToCheck.constructor &&
  !!functionToCheck.call &&
  !!functionToCheck.apply
)

export default isFunction