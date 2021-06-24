import * as plugins from './smartstring.plugins'

/* ---------------------------------------------- *
 * ------------------ classes ------------------- *
 * ---------------------------------------------- */
export class GitRepo {
  host: string
  user: string
  repo: string
  accessToken: string
  sshUrl: string
  httpsUrl: string
  constructor (stringArg: string, tokenArg?: string) {
    let regexMatches = gitRegex(stringArg)
    this.host = regexMatches[ 1 ]
    this.user = regexMatches[ 2 ]
    this.repo = regexMatches[ 3 ]
    this.accessToken = tokenArg
    this.sshUrl = gitLink(this.host, this.user, this.repo, this.accessToken, 'ssh')
    this.httpsUrl = gitLink(this.host, this.user, this.repo, this.accessToken, 'https')
  }
}

/* ---------------------------------------------- *
 * ------------------ helpers ------------------- *
 * ---------------------------------------------- */
const gitRegex = function (stringArg: string) {
  const regexString = /([a-zA-Z0-9\-\.]*)(?:\/|\:)([a-zA-Z0-9\-\.]*)(?:\/)([a-zA-Z0-9\-\.]*)(?:\.git)/
  let regexMatches = regexString.exec(stringArg)
  return regexMatches
}

const gitLink = function (hostArg: string, userArg: string, repoArg: string, tokenArg: string = '', linkTypeArg): string {
  let returnString
  if (tokenArg !== '') {
    tokenArg = tokenArg + '@'
  }
  switch (linkTypeArg) {
    case 'https':
      returnString = 'https://' +
        tokenArg + hostArg + '/' + userArg + '/' + repoArg + '.git'
      break
    case 'ssh':
      returnString = 'git@' +
        hostArg + ':' + userArg + '/' + repoArg + '.git'
      break
    default:
      console.error('Link Type ' + linkTypeArg + ' not known')
      break
  }
  return returnString
}
