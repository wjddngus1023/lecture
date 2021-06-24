import * as plugins from './smartstring.plugins';

export class Domain {
  fullName: string
  level1: string
  level2: string
  level3: string
  level4: string
  level5: string
  protocol: string
  zoneName: string
  // aliases
  topLevel: string
  domainName
  subDomain
  constructor (domainStringArg: string) {
    let regexMatches = domainRegex(domainStringArg);
    this.fullName = ''
    for (let i = 1; i <= 5; i++) {
      if (regexMatches[ i - 1 ]) {
        let localMatch = regexMatches[ i - 1 ]
        this[ 'level' + i.toString() ] = localMatch
        if (this.fullName === '') {
          this.fullName = localMatch
        } else {
          this.fullName = localMatch + '.' + this.fullName
        }
      } else {
        this[ 'level' + i.toString() ] = undefined
      };
    };
    this.protocol = protocolRegex(domainStringArg)
    this.zoneName = this.level2 + '.' + this.level1

    // aliases
    this.topLevel = this.level1
    this.domainName = this.level2
    this.subDomain = this.level3
  }
}


let domainRegex = function (stringArg: string) {
  let regexString = /([a-zA-Z0-9\-\_]*)\.{0,1}([a-zA-Z0-9\-\_]*)\.{0,1}([a-zA-Z0-9\-\_]*)\.{0,1}([a-zA-Z0-9\-\_]*)\.{0,1}([a-zA-Z0-9\-\_]*)\.{0,1}$/
  let regexMatches = regexString.exec(stringArg)
  regexMatches.reverse() //make sure we build the domain from toplevel to subdomain (reversed order)
  regexMatches.pop() // pop the last element, which is, since we reversed the Array, the full String of matched elements
  let regexMatchesFiltered = regexMatches.filter(function (stringArg: string) {
    return (stringArg !== '')
  });
  return regexMatchesFiltered
};

let protocolRegex = function (stringArg: string) {
  let regexString = /^([a-zA-Z0-9]*):\/\//
  let regexMatches = regexString.exec(stringArg)
  if (regexMatches) {
    return regexMatches[ 1 ]
  } else {
    return undefined
  }
}
