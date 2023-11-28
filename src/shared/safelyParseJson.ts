/**
 * 封装JSON转换
 * @param parseString
 */
const safelyParseJson = <T = any>(parseString: string): T | null => {
  try {
    return JSON.parse(parseString)
  } catch(e) {
    return null
  }
}

export default safelyParseJson