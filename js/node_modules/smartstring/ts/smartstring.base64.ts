import * as plugins from './smartstring.plugins'

/**
 * the type for base 64
 */
export type TBase64Input = 'string' | 'base64' | 'base64uri'

/**
 * handle base64 strings
 */
export class Base64 {
  private refString: string
  constructor(inputStringArg, typeArg: TBase64Input) {
    switch (typeArg) {
      case 'string': // easiest case
        this.refString = inputStringArg
        break
      case 'base64':
        this.refString = base64.decode(inputStringArg)
        break
      case 'base64uri':
        this.refString = base64.decode(inputStringArg)
    }
  }

  /**
   * the simple string (unencoded)
   */
  get simpleString () {
    return this.refString
  }

  /**
   * the base64 encoded version of the original string
   */
  get base64String () {
    return base64.encode(this.refString)
  }

  /**
   * the base64uri encoded version of the original string
   */
  get base64UriString () {
    return base64.encodeUri(this.refString)
  }
}

export let base64 = {
  /**
   * encodes the string
   */
  encode: (stringArg: string) => {
    return plugins.jsBase64.encode(stringArg)
  },

  /**
   * encodes a stringArg to base64 uri style
   */
  encodeUri: (stringArg: string) => {
    return plugins.jsBase64.encodeURI(stringArg)
  },

  /**
   * decodes a base64 encoded string
   */
  decode: (stringArg: string) => {
    return plugins.jsBase64.decode(stringArg)
  }
}
