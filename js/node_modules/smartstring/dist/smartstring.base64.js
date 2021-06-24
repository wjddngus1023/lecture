"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./smartstring.plugins");
/**
 * handle base64 strings
 */
class Base64 {
    constructor(inputStringArg, typeArg) {
        switch (typeArg) {
            case 'string':// easiest case
                this.refString = inputStringArg;
                break;
            case 'base64':
                this.refString = exports.base64.decode(inputStringArg);
                break;
            case 'base64uri':
                this.refString = exports.base64.decode(inputStringArg);
        }
    }
    /**
     * the simple string (unencoded)
     */
    get simpleString() {
        return this.refString;
    }
    /**
     * the base64 encoded version of the original string
     */
    get base64String() {
        return exports.base64.encode(this.refString);
    }
    /**
     * the base64uri encoded version of the original string
     */
    get base64UriString() {
        return exports.base64.encodeUri(this.refString);
    }
}
exports.Base64 = Base64;
exports.base64 = {
    /**
     * encodes the string
     */
    encode: (stringArg) => {
        return plugins.jsBase64.encode(stringArg);
    },
    /**
     * encodes a stringArg to base64 uri style
     */
    encodeUri: (stringArg) => {
        return plugins.jsBase64.encodeURI(stringArg);
    },
    /**
     * decodes a base64 encoded string
     */
    decode: (stringArg) => {
        return plugins.jsBase64.decode(stringArg);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRzdHJpbmcuYmFzZTY0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdHMvc21hcnRzdHJpbmcuYmFzZTY0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQWdEO0FBT2hEOztHQUVHO0FBQ0g7SUFFRSxZQUFZLGNBQWMsRUFBRSxPQUFxQjtRQUMvQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUssUUFBUSxDQUFFLGVBQWU7Z0JBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFBO2dCQUMvQixLQUFLLENBQUE7WUFDUCxLQUFLLFFBQVE7Z0JBQ1gsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFBO2dCQUM5QyxLQUFLLENBQUE7WUFDUCxLQUFLLFdBQVc7Z0JBQ2QsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ2xELENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLFlBQVk7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQTtJQUN2QixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLFlBQVk7UUFDZCxNQUFNLENBQUMsY0FBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxlQUFlO1FBQ2pCLE1BQU0sQ0FBQyxjQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0NBQ0Y7QUFuQ0Qsd0JBbUNDO0FBRVUsUUFBQSxNQUFNLEdBQUc7SUFDbEI7O09BRUc7SUFDSCxNQUFNLEVBQUUsQ0FBQyxTQUFpQixFQUFFLEVBQUU7UUFDNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzNDLENBQUM7SUFFRDs7T0FFRztJQUNILFNBQVMsRUFBRSxDQUFDLFNBQWlCLEVBQUUsRUFBRTtRQUMvQixNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDOUMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTSxFQUFFLENBQUMsU0FBaUIsRUFBRSxFQUFFO1FBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUMzQyxDQUFDO0NBQ0YsQ0FBQSJ9