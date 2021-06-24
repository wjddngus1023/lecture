"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartstring.plugins");
/**
 * replaces all occurences of something in a string
 * @param stringArg
 * @param searchRegExp
 * @param replacementString
 */
exports.replaceAll = (stringArg, searchRegExp, replacementString) => {
    return stringArg.replace(new RegExp(searchRegExp, 'g'), replacementString);
};
/**
 * normalizes a string
 * @param stringArg
 */
exports.standard = (stringArg) => {
    let fix1 = plugins.stripIndent(stringArg); // fix indention
    let fix2 = plugins.normalizeNewline(fix1); // fix newlines
    let fix3 = exports.replaceAll(fix2, /\t/, ' '); // fix tabs
    return fix3;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdHJpbmcubm9ybWFsaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRzdHJpbmcubm9ybWFsaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQWdEO0FBRWhEOzs7OztHQUtHO0FBQ1UsUUFBQSxVQUFVLEdBQUcsQ0FBQyxTQUFpQixFQUFFLFlBQWlCLEVBQUUsaUJBQXlCLEVBQUUsRUFBRTtJQUM1RixNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLEVBQUUsaUJBQWlCLENBQUMsQ0FBQTtBQUM1RSxDQUFDLENBQUE7QUFFRDs7O0dBR0c7QUFDVSxRQUFBLFFBQVEsR0FBRyxDQUFDLFNBQWlCLEVBQVUsRUFBRTtJQUNwRCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUMsZ0JBQWdCO0lBQzFELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDLGVBQWU7SUFDekQsSUFBSSxJQUFJLEdBQUcsa0JBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFBLENBQUMsV0FBVztJQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFBO0FBQ2IsQ0FBQyxDQUFBIn0=