import {LogAbstractVisual} from './LogAbstractVisual';
import {TickGenerator} from '../axis/TickGenerator';
import {LineStyle} from '../attributes/LineStyle';
import {RgbaColor} from '../util/RgbaColor';
import {Rect} from '../util/Rect';

/**
 * Create horizontal depth grid.
 */
export class LogHorizontalGrid extends LogAbstractVisual {
    /**
     * Create horizontal depth grid.
     * @param options The algorithm used to generate lines along the grid(default is adaptive tick generator) or properties object
     * @param options.minorlinestyle minor line style
     * @param options.majorlinestyle major line style
     * @param options.tickgenerator The algorithm to generate lines along the grid
     */
    constructor(options?: TickGenerator | object | { minorlinestyle?: LineStyle | string | object; majorlinestyle?: LineStyle | string | object; tickgenerator?: TickGenerator; } );
    /**
     * Sets the new tick generator
     * @param tickGenerator The algorithm used to generate lines along the grid(default is adaptive tick generator)
     */
    setTickGenerator(tickGenerator: TickGenerator): this;
    /**
     * Gets the current tick generator
     */
    getTickGenerator(): TickGenerator;
    /**
     * Sets minor line style. This method does the same as setMinorLineStyle.
     * This line style is used if the tick generator is not set otherwise the
     * tick generator style is used.
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string, merge?: boolean): this;
    /**
     * Returns the minor line style
     */
    getLineStyle(): LineStyle;
    /**
     * Returns the minor line style
     */
    getMinorLineStyle(): LineStyle;
    /**
     * Sets minor line style This line style is used if the tick generator is
     * not set otherwise the tick generator style is used.
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setMinorLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string, merge?: boolean): this;
    /**
     * Returns the major line style
     */
    getMajorLineStyle(): LineStyle;
    /**
     * Sets major line style This line style is used if the tick generator is
     * not set otherwise the tick generator style is used.
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setMajorLineStyle(lineStyle: LineStyle | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | string, merge?: boolean): this;
    /**
     * return meaning data limits
     * @param fullLimits default value is false
     */
    getDataLimits(fullLimits?: boolean): Rect | any;
    /**
     * Gets track model limits
     */
    getBounds(): Rect;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {minorlinestyle: LineStyle; majorlinestyle: LineStyle; tickgenerator: TickGenerator} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.minorlinestyle minor line style
     * @param properties.majorlinestyle major line style
     * @param properties.tickgenerator The algorithm to generate lines along the grid
     */
    setProperties(properties: object | { minorlinestyle?: LineStyle | string | object; majorlinestyle?: LineStyle | string | object; tickgenerator?: TickGenerator; } ): this;
}
