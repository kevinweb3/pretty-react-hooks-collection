import { useCallback, useReducer } from 'react'

/**
 * @dev 定义一个reducer
 * 1、Partial生成一个新类型，该类型与 TState 拥有相同的属性，但是所有属性皆为可选项
 */
const reducer = <TState>(
  previousState: TState,
  updatedState: Partial<TState>
) => {(
  ...previousState,
  ...updatedState
)}

const useObjectState = <TState>(initialState: TState) : [TState, (state: Partial<TState>) => void] => {
  const [state, dispatch] = useReducer(
    (previousState: TState, updatedState: Partial<TState>) => reducer(previousState, updatedState),
    initialState
  )

  const setState = useCallback((updatedState: Partial<TState>): void => { dispatch(updatedState) }, [dispatch])

  return [state, setState]
}

export default useObjectState