import {AbstractNode} from '../../scene/AbstractNode';
import {INodeEnumerable} from '../../scene/INodeEnumerable';
import {Alarm} from '../Alarm';
import {Range} from '../../util/Range';
import {TickGenerator} from '../../axis/TickGenerator';
import {Easing} from '../../animation/Easing';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {TickPositions} from './TickPositions';
import {TextStyle} from '../../attributes/TextStyle';
import {RgbaColor} from '../../util/RgbaColor';
import {Region} from './Region';
import {Regions} from '../layout/Regions';
import {ValueDisplayStrategies} from '../ValueDisplayStrategies';
import {Format} from '../../util/Format';
import {AnchorType} from '../../util/AnchorType';
import {FunctionRegistry} from '../registry/FunctionRegistry';
import {Iterator} from '../../util/iterator';

/**
 * Implements an axis which uses Tick Generators to calculate number of ticks and their positions.
 * This axis calculates the ticks dynamically to not allow any intersections among labels and ticks.
 * The axis allows to render ticks and labels in three positions:
 * inside: tick growing from the inner bound of the axis towards the center
 * outside: tick growing from outer bound of axis towards the center
 */
export class Axis extends AbstractNode implements INodeEnumerable {
    /**
     * Implements an axis which uses Tick Generators to calculate number of ticks and their positions.
     * This axis calculates the ticks dynamically to not allow any intersections among labels and ticks.
     * The axis allows to render ticks and labels in three positions:
     * inside: tick growing from the inner bound of the axis towards the center
     * outside: tick growing from outer bound of axis towards the center
     * @param options JSON with properties
     * @param options.alarms alarm to add, an array of such alarms, or object (array of objects) to be passed into the alarm
     * @param options.range range see {@link @int/geotoolkit/gauges/axis/Axis.Axis#setRange}
     * @param options.units units to append to the end
     * @param options.tickgenerator The tick generator for the axis
     * @param options.animationfunction name of animation function (see geotoolkit.animation.Easing)
     * @param options.ticks JSON with properties for ticks
     * @param options.ticks.major Major tick properties
     * @param options.ticks.major.linestyle Line style for the tick symbol
     * @param options.ticks.major.fillstyle Fill style for the tick symbol
     * @param options.ticks.major.painter Painter which will be used to render the tick
     * @param options.ticks.major.visible Visibility flag for the ticks
     * @param options.ticks.major.width Width of individual tick symbol
     * @param options.ticks.major.height Height of individual tick symbol
     * @param options.ticks.major.tickposition Position of ticks relative to the axis
     * @param options.ticks.major.labels JSON with label properties
     * @param options.ticks.major.labels.textstyle Text style for the labels. If text style is passed, color and font properties are ignored
     * @param options.ticks.major.labels.color Color of the label text
     * @param options.ticks.major.labels.font Font for the label text
     * @param options.ticks.major.labels.position Position of the labels relative to the axis
     * @param options.ticks.major.labels.formatter Name of function in Function Registry which will be used to format the value before rendering it into label
     * @param options.ticks.major.labels.visible Visibility flag of the labels
     * @param options.ticks.major.labels.gap Gap between the label and the tick or axis
     * @param options.ticks.minor Minor tick properties
     * @param options.ticks.minor.linestyle Line style for the tick symbol
     * @param options.ticks.minor.fillstyle Fill style for the tick symbol
     * @param options.ticks.minor.painter Painter which will be used to render the tick
     * @param options.ticks.minor.visible Visibility flag for the ticks
     * @param options.ticks.minor.width Width of individual tick symbol
     * @param options.ticks.minor.height Height of individual tick symbol
     * @param options.ticks.minor.tickposition Position of ticks relative to the axis
     * @param options.ticks.minor.labels JSON with label properties
     * @param options.ticks.minor.labels.textstyle Text style for the labels. If text style is passed, color and font properties are ignored
     * @param options.ticks.minor.labels.color Color of the label text
     * @param options.ticks.minor.labels.font Font for the label text
     * @param options.ticks.minor.labels.position Position of the labels relative to the axis
     * @param options.ticks.minor.labels.formatter Name of function in Function Registry which will be used to format the value before rendering it into label
     * @param options.ticks.minor.labels.visible Visibility flag of the labels
     * @param options.ticks.minor.labels.gap Gap between the label and the tick or axis
     * @param options.ticks.edge Edge tick properties
     * @param options.ticks.edge.linestyle Line style for the tick symbol
     * @param options.ticks.edge.fillstyle Fill style for the tick symbol
     * @param options.ticks.edge.painter Painter which will be used to render the tick
     * @param options.ticks.edge.visible Visibility flag for the ticks
     * @param options.ticks.edge.width Width of individual tick symbol
     * @param options.ticks.edge.height Height of individual tick symbol
     * @param options.ticks.edge.tickposition Position of ticks relative to the axis
     * @param options.ticks.edge.labels JSON with label properties
     * @param options.ticks.edge.labels.textstyle Text style for the labels. If text style is passed, color and font properties are ignored
     * @param options.ticks.edge.labels.color Color of the label text
     * @param options.ticks.edge.labels.font Font for the label text
     * @param options.ticks.edge.labels.position Position of the labels relative to the axis
     * @param options.ticks.edge.labels.formatter Name of function in Function Registry which will be used to format the value before rendering it into label
     * @param options.ticks.edge.labels.visible Visibility flag of the labels
     * @param options.ticks.edge.labels.gap Gap between the label and the tick or axis
     * @param options.regions An array with regions that should be displayed by the gauge.
     * Regions will be added on top of existing regions.
     * @param options.value Value of the axis
     * @param options.valuestyle JSON with styling of the value text
     * @param options.valuestyle.textstyle Style of the text showing axis value
     * @param options.valuestyle.properties see {@link @int/geotoolkit/scene/shapes/Text.Text#setProperties}
     * @param options.valuestyle.visible Visibility of the value
     * @param options.valuestyle.trim if true value will be trimmed by range
     * @param options.valuestyle.position Region where the value is be rendered
     * @param options.valuestyle.displaystrategy Strategy by which the value will fit the region
     * @param options.valuestyle.formatter Formatter which will be applied to the value before rendering
     * @param options.valuestyle.alignment Position of the value in the region
     * @param options.namestyle Json with styling of the name text
     * @param options.namestyle.textstyle Style of the text showing axis name, overrides font and color
     * @param options.namestyle.properties see {@link @int/geotoolkit/scene/shapes/Text.Text#setProperties}
     * @param options.namestyle.font Font of the name text
     * @param options.namestyle.color Font of the name text
     * @param options.namestyle.visible Visibility of the name
     * @param options.namestyle.position Region where the name is be rendered
     * @param options.namestyle.displaystrategy Strategy by which the name will fit the region
     * @param options.namestyle.formatter Formatter which will be applied to the name before rendering
     * @param options.namestyle.alignment Position of the name in the region
     */
    constructor(options: object | { alarms?: object | Alarm | object[] | Alarm[]; range?: object | Range; units?: string; tickgenerator?: TickGenerator; animationfunction?: Easing; ticks?: object | { major?: object | { linestyle?: LineStyle; fillstyle?: FillStyle; painter?: Function; visible?: boolean; width?: number; height?: number; tickposition?: TickPositions; labels?: object | { textstyle?: TextStyle; color?: string | RgbaColor; font?: string; position?: TickPositions; formatter?: string; visible?: boolean; gap?: number; } ; } ; minor?: object | { linestyle?: LineStyle; fillstyle?: FillStyle; painter?: Function; visible?: boolean; width?: number; height?: number; tickposition?: TickPositions; labels?: object | { textstyle?: TextStyle; color?: string | RgbaColor; font?: string; position?: TickPositions; formatter?: string; visible?: boolean; gap?: number; } ; } ; edge?: object | { linestyle?: LineStyle; fillstyle?: FillStyle; painter?: Function; visible?: boolean; width?: number; height?: number; tickposition?: TickPositions; labels?: object | { textstyle?: TextStyle; color?: string | RgbaColor; font?: string; position?: TickPositions; formatter?: string; visible?: boolean; gap?: number; } ; } ; } ; regions?: Region[] | Region; value?: number; valuestyle?: object | { textstyle?: TextStyle; properties?: object; visible?: boolean; trim?: boolean; position?: Regions | string; displaystrategy?: ValueDisplayStrategies; formatter?: Format; alignment?: AnchorType; } ; namestyle?: object | { textstyle?: TextStyle; properties?: object; font?: string; color?: string | RgbaColor; visible?: boolean; position?: Regions | string; displaystrategy?: ValueDisplayStrategies; formatter?: Format; alignment?: AnchorType; } ; } );
    /**
     * Disposes this node, once disposes a node should not be used anymore.<br>
     * Clear all listeners, and disconnect styles to avoid memory leaks.<br>
     * Also aggressively 'cleanup' this node by setting some of its members to null.
     * Disposes value and name shapes as well
     */
    dispose(): void;
    /**
     * Changes the name of the axis
     * @param name The new axis name
     */
    setName(name: string): this;
    /**
     * Adds a  region or an array of regions to the axis. Regions are defined by color and range
     * in bounds of the range displayed by the gauge.
     * @param regions Array of regions, a region, or region properties
     */
    addRegion(regions: Region[] | object[] | Region | object): this;
    /**
     * Removes all registered regions from the axis
     */
    cleanRegions(): this;
    /**
     * Pass options into this method to customize the gauge.
     * @deprecated since 3.4, use setProperties instead
     * @param options JSON with properties
     * @param options.tickgenerator The tick generator for the axis
     * @param options.animationfunction name of animation function (see geotoolkit.animation.Easing)
     * @param options.ticks JSON with properties for ticks
     * @param options.ticks.major Major tick properties
     * @param options.ticks.minor Minor tick properties
     * @param options.ticks.edge Edge tick properties
     * @param options.range Range of values displayed by the axis.
     */
    setOptions(options?: object | { tickgenerator?: TickGenerator; animationfunction?: string; ticks?: object | { major?: object; minor?: object; edge?: object; } ; range?: Range; } ): this;
    /**
     * Sets properties pertaining to axis.
     * @param props JSON with properties
     * @param props.alarms alarm to add, an array of such alarms, or object (array of objects) to be passed into the alarm
     * @param props.range range see {@link @int/geotoolkit/gauges/axis/Axis.Axis#setRange}
     * @param props.units units to append to the end
     * @param props.tickgenerator The tick generator for the axis
     * @param props.animationfunction name of animation function (see geotoolkit.animation.Easing)
     * @param props.ticks JSON with properties for ticks
     * @param props.ticks.major Major tick properties
     * @param props.ticks.major.linestyle Line style for the tick symbol
     * @param props.ticks.major.fillstyle Fill style for the tick symbol
     * @param props.ticks.major.painter Painter which will be used to render the tick
     * @param props.ticks.major.visible Visibility flag for the ticks
     * @param props.ticks.major.width Width of individual tick symbol
     * @param props.ticks.major.height Height of individual tick symbol
     * @param props.ticks.major.tickposition Position of ticks relative to the axis
     * @param props.ticks.major.labels JSON with label properties
     * @param props.ticks.major.labels.textstyle Text style for the labels. If text style is passed, color and font properties are ignored
     * @param props.ticks.major.labels.color Color of the label text
     * @param props.ticks.major.labels.font Font for the label text
     * @param props.ticks.major.labels.position Position of the labels relative to the axis
     * @param props.ticks.major.labels.formatter Name of function in Function Registry which will be used to format the value before rendering it into label
     * @param props.ticks.major.labels.visible Visibility flag of the labels
     * @param props.ticks.major.labels.gap Gap between the label and the tick or axis
     * @param props.ticks.minor Minor tick properties
     * @param props.ticks.minor.linestyle Line style for the tick symbol
     * @param props.ticks.minor.fillstyle Fill style for the tick symbol
     * @param props.ticks.minor.painter Painter which will be used to render the tick
     * @param props.ticks.minor.visible Visibility flag for the ticks
     * @param props.ticks.minor.width Width of individual tick symbol
     * @param props.ticks.minor.height Height of individual tick symbol
     * @param props.ticks.minor.tickposition Position of ticks relative to the axis
     * @param props.ticks.minor.labels JSON with label properties
     * @param props.ticks.minor.labels.textstyle Text style for the labels. If text style is passed, color and font properties are ignored
     * @param props.ticks.minor.labels.color Color of the label text
     * @param props.ticks.minor.labels.font Font for the label text
     * @param props.ticks.minor.labels.position Position of the labels relative to the axis
     * @param props.ticks.minor.labels.formatter Name of function in Function Registry which will be used to format the value before rendering it into label
     * @param props.ticks.minor.labels.visible Visibility flag of the labels
     * @param props.ticks.minor.labels.gap Gap between the label and the tick or axis
     * @param props.ticks.edge Edge tick properties
     * @param props.ticks.edge.linestyle Line style for the tick symbol
     * @param props.ticks.edge.fillstyle Fill style for the tick symbol
     * @param props.ticks.edge.painter Painter which will be used to render the tick
     * @param props.ticks.edge.visible Visibility flag for the ticks
     * @param props.ticks.edge.width Width of individual tick symbol
     * @param props.ticks.edge.height Height of individual tick symbol
     * @param props.ticks.edge.tickposition Position of ticks relative to the axis
     * @param props.ticks.edge.labels JSON with label properties
     * @param props.ticks.edge.labels.textstyle Text style for the labels. If text style is passed, color and font properties are ignored
     * @param props.ticks.edge.labels.color Color of the label text
     * @param props.ticks.edge.labels.font Font for the label text
     * @param props.ticks.edge.labels.position Position of the labels relative to the axis
     * @param props.ticks.edge.labels.formatter Name of function in Function Registry which will be used to format the value before rendering it into label
     * @param props.ticks.edge.labels.visible Visibility flag of the labels
     * @param props.ticks.edge.labels.gap Gap between the label and the tick or axis
     * @param props.regions An array with regions that should be displayed by the gauge.
     * Regions will be added on top of existing regions.
     * @param props.value Value of the axis
     * @param props.valuestyle JSON with styling of the value text
     * @param props.valuestyle.textstyle Style of the text showing axis value
     * @param props.valuestyle.properties see {@link @int/geotoolkit/scene/shapes/Text.Text#setProperties}
     * @param props.valuestyle.visible Visibility of the value
     * @param props.valuestyle.trim if true value will be trimmed by range
     * @param props.valuestyle.position Region where the value is be rendered
     * @param props.valuestyle.displaystrategy Strategy by which the value will fit the region
     * @param props.valuestyle.formatter Formatter which will be applied to the value before rendering
     * @param props.valuestyle.alignment Position of the value in the region
     * @param props.namestyle Json with styling of the name text
     * @param props.namestyle.textstyle Style of the text showing axis name, overrides font and color
     * @param props.namestyle.properties see {@link @int/geotoolkit/scene/shapes/Text.Text#setProperties}
     * @param props.namestyle.font Font of the name text
     * @param props.namestyle.color Font of the name text
     * @param props.namestyle.visible Visibility of the name
     * @param props.namestyle.position Region where the name is be rendered
     * @param props.namestyle.displaystrategy Strategy by which the name will fit the region
     * @param props.namestyle.formatter Formatter which will be applied to the name before rendering
     * @param props.namestyle.alignment Position of the name in the region
     */
    setProperties(props: object | { alarms?: object | Alarm | object[] | Alarm[]; range?: object | Range; units?: string; tickgenerator?: TickGenerator; animationfunction?: Easing; ticks?: object | { major?: object | { linestyle?: LineStyle; fillstyle?: FillStyle; painter?: Function; visible?: boolean; width?: number; height?: number; tickposition?: TickPositions; labels?: object | { textstyle?: TextStyle; color?: string | RgbaColor; font?: string; position?: TickPositions; formatter?: string; visible?: boolean; gap?: number; } ; } ; minor?: object | { linestyle?: LineStyle; fillstyle?: FillStyle; painter?: Function; visible?: boolean; width?: number; height?: number; tickposition?: TickPositions; labels?: object | { textstyle?: TextStyle; color?: string | RgbaColor; font?: string; position?: TickPositions; formatter?: string; visible?: boolean; gap?: number; } ; } ; edge?: object | { linestyle?: LineStyle; fillstyle?: FillStyle; painter?: Function; visible?: boolean; width?: number; height?: number; tickposition?: TickPositions; labels?: object | { textstyle?: TextStyle; color?: string | RgbaColor; font?: string; position?: TickPositions; formatter?: string; visible?: boolean; gap?: number; } ; } ; } ; regions?: Region[] | Region; value?: number; valuestyle?: object | { textstyle?: TextStyle; properties?: object; visible?: boolean; trim?: boolean; position?: Regions | string; displaystrategy?: ValueDisplayStrategies; formatter?: Format; alignment?: AnchorType; } ; namestyle?: object | { textstyle?: TextStyle; properties?: object; font?: string; color?: string | RgbaColor; visible?: boolean; position?: Regions | string; displaystrategy?: ValueDisplayStrategies; formatter?: Format; alignment?: AnchorType; } ; } ): this;
    /**
     * Returnt the tick generator currently set on the axis
     */
    getTickGenerator(): TickGenerator;
    /**
     * Sets tick generator on the axis
     * @param tg New tick generator
     */
    setTickGenerator(tg: TickGenerator): this;
    /**
     * Returns properties pertaining to axis.
     */
    getProperties(): {alarms: Alarm[]; range: Range; units: string; tickgenerator: TickGenerator; animationfunction: Easing; ticks: {major: {linestyle: LineStyle; fillstyle: FillStyle; painter: Function; visible: boolean; width: number; height: number; tickposition: TickPositions; labels: {textstyle: TextStyle; color: string | RgbaColor; font: string; position: TickPositions; formatter: string; visible: boolean; gap: number}}; minor: {linestyle: LineStyle; fillstyle: FillStyle; painter: Function; visible: boolean; width: number; height: number; tickposition: TickPositions; labels: {textstyle: TextStyle; position: TickPositions; formatter: string; visible: boolean; gap: number}}; edge: {linestyle: LineStyle; fillstyle: FillStyle; painter: Function; visible: boolean; width: number; height: number; tickposition: TickPositions; labels: {textstyle: TextStyle; position: TickPositions; formatter: string; visible: boolean; gap: number}}}; regions: Region[]; value: number; valuestyle: {textstyle: TextStyle; visible: boolean; position: Regions | string; displaystrategy: ValueDisplayStrategies; formatter: Format; alignment: AnchorType}; namestyle: {textstyle: TextStyle; visible: boolean; position: Regions | string; displaystrategy: ValueDisplayStrategies; formatter: Format; alignment: AnchorType}} | any;
    /**
     * Returns options set on this axis.
     * @deprecated since 3.4, use getProperties instead
     */
    getOptions(): {tickGenerator: TickGenerator; animationfunction: string; ticks: {major: object; minor: object; edge: object}; range: Range} | any;
    /**
     * Sets the current value in the range of this axis. If value does not fall into
     * range represented by this axis, it will be set to min or max depending if it's smaller or bigger
     * than the range
     * @param val New value to set
     * @param skipAnimation If true, no animation will be displayed
     */
    setValue(val: number, skipAnimation?: boolean): this;
    /**
     * Returns the value of the axis
     * @param ignoreNaN if true, pass last real value
     */
    getValue(ignoreNaN?: boolean): number;
    /**
     * Returns the range of this axis
     */
    getRange(): Range;
    /**
     * Sets a new data range displayed by this axis
     * @param range New range to set
     * @param range.min lower limit
     * @param range.max upper limit
     */
    setRange(range: Range | object | { min?: number; max?: number; } ): this;
    /**
     * Sets the properties pertaining to the ticks of provided grade
     * @param grade Grade of the tick to apply properties to
     * @param props JSON with properties
     * @param props.linestyle Line style for the tick symbol
     * @param props.fillstyle Fill style for the tick symbol
     * @param props.painter Painter which will be used to render the tick
     * @param props.visible Visibility flag for the ticks
     * @param props.width Width of individual tick dymbol
     * @param props.height Height of individual tick dymbol
     * @param props.tickposition Position of ticks relative to the axis
     * @param props.labels JSON with label properties {@see geotoolkit.gauges.axis.Axis.setLabelProperties}
     */
    setTickProperties(grade: string, props: object | { linestyle?: LineStyle; fillstyle?: FillStyle; painter?: Function; visible?: boolean; width?: number; height?: number; tickposition?: TickPositions; labels?: object; } ): this;
    /**
     * Returns properties of the tick with provided grade
     * @param grade tick grade ('edge', 'major', 'minor')
     */
    getTickProperties(grade: string): {linestyle: LineStyle; fillstyle: FillStyle; painter: Function; visible: boolean; width: number; height: number; tickposition: TickPositions; labels: object} | object;
    /**
     * Sets properties pertaining to labels for ticks of provided grade
     * @param grade Grade of the ticks that properties should be applied to
     * @param props JSON with properties
     * @param props.textstyle Text style for the labels. If text style is
     * passed, color and font properties are ignored
     * @param props.color Color of the label text
     * @param props.font Font for the label text
     * @param props.position Position of the labels relative to the axis
     * @param props.formatter Name of function in Function Registry which will be used to format the
     * value before rendering it into label
     * @param props.visible Visibility flag of the labels
     * @param props.gap Gap between the label and the tick or axis
     */
    setLabelProperties(grade: string, props: object | { textstyle?: TextStyle; color?: string | RgbaColor; font?: string; position?: TickPositions; formatter?: string; visible?: boolean; gap?: number; } ): this;
    /**
     * Returns properties pertaining to labels of requested grade
     * @param grade tick grade ('edge', 'major', 'minor')
     */
    getLabelProperties(grade: string): {textstyle: TextStyle; position: TickPositions; formatter: string; gap: number; visible: boolean} | object;
    /**
     * Returns an object with properties pertaining to the value shape
     */
    getValueProperties(): {textstyle: TextStyle; visible: boolean; position: Regions | string; displaystrategy: ValueDisplayStrategies; formatter: Format; alignment: AnchorType} | object;
    /**
     * Sets properties pertaining to value shape of the gauge
     * @param props JSON with properties
     * @param props.textstyle Style of the text showing axis value
     * @param props.properties see {@link @int/geotoolkit/scene/shapes/Text.Text#setProperties}
     * @param props.visible Visibility of the value
     * @param props.trim if true value will be trimmed by range
     * @param props.position Region where the value is be rendered
     * @param props.displaystrategy Strategy by which the value will fit the region
     * @param props.formatter Formatter which will be applied to the value before rendering
     * @param props.alignment Position of the value in the region
     */
    setValueProperties(props: object | { textstyle?: TextStyle; properties?: object; visible?: boolean; trim?: boolean; position?: Regions | string; displaystrategy?: ValueDisplayStrategies; formatter?: Format; alignment?: AnchorType; } ): this;
    /**
     * Returns properties pertaining to name text
     */
    getNameProperties(): {textstyle: TextStyle; visible: boolean; position: Regions | string; displaystrategy: ValueDisplayStrategies; formatter: Format; alignment: AnchorType} | object;
    /**
     * Sets properties pertaining to name shape of the gauge
     * @param props JSON with properties
     * @param props.textstyle Style of the text showing axis name, overrides font and color
     * @param props.properties see {@link @int/geotoolkit/scene/shapes/Text.Text#setProperties}
     * @param props.font Font of the name text
     * @param props.color Font of the name text
     * @param props.visible Visibility of the name
     * @param props.position Region where the name is be rendered
     * @param props.displaystrategy Strategy by which the name will fit the region
     * @param props.formatter Formatter which will be applied to the name before rendering
     * @param props.alignment Position of the name in the region
     */
    setNameProperties(props: object | { textstyle?: TextStyle; properties?: object; font?: string; color?: string | RgbaColor; visible?: boolean; position?: Regions | string; displaystrategy?: ValueDisplayStrategies; formatter?: Format; alignment?: AnchorType; } ): this;
    /**
     * Sets the name of animation function corresponding to this axis
     * @param name New function name
     */
    setAnimation(name: string): this;
    /**
     * Returns the name of animation function associated with this axis
     */
    getAnimation(): any | string;
    /**
     * Sets function registry which will provide handlers for gauges animation and alarms
     * @param registry New registry to set
     */
    setFunctionRegistry(registry: FunctionRegistry): this;
    /**
     * Returns function registry which provides handlers for gauges animation and alarms
     */
    getFunctionRegistry(): FunctionRegistry;
    /**
     * Adds an alarm to the axis. Alarm handler will be called every time
     * value set on the axis falls within alarm's range
     * @param alarm An alarm to add,
     * an array of such alarms, or object (array of objects) to be passed into the alarm
     */
    addAlarm(alarm: object | Alarm | object[] | Alarm[]): this;
    /**
     * Gets the alarm referenced by provided name or index. If alarm name is not set or no such
     * index exists, null will be returned.
     * @param name Name of alarm or its index in iterator
     */
    getAlarm(name: string | number): Alarm | any;
    /**
     * Removes an alarm by its name, index, or instance of alarm
     * @param name Name of alarm or its index in iterator
     */
    removeAlarm(name: string | number | Alarm): this;
    /**
     * Removes all registered alarms
     */
    cleanAlarms(): this;
    /**
     * Gets an iterator over existing alarms in the gauge
     * @param filter a filter function. Returns all axes if null
     */
    getAlarms(filter?: Function): Iterator;
    /**
     * Returns time in which an animation should be finished in seconds
     */
    getAnimationTime(): number;
    /**
     * Sets time in which an animation should be finished in seconds
     * @param time Time in seconds to perform the animation
     */
    setAnimationTime(time: number): this;
    /**
     * Recalculates the parameters of the axis and rerenders
     */
    redraw(): this;
    /**
     * Enumerate children nodes
     * @param callback callback
     * @param target target
     */
    enumerateNodes(callback: Function, target: any): void;
}
/**
 * A set of events fired by axis
 */
export enum Events {
    /**
     * Name of the axis has been changed
     */
    NameChanged = 'nameChanged'
}
