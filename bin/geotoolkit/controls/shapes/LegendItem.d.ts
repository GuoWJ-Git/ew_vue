import {Group} from '../../scene/Group';

/**
 * This is a parent class for legend items, which contains information to display.<br>
 * Legend items are shapes used to add information on a chart like donutchart, timeseries, etc.
 */
export class LegendItem extends Group {
    /**
     * This is a parent class for legend items, which contains information to display.<br>
     * Legend items are shapes used to add information on a chart like donutchart, timeseries, etc.
     * @param object associated with the legend item
     */
    constructor(object: any);
    /**
     * Gets object
     */
    getObject(): any;
    /**
     * Sets object
     * @param object object
     */
    setObject(object: any): this;
    /**
     * Sets options.
     * The implementations does nothing
     * @param options options
     */
    setOptions(options: any): this;
    /**
     * Updates Geometry.
     * The implementations does nothing
     */
    updateGeometry(): void;
    /**
     * Disposes the object.
     */
    dispose(): void;
}
/**
 * LegendItem Events
 */
export enum Events {
    /**
     * Change
     */
    Change = 'change'
}
