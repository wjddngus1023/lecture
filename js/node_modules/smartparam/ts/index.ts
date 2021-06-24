import "typings-global";
import plugins = require("./smartparam.plugins");


/**
 * adds an obejct to the parent object if it doesn't exists
 * @param parentObject
 * @param childParam
 * @param logBool
 * @returns {boolean}
 */
export let smartAdd = function (parentObject,childParam:string):boolean {
    if(parentObject.hasOwnProperty(childParam)){
        return false;
    } else {
        parentObject[childParam] = {}
        return true;
    }
};

/**
 * checks if in object has a parameter with a given key name, returns true if yes.
 * @param parentObject
 * @param childParam
 * @returns {boolean}
 */
export let exists = function(parentObject,childParam:string):boolean {
    if (parentObject.hasOwnProperty(childParam)) {
        return true;
    }
    return false;
};

export let forEachMinimatch = (parentObjectArg:any,wildcardArg:string,callbackArg) => {
    let propertyNames = Object.getOwnPropertyNames(parentObjectArg);
    let propertyNamesMatched = propertyNames.filter((propertyNameArg) => {
        return plugins.minimatch(propertyNameArg,wildcardArg);
    });
    propertyNamesMatched.forEach((propertyNameArg) => {
        callbackArg(parentObjectArg[propertyNameArg]);
    });
};