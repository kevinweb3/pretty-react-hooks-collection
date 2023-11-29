import noop from '../shared/noop'
import isClient from '../shared/isClient'
import useObjectState from './useObjectState'
import isDevelopment from '../shared/isDevelopment'
import isAPISupported from '../shared/isAPISupported'
import createHandlerSetter from '../factory/createHandlerSetter'
import warnOnce from '../shared/warnOnce'

/**
 * @dev 封装音频播放hook
 */

export interface AudioState {
  loop: boolean
  muted: boolean
  volume: number
  duration: number
  autoPlay: boolean
  isPlaying: boolean
  preload?: UseAudioPreloadType
  currentTime: number
  playbackRate: number
  isSrcLoading: boolean | undefined
}

export interface UseAudioOptions {
  loop?: boolean
  muted?: boolean
  volume?: number
  autoPlay?: boolean
  preload?: UseAudioPreloadType
  playbackRate?: number
}

export interface AudioControls {
  play: () => void
  mute: () => void
  pause: () => void
  unmute: () => void
  seek: (time: number) => void
}

// TS Required 生成一个新类型defaultOptions，该类型与 UseAudioOptions 拥有相同的属性，但是所有属性皆为必选项, defaultOptions皆为默认必选参数
const defaultOptions: Required<UseAudioOptions> = {
  volume: 1,
  loop: false,
  muted: false,
  playbackRate: 1,
  autoPlay: false,
  preload: 'auto'
}


const useAudio = () => {}

export default useAudio