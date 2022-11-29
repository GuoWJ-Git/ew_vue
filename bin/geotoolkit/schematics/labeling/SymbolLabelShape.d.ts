import {LabelShape} from './LabelShape';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {TextStyle} from '../../attributes/TextStyle';
import {SymbolShape} from '../../scene/shapes/SymbolShape';
import {LabelData} from './LabelData';
import {RenderingContext} from '../../renderer/RenderingContext';
import {Transformation} from '../../util/Transformation';
import {Rect} from '../../util/Rect';

/**
 * Symbol label shape implementation
 */
export class SymbolLabelShape extends LabelShape {
    /**
     * Symbol label shape implementation
     * @param options options
     * @param options.labelshape It has properties for specifying label shape
     * @param options.labelshape.linestyle label shape linestyle
     * @param options.labelshape.fillstyle label shape fillstyle
     * @param options.labeltextstyle It has properties for specifying label textstyle
     */
    constructor(options?: object | { labelshape?: object | { linestyle?: LineStyle; fillstyle?: FillStyle; } ; labeltextstyle?: TextStyle; } );
    /**
     * Gets label symbol shape
     */
    getLabelSymbol(): SymbolShape;
    /**
     * Sets label data
     * @param labelData label data
     */
    setLabelData(labelData: LabelData): this;
    /**
     * Returns all the properties pertaining to this object
     */
    getProperties(): {labelshape: {linestyle: LineStyle; fillstyle: FillStyle}; labeltextstyle: TextStyle} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param options options
     * @param options.labelshape It has properties for specifying label shape
     * @param options.labelshape.linestyle label shape linestyle
     * @param options.labelshape.fillstyle label shape fillstyle
     * @param options.labeltextstyle It has properties for specifying label textstyle
     */
    setProperties(options?: object | { labelshape?: object | { linestyle?: LineStyle; fillstyle?: FillStyle; } ; labeltextstyle?: TextStyle; } ): this;
    /**
     * Renders itself
     * @param context Rendering Context
     */
    render(context: RenderingContext): void;
    /**
     * Gets bounding box in model space
     * @param transformation scene transformation
     * @param isHorizontal isHorizontal flag
     */
    getBoundingBox(transformation?: Transformation, isHorizontal?: boolean): Rect;
}
