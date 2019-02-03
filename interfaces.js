// error messages declarations
const INTERFACE_ERROR = `the interface isn't implemented problerly\n\t`;
const errorMessages = {
    notImplemented(methodName) {
        return `${INTERFACE_ERROR}${methodName} not implemented\n`;
    },
    argsListNotImplemented(methodName, argsList) {
        return `${INTERFACE_ERROR}${methodName} parameter list isn't implemented right it should be [${argsList}]\n`;
    }
}
/**
 * returns the parameters of a function as a list
 * 
 * @param {Function} _function 
 */
function getParameterList(_function) {
    const _functionString = _function.toString();
    const paramListAsString = _functionString.substring(_functionString.indexOf('(') + 1, _functionString.indexOf(')'));
    const paramList = paramListAsString.split(',').map(param => param.trim());
    return paramList;
}
/**
 * check if two arrays are equal
 * 
 * @param {Array} array1 
 * @param {Array} array2 
 */
function arrayEquals(array1, array2) {
    return JSON.stringify(array1) === JSON.stringify(array2);
}


/**
 * this method simulates the implements Keyword in Java where you send a ClassName and the interface as an array and it checks for the methods if they exist or if method and paramete list exists
 * 
 * @author Hazem Huzayen
 * @param {ObjectConstructor} _Class 
 * @param {Array} _interface 
 */
module.exports = function _implements(_Class, _Interface) {
    // get Class methods
    const methods = Object.getOwnPropertyNames( _Class.prototype );

    // iterate over the contracted methods from the interface array
    // check if they are implemented in the class
    for (let i = 0; i < _Interface.length; i ++) {
        const interfaceMethod = _Interface[i];
        //check if interface array element is string meaning only check if method is available on the Class declaration
        if (typeof interfaceMethod === 'string') {
            if (!methods.includes(interfaceMethod)) {
                throw new Error(errorMessages.notImplemented(interfaceMethod));
            }
        //treat it as an object and check for the parameter list if it is as defined by the interface
        } else {
            const methodName = interfaceMethod.name;
            const methodArgs = interfaceMethod.args;
            if (!methods.includes(methodName)) {
                throw new Error(errorMessages.notImplemented(methodName));
            } else {
                const parameterList = getParameterList(_Class.prototype[methodName].toString());
                if (!arrayEquals(methodArgs, parameterList)) {
                    throw new Error(errorMessages.argsListNotImplemented(methodName, methodArgs));
                }
            }
        }
        
    }

    return _Class;
}











