/**
 * Inherit the prototype methods from one constructor into another.
 * Based on the Closure Library
 * @param childClass Child class.
 * @param parentClass Parent class.
 */
export function inherits(childClass: Function, parentClass: Function): void;
/**
 * Sets resources
 * @param moduleName module name
 * @param resourceName resource name
 * @param resource resource object
 */
export function setResource(moduleName: string, resourceName: string, resource: string | object): void;
/**
 * Return a resource for the current
 * module and resource name.
 * @param moduleName current module
 * @param resourceName resource name
 */
export function getResource(moduleName: string, resourceName: string): string | object | any;
/**
 * Print in console log message. Passes on all parameters as passed.
 * @param args a list of objects to output. The string representations of each of these objects are appended together in the order listed and output
 */
export function log(...args: any[]): void;
/**
 * Print in console info message. Passes on all parameters as passed.
 * @param args a list of objects to output. The string representations of each of these objects are appended together in the order listed and output
 */
export function info(...args: any[]): void;
/**
 * Print in console warn message. Passes on all parameters as passed.
 * @param args a list of objects to output. The string representations of each of these objects are appended together in the order listed and output
 */
export function warn(...args: any[]): void;
/**
 * Make shallow comparison of two objects
 * @param firstObject first object to compare
 * @param secondObject second object to compare
 */
export function shallowEqual(firstObject: object, secondObject: object): boolean;
/**
 * This method is used to merge properties of two objects from options to results
 * @param options an object to merge properties.
 * @param result Object to merge properties from options. All properties from options are copied to result. If result contains property from options it is replaced. If result has a property and options doesn't have a property the property will be saved in result.
 * @param lowercase merge all properties to lower case. if this flag is set then result will
 * have all properties in lower case
 * @param copyUndefinedOptions copy input options with undefined values
 */
export function mergeObjects(options: any, result?: any, lowercase?: boolean, copyUndefinedOptions?: boolean): any;
/**
 * Create a deep copy of array
 * @param array array of object or primitive types
 * @param lowercase optional parameters to convert properties of object to lower case
 */
export function deepArrayCopy(array: object[], lowercase?: boolean): object[];
/**
 * Deep merge object method is the same as mergeObject method , except it supports nested objects.
 * @param options an object to merge properties.
 * @param result Object to merge properties from options
 * @param lowercase merge all properties to lower case. if this flag is set then result will
 * have all properties in lower case
 */
export function deepMergeObject(options: any, result?: any, lowercase?: boolean): any;
/**
 * Copy options with values from source object, which exists in options only
 * @param source source object
 * @param options options to copy from source
 * @param lowercase source and result properties to lower case. if this flag is set then result will
 * have all properties in lower case
 */
export function copyOptions(source: { [key: string]: any; }, options: { [key: string]: any; }, lowercase?: boolean): any;
/**
 * Return an object class name
 * @param obj object to return a class name
 */
export function getObjectClassName(obj: any): string;
/**
 * Create copy of the object
 * @param obj object to copy
 * @param target target
 * @param param param to be passed to copy constructor
 */
export function createCopy(obj: any, target?: any, param?: any): any;
/**
 * Sets name of the class, which can be retrieved using method getClassName()
 * or toString()
 * @param currentClass class
 * @param className name of the class
 */
export function setClassName(currentClass: any, className: string): void;
/**
 * This method is used to mark a method, which does not have implementation. By default it throws exception that method is not implemented.
 */
export function abstractMethod(): void;
/**
 * Specifies a virtual method.<br>
 * MyClass.prototype.myMethod = geotoolkit.virtualMethod<br>
 * by default it generates log message when invoked to indicate the method should be
 *   overridden.
 */
export function virtualMethod(): void;
/**
 * Return the current version
 */
export function getVersion(): string;
/**
 * Return the current version with full information
 */
export function getFullVersion(): any;
/**
 * Returns class constructor of the class, which is specified
 * as string with full namespace.
 * @param className class name to get the type for
 */
export function getClassType(className: string): Function;
/**
 * Return a base class name if it is exists
 * @param className class name
 */
export function getBaseClassName(className: string): string | any;
/**
 * Create instance of the class, which is specified as string with
 * full namespace. This class must have default constructor
 * @param className class name to instantiate
 * @param options optional parameters
 */
export function instantiateClass(className: string, options?: any): any;
/**
 * Create a function from a string containing the function
 * @param str string to unpack into a function
 */
export function str2Function(str: string): Function;
/**
 * Enables render using native resolution
 * @param enabled device pixel ratio is set based on this flag
 */
export function enableRenderNativeResolution(enabled: boolean): void;
/**
 * Returns true if render native resolution
 */
export function isRenderNativeResolution(): boolean;
/**
 * Returns pixel scale on current device
 */
export function getPixelScale(): number;
/**
 * Converts css size to canvas size
 * @param size canvas size
 */
export function convertCssToCanvas(size: number): number;
/**
 * Converts object to object with properties in lower case
 * @param object object to be processed
 */
export function toLowerCase(object: any): any;
/**
 * Process object in order to return a copy of the object
 * with flat property names. This method doesn't change original
 * object properties
 * @param object object to be processed
 * @param recursive is recursive call flag
 */
export function processObjectProperties(object: any, recursive?: boolean | null): any;
/**
 * Declares "childClass" to implement "parentInterface"
 * @param childClass child class
 * @param parentInterface parent interface
 */
export function implementsInterface(childClass: Function, parentInterface: Function): void;
/**
 * Requests "childClass" for "parentInterface" support
 * @param childInstance child class instance
 * @param parentInterface parent interface or it's short name
 */
export function interfaceCast(childInstance: any, parentInterface: Function | string): any;
/**
 * Check if instance is a parentClass or implements interface
 * @param instance instance to check implementation
 * @param parentClass parent interface or class or interface's short name
 */
export function isInstanceOf(instance: any, parentClass: Function | string): boolean;
/**
 * Check if object is empty (has no properties)
 * @param object object to check
 */
export function isObjectEmpty(object: any): boolean;
/**
 * Utility function to parse inline font string to json object.
 * if the font string is not valid it will return an null object.
 * @param font 
 */
export function parseFont(font: string): {fontweight: string; fontsize: string; fontfamily: string; fontlineheight: string; fontstyle: string} | object;
/**
 * initialize modules
 * @param options options
 * @param options.imports modules to init
 */
export function init(options: object | { imports?: any[]; } ): void;
