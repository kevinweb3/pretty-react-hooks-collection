import { type Noop } from './types'

const noop: Noop = (...args: any[]) => undefined
noop.noop = true
export default noop