"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartstring.plugins");
exports.createRandomString = (patternArg, lengthArg, optionsArg) => {
    return plugins.randomatic(patternArg, lengthArg, optionsArg);
};
exports.createCryptoRandomString = (lengthArg) => {
    return plugins.cryptoRandomString(lengthArg);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdHJpbmcuY3JlYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRzdHJpbmcuY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQWdEO0FBRW5DLFFBQUEsa0JBQWtCLEdBQUcsQ0FDaEMsVUFBa0IsRUFDbEIsU0FBaUIsRUFDakIsVUFBZSxFQUNQLEVBQUU7SUFDVixNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFBO0FBQzlELENBQUMsQ0FBQTtBQUVZLFFBQUEsd0JBQXdCLEdBQUcsQ0FBQyxTQUFTLEVBQVUsRUFBRTtJQUM1RCxNQUFNLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQzlDLENBQUMsQ0FBQSJ9