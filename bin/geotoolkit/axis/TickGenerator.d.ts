import {Transformation} from '../util/Transformation';
import {AnchorType} from '../util/AnchorType';
import {Orientation} from '../util/Orientation';
import {TickInfo} from './TickInfo';
import {EventDispatcher} from '../util/EventDispatcher';
import {ValueTransformer} from './ValueTransformer';
import {Grid} from './Grid';
import {Axis} from './Axis';
import {Dimension} from '../util/Dimension';
import {Rect} from '../util/Rect';
import {LineStyle} from '../attributes/LineStyle';
import {TextStyle} from '../attributes/TextStyle';

/**
 * Callback for geotoolkit.axis.TickGenerator to get label anchor type
 */
export type anchorStyleHandler = (grade: string, transformation: Transformation) => AnchorType;
/**
 * Callback for geotoolkit.axis.TickGenerator to build a label for a given model value
 */
export type labelFormatHandler = (tickGenerator: TickGenerator, parent: any, orientation: Orientation | string, tickInfo: TickInfo, tickIndex: number, value: number) => string;
/**
 * Define a base class for tick generators. Toolkit provides several tick generators to help generate numeric labels.<br>
 * It generates ticks and labels based on the tick info and tickgrades. {@link @int/geotoolkit/axis/Axis.Axis} uses the TickGenerator while creating the axis.
 * Please refer to Axes and Grids Tutorial in CarnacJS for examples of the different tick generators supported.<br>
 * A tick generator mainly provides the positions of sequential ticks as well as the informational data associated with tick positions.
 */
