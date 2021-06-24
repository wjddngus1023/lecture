import * as plugins from './smartstring.plugins'

/**
 * converts an erray of env strings from docker remote api to an usable object.
 * @param envArrayArg
 * @returns {}
 */
export const makeEnvObject = function (envArrayArg: string[]) {
  let returnObject = {}
  let regexString = /(.*)=(.*)/
  if (typeof envArrayArg !== 'undefined') {
    for (let envKey in envArrayArg) {
      let regexMatches = regexString.exec(envArrayArg[ envKey ])
      returnObject[ regexMatches[ 1 ] ] = regexMatches[ 2 ]
    }
  }
  return returnObject
}
