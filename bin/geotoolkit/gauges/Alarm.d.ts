import {Range} from '../util/Range';

/**
 * An Alarm is attached to a gauge and contains a collection of Alerts
 */
export class Alarm {
    /**
     * An Alarm is attached to a gauge and contains a collection of Alerts
     * @param options JSON with properties
     * @param options.name Name of the alarm for indexing
     * @param options.range Range that the alarm is effective on
     * @param options.handlername Name of the handler function as defined in Alarm Factory
     * @param options.additionalproperties Extra properties which will be passed into the handler function as fourth parameter
     */
    constructor(options: object | { name?: string; range?: Range; handlername?: string; additionalproperties?: any; } );
    /**
     * Gets the name of the function in Alarm Factory that is associated with this alarm
     */
    getHandlerName(): string;
    /**
     * Gets the name of the function in Alarm Factory that is associated with this alarm
     */
    getName(): string;
    /**
     * Takes a value and tests if it lies within this alarm range
     * @param val Value to test
     */
    testValue(val: number): boolean;
    /**
     * Sets properties pertaining to alarm class
     * @param props JSON with properties or an alarm to extract properties from
     * @param props.name Name of the alarm for indexing
     * @param props.range When value of the gauge or axis falls within this range, the alarm will fire
     * @param props.handlername Name of the handler in function registry which will be called when this alarm will fire
     * @param props.additionalproperties Extra properties which will be passed into the handler function as fourth parameter
     */
    setProperties(props: object | { name?: string; range?: Range; handlername?: string; additionalproperties?: any; } ): this;
    /**
     * Returns properties of alarm
     */
    getProperties(): {name: string; range: Range; handlername: string; additionalproperties: any} | any;
    /**
     * Returns extra properties which will be passed into the handler function as fourth parameter
     */
    getAdditionalProperties(): object;
    /**
     * Sets extra properties which will be passed into the handler function as fourth parameter
     * @param props Properties
     */
    setAdditionalProperties(props: object): this;
    /**
     * Returns an instance of alarm created using provided properties
     * @param props alarm properties
     */
    static fromObject(props: object | Alarm): Alarm;
}
