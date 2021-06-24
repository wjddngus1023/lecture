import "typings-global";
/**
 * adds an obejct to the parent object if it doesn't exists
 * @param parentObject
 * @param childParam
 * @param logBool
 * @returns {boolean}
 */
export declare let smartAdd: (parentObject: any, childParam: string) => boolean;
/**
 * checks if in object has a parameter with a given key name, returns true if yes.
 * @param parentObject
 * @param childParam
 * @returns {boolean}
 */
export declare let exists: (parentObject: any, childParam: string) => boolean;
export declare let forEachMinimatch: (parentObjectArg: any, wildcardArg: string, callbackArg: any) => void;
