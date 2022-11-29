import {AbstractGauge} from './AbstractGauge';
import {Axis} from './axis/Axis';
import {Iterator} from '../util/iterator';
import {Range} from '../util/Range';

/**
 * Defines a class which implements a gauge displaying data represented by axes. Each axis represents one specific data
 * set with lower and upper limit. Every normal operation, like setting value, function registry, animation, e.t.c, are
 * performed on the axes as opposed to gauge like it is done in the numeric gauges. In this case the gauge
 * works as a container of the axes and is only capable of axis manipulations and abstract gauge functionality.
 */
export class AxisGauge extends AbstractGauge {
    /**
     * Defines a class which implements a gauge displaying data represented by axes. Each axis represents one specific data
     * set with lower and upper limit. Every normal operation, like setting value, function registry, animation, e.t.c, are
     * performed on the axes as opposed to gauge like it is done in the numeric gauges. In this case the gauge
     * works as a container of the axes and is only capable of axis manipulations and abstract gauge functionality.
     * @param options Object with axis gauge properties
     * @param options.axes JSON with axes properties where the key is the axis name and the property is an
     * object with axis properties. If no axis with such name has been registered, a new axis with the properties will be added.
     */
    constructor(options: object | { axes?: object | Axis; } );
    /**
     * Copy constructor function
     * Used to clone gauge
     * @param gauge source gauge
     */
    protected copyConstructor(gauge: AxisGauge): this;
    /**
     * Adds a new axis to the axis gauge.
     * @param params Parameters required to create an axis
     */
    addAxis(params: object): Axis;
    /**
     * Sets properties pertaining to this gauge.
     * @param props Properties to set
     * @param props.axes JSON with axes properties where the key is the axis name and the property is an
     * object with axis properties. If no axis with such name has been registered, a new axis with the properties will be added.
     */
    setProperties(props: object | { axes?: object | Axis; } ): this;
    /**
     * Gets properties pertaining to this gauge.
     */
    getProperties(): {axes: any} | any;
    /**
     * Gets an axis by its name or index from axes iterator
     * @param name Name of the axis or its index
     */
    getAxis(name: string | number): Axis;
    /**
     * Returns an iterator over existing axes in this gauge
     * @param filter a filter function. Returns all axes if null
     */
    getAxes(filter?: Function): Iterator;
    /**
     * Removes an axis from the gauge. If no such axis exists, nothing will be done.
     * @param name Name of the axis or its index
     */
    removeAxis(name: string | number): this;
    /**
     * Clears gauge axes
     */
    clearAxes(): void;
    /**
     * Changes the name of axis in the map without needing to remove and readd the axis
     * @param oldName Old name of the axis
     * @param newName New name of the axis
     */
    reassignAxisName(oldName: string, newName: string): this;
    /**
     * Checks if the gauge contains specified axis
     * @param axis The axis or its name
     */
    hasAxis(axis: Axis | string): boolean;
    /**
     * If this method is called on the gauge instead of an axis, the value and skipAnimation will be propagated
     * to each axis registered for the gauge. Equivalent to looping through each axis and setting this value.
     * @param val New value for each axis
     * @param skipAnimation True to not animate
     */
    setValue(val: number, skipAnimation?: boolean): this;
    /**
     * If this method is called on the gauge instead of an axis, the value and skipAnimation will be propagated
     * to each axis registered for the gauge. Equivalent to looping through each axis and setting this value.
     * Sets a new data range displayed by this axis
     * @param range New range to set
     * @param range.min lower limit
     * @param range.max upper limit
     */
    setRange(range: Range | object | { min?: number; max?: number; } ): this;
}
