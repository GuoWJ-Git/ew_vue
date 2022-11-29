import {RectangularShape} from '../../scene/shapes/RectangularShape';
import {Point} from '../../util/Point';
import {LineStyle} from '../../attributes/LineStyle';
import {TextStyle} from '../../attributes/TextStyle';

/**
 * Defines a ternary grid and conversion from ternary coordinates to cartesian and vice versa.
 * It renders border, grid lines,
 * Ternary grid is required for all ternary diagrams.<br>
 * The grid in the ternary chart can be customized very easily, please refer to the gridlines properties in the constructor below.<br>
 */
export class TernaryGrid extends RectangularShape {
    /**
     * Defines a ternary grid and conversion from ternary coordinates to cartesian and vice versa.
     * It renders border, grid lines,
     * Ternary grid is required for all ternary diagrams.<br>
     * The grid in the ternary chart can be customized very easily, please refer to the gridlines properties in the constructor below.<br>
     * @param options 
     * @param options.size size of ternary chart
     * @param options.center a center of the ternary grid
     * @param options.center.x x coordinate of the center
     * @param options.center.y y coordinate of the center
     * @param options.limits value limits for axes (by default from 0 to 100)
     * @param options.limits.top value limits for top corner value (by default from 0 to 100)
     * @param options.limits.top.min minimum value for top corner value
     * @param options.limits.top.max maximum value for top corner value
     * @param options.limits.left value limits for left corner value (by default from 0 to 100)
     * @param options.limits.left.min minimum value for left corner value
     * @param options.limits.left.max maximum value for left corner value
     * @param options.limits.right value limits for right corner value (by default from 0 to 100)
     * @param options.limits.right.min minimum value for right corner value
     * @param options.limits.right.max maximum value for right corner value
     * @param options.linestyle common line style for grids and border (it is used if specific linestyle is not provided)
     * @param options.textstyle common text style for labels (it is used if specific textstyle is not provided)
     * @param options.gridlines gridlines properties
     * @param options.gridlines.top define options of top corner value gridlines
     * @param options.gridlines.top.linestyle line style of top corner value gridlines
     * @param options.gridlines.top.step step of top corner value gridlines
     * @param options.gridlines.top.visible visibility of top corner value grid
     * @param options.gridlines.top.visiblelabels define visibility of value labels next to top corner value grid lines
     * @param options.gridlines.top.textstyle value labels style for top corner value
     * @param options.gridlines.left define options of left corner value gridlines
     * @param options.gridlines.left.linestyle line style of left corner value gridlines
     * @param options.gridlines.left.step step of left corner value gridlines
     * @param options.gridlines.left.visible visibility of left corner value grid
     * @param options.gridlines.left.visiblelabels define visibility of value labels next to left corner value grid lines
     * @param options.gridlines.left.textstyle value labels style for left corner value
     * @param options.gridlines.right define options of right corner value gridlines
     * @param options.gridlines.right.linestyle line style of right corner value gridlines
     * @param options.gridlines.right.step step of right corner value gridlines
     * @param options.gridlines.right.visible visibility of right corner value grid
     * @param options.gridlines.right.visiblelabels define visibility of value labels next to right corner value grid lines
     * @param options.gridlines.right.textstyle value labels style for right corner value
     * @param options.labels corner annotations properties
     * @param options.labels.top top corner annotation properties
     * @param options.labels.top.text text to be displayed at top corner
     * @param options.labels.top.textstyle style for top corner annotations
     * @param options.labels.left left corner annotation properties
     * @param options.labels.left.text text to be displayed at left corner
     * @param options.labels.left.textstyle style for left corner annotations
     * @param options.labels.right right corner annotation properties
     * @param options.labels.right.text text to be displayed at right corner
     * @param options.labels.right.textstyle style for right corner annotations
     * @param options.border border properties
     * @param options.border.visible visibility of border
     * @param options.border.linestyle line style of border
     */
    constructor(options?: object | { size?: number; center?: Point | object | { x?: number; y?: number; } ; limits?: object | { top?: object | { min?: number; max?: number; } ; left?: object | { min?: number; max?: number; } ; right?: object | { min?: number; max?: number; } ; } ; linestyle?: LineStyle | string | object; textstyle?: TextStyle | string | object; gridlines?: object | { top?: object | { linestyle?: LineStyle | string | object; step?: number; visible?: boolean; visiblelabels?: boolean; textstyle?: TextStyle | string | object; } ; left?: object | { linestyle?: LineStyle | string | object; step?: number; visible?: boolean; visiblelabels?: boolean; textstyle?: TextStyle | string | object; } ; right?: object | { linestyle?: LineStyle | string | object; step?: number; visible?: boolean; visiblelabels?: boolean; textstyle?: TextStyle | string | object; } ; } ; labels?: object | { top?: object | { text?: string; textstyle?: TextStyle | string | object; } ; left?: object | { text?: string; textstyle?: TextStyle | string | object; } ; right?: object | { text?: string; textstyle?: TextStyle | string | object; } ; } ; border?: object | { visible?: boolean; linestyle?: LineStyle | string | object; } ; } );
    /**
     * Convert ternary coordinates to cartesian coordinates. Any two of three should be provided.
     * @param values values in ternary coordinates
     * @param values.top value of the top corner coordinate
     * @param values.left value of the left corner coordinate
     * @param values.right value of the right corner coordinate
     */
    ternaryToCartesian(values?: object | { top?: number | any; left?: number | any; right?: number | any; } ): Point;
    /**
     * Convert cartesian coordinates to ternary coordinates.
     * @param point coordinates
     */
    cartesianToTernary(point?: Point): {top: number | any; left: number | any; right: number | any} | object;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {size: number; center: Point | object; options: {center: {x: number; y: number}; limits: {top: {min: number; max: number}; left: {min: number; max: number}; right: {min: number; max: number}}; linestyle: LineStyle; textstyle: TextStyle; gridlines: {top: {linestyle: LineStyle; step: number; visible: boolean; visiblelabels: boolean; textstyle: TextStyle}; left: {linestyle: LineStyle; step: number; visible: boolean; visiblelabels: boolean; textstyle: TextStyle}; right: {linestyle: LineStyle; step: number; visible: boolean; visiblelabels: boolean; textstyle: TextStyle}}; labels: {top: {text: string; textstyle: TextStyle}; left: {text: string; textstyle: TextStyle}; right: {text: string; textstyle: TextStyle}}; border: {visible: boolean; linestyle: LineStyle}}} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties new properties for this object
     * @param properties.size size of ternary chart
     * @param properties.center a center of the ternary grid
     * @param properties.center.x x coordinate of the center
     * @param properties.center.y y coordinate of the center
     * @param properties.limits value limits for axes (by default from 0 to 100)
     * @param properties.limits.top value limits for top corner value (by default from 0 to 100)
     * @param properties.limits.top.min minimum value for top corner value
     * @param properties.limits.top.max maximum value for top corner value
     * @param properties.limits.left value limits for left corner value (by default from 0 to 100)
     * @param properties.limits.left.min minimum value for left corner value
     * @param properties.limits.left.max maximum value for left corner value
     * @param properties.limits.right value limits for right corner value (by default from 0 to 100)
     * @param properties.limits.right.min minimum value for right corner value
     * @param properties.limits.right.max maximum value for right corner value
     * @param properties.linestyle common line style for grids and border (it is used if specific linestyle is not provided)
     * @param properties.textstyle common text style for labels (it is used if specific textstyle is not provided)
     * @param properties.gridlines gridlines properties
     * @param properties.gridlines.top define properties of top corner value gridlines
     * @param properties.gridlines.top.linestyle line style of top corner value gridlines
     * @param properties.gridlines.top.step step of top corner value gridlines
     * @param properties.gridlines.top.visible visibility of top corner value grid
     * @param properties.gridlines.top.visiblelabels define visibility of value labels next to top corner value grid lines
     * @param properties.gridlines.top.textstyle value labels style for top corner value
     * @param properties.gridlines.left define properties of left corner value gridlines
     * @param properties.gridlines.left.linestyle line style of left corner value gridlines
     * @param properties.gridlines.left.step step of left corner value gridlines
     * @param properties.gridlines.left.visible visibility of left corner value grid
     * @param properties.gridlines.left.visiblelabels define visibility of value labels next to left corner value grid lines
     * @param properties.gridlines.left.textstyle value labels style for left corner value
     * @param properties.gridlines.right define properties of right corner value gridlines
     * @param properties.gridlines.right.linestyle line style of right corner value gridlines
     * @param properties.gridlines.right.step step of right corner value gridlines
     * @param properties.gridlines.right.visible visibility of right corner value grid
     * @param properties.gridlines.right.visiblelabels define visibility of value labels next to right corner value grid lines
     * @param properties.gridlines.right.textstyle value labels style for right corner value
     * @param properties.labels corner annotations properties
     * @param properties.labels.top top corner annotation properties
     * @param properties.labels.top.text text to be displayed at top corner
     * @param properties.labels.top.textstyle style for top corner annotations
     * @param properties.labels.left left corner annotation properties
     * @param properties.labels.left.text text to be displayed at left corner
     * @param properties.labels.left.textstyle style for left corner annotations
     * @param properties.labels.right right corner annotation properties
     * @param properties.labels.right.text text to be displayed at right corner
     * @param properties.labels.right.textstyle style for right corner annotations
     * @param properties.border border properties
     * @param properties.border.visible visibility of border
     * @param properties.border.linestyle line style of border
     * @param properties.options new properties for this object
     * @param properties.options.size size of ternary chart
     * @param properties.options.center a center of the ternary grid
     * @param properties.options.center.x x coordinate of the center
     * @param properties.options.center.y y coordinate of the center
     * @param properties.options.limits value limits for axes (by default from 0 to 100)
     * @param properties.options.limits.top value limits for top corner value (by default from 0 to 100)
     * @param properties.options.limits.top.min minimum value for top corner value
     * @param properties.options.limits.top.max maximum value for top corner value
     * @param properties.options.limits.left value limits for left corner value (by default from 0 to 100)
     * @param properties.options.limits.left.min minimum value for left corner value
     * @param properties.options.limits.left.max maximum value for left corner value
     * @param properties.options.limits.right value limits for right corner value (by default from 0 to 100)
     * @param properties.options.limits.right.min minimum value for right corner value
     * @param properties.options.limits.right.max maximum value for right corner value
     * @param properties.options.linestyle common line style for grids and border (it is used if specific linestyle is not provided)
     * @param properties.options.gridlines gridlines properties
     * @param properties.options.gridlines.top define properties of top corner value gridlines
     * @param properties.options.gridlines.top.linestyle line style of top corner value gridlines
     * @param properties.options.gridlines.top.step step of top corner value gridlines
     * @param properties.options.gridlines.top.visible visibility of top corner value grid
     * @param properties.options.gridlines.top.visiblelabels define visibility of value labels next to top corner value grid lines
     * @param properties.options.gridlines.top.textstyle value labels style for top corner value
     * @param properties.options.gridlines.left define properties of left corner value gridlines
     * @param properties.options.gridlines.left.linestyle line style of left corner value gridlines
     * @param properties.options.gridlines.left.step step of left corner value gridlines
     * @param properties.options.gridlines.left.visible visibility of left corner value grid
     * @param properties.options.gridlines.left.visiblelabels define visibility of value labels next to left corner value grid lines
     * @param properties.options.gridlines.left.textstyle value labels style for left corner value
     * @param properties.options.gridlines.right define properties of right corner value gridlines
     * @param properties.options.gridlines.right.linestyle line style of right corner value gridlines
     * @param properties.options.gridlines.right.step step of right corner value gridlines
     * @param properties.options.gridlines.right.visible visibility of right corner value grid
     * @param properties.options.gridlines.right.visiblelabels define visibility of value labels next to right corner value grid lines
     * @param properties.options.gridlines.right.textstyle value labels style for right corner value
     * @param properties.options.labels corner annotations properties
     * @param properties.options.labels.top top corner annotation properties
     * @param properties.options.labels.top.text text to be displayed at top corner
     * @param properties.options.labels.top.textstyle style for top corner annotations
     * @param properties.options.labels.left left corner annotation properties
     * @param properties.options.labels.left.text text to be displayed at left corner
     * @param properties.options.labels.left.textstyle style for left corner annotations
     * @param properties.options.labels.right right corner annotation properties
     * @param properties.options.labels.right.text text to be displayed at right corner
     * @param properties.options.labels.right.textstyle style for right corner annotations
     * @param properties.options.border border properties
     * @param properties.options.border.visible visibility of border
     * @param properties.options.border.linestyle line style of border
     */
    setProperties(properties?: object | { size?: number; center?: Point | object | { x?: number; y?: number; } ; limits?: object | { top?: object | { min?: number; max?: number; } ; left?: object | { min?: number; max?: number; } ; right?: object | { min?: number; max?: number; } ; } ; linestyle?: LineStyle | string | object; textstyle?: TextStyle | string | object; gridlines?: object | { top?: object | { linestyle?: LineStyle | string | object; step?: number; visible?: boolean; visiblelabels?: boolean; textstyle?: TextStyle | string | object; } ; left?: object | { linestyle?: LineStyle | string | object; step?: number; visible?: boolean; visiblelabels?: boolean; textstyle?: TextStyle | string | object; } ; right?: object | { linestyle?: LineStyle | string | object; step?: number; visible?: boolean; visiblelabels?: boolean; textstyle?: TextStyle | string | object; } ; } ; labels?: object | { top?: object | { text?: string; textstyle?: TextStyle | string | object; } ; left?: object | { text?: string; textstyle?: TextStyle | string | object; } ; right?: object | { text?: string; textstyle?: TextStyle | string | object; } ; } ; border?: object | { visible?: boolean; linestyle?: LineStyle | string | object; } ; options?: object | { size?: number; center?: Point | object | { x?: number; y?: number; } ; limits?: object | { top?: object | { min?: number; max?: number; } ; left?: object | { min?: number; max?: number; } ; right?: object | { min?: number; max?: number; } ; } ; linestyle?: LineStyle | string | object; gridlines?: object | { top?: object | { linestyle?: LineStyle | string | object; step?: number; visible?: boolean; visiblelabels?: boolean; textstyle?: TextStyle | string | object; } ; left?: object | { linestyle?: LineStyle | string | object; step?: number; visible?: boolean; visiblelabels?: boolean; textstyle?: TextStyle | string | object; } ; right?: object | { linestyle?: LineStyle | string | object; step?: number; visible?: boolean; visiblelabels?: boolean; textstyle?: TextStyle | string | object; } ; } ; labels?: object | { top?: object | { text?: string; textstyle?: TextStyle | string | object; } ; left?: object | { text?: string; textstyle?: TextStyle | string | object; } ; right?: object | { text?: string; textstyle?: TextStyle | string | object; } ; } ; border?: object | { visible?: boolean; linestyle?: LineStyle | string | object; } ; } ; } ): this;
}
