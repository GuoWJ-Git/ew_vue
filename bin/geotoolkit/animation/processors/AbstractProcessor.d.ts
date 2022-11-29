/**
 * This class provide interface for processors which are used by geotoolkit.animation.effects.AbstractEffect to animate complex structures
 * like object, array or other.
 */
export class AbstractProcessor {
    /**
     * This class provide interface for processors which are used by geotoolkit.animation.effects.AbstractEffect to animate complex structures
     * like object, array or other.
     */
    constructor();
    /**
     * Method iterates over passed object, extracts numeric properties and call function func with them
     * @param from initial state
     * @param to target state
     * @param out destination state
     * @param func interpolate function
     */
    process(from: any, to: any, out: any, func: Function): any;
    /**
     * Calculate distance between two object
     * @param v1 first object
     * @param v2 second object
     */
    distance(v1: any, v2: any): number;
    /**
     * Returns clone of passed object
     * @param v object to clone
     */
    clone(v: any): any;
}
