import * as plugins from './smartstring.plugins'

export const createRandomString = (
  patternArg: string,
  lengthArg: number,
  optionsArg: any
): string => {
  return plugins.randomatic(patternArg, lengthArg, optionsArg)
}

export const createCryptoRandomString = (lengthArg): string => {
  return plugins.cryptoRandomString(lengthArg)
}
