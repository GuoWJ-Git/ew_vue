import {Axis} from './Axis';
import {FillStyle} from '../../attributes/FillStyle';
import {LineStyle, CapStyle} from '../../attributes/LineStyle';
import {Point} from '../../util/Point';
import {RgbaColor} from '../../util/RgbaColor';
import {DynamicElementPosition} from '../AbstractGauge';
import {Group} from '../../scene/Group';
import {RenderingContext} from '../../renderer/RenderingContext';
import {TickGenerator} from '../../axis/TickGenerator';

/**
 * Implements an axis which uses Tick Generators to calculate number of ticks and their positions.
 * This axis calculates the ticks dynamically to not allow any intersections among labels and ticks.
 * The axis allows to render ticks and labels in three positions:
 * inside: tick growing from the inner bound of the axis towards the center
 * outside: tick growing from outer bound of axis towards the center
 */
export class CircularAxis extends Axis {
    /**
     * Implements an axis which uses Tick Generators to calculate number of ticks and their positions.
     * This axis calculates the ticks dynamically to not allow any intersections among labels and ticks.
     * The axis allows to render ticks and labels in three positions:
     * inside: tick growing from the inner bound of the axis towards the center
     * outside: tick growing from outer bound of axis towards the center
     * @param options Object with properties
     * @param options.fillstyle Fill style of the base arc of the axis
     * @param options.linestyle Line style of the base arc of the axis
     * @param options.thickness Thickness of the axis base in CSS format (relative to the radius of the axis)
     * @param options.startangle start angle
     * @param options.sweepangle sweep angle
     * @param options.center center
     * @param options.startangleoffset The distance (offset) of the start angle of the axis from start angle of the gauge.
     * Rotates the axis clockwise
     * @param options.endangleoffset The distance (offset) of the start angle of the axis from start angle of the gauge.
     * Shrinks the axis counterclockwise
     * @param options.radius Radius of the axis in CSS format (relative to gauge radius)
     * @param options.parentradius parent radius
     * @param options.shadow JSON with shadow properties
     * @param options.shadow.color Color of the filling of the gauge shadows
     * @param options.shadow.visible Visibility flag for the shadow
     * @param options.shadow.linecap Style of the edges of the shadow
     * @param options.shadow.position shadow position
     * @param options.needle Properties defining the needle
     * @param options.needle.geometry Geotoolkit group containing the shapes which form the geometry of the needle
     * @param options.needle.center A point in model of needle which serves as an anchor point for rotation
     * and centering the needle with the gauge.
     * @param options.needle.position Layer on which the needle should be positioned
     * either in front of all components, or in the back.
     * @param options.needle.radius For circular needle the length of the needle relative to the radius of the axis.
     * The length will be calculated automatically and if the needle has to be enlarged or shrinked, this will be done with
     * preservation of aspect ratio.
     * @param options.needle.visible Visibility flag of the needle
     */
    constructor(options: object | { fillstyle?: FillStyle; linestyle?: LineStyle; thickness?: number | string; startangle?: number | string; sweepangle?: number | string; center?: Point | number | string; startangleoffset?: number | string; endangleoffset?: number | string; radius?: number | string; parentradius?: number | string; shadow?: object | { color?: string | RgbaColor; visible?: boolean; linecap?: CapStyle | string; position?: DynamicElementPosition; } ; needle?: object | { geometry?: Group; center?: Point; position?: DynamicElementPosition; radius?: number | string; visible?: boolean; } ; } );
    /**
     * Disposes this node, once disposes a node should not be used anymore.<br>
     * Clear all listeners, and disconnect styles to avoid memory leaks.<br>
     * Also aggressively 'cleanup' this node by setting some of its members to null.
     * Disposes value and name shapes as well
     */
    dispose(): void;
    /**
     * Returns an object with properties pertaining to this axis
     */
    getProperties(): {fillstyle: FillStyle; linestyle: LineStyle; thickness: number | string; startangle: number | string; sweepangle: number | string; center: Point; startangleoffset: number | string; endangleoffset: number | string; radius: number | string; parentradius: number | string; shadow: {color: string | RgbaColor; visible: boolean; linecap: CapStyle | string; position: DynamicElementPosition}; needle: {geometry: Group; center: Point; position: DynamicElementPosition; radius: number | string; visible: boolean}} | any;
    /**
     * Sets properties pertaining to this axis
     * @param props Object with properties
     * @param props.fillstyle Fill style of the base arc of the axis
     * @param props.linestyle Line style of the base arc of the axis
     * @param props.thickness Thickness of the axis base in CSS format (relative to the radius of the axis)
     * @param props.startangle start angle
     * @param props.sweepangle sweep angle
     * @param props.center center
     * @param props.startangleoffset The distance (offset) of the start angle of the axis from start angle of the gauge.
     * Rotates the axis clockwise
     * @param props.endangleoffset The distance (offset) of the start angle of the axis from start angle of the gauge.
     * Shrinks the axis counterclockwise
     * @param props.radius Radius of the axis in CSS format (relative to gauge radius)
     * @param props.parentradius parent radius
     * @param props.shadow JSON with shadow properties
     * @param props.shadow.color Color of the filling of the gauge shadows
     * @param props.shadow.visible Visibility flag for the shadow
     * @param props.shadow.linecap Style of the edges of the shadow
     * @param props.shadow.position shadow position
     * @param props.needle Properties defining the needle
     * @param props.needle.geometry Geotoolkit group containing the shapes which form the geometry of the needle
     * @param props.needle.center A point in model of needle which serves as an anchor point for rotation
     * and centering the needle with the gauge.
     * @param props.needle.position Layer on which the needle should be positioned
     * either in front of all components, or in the back.
     * @param props.needle.radius For circular needle the length of the needle relative to the radius of the axis.
     * The length will be calculated automatically and if the needle has to be enlarged or shrinked, this will be done with
     * preservation of aspect ratio.
     * @param props.needle.visible Visibility flag of the needle
     */
    setProperties(props: object | { fillstyle?: FillStyle; linestyle?: LineStyle; thickness?: number | string; startangle?: number | string; sweepangle?: number | string; center?: Point | number | string; startangleoffset?: number | string; endangleoffset?: number | string; radius?: number | string; parentradius?: number | string; shadow?: object | { color?: string | RgbaColor; visible?: boolean; linecap?: CapStyle | string; position?: DynamicElementPosition; } ; needle?: object | { geometry?: Group; center?: Point; position?: DynamicElementPosition; radius?: number | string; visible?: boolean; } ; } ): this;
    /**
     * Sets options to customize the axis.
     * @deprecated since 3.4, use setProperties instead
     * @param options JSON containing axis options
     */
    setOptions(options: any): this;
    /**
     * Gets options to customize the axis.
     * @deprecated since 3.4, use getProperties instead
     */
    getOptions(): any;
    /**
     * Sets properties pertaining to shadow of the axis
     * @param props JSON with properties
     * @param props.color Color of the filling of the gauge shadows
     * @param props.visible Visibility flag for the shadow
     * @param props.linecap Style of the edges of the shadow
     * @param props.position shadow position
     */
    setShadowProperties(props: object | { color?: string | RgbaColor; visible?: boolean; linecap?: CapStyle | string; position?: DynamicElementPosition; } ): this;
    /**
     * Gets properties pertaining to shadow of the axis
     */
    getShadowProperties(): {color: string | RgbaColor; visible: boolean; linecap: CapStyle | string; position: DynamicElementPosition} | object;
    /**
     * Renders the axis and ticks
     * @param context rendering context
     */
    render(context: RenderingContext): void;
    /**
     * Sets the needle for the axis
     * @param params JSON with needle properties
     */
    setNeedle(params: object): this;
    /**
     * Gets position of the needle (bottom layer or top layer)
     */
    getNeedlePosition(): string;
    /**
     * Gets the current needle geometry
     */
    getNeedleGeometry(): Group;
    /**
     * Sets the value of the axis
     * @param val The value to be displayed by the axis.
     * @param skipAnimation If true, no animation will be displayed
     */
    setValue(val: number, skipAnimation: boolean): this;
    /**
     * Sets the color of shadow fill for the gauge
     * @param color New color of the value fill
     */
    setShadowColor(color: string | RgbaColor): this;
    /**
     * Gets the color of shadow fill for the gauge
     */
    getShadowColor(): string | RgbaColor;
    /**
     * Sets a new tick generator on the axis
     * @param tickGenerator tick generator
     */
    setTickGenerator(tickGenerator: TickGenerator): this;
    /**
     * Returns the tick generator pertaining to this axis
     */
    getTickGenerator(): TickGenerator;
    /**
     * Shows or hides the needle
     * @param visible Visibility flag for the needle
     */
    setNeedleVisible(visible: boolean): this;
    /**
     * Gets properties pertaining to needle
     */
    getNeedleOptions(): {geometry: Group; center: Point; position: DynamicElementPosition; radius: number | string; visible: boolean} | object;
    /**
     * Sets options pertaining to the needle
     * @param props JSON with properties
     * @param props.geometry Geotoolkit group containing the shapes which form the geometry of the needle
     * @param props.center A point in model of needle which serves as an anchor point for rotation
     * and centering the needle with the gauge.
     * @param props.position Layer on which the needle should be positioned
     * either in front of all components, or in the back.
     * @param props.radius For circular needle the length of the needle relative to the radius of the axis.
     * The length will be calculated automatically and if the needle has to be enlarged or shrinked, this will be done with
     * preservation of aspect ratio.
     * @param props.visible Visibility flag of the needle
     */
    setNeedleOptions(props: object | { geometry?: Group; center?: Point; position?: DynamicElementPosition; radius?: number | string; visible?: boolean; } ): this;
}
