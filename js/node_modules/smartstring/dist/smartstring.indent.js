"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * splits a string into an array
 * @param stringArg
 */
const splitStringAtLineBreak = (stringArg) => {
    let resultArray = stringArg.split('\n');
    return cleanStringArray(resultArray);
};
/**
 * joins a string together again
 * @param stringArrayArg
 */
const joinStringWithLineBreaks = (stringArrayArg) => {
    let resultString = '';
    for (let line of stringArrayArg) {
        resultString = resultString + line + '\n'; // add new line at end
    }
    return resultString;
};
/**
 * cleans first and last line in case they are empty
 * @param stringArrayArg
 */
const cleanStringArray = (stringArrayArg) => {
    let testRegex = /^[\s]*$/;
    if (testRegex.test(stringArrayArg[0])) {
        stringArrayArg.shift();
    }
    if (testRegex.test(stringArrayArg[stringArrayArg.length - 1])) {
        stringArrayArg.pop();
    }
    return stringArrayArg;
};
/**
 * indent an array
 * @param stringArg
 * @param spaceAmount
 */
exports.indent = (stringArg, spaceAmount) => {
    let localStringArray = splitStringAtLineBreak(stringArg);
    for (let stringArg of localStringArray) {
        stringArg = ' '.repeat(spaceAmount) + stringArg;
    }
    let resultString = joinStringWithLineBreaks(localStringArray);
    return resultString;
};
/**
 * indents a string with prefix
 * @param stringArg
 * @param prefixArg
 */
exports.indentWithPrefix = (stringArg, prefixArg) => {
    let resultString;
    let stringArray = splitStringAtLineBreak(stringArg);
    let resultArray = [];
    for (let stringItem of stringArray) {
        resultArray.push(prefixArg + stringItem);
    }
    resultString = joinStringWithLineBreaks(resultArray);
    return resultString;
};
exports.normalize = (stringArg) => {
    let resultString;
    let splitStringArray = splitStringAtLineBreak(stringArg);
    let minCommonLeftOffset;
    const deIndentRegex = /^(\s*)/;
    const emptyLineRegex = /^(\s*)$/;
    for (let stringItem of splitStringArray) {
        let offsetString = deIndentRegex.exec(stringItem)[1];
        if ((typeof minCommonLeftOffset === 'undefined' || offsetString.length < minCommonLeftOffset)
            && !emptyLineRegex.test(stringItem)) {
            minCommonLeftOffset = offsetString.length;
        }
    }
    ;
    let resultSplitStringArray = [];
    for (let stringItem of splitStringArray) {
        resultSplitStringArray.push(stringItem.substr(minCommonLeftOffset));
    }
    resultString = joinStringWithLineBreaks(resultSplitStringArray);
    return resultString;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdHJpbmcuaW5kZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRzdHJpbmcuaW5kZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7OztHQUdHO0FBQ0gsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLFNBQWlCLEVBQVksRUFBRTtJQUM3RCxJQUFJLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3ZDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQTtBQUN0QyxDQUFDLENBQUE7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLHdCQUF3QixHQUFHLENBQUMsY0FBd0IsRUFBVSxFQUFFO0lBQ3BFLElBQUksWUFBWSxHQUFXLEVBQUUsQ0FBQTtJQUM3QixHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLFlBQVksR0FBRyxZQUFZLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQSxDQUFDLHNCQUFzQjtJQUNsRSxDQUFDO0lBQ0QsTUFBTSxDQUFDLFlBQVksQ0FBQTtBQUNyQixDQUFDLENBQUE7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLGdCQUFnQixHQUFHLENBQUMsY0FBd0IsRUFBWSxFQUFFO0lBQzlELElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQTtJQUN6QixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDeEIsQ0FBQztJQUNELEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFFLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFBO0lBQ3RCLENBQUM7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