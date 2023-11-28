/**
 * 定义Noop接口
 */
export interface Noop {
  noop: true
  (...args: any[]): any
}

/**
 * 定义泛型函数，提高代码的可读性
 */
export type GenericFunction = (...args: any[]) => any

/**
 * 类型化通用回调函数，主要在内部使用
 */
export type SomeCallback<TArgs, TResult = void> = (...args: TArgs[]) => TResult

/**
 * 回调setter通常用于设置的值, 将用于执行更新的回调
 */
export type CallbackSetter<TArgs> = (nextCallback: SomeCallback<TArgs>) => void

/**
 * 此类型在内部使用，以避免直接使用GeolocationPosition
 */
export interface BRHGeolocationPosition {
  readonly timestamp: number
  readonly coords: {
    readonly accuracy: number
    readonly altitude: number | null
    readonly altitudeAccuracy: number | null
    readonly heading: number | null
    readonly latitude: number
    readonly longitude: number
    readonly speed: number | null
  }
}

/**
 * 此类型在内部使用，以避免直接使用GeolocationPosition
 */
export interface BRHGeolocationPositionError {
  readonly code: number
  readonly message: string
  readonly PERMISSION_DENIED: number
  readonly POSITION_UNAVAILABLE: number
  readonly TIMEOUT: number
}