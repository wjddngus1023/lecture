"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* ---------------------------------------------- *
 * ------------------ classes ------------------- *
 * ---------------------------------------------- */
class GitRepo {
    constructor(stringArg, tokenArg) {
        let regexMatches = gitRegex(stringArg);
        this.host = regexMatches[1];
        this.user = regexMatches[2];
        this.repo = regexMatches[3];
        this.accessToken = tokenArg;
        this.sshUrl = gitLink(this.host, this.user, this.repo, this.accessToken, 'ssh');
        this.httpsUrl = gitLink(this.host, this.user, this.repo, this.accessToken, 'https');
    }
}
exports.GitRepo = GitRepo;
/* ---------------------------------------------- *
 * ------------------ helpers ------------------- *
 * ---------------------------------------------- */
const gitRegex = function (stringArg) {
    const regexString = /([a-zA-Z0-9\-\.]*)(?:\/|\:)([a-zA-Z0-9\-\.]*)(?:\/)([a-zA-Z0-9\-\.]*)(?:\.git)/;
    let regexMatches = regexString.exec(stringArg);
    return regexMatches;
};
const gitLink = function (hostArg, userArg, repoArg, tokenArg = '', linkTypeArg) {
    let returnString;
    if (tokenArg !== '') {
        tokenArg = tokenArg + '@';
    }
    switch (linkTypeArg) {
        case 'https':
            returnString = 'https://' +
                tokenArg + hostArg + '/' + userArg + '/' + repoArg + '.git';
            break;
        case 'ssh':
            returnString = 'git@' +
                hostArg + ':' + userArg + '/' + repoArg + '.git';
            break;
        default:
            console.error('Link Type ' + linkTypeArg + ' not known');
            break;
    }
    return returnString;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdHJpbmcuZ2l0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRzdHJpbmcuZ2l0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7O29EQUVvRDtBQUNwRDtJQU9FLFlBQWEsU0FBaUIsRUFBRSxRQUFpQjtRQUMvQyxJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDdEMsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUUsQ0FBQyxDQUFFLENBQUE7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUUsQ0FBQyxDQUFFLENBQUE7UUFDN0IsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUUsQ0FBQyxDQUFFLENBQUE7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUE7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUMvRSxJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3JGLENBQUM7Q0FDRjtBQWhCRCwwQkFnQkM7QUFFRDs7b0RBRW9EO0FBQ3BELE1BQU0sUUFBUSxHQUFHLFVBQVUsU0FBaUI7SUFDMUMsTUFBTSxXQUFXLEdBQUcsZ0ZBQWdGLENBQUE7SUFDcEcsSUFBSSxZQUFZLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUM5QyxNQUFNLENBQUMsWUFBWSxDQUFBO0FBQ3JCLENBQUMsQ0FBQTtBQUVELE1BQU0sT0FBTyxHQUFHLFVBQVUsT0FBZSxFQUFFLE9BQWUsRUFBRSxPQUFlLEVBQUUsV0FBbUIsRUFBRSxFQUFFLFdBQVc7SUFDN0csSUFBSSxZQUFZLENBQUE7SUFDaEIsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEIsUUFBUSxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUE7SUFDM0IsQ0FBQztJQUNELE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDcEIsS0FBSyxPQUFPO1lBQ1YsWUFBWSxHQUFHLFVBQVU7Z0JBQ3ZCLFFBQVEsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLE1BQU0sQ0FBQTtZQUM3RCxLQUFLLENBQUE7UUFDUCxLQUFLLEtBQUs7WUFDUixZQUFZLEdBQUcsTUFBTTtnQkFDbkIsT0FBTyxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUE7WUFDbEQsS0FBSyxDQUFBO1FBQ1A7WUFDRSxPQUFPLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxXQUFXLEdBQUcsWUFBWSxDQUFDLENBQUE7WUFDeEQsS0FBSyxDQUFBO0lBQ1QsQ0FBQztJQUNELE1BQU0sQ0FBQyxZQUFZLENBQUE7QUFDckIsQ0FBQyxDQUFBIn0=