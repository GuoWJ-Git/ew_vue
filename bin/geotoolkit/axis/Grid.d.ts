import {Node} from '../scene/Node';
import {TickGenerator} from './TickGenerator';
import {Rect} from '../util/Rect';
import {Orientation} from '../util/Orientation';
import {LineStyle} from '../attributes/LineStyle';
import {AxisDimension} from './AxisDimension';

/**
 * Creates a grid that will fill its parent container with grid lines
 */
export class Grid extends Node {
    /**
     * Creates a grid that will fill its parent container with grid lines
     * @param htg horizontal tick generator or object with all props
     * @param htg.htg horizontal tick generator
     * @param htg.vtg vertical tick generator
     * @param htg.hstyles line style for horizontal ticks
     * @param htg.vstyles line style for vertical ticks
     * @param htg.infinity infinity mode flag
     * @param vtg vertical tick generator
     */
    constructor(htg?: TickGenerator | object | { htg?: TickGenerator; vtg?: TickGenerator; hstyles?: object; vstyles?: object; infinity?: boolean; } , vtg?: TickGenerator);
    /**
     * Set infinity mode flag to draw axis outside the model limits
     * @param infinityMode infinity mode flag
     */
    setInfiniteMode(infinityMode: boolean): this;
    /**
     * Return infinity mode flag
     */
    getInfiniteMode(): boolean;
    /**
     * Gets bounds in the parent coordinates
     */
    getBounds(): Rect;
    /**
     * Gets line style for the specified tick type and orientation
     * @param orient orientation
     * @param tickGrade tick type, which supports tick generator like "major", "minor"
     */
    getLineStyle(orient: Orientation | string, tickGrade: string): LineStyle | any;
    /**
     * Sets line style for the specified tick type and orientation
     * WARNING! since 2020 (3.0) returning value type is geotoolkit.axis.Grid, not geotoolkit.attributes.LineStyle
     * @param orient orientation
     * @param tickGrade tick type, which supports tick generator like "major", "minor"
     * @param style line style for the specified tick type
     * @param returnThis return this or style
     */
    setLineStyle(orient: Orientation | string, tickGrade: string, style: LineStyle | string | object, returnThis?: boolean): LineStyle | this;
    /**
     * Return tick generator
     * @param orient orientation
     */
    getTickGenerator(orient: Orientation | string): TickGenerator | any;
    /**
     * Sets tick generator
     * @param orient orientation
     * @param tg a new tick generator
     */
    setTickGenerator(orient: Orientation | string, tg: TickGenerator | any): this;
    /**
     * Sets axis dimension to synchronize tick generator parameters with external source
     * @param orient orientation
     * @param dimension dimension
     */
    setAxisDimension(orient: Orientation | string, dimension: AxisDimension): this;
    /**
     * Called if axis dimension is changed
     * @param dimension dimension
     */
    protected onAxisDimensionChanged(dimension: AxisDimension): void;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {htg: TickGenerator; vtg: TickGenerator; hstyles: object; vstyles: object; infinity: boolean} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.vtg vertical tick generator
     * @param properties.htg horizontal tick generator
     * @param properties.hstyles line style for horizontal ticks
     * @param properties.vstyles line style for vertical ticks
     * @param properties.infinity infinity mode flag
     */
    setProperties(properties: object | { vtg?: object; htg?: object; hstyles?: object; vstyles?: object; infinity?: boolean; } ): this;
}
