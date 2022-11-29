import {LabelShape} from './LabelShape';
import {SpaceStyle} from '../../attributes/SpaceStyle';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {TextStyle} from '../../attributes/TextStyle';
import {Rectangle} from '../../scene/shapes/Rectangle';
import {LabelData} from './LabelData';
import {RenderingContext} from '../../renderer/RenderingContext';
import {Transformation} from '../../util/Transformation';
import {Rect} from '../../util/Rect';

/**
 * Default label shape implementation
 */
export class DefaultLabelShape extends LabelShape {
    /**
     * Default label shape implementation
     * @param options options
     * @param options.padding It has properties for specifying the padding for each side
     * @param options.padding.top top padding
     * @param options.padding.bottom top padding
     * @param options.padding.right right padding
     * @param options.padding.left left padding
     * @param options.labelshape It has properties for specifying label shape
     * @param options.labelshape.linestyle label shape linestyle
     * @param options.labelshape.fillstyle label shape fillstyle
     * @param options.labeltextstyle It has properties for specifying label textstyle
     */
    constructor(options?: object | { padding?: object | { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string; }  | SpaceStyle; labelshape?: object | { linestyle?: LineStyle; fillstyle?: FillStyle; } ; labeltextstyle?: TextStyle; } );
    /**
     * Returns all the properties pertaining to this object
     */
    getProperties(): {padding: SpaceStyle; labelshape: {linestyle: LineStyle; fillstyle: FillStyle}; labeltextstyle: TextStyle} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param options options
     * @param options.padding It has properties for specifying the padding for each side
     * @param options.padding.top top padding
     * @param options.padding.bottom top padding
     * @param options.padding.right right padding
     * @param options.padding.left left padding
     * @param options.labelshape It has properties for specifying label shape
     * @param options.labelshape.linestyle label shape linestyle
     * @param options.labelshape.fillstyle label shape fillstyle
     * @param options.labeltextstyle It has properties for specifying label textstyle
     */
    setProperties(options?: object | { padding?: object | { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string; }  | SpaceStyle; labelshape?: object | { linestyle?: LineStyle; fillstyle?: FillStyle; } ; labeltextstyle?: TextStyle; } ): this;
    /**
     * Gets label rectangle shape
     */
    getLabelRectangle(): Rectangle;
    /**
     * Sets label data
     * @param labelData label data
     */
    setLabelData(labelData: LabelData): this;
    /**
     * Renders itself
     * @param context Rendering Context
     */
    render(context: RenderingContext): void;
    /**
     * Gets bounding box in model space
     * @param transformation scene transformation
     */
    getBoundingBox(transformation?: Transformation): Rect;
    /**
     * Return padding style
     */
    getPaddingStyle(): SpaceStyle | null;
    /**
     * Sets padding style
     * @param paddingStyle padding style
     */
    setPaddingStyle(paddingStyle: SpaceStyle | object): this;
}
