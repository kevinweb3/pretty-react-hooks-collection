import { type RefObject, useRef } from "react";
import { type CallbackSetter, type SomeCallback } from "../shared/types";

/**
 * 创建一个setter的回调函数，类似与useState
 * @param callback 
 * @returns 
 */
const createHandlerSetter = <TArgs, TResult = void>(callback?: SomeCallback<TArgs, TResult>) => {
  const handlerRef = useRef(callback)
  const setHandler = useRef((nextCallback: SomeCallback<TArgs, TResult>) => {
    if (typeof nextCallback !== 'function') {
      throw new Error('the argument supplied to the \'setHandler\' function should be of type function')
    }
    handlerRef.current = nextCallback
  })
  return [handlerRef, setHandler.current] as [RefObject<SomeCallback<TArgs, TResult>>, CallbackSetter<TArgs>]
}

export default createHandlerSetter;