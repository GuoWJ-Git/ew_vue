import {NumericGauge} from './NumericGauge';
import {Range} from '../util/Range';
import {Orientation} from '../util/Orientation';
import {Region} from './axis/Region';
import {FillStyle} from '../attributes/FillStyle';
import {LineStyle} from '../attributes/LineStyle';
import {DynamicElementPosition} from './AbstractGauge';
import {Node} from '../scene/Node';
import {Axis} from '../axis/Axis';
import {Iterator} from '../util/iterator';
import {Group} from '../scene/Group';
import {Axis as AxisAxis} from './axis/Axis';

/**
 * Implements a class which defines a linear gauge. Linear gauge is a rectangular shape (possibly
 * with round corners), which represents a range of data. If horizontal - range is represented from left to right,
 * if vertical, range is represented from bottom to top (always from min to max). The linear gauge supports adding
 * one axis which can be placed on either sides of the main shape, or in the center. A indicator fill and a needle
 * are the tools which are used to visualize the current value of the gauge. Fill is filling the gauge shape
 * from min to the current value on the axis. Needle positions itself on the current value on top of the indicator shape.
 */
export class LinearGauge extends NumericGauge {
    /**
     * Implements a class which defines a linear gauge. Linear gauge is a rectangular shape (possibly
     * with round corners), which represents a range of data. If horizontal - range is represented from left to right,
     * if vertical, range is represented from bottom to top (always from min to max). The linear gauge supports adding
     * one axis which can be placed on either sides of the main shape, or in the center. A indicator fill and a needle
     * are the tools which are used to visualize the current value of the gauge. Fill is filling the gauge shape
     * from min to the current value on the axis. Needle positions itself on the current value on top of the indicator shape.
     * @param options JSON with properties
     * @param options.range Range displayed by this gauge
     * @param options.orientation Orientation of the gauge
     * @param options.regions Regions to display in the indicator
     * @param options.axes Array with axes and properties
     * @param options.indicator Properties pertaining to indicator and its fill
     * @param options.indicator.width Width of the indicator in CSS format, relative to the gauge width
     * @param options.indicator.height Height of the indicator in CSS format, relative to the gauge height
     * @param options.indicator.backgroundfill Fill style of the background of indicator
     * @param options.indicator.backgroundline Line style of the background of indicator
     * @param options.indicator.valuefillstyle Fill style of the value fill in the indicator
     * @param options.indicator.valuelinestyle Line style of the value fill in the indicator
     * @param options.indicator.cornerradius Corner radius of the indicator shape in CSS notation, relative to the width of the shape.
     * (50% will create a circle)
     * @param options.indicator.fillposition Layer position of the fill
     * @param options.needle JSON with needle properties
     * @param options.needle.geometry Geometry defining the needle
     * @param options.needle.width Width of the needle relative to the width of the gauge indicator (height if horizontal)
     */
    constructor(options: object | { range?: Range; orientation?: string | Orientation; regions?: Region | Region[]; axes?: { [key: string]: any; }; indicator?: object | { width?: number | string; height?: number | string; backgroundfill?: FillStyle; backgroundline?: LineStyle; valuefillstyle?: FillStyle; valuelinestyle?: LineStyle; cornerradius?: number | string; fillposition?: DynamicElementPosition | string; } ; needle?: object | { geometry?: Node; width?: number | string; } ; } );
    /**
     * Copy constructor function
     * Used to clone gauge
     * @param gauge source gauge
     */
    protected copyConstructor(gauge: LinearGauge): this;
    /**
     * Gets an axis by its name or index from axes iterator
     * @param name Name of the axis or its index
     */
    getAxis(name: string | number): Axis | any;
    /**
     * Removes an axis from the gauge. If no such axis exists, nothing will be done.
     * @param name Name of the axis or its index
     */
    removeAxis(name: string | number): this;
    /**
     * Clears linear gauge axes
     */
    clearAxes(): void;
    /**
     * Returns an iterator over existing axes in this gauge
     * @param filter a filter function. Returns all axes if null
     */
    getAxes(filter?: Function): Iterator;
    /**
     * Adds an axis to the gauge
     * @param name Name of the new axis
     * @param axis New axis to add
     * @param props JSON with axis properties
     * @param props.visible visibility
     * @param props.position Position relative to indicator
     * @param props.width Css width
     * @param props.gap Gap between the axis and the indicator or othes axes
     */
    addAxis(name: string, axis: Axis | Group | object, props?: object | { visible?: boolean; position?: AxisPosition; width?: string | number; gap?: string | number; } ): this;
    /**
     * Sets properties pertaining to axis of the gauge
     * @param name Name of the axis to apply properties. Name can also be passed inside props JSON.
     * @param props JSON with properties
     * @param props.position Position of the axis relative to indicator shape
     * @param props.width Width of the axis (height if horizontal) in CSS format
     * @param props.gap Gap between axis and indicator shape in CSS format
     * @param props.visible Visibility of the axis
     */
    setAxisProperties(name: string | null, props: object | { position?: AxisPosition; width?: number | string; gap?: number | string; visible?: boolean; } ): this;
    /**
     * Gets properties pertaining to axis of the gauge
     * @param name Name of the axis to get properties.
     * If null, properties will be retrieved from all axes
     */
    getAxisProperties(name?: string): object;
    /**
     * Checks if the gauge contains specified axis
     * @param axis The axis or its name
     */
    hasAxis(axis: AxisAxis | string): boolean;
    /**
     * Adds a region, or an array of regions to the gauge. Regions of indicator are indexed by the name
     * that you provide. if no such name has been passed into the method, it will be impossible to do
     * any further manipulations with this region.
     * @param name Name of the region to add or a region which has the name set to it
     * @param region Region(s) to add
     */
    addIndicatorRegion(name: string | Region, region?: Region | Region[]): void;
    /**
     * Removes an earlier added region from the indicator
     * @param name region name or region
     */
    removeIndicatorRegion(name: string | Region): void;
    /**
     * Removes all the regions from the scene
     */
    clearRegions(): this;
    /**
     * Sets properties pertaining to linear gauge and its components.
     * @param props JSON with properties
     * @param props.range Range displayed by this gauge
     * @param props.orientation Orientation of the gauge
     * @param props.regions Regions to display in the indicator
     * @param props.axes Array with axes and properties
     * @param props.indicator Properties pertaining to indicator and its fill
     * @param props.indicator.width Width of the indicator in CSS format, relative to the gauge width
     * @param props.indicator.height Height of the indicator in CSS format, relative to the gauge height
     * @param props.indicator.backgroundfill Fill style of the background of indicator
     * @param props.indicator.backgroundline Line style of the background of indicator
     * @param props.indicator.valuefillstyle Fill style of the value fill in the indicator
     * @param props.indicator.valuelinestyle Line style of the value fill in the indicator
     * @param props.indicator.cornerradius Corner radius of the indicator shape in CSS notation, relative to the width of the shape. (50% will create a circle)
     * @param props.indicator.fillwidth fill width
     * @param props.indicator.fillposition Layer position of the fill
     * @param props.needle JSON with needle properties
     * @param props.needle.geometry Geometry defining the needle
     * @param props.needle.width Width of the needle relative to the width of the gauge indicator (height if horizontal)
     */
    setProperties(props: object | { range?: Range; orientation?: string | Orientation; regions?: Region | Region[]; axes?: { [key: string]: any; }; indicator?: object | { width?: number | string; height?: number | string; backgroundfill?: FillStyle; backgroundline?: LineStyle; valuefillstyle?: FillStyle; valuelinestyle?: LineStyle; cornerradius?: number | string; fillwidth?: number | string; fillposition?: DynamicElementPosition | string; } ; needle?: object | { geometry?: Node; width?: number | string; } ; } ): this;
    /**
     * Gets properties pertaining to Linear Gauge
     */
    getProperties(): {range: Range; orientation: Orientation; regions: Region | Region[]; axes: { [key:  string]:  any; }; indicator: {width: number | string; height: number | string; backgroundfill: FillStyle; backgroundline: LineStyle; valuefillstyle: FillStyle; valuelinestyle: LineStyle; cornerradius: number | string; fillposition: DynamicElementPosition | string}; needle: {geometry: Node; width: number | string}} | any;
    /**
     * Sets properties pertaining to needle shape of the gauge
     * @param props JSON with properties
     * @param props.width Width of needle in CSS format (height if gauge is horizontal)
     * @param props.geometry A group containing the geometry of the needle
     */
    setNeedleProperties(props: object | { width?: number | string; geometry?: Group; } ): this;
    /**
     * Returns properties pertaining to needle shape of the gauge
     */
    getNeedleProperties(): {width: number | string; geometry: Group} | object;
    /**
     * Gets properties pertaining to indicator shape and value fill shape
     */
    getIndicatorProperties(): {width: number | string; height: number | string; backgroundfill: FillStyle; backgroundline: LineStyle; valuefillstyle: FillStyle; valuelinestyle: LineStyle; cornerradius: number | string; fillposition: DynamicElementPosition | string} | object;
    /**
     * Sets current value of the gauge
     * @param val New value for the gauge
     * @param skipAnimation Specifies if animation should be avoided
     */
    setValue(val: number, skipAnimation?: boolean): this;
    /**
     * Returns range displayed by this range
     */
    getRange(): Range;
    /**
     * Returns range displayed by this range
     * @param min Lower bounds of the range or the range to set
     * @param max Higher bound of the range
     */
    setRange(min: number | Range, max?: number): this;
    /**
     * Returns orientation of the gauge.
     */
    getOrientation(): Orientation;
    /**
     * Sets the needle for the axis
     * @param params JSON with needle properties
     */
    setNeedle(params: object): this;
}
/**
 * Positions of axis relative to the indicator
 */
export enum AxisPosition {
    /**
     * Position to the left of indicator
     */
    Left = 'left',
    /**
     * Position to the right of indicator
     */
    Right = 'right',
    /**
     * Position to the top of indicator
     */
    Top = 'top',
    /**
     * Position to the bottom of indicator
     */
    Bottom = 'bottom'
}
