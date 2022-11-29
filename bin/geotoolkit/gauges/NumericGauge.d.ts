import {AbstractGauge} from './AbstractGauge';
import {Easing} from '../animation/Easing';
import {Alarm} from './Alarm';
import {FillStyle} from '../attributes/FillStyle';
import {LineStyle} from '../attributes/LineStyle';
import {Regions} from './layout/Regions';
import {RgbaColor} from '../util/RgbaColor';
import {TextStyle} from '../attributes/TextStyle';
import {ValueDisplayStrategies} from './ValueDisplayStrategies';
import {AnchorType} from '../util/AnchorType';
import {NumberFormat} from '../util/NumberFormat';
import {Iterator} from '../util/iterator';

/**
 * A gauge which only displays value, name, and any custom components added.
 */
export class NumericGauge extends AbstractGauge {
    /**
     * A gauge which only displays value, name, and any custom components added.
     * @param options JSON with properties
     * @param options.animationfunction Name of an easing function in function registry which will define the animation behavior
     * @param options.animationtime 
     * @param options.value Value of the gauge to set at initiation
     * @param options.alarms A list of alarms to set on the gauge.
     * @param options.units Units in which data is represented in this gauge
     * @param options.background JSON with properties for rectangular background of the gauge
     * @param options.background.fillstyle Fill style of the background rectangle
     * @param options.background.linestyle Line style of the background rectangle
     * @param options.background.visible Visibility of the background rectangle
     * @param options.namestyle JSON with properties of the test displaying name of the gauge
     * @param options.namestyle.position Region in which to render the name text
     * @param options.namestyle.color Color of name text
     * @param options.namestyle.font Font of name text
     * @param options.namestyle.textstyle Text style of the name text. If provided, overrides
     * font and color
     * @param options.namestyle.displaystrategy A display strategy to define how the name text fits the region it is rendered in
     * @param options.namestyle.alignment Defines where in the region the name text will be positioned
     * @param options.namestyle.visible Visibility of the name text
     * @param options.valuestyle JSON with properties of the test displaying name of the gauge
     * @param options.valuestyle.position Region in which to render the name text
     * @param options.valuestyle.color Color of name text
     * @param options.valuestyle.font Font of value text
     * @param options.valuestyle.textstyle Text style of the value text. If provided, overrides
     * font and color
     * @param options.valuestyle.displaystrategy A display strategy to define how the value text fits the region it is rendered in
     * @param options.valuestyle.alignment Defines where in the region the value text will be positioned
     * @param options.valuestyle.visible Visibility of the value text
     * @param options.valuestyle.formatter Formatter which will be used to format the value
     * before displaying it.
     * @param options.valuestyle.format Format of value to set on number formatter
     */
    constructor(options: object | { animationfunction?: Easing; animationtime?: number; value?: number; alarms?: Alarm[]; units?: string; background?: object | { fillstyle?: FillStyle; linestyle?: LineStyle; visible?: boolean; } ; namestyle?: object | { position?: Regions; color?: string | RgbaColor; font?: string; textstyle?: TextStyle | string | object; displaystrategy?: ValueDisplayStrategies; alignment?: AnchorType; visible?: boolean; } ; valuestyle?: object | { position?: Regions; color?: string | RgbaColor; font?: string; textstyle?: TextStyle | string | object; displaystrategy?: ValueDisplayStrategies; alignment?: AnchorType; visible?: boolean; formatter?: NumberFormat; format?: string; } ; } );
    /**
     * Copy constructor function
     * Used to clone gauge
     * @param gauge gauge for cloning
     */
    protected copyConstructor(gauge: NumericGauge): this;
    /**
     * Adds an alarm to the axis. Alarm handler will be called every time
     * value set on the axis falls within alarm's range
     * @param alarm An alarm to add
     */
    addAlarm(alarm: Alarm | Alarm[]): this;
    /**
     * Gets the alarm referenced by provided name or index. If alarm name is not set or no such
     * index exists, null will be returned.
     * @param name Name of alarm or its index in iterator
     */
    getAlarm(name: string | number): Alarm | any;
    /**
     * Removes an alarm by its name, index, or instance of alarm. The alarm will never be called again and reference to
     * it will be removed. Does nothing if no such alarm has been added before
     * @param name Name of alarm or its index in iterator
     */
    removeAlarm(name: string | number | Alarm): this;
    /**
     * Removes all attached alarms
     */
    cleanAlarms(): this;
    /**
     * Gets an iterator over existing alarms in the gauge
     * @param filter a filter function. Returns all axes if not provided
     */
    getAlarms(filter?: Function): Iterator;
    /**
     * Sets properties pertaining to text representing gauge value
     * @param props Object with properties
     * @param props.properties see {@link @int/geotoolkit/scene/shapes/Text.Text#setProperties}
     * @param props.position Region in which to render the name text
     * @param props.color Color of name text
     * @param props.font Font of value text
     * @param props.textstyle Text style of the value text. If provided, overrides
     * font and color
     * @param props.displaystrategy A display strategy to define how the
     * value text fits the region it is rendered in
     * @param props.alignment Defines where in the region the value text will be positioned
     * @param props.visible Visibility of the value text
     * @param props.formatter Formatter which will be used to format the value
     * before displaying it.
     * @param props.format Format of value to set on number formatter
     */
    setValueProperties(props: object | { properties?: object; position?: Regions; color?: string | RgbaColor; font?: string; textstyle?: TextStyle; displaystrategy?: ValueDisplayStrategies; alignment?: AnchorType; visible?: boolean; formatter?: NumberFormat; format?: string; } ): this;
    /**
     * Returns background styles
     */
    getBackgroundStyle(): object;
    /**
     * Sets background styles
     * @param props JSON containing background styles
     * @param props.linestyle background linestyle
     * @param props.fillstyle background fillstyle
     * @param props.visible background visibility
     */
    setBackgroundStyle(props: object | { linestyle?: LineStyle; fillstyle?: FillStyle; visible?: boolean; } ): this;
    /**
     * Gets properties of value text
     */
    getValueProperties(): string | object;
    /**
     * Sets properties pertaining to text representing gauge name
     * @param props Object with properties
     * @param props.properties see {@link @int/geotoolkit/scene/shapes/Text.Text#setProperties}
     * @param props.position Region in which to render the name text
     * @param props.color Color of name text
     * @param props.font Font of name text
     * @param props.textstyle Text style of the name text. If provided, overrides
     * font and color
     * @param props.displaystrategy A display strategy to define how the
     * name text fits the region it is rendered in
     * @param props.alignment Defines where in the region the name text will be positioned
     * @param props.visible Visibility of the name text
     */
    setNameProperties(props: object | { properties?: object; position?: Regions; color?: string | RgbaColor; font?: string; textstyle?: TextStyle; displaystrategy?: ValueDisplayStrategies; alignment?: AnchorType; visible?: boolean; } ): this;
    /**
     * Gets properties of value text
     */
    getNameProperties(): {position: Regions; textstyle: TextStyle; displaystrategy: ValueDisplayStrategies; alignment: AnchorType; visible: boolean} | object;
    /**
     * Sets the name of animation function in function registry corresponding to this axis
     * @param name Name of the function. This function has to be registered in the registry, otherwise no
     * animation will be applied.
     */
    setAnimation(name: Easing): this;
    /**
     * Returns the name of animation function associated with this gauge
     */
    getAnimation(): any | Easing;
    /**
     * Sets the value of the gauge.
     * @param val New value to set
     * @param skipAnimation If true, value change will not be animated
     */
    setValue(val: number, skipAnimation?: boolean): this;
    /**
     * Returns the current value of the axis
     */
    getValue(): number;
    /**
     * Returns time in which a full animation cycle is finished (in seconds)
     */
    getAnimationTime(): number;
    /**
     * Sets time required to accomplish a full animation run in between two values (in seconds)
     * @param time Time in seconds to perform the animation
     */
    setAnimationTime(time: number): this;
    /**
     * Sets the name of the gauge
     * @param name The new gauge name
     */
    setName(name: string): this;
    /**
     * Sets properties pertaining to this gauge.
     * @param props JSON with properties
     * @param props.animationfunction Name of an easing function in function registry which will define the animation behavior
     * @param props.animationtime Time in seconds to perform the animation
     * @param props.value Value of the gauge to set at initiation
     * @param props.alarms A list of alarms to set on the gauge.
     * @param props.units Units in which data is represented in this gauge
     * @param props.background JSON with properties for rectangular background of the gauge
     * @param props.background.fillstyle Fill style of the background rectangle
     * @param props.background.linestyle Line style of the background rectangle
     * @param props.background.visible Visibility of the background rectangle
     * @param props.namestyle JSON with properties of the test displaying name of the gauge
     * @param props.namestyle.position Region in which to render the name text
     * @param props.namestyle.color Color of name text
     * @param props.namestyle.font Font of name text
     * @param props.namestyle.textstyle Text style of the name text. If provided, overrides
     * font and color
     * @param props.namestyle.displaystrategy A display strategy to define how
     * the name text fits the region it is rendered in
     * @param props.namestyle.alignment Defines where in the region the name text will be positioned
     * @param props.namestyle.visible Visibility of the name text
     * @param props.valuestyle JSON with properties of the test displaying name of the gauge
     * @param props.valuestyle.position Region in which to render the name text
     * @param props.valuestyle.color Color of name text
     * @param props.valuestyle.font Font of value text
     * @param props.valuestyle.textstyle Text style of the value text. If provided, overrides
     * font and color
     * @param props.valuestyle.displaystrategy A display strategy to define how
     * the value text fits the region it is rendered in
     * @param props.valuestyle.alignment Defines where in the region the value text will be positioned
     * @param props.valuestyle.visible Visibility of the value text
     * @param props.valuestyle.formatter Formatter which will be used to format the value
     * before displaying it.
     * @param props.valuestyle.format Format of value to set on number formatter
     */
    setProperties(props: object | { animationfunction?: Easing; animationtime?: number; value?: number; alarms?: Alarm[]; units?: string; background?: object | { fillstyle?: FillStyle; linestyle?: LineStyle; visible?: boolean; } ; namestyle?: object | { position?: Regions; color?: string | RgbaColor; font?: string; textstyle?: TextStyle; displaystrategy?: ValueDisplayStrategies; alignment?: AnchorType; visible?: boolean; } ; valuestyle?: object | { position?: Regions; color?: string | RgbaColor; font?: string; textstyle?: TextStyle; displaystrategy?: ValueDisplayStrategies; alignment?: AnchorType; visible?: boolean; formatter?: NumberFormat; format?: string; } ; } ): this;
    /**
     * Returns an object with all the properties pertaining to this gauge.
     */
    getProperties(): {animationfunction: Easing; animationtime: number; value: number; alarms: Alarm[]; units: string; background: {fillstyle: FillStyle; linestyle: LineStyle; visible: boolean}; namestyle: {position: Regions; color: string | RgbaColor; font: string; textstyle: TextStyle; displaystrategy: ValueDisplayStrategies; alignment: AnchorType; visible: boolean}; valuestyle: {position: Regions; color: string | RgbaColor; font: string; textstyle: TextStyle; displaystrategy: ValueDisplayStrategies; alignment: AnchorType; visible: boolean; formatter: NumberFormat; format: string}} | any;
}
