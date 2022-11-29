import {EventDispatcher} from '../util/EventDispatcher';

/**
 * Parent class for all styles
 */
export class Style extends EventDispatcher {
    /**
     * Parent class for all styles
     */
    constructor();
    /**
     * All inheritors should implement copy constructor or provide custom implementation for this method
     */
    clone(): this;
    /**
     * copy constructor
     * @param src Source to copy from
     * @param deepCopy deep copy
     */
    protected copyConstructor(src: Style, deepCopy?: boolean): this;
    /**
     * Gets time stamp
     */
    getTimeStamp(): number;
    /**
     * Update time stamp to indicate that style has been changed.
     * @param silent silent mode. If this parameter equals to true then
     * style doesn't send invalidate event
     */
    updateTimeStamp(silent?: boolean): this;
    /**
     * Set silent mode
     * @param bool flag to enable silent mode
     * @param force true if parent should be invalidated immediately
     */
    setSilent(bool: boolean, force?: boolean): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): object | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     */
    setProperties(properties: object): this;
    /**
     * notify the node that the style is invalidated
     */
    invalidate(): this;
    /**
     * Return status of the global notification for all styles.
     */
    static isStyleNotificationEnabled(): boolean;
}
