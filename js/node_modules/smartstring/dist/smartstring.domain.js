"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Domain {
    constructor(domainStringArg) {
        let regexMatches = domainRegex(domainStringArg);
        this.fullName = '';
        for (let i = 1; i <= 5; i++) {
            if (regexMatches[i - 1]) {
                let localMatch = regexMatches[i - 1];
                this['level' + i.toString()] = localMatch;
                if (this.fullName === '') {
                    this.fullName = localMatch;
                }
                else {
                    this.fullName = localMatch + '.' + this.fullName;
                }
            }
            else {
                this['level' + i.toString()] = undefined;
            }
            ;
        }
        ;
        this.protocol = protocolRegex(domainStringArg);
        this.zoneName = this.level2 + '.' + this.level1;
        // aliases
        this.topLevel = this.level1;
        this.domainName = this.level2;
        this.subDomain = this.level3;
    }
}
exports.Domain = Domain;
let domainRegex = function (stringArg) {
    let regexString = /([a-zA-Z0-9\-\_]*)\.{0,1}([a-zA-Z0-9\-\_]*)\.{0,1}([a-zA-Z0-9\-\_]*)\.{0,1}([a-zA-Z0-9\-\_]*)\.{0,1}([a-zA-Z0-9\-\_]*)\.{0,1}$/;
    let regexMatches = regexString.exec(stringArg);
    regexMatches.reverse(); //make sure we build the domain from toplevel to subdomain (reversed order)
    regexMatches.pop(); // pop the last element, which is, since we reversed the Array, the full String of matched elements
    let regexMatchesFiltered = regexMatches.filter(function (stringArg) {
        return (stringArg !== '');
    });
    return regexMatchesFiltered;
};
let protocolRegex = function (stringArg) {
    let regexString = /^([a-zA-Z0-9]*):\/\//;
    let regexMatches = regexString.exec(stringArg);
    if (regexMatches) {
        return regexMatches[1];
    }
    else {
        return undefined;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdHJpbmcuZG9tYWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRzdHJpbmcuZG9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFhRSxZQUFhLGVBQXVCO1FBQ2xDLElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQTtRQUNsQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzVCLEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBRSxDQUFDLEdBQUcsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLFVBQVUsR0FBRyxZQUFZLENBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBRSxDQUFBO2dCQUN0QyxJQUFJLENBQUUsT0FBTyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBRSxHQUFHLFVBQVUsQ0FBQTtnQkFDM0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQTtnQkFDNUIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDTixJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQTtnQkFDbEQsQ0FBQztZQUNILENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUUsT0FBTyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBRSxHQUFHLFNBQVMsQ0FBQTtZQUM1QyxDQUFDO1lBQUEsQ0FBQztRQUNKLENBQUM7UUFBQSxDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO1FBRS9DLFVBQVU7UUFDVixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQTtJQUM5QixDQUFDO0NBQ0Y7QUFyQ0Qsd0JBcUNDO0FBR0QsSUFBSSxXQUFXLEdBQUcsVUFBVSxTQUFpQjtJQUMzQyxJQUFJLFdBQVcsR0FBRyxnSUFBZ0ksQ0FBQTtJQUNsSixJQUFJLFlBQVksR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzlDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQSxDQUFDLDJFQUEyRTtJQUNsRyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUEsQ0FBQyxtR0FBbUc7SUFDdEgsSUFBSSxvQkFBb0IsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVUsU0FBaUI7UUFDeEUsTUFBTSxDQUFDLENBQUMsU0FBUyxLQUFLLEVBQUUsQ0FBQyxDQUFBO0lBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0gsTUFBTSxDQUFDLG9CQUFvQixDQUFBO0FBQzdCLENBQUMsQ0FBQztBQUVGLElBQUksYUFBYSxHQUFHLFVBQVUsU0FBaUI7SUFDN0MsSUFBSSxXQUFXLEdBQUcsc0JBQXNCLENBQUE7SUFDeEMsSUFBSSxZQUFZLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUM5QyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxZQUFZLENBQUUsQ0FBQyxDQUFFLENBQUE7SUFDMUIsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ04sTUFBTSxDQUFDLFNBQVMsQ0FBQTtJQUNsQixDQUFDO0FBQ0gsQ0FBQyxDQUFBIn0=