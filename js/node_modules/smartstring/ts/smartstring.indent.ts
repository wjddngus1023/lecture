import * as plugins from './smartstring.plugins'

/**
 * splits a string into an array
 * @param stringArg
 */
const splitStringAtLineBreak = (stringArg: string): string[] => {
  let resultArray = stringArg.split('\n')
  return cleanStringArray(resultArray)
}

/**
 * joins a string together again
 * @param stringArrayArg
 */
const joinStringWithLineBreaks = (stringArrayArg: string[]): string => {
  let resultString: string = ''
  for (let line of stringArrayArg) {
    resultString = resultString + line + '\n' // add new line at end
  }
  return resultString
}

/**
 * cleans first and last line in case they are empty
 * @param stringArrayArg
 */
const cleanStringArray = (stringArrayArg: string[]): string[] => {
  let testRegex = /^[\s]*$/
  if (testRegex.test(stringArrayArg[ 0 ])) {
    stringArrayArg.shift()
  }
  if (testRegex.test(stringArrayArg[ stringArrayArg.length - 1 ])) {
    stringArrayArg.pop()
  }
  return stringArrayArg
}

/**
 * indent an array
 * @param stringArg
 * @param spaceAmount
 */
export const indent = (stringArg: string, spaceAmount: number): string => {
  let localStringArray = splitStringAtLineBreak(stringArg)
  for (let stringArg of localStringArray) {
    stringArg = ' '.repeat(spaceAmount) + stringArg
  }
  let resultString = joinStringWithLineBreaks(localStringArray)
  return resultString
}

/**
 * indents a string with prefix
 * @param stringArg
 * @param prefixArg
 */
export const indentWithPrefix = (stringArg: string, prefixArg: string): string => {
  let resultString: string
  let stringArray = splitStringAtLineBreak(stringArg)
  let resultArray: string[] = []
  for (let stringItem of stringArray) {
    resultArray.push(prefixArg + stringItem)
  }
  resultString = joinStringWithLineBreaks(resultArray)
  return resultString
}

export const normalize = (stringArg: string): string => {
  let resultString: string
  let splitStringArray: string[] = splitStringAtLineBreak(stringArg)
  let minCommonLeftOffset: number

  const deIndentRegex = /^(\s*)/
  const emptyLineRegex = /^(\s*)$/

  for (let stringItem of splitStringArray) {
    let offsetString = deIndentRegex.exec(stringItem)[ 1 ]
    if (
      (typeof minCommonLeftOffset === 'undefined' || offsetString.length < minCommonLeftOffset)
      && !emptyLineRegex.test(stringItem)
    ) {
      minCommonLeftOffset = offsetString.length
    }
  };
  let resultSplitStringArray = []
  for (let stringItem of splitStringArray) {
    resultSplitStringArray.push(stringItem.substr(minCommonLeftOffset))
  }
  resultString = joinStringWithLineBreaks(resultSplitStringArray)
  return resultString
}
