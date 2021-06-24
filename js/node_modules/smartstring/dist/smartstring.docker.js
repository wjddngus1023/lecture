"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * converts an erray of env strings from docker remote api to an usable object.
 * @param envArrayArg
 * @returns {}
 */
exports.makeEnvObject = function (envArrayArg) {
    let returnObject = {};
    let regexString = /(.*)=(.*)/;
    if (typeof envArrayArg !== 'undefined') {
        for (let envKey in envArrayArg) {
            let regexMatches = regexString.exec(envArrayArg[envKey]);
            returnObject[regexMatches[1]] = regexMatches[2];
        }
    }
    return returnObject;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdHJpbmcuZG9ja2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRzdHJpbmcuZG9ja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7Ozs7R0FJRztBQUNVLFFBQUEsYUFBYSxHQUFHLFVBQVUsV0FBcUI7SUFDMUQsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFBO0lBQ3JCLElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQTtJQUM3QixFQUFFLENBQUMsQ0FBQyxPQUFPLFdBQVcsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLEdBQUcsQ0FBQyxDQUFDLElBQUksTUFBTSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxZQUFZLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUUsTUFBTSxDQUFFLENBQUMsQ0FBQTtZQUMxRCxZQUFZLENBQUUsWUFBWSxDQUFFLENBQUMsQ0FBRSxDQUFFLEdBQUcsWUFBWSxDQUFFLENBQUMsQ0FBRSxDQUFBO1FBQ3ZELENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTSxDQUFDLFlBQVksQ0FBQTtBQUNyQixDQUFDLENBQUEifQ==