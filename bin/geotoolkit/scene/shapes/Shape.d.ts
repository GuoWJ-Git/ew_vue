import {AbstractNode} from '../AbstractNode';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {RgbaColor} from '../../util/RgbaColor';
import {Pattern} from '../../attributes/Pattern';
import {Rect} from '../../util/Rect';
import {Transformation} from '../../util/Transformation';
import {Dimension} from '../../util/Dimension';

/**
 * Defines an abstract shape node with predefined line, fill and, text styles
 */
export class Shape extends AbstractNode {
    /**
     * Defines an abstract shape node with predefined line, fill and, text styles
     * @param options style applied on outline or it is options
     * @param options.linestyle style applied on outline
     * @param options.fillstyle style applied on fill
     * @param fillstyle style applied on fill
     */
    constructor(options?: LineStyle | string | object | { linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; } , fillstyle?: FillStyle | string | object);
    /**
     * Return line style
     */
    getLineStyle(): LineStyle | null;
    /**
     * Sets line style
     * @param lineStyle line style or options
     * @param lineStyle.color line color
     * @param lineStyle.width line width
     * @param lineStyle.pattern line pattern
     * @param merge true if you want to merge lineStyle with existing attribute, false by default
     */
    setLineStyle(lineStyle: LineStyle | string | object | { color?: string | RgbaColor; width?: number; pattern?: number[]; }  | any, merge?: boolean): this;
    /**
     * Return fill style
     */
    getFillStyle(): FillStyle | null;
    /**
     * Sets fill style
     * @param fillStyle a new fill style
     * @param fillStyle.color color
     * @param fillStyle.pattern pattern
     * @param fillStyle.foreground foreground color
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setFillStyle(fillStyle: FillStyle | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; }  | string | any, merge?: boolean): this;
    /**
     * Invalidate bounds
     * @param bounds if null is provided then cache (if any will be completely refreshed) otherwise only specified rect or node.bounds will be refreshed
     * @param force flag indicating if the parent must be forcibly invalidated
     */
    invalidateParent(bounds?: Rect | any, force?: boolean): this;
    /**
     * Check collision of the shape bounds with parent invalid area
     * @param bounds shape bounds
     * @param localTransformation local transformation of the bounds
     * @param parentInvalidArea invalid parent area
     * @param expand optional expand the bounds in model coordinate
     */
    static intersectsBounds(bounds: Rect, localTransformation: Transformation, parentInvalidArea: Rect, expand?: Dimension): boolean;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {linestyle: LineStyle; fillstyle: FillStyle} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.linestyle line style
     * @param properties.fillstyle fill style
     */
    setProperties(properties: object | { linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; } ): this;
    /**
     * invalidate Method
     */
    getInvalidateMethod(): Function;
}
