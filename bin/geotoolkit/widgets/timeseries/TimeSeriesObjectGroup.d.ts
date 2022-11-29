import {TimeSeriesObjectBase} from './TimeSeriesObjectBase';
import {TimeSeriesObject} from './TimeSeriesObject';

/**
 * TimeSeriesObject is a container of visuals used in TimeSeries Widget.
 * It primarily lets you get and set options of the different visuals.
 */
export class TimeSeriesObjectGroup extends TimeSeriesObjectBase {
    /**
     * TimeSeriesObject is a container of visuals used in TimeSeries Widget.
     * It primarily lets you get and set options of the different visuals.
     * @param options JSON object
     * @param options.min min value curve's
     * @param options.max max value curve's
     */
    constructor(options?: object | { min?: number; max?: number; } );
    /**
     * Set min
     * @param value min value curve's
     */
    setMin(value: number): this;
    /**
     * Get min
     */
    getMin(): number;
    /**
     * Set max
     * @param value max value curve's
     */
    setMax(value: number): this;
    /**
     * Get max
     */
    getMax(): number;
    /**
     * Sets if limits are shared between groups member
     * @param value if limits are shared between groups member
     */
    setShareLimits(value: boolean): this;
    /**
     * Get max
     */
    getShareLimits(): boolean;
    /**
     * Set axis options
     * @param options JSON which defines curve axis
     * @param options.visible visibility of curve axis
     * @param options.position curve axis position 'left'/'right'
     * @param options.titlevisible curve axis label visibility
     * @param options.width curve axis and text width
     * @param options.font curve axis text font
     * @param options.tickgeneratoroptions JSON which defines tick generator options
     * @param options.tickgeneratoroptions.edge edge
     * @param options.tickgeneratoroptions.edge.tickvisible edge tick visibility
     * @param options.tickgeneratoroptions.edge.labelvisible edge label visibility
     * @param options.tickgeneratoroptions.major major
     * @param options.tickgeneratoroptions.major.tickvisible major tick visibility
     * @param options.tickgeneratoroptions.major.labelvisible major label visibility
     * @param options.tickgeneratoroptions.minor minor
     * @param options.tickgeneratoroptions.minor.tickvisible minor tick visibility
     * @param options.tickgeneratoroptions.minor.labelvisible minor label visibility
     */
    setAxisOptions(options?: object | { visible?: boolean; position?: string; titlevisible?: boolean; width?: number; font?: string; tickgeneratoroptions?: object | { edge?: object | { tickvisible?: boolean; labelvisible?: boolean; } ; major?: object | { tickvisible?: boolean; labelvisible?: boolean; } ; minor?: object | { tickvisible?: boolean; labelvisible?: boolean; } ; } ; } ): this;
    /**
     * Add time series object to group. If the item (or any item in the array) is a member of another group, none of the items are added
     * @param item item
     */
    addObject(item: TimeSeriesObject | TimeSeriesObject[]): this;
    /**
     * Remove time series object from group
     * @param item item
     */
    removeObject(item: TimeSeriesObject | TimeSeriesObject[]): this;
}