export class TickGenerator extends EventDispatcher {
    /**
     * Define a base class for tick generators. Toolkit provides several tick generators to help generate numeric labels.<br>
     * It generates ticks and labels based on the tick info and tickgrades. {@link @int/geotoolkit/axis/Axis.Axis} uses the TickGenerator while creating the axis.
     * Please refer to Axes and Grids Tutorial in CarnacJS for examples of the different tick generators supported.<br>
     * A tick generator mainly provides the positions of sequential ticks as well as the informational data associated with tick positions.
     * @param options An object containing the properties to set
     * @param options.major An object containing major grade properties
     * @param options.minor An object containing minor grade properties
     * @param options.edge An object containing edge grade properties
     * @param options.intermediate An object containing intermediate grade properties
     * @param options.tickstyles An object containing tick styles for specified grades.
     * @param options.visibleticks An object containing tick visibility for specified grades
     * @param options.ticksizes An object containing tick sizes for specified grades
     * @param options.labelstyles An object containing label style for specified grades
     * @param options.visiblelabels An object containing label visibility for specified grades
     * @param options.labelangles An object containing label rotation angles for specified grades
     * @param options.labelanchortypes An object containing label anchor types see{@link @int/geotoolkit/util/AnchorType.AnchorType}
     * @param options.transformer transformer label value transformer
     * @param options.tag tag user can specify info associated with current object
     */
    constructor(options?: object | { major?: object; minor?: object; edge?: object; intermediate?: object; tickstyles?: object; visibleticks?: object; ticksizes?: object; labelstyles?: object; visiblelabels?: object; labelangles?: object; labelanchortypes?: object; transformer?: ValueTransformer | Function | any; tag?: object; } );
    /**
     * Disposes this node, once disposes a node should not be used anymore.<br>
     * Clear all listeners, and disconnect styles to avoid memory leaks.<br>
     * Also aggressively 'cleanup' this node by setting some of its members to null.
     */
    dispose(): void;
    /**
     * Returns valid Tick Grades : "edge", "major", "intermediate", "minor"
     */
    getGrades(): string[];
    /**
     * Reset max label info
     */
    protected resetMaxLabels(): this;
    /**
     * Returns max labels for each type of grades
     * @param tickInfo info about the tick
     * @param orient orientation
     * @param fromValue generate labels from
     * @param toValue generate labels to
     */
    protected getMaxLabels(tickInfo: TickInfo, orient: Orientation | string, fromValue: number, toValue: number): object[];
    /**
     * Returns maximum label metrics. For internal use only
     * @param parent parent axis or grid
     * @param orientation orientation
     * @param tickInfo info about tick position
     * @param fromValue generate labels from
     * @param toValue generate labels to
     */
    protected getMaxLabelMetrics(parent: Grid | Axis, orientation: Orientation | string, tickInfo: TickInfo, fromValue: number, toValue: number): Dimension;
    /**
     * Returns bounding box of label
     * @param tickInfo info about the tick
     * @param orient orientation
     * @param labelPos label position along index direction
     * @param labelText label text. If not defined labelPos.toString() is used.
     */
    getBoundingBox(tickInfo: TickInfo, orient: Orientation | string, labelPos: number, labelText?: string): Rect;
    /**
     * Gets label anchor type
     * @param grade tick grade
     * @param transformation optional transformation from model to device.
     * It is used only for custom label anchor handler
     */
    getLabelAnchorType(grade: string, transformation?: Transformation): AnchorType | null;
    /**
     * Sets label anchor type
     * @param grade tick grade
     * @param anchorType anchorType
     */
    setLabelAnchorType(grade: string, anchorType: AnchorType | anchorStyleHandler): this;
    /**
     * Sets visibility of tick for a specific tick grade
     * Implementation of the reset should check visibility of the ticks
     * @param tickGrade Tick grade
     * see {@link @int/geotoolkit/axis/TickGenerator.TickGenerator.getGrades} for valid Tick types
     * @param visible tick grade visibility flag
     */
    setVisibleTickGrade(tickGrade: string, visible: boolean): this;
    /**
     * Returns visibility of tick for a specific tick grade
     * @param tickGrade Tick grade
     * see {@link geotoolkit.axis.TickGenerator.getGrades for valid Tick types
     */
    isVisibleTickGrade(tickGrade: string): boolean;
    /**
     * Sets visibility of label for a specific tick grade
     * Implementation of the reset should check visibility of the labels.
     * @param tickGrade Tick grade
     * see {@link @int/geotoolkit/axis/TickGenerator.TickGenerator.getGrades} for valid Tick types
     * @param visible tick label visibility flag
     */
    setVisibleLabelGrade(tickGrade: string, visible: boolean): this;
    /**
     * Returns visibility of label for a specific tick grade
     * @param tickGrade Tick grade
     * see {@link @int/geotoolkit/axis/TickGenerator.TickGenerator.getGrades} for valid Tick types
     */
    isVisibleLabelGrade(tickGrade: string): boolean;
    /**
     * Changes the size of specified ticks
     * @param grade Grade of the tick to set the size
     * see {@link @int/geotoolkit/axis/TickGenerator.TickGenerator.getGrades} for valid Tick types
     * @param size New size
     */
    setTickSize(grade: string, size: number): this;
    /**
     * Returns the size of specified tick
     * @param grade Grade of the tick to get the size
     * see {@link @int/geotoolkit/axis/TickGenerator.TickGenerator.getGrades} for valid Tick types
     */
    getTickSize(grade: string): number | any;
    /**
     * Sets tick style
     * @param tickGrade Tick grade
     * see {@link @int/geotoolkit/axis/TickGenerator.TickGenerator.getGrades} for valid Tick types
     * @param lineStyle line style for the tick
     */
    setTickStyle(tickGrade: string, lineStyle?: LineStyle | string | object): this;
    /**
     * Returns tick style
     * @param tickGrade Tick Grade
     * see {@link @int/geotoolkit/axis/TickGenerator.TickGenerator.getGrades} for valid Tick types
     */
    getTickStyle(tickGrade: string): LineStyle | null;
    /**
     * Sets label style
     * @param tickGrade Tick grade
     * see {@link @int/geotoolkit/axis/TickGenerator.TickGenerator.getGrades} for valid Tick types
     * @param labelStyle tick text style
     */
    setLabelStyle(tickGrade: string, labelStyle?: TextStyle | string | object): this;
    /**
     * Returns label style
     * @param tickGrade Tick grade
     * see {@link @int/geotoolkit/axis/TickGenerator.TickGenerator.getGrades} for valid Tick types
     */
    getLabelStyle(tickGrade: string): TextStyle | null;
    /**
     * Sets label rotation angle
     * @example
     * ```javascript
     * // user can customize the label rotation angle based on tick grade.
     * tickGenerator.setLabelRotationAngle('major', -Math.PI / 2);
     * ```
     * @param tickGrade Tick grade
     * see {@link @int/geotoolkit/axis/TickGenerator.TickGenerator.getGrades} for valid Tick types
     * @param angle label rotation angle, in radians
     */
    setLabelRotationAngle(tickGrade: string, angle: number): this;
    /**
     * Returns label rotation angle
     * @param tickGrade Tick grade
     * see {@link @int/geotoolkit/axis/TickGenerator.TickGenerator.getGrades} for valid Tick types
     */
    getLabelRotationAngle(tickGrade: string): number;
    /**
     * Executes delegate and returns the result
     * @param delegate execute delegate and return the result
     */
    execute(delegate: Function): object | this;
    /**
     * Sets tag
     * @param tag user can specify info associated with current object
     */
    setTag(tag: any): this;
    /**
     * Returns tag
     */
    getTag(): any;
    /**
     * Resets tick generator
     * @param parent parent axis or grid
     * @param orient orientation
     * @param tickInfo tick info
     */
    reset(parent: Grid | Axis, orient: Orientation | string, tickInfo: TickInfo): string[];
    /**
     * Verify tick generator parameters to have better label distribution
     * @param parent parent axis or grid
     * @param orient orientation
     * @param tickInfo tick info
     */
    isValid(parent: Grid | Axis, orient: Orientation | string, tickInfo: TickInfo): boolean;
    /**
     * Resets tick generator asynchronously
     * @param parent parent axis or grid
     * @param orient orientation
     * @param tickInfo tick info
     * @param callback calls when asynchronous reset is done
     */
    resetAsync(parent: Grid | Axis, orient: Orientation | string, tickInfo: TickInfo, callback: Function): void;
    /**
     * Reset labels. This method is called to start iteration by labels.
     * The implementation also sets appropriate {@link @int/geotoolkit/attributes/TextStyle.TextStyle} on labels.
     * @param parent parent axis or grid
     * @param orient orientation
     * @param tickInfo a info about labels. This information is used to pass and receive information about the current tick or label
     */
    resetLabels(parent: Grid | Axis, orient: Orientation | string, tickInfo: TickInfo): number;
    /**
     * Resets ticks. This method is called to start iteration by ticks.
     * The implementation also sets appropriate {@link @int/geotoolkit/attributes/LineStyle.LineStyle} on the ticks
     * as well as their tick size.
     * @param parent parent axis or grid
     * @param orient orientation
     * @param tickInfo a info about labels. This information is used to pass and receive information about the current tick or label
     */
    resetTicks(parent: Grid | Axis, orient: Orientation | string, tickInfo: TickInfo): number;
    /**
     * Generates information about next label
     * @param parent parent axis or grid
     * @param orient orientation
     * @param tickInfo info about tick
     * @param tickIndex tickIndex tick index from 0 to count-1, which resetLabels returns
     */
    nextLabel(parent: Grid | Axis, orient: Orientation | string, tickInfo: TickInfo, tickIndex: number): number;
    /**
     * Generates information about next tick
     * @param parent parent axis or grid
     * @param orient orientation
     * @param tickInfo info about tick
     * @param tickIndex tick index from 0 to count-1, which resetTicks returns
     */
    nextTick(parent: Grid | Axis, orient: Orientation | string, tickInfo: TickInfo, tickIndex: number): number;
    /**
     * Gets adjust label anchor flag for specified label grade
     * @param grade label grade
     */
    getAdjustLabelAnchor(grade: string): boolean;
    /**
     * Sets adjust label anchor flag for specified label grade
     * @param grade label grade
     * @param flag adjust label anchor flag
     */
    setAdjustLabelAnchor(grade: string, flag: boolean): this;
    /**
     * Formats label text. This method must be overridden in the base classes and the the base class method must be called first.
     * @param parent parent axis or grid
     * @param orient orientation
     * @param tickInfo a info about tick
     * @param tickIndex tickIndex tick index from 0 to count-1, which resetLabels returns
     * @param modelValue model value
     */
    formatLabel(parent: Grid | Axis, orient: Orientation | string, tickInfo: TickInfo, tickIndex: number, modelValue: number): string | null;
    /**
     * Returns an array of the visible tick grades
     * @param supported supported grades
     * see {@link @int/geotoolkit/axis/TickGenerator.TickGenerator.getGrades} for valid Tick types
     */
    getVisibleTickGrades(supported: string[]): string[];
    /**
     * Return an array of the visible label grades
     * @param supported supported grades
     * see {@link @int/geotoolkit/axis/TickGenerator.TickGenerator.getGrades} for valid Tick types
     */
    getVisibleLabelGrades(supported: string[]): string[];
    /**
     * All subclasses should override copyConstructor or provide custom implementation for this method
     */
    clone(): TickGenerator;
    /**
     * Copy constructor
     * @param src Source to copy from
     * @param deepCopy deep copy
     */
    protected copyConstructor(src: TickGenerator, deepCopy?: boolean): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {major: any; minor: any; edge: any; intermediate: any; tickstyles: any; visibleticks: any; ticksizes: any; labelstyles: any; visiblelabels: any; labelangles: any; transformer: ValueTransformer | Function | any; tag: any} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.major An object containing major grade properties. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setTickOptions}
     * @param properties.minor An object containing minor grade properties. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setTickOptions}
     * @param properties.edge An object containing edge grade properties. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setTickOptions}
     * @param properties.intermediate An object containing intermediate grade properties. See {@link @int/geotoolkit/axis/TickGenerator.TickGenerator#setTickOptions}
     * @param properties.tickstyles An object containing tick styles for specified grades.
     * @param properties.visibleticks An object containing tick visibility for specified grades
     * @param properties.ticksizes An object containing tick sizes for specified grades
     * @param properties.labelstyles An object containing label style for specified grades
     * @param properties.visiblelabels An object containing label visibility for specified grades
     * @param properties.labelangles An object containing label rotation angles for specified grades
     * @param properties.labelanchortypes An object containing label anchor types see{@link @int/geotoolkit/util/AnchorType.AnchorType}
     * @param properties.transformer transformer label value transformer
     * @param properties.tag tag user can specify info associated with current object
     */
    setProperties(properties: object | { major?: any; minor?: any; edge?: any; intermediate?: any; tickstyles?: any; visibleticks?: any; ticksizes?: any; labelstyles?: any; visiblelabels?: any; labelangles?: any; labelanchortypes?: any; transformer?: ValueTransformer | Function | any; tag?: any; } ): this;
    /**
     * Sets label value transformer (optional)
     * @param transformer label value transformer
     */
    setLabelValueTransformer(transformer: ValueTransformer | Function | any): this;
    /**
     * Gets label value transformer (by default: 'undefined' - no transformation is applied to a value)
     */
    getLabelValueTransformer(): TickGenerator;
    /**
     * Sets all the properties pertaining to this object
     * @deprecated since 2020.1 (3.2) use TickGenerator.setProperties instead
     * @param properties An object containing the properties to set
     * @param properties.major An object containing the major ticks properties
     * @param properties.major.tickstyle JSON containing the properties to set LineStyle of tick. See {geotoolkit.attributes.LineStyle.setProperties} for details
     * @param properties.major.tickvisible tick visibility
     * @param properties.major.labelstyle JSON containing the properties to set TextStyle of label. See {geotoolkit.attributes.TextStyle.setProperties} for details
     * @param properties.major.labelvisible label visibility
     */
    setOptions(properties?: object | { major?: object | { tickstyle?: object; tickvisible?: boolean; labelstyle?: object; labelvisible?: boolean; } ; } ): this;
    /**
     * Sets all the properties pertaining to this tick
     * @param properties An object containing the properties to set
     * @param properties.tickstyle JSON containing the properties to set LineStyle of tick. See {@link @int/geotoolkit/attributes/LineStyle.LineStyle#setProperties} for details
     * @param properties.tickvisible tick visibility
     * @param properties.ticksize tick size
     * @param properties.labelstyle JSON containing the properties to set TextStyle of label. See {@link @int/geotoolkit/attributes/TextStyle.TextStyle#setProperties} for details
     * @param properties.labelvisible label visibility
     * @param properties.labelangle angle label rotation angle, in radians
     * @param properties.labelanchor optional label anchor
     * @param properties.adjustlabelanchor adjust position of the label anchor
     * @param tickGrade Tick grade
     */
    setTickOptions(properties?: object | { tickstyle?: object; tickvisible?: boolean; ticksize?: number; labelstyle?: object; labelvisible?: boolean; labelangle?: number; labelanchor?: AnchorType | null; adjustlabelanchor?: boolean; } , tickGrade?: string): this;
    /**
     * invalidate Method
     */
    protected getInvalidateMethod(): Function;
    /**
     * Connects style.<br>
     * <br>
     * This convenience method subscribes a listener to given style for the specified type.<br>
     * And automatically un-subscribes listener if node is disposed to prevent memory leaks
     * @param style connect style
     * @param type type of event or property
     * @param callback function to be called
     */
    protected connectStyle(style: EventDispatcher, type: string, callback: Function): this;
    /**
     * Disconnect style<br>
     * <br>
     * This convenience method un-subscribes a listener to given style for the specified type.<br>
     * @param style connect style
     * @param type type of event or property
     * @param callback function to be called
     */
    protected disconnectStyle(style: EventDispatcher, type: string, callback: Function): void;
}
/**
 * Node Events enumerator
 */
export enum Events {
    /**
     * Event type fired when a tick generator is modified and requires a render cycle to be done
     */
    Invalidate = 'Invalidate'
}
