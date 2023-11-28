
/**
 * 获取鼠标触摸坐标
 * @param event 
 * @returns {[undefined, undefined]}
 */
export const getPointerCoordinates = (event: TouchEvent | MouseEvent) : [number, number] => {
  if ((event as TouchEvent).touches) {
    const { clientX, clientY } = (event as TouchEvent).touches[0]
    return [clientX, clientY];
  }

  const { clientX, clientY } = event as MouseEvent
  return [clientX, clientY]
}

export const getHorizontalDirection = (alpha: number) => (alpha < 0 ? 'right' : 'left')
export const getVerticalDirection = (alpha: number) => (alpha < 0 ? 'down' : 'up')
export type Direction = 'right' | 'left' | 'down' | 'up'
export const getDirection = (cuurentPoint: [number, number], startingPoint: [number, number], alpha: [number, number]): Direction => {
  const alphaX = startingPoint[0] - cuurentPoint[0]
  const alphaY = startingPoint[0] - cuurentPoint[1]
  if (Math.abs(alphaX) > Math.abs(alphaY)) {
    return getHorizontalDirection(alpha[0])
  }

  return getVerticalDirection(alpha[1])
}