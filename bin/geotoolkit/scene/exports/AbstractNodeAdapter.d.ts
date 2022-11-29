import {AbstractDocumentElement} from './AbstractDocumentElement';
import {ILayoutable} from '../../layout/ILayoutable';
import {Rect} from '../../util/Rect';
import {LayoutStyle} from '../../layout/LayoutStyle';
import {Transformation} from '../../util/Transformation';

/**
 * Document Element class that is used to layout the pdf document
 */
export class AbstractNodeAdapter extends AbstractDocumentElement implements ILayoutable {
    /**
     * Document Element class that is used to layout the pdf document
     * @param bounds bounds
     * @param exportLimits export limits in the bounds coordinates
     */
    constructor(bounds: Rect, exportLimits: Rect);
    /**
     * Returns node adapter scale mode
     */
    getScaleMode(): ScaleMode;
    /**
     * Set node adapter scale mode
     * @param scaleMode scale mode
     */
    setScaleMode(scaleMode: ScaleMode): this;
    /**
     * Specify desired layout style
     * @param layoutStyle desired layout style
     */
    setLayoutStyle(layoutStyle: LayoutStyle | object): this;
    /**
     * Return desired layout style
     */
    getLayoutStyle(): LayoutStyle;
    /**
     * Sets export limits of the node
     * @param exportLimits bound of the node
     */
    setExportLimits(exportLimits: Rect): this;
    /**
     * Returns export limits
     */
    getExportLimits(): Rect;
    /**
     * Return bounds
     */
    getBounds(): Rect;
    /**
     * Compute dimensions in the layout, this dimension is described by a fixed dimension and a scaled dimension
     */
    getLayoutedDimension(): object | null;
    /**
     * Return true if the representation is flipped horizontally
     */
    isHorizontalFlip(): boolean;
    /**
     * Set horizontal flip of the representation
     * @param enable enable flip
     */
    setHorizontalFlip(enable: boolean): this;
    /**
     * Return true if the representation is flipped vertically
     */
    isVerticalFlip(): boolean;
    /**
     * Set vertical flip of the representation
     * @param enable enable flip
     */
    setVerticalFlip(enable: boolean): this;
    /**
     * return local transformation
     */
    getLocalTransformation(): Transformation | null;
    /**
     * set local transformation
     * @param localTransformation local transformation
     */
    setLocalTransformation(localTransformation: Transformation): this;
    /**
     * set the document translation
     * @param x offset x
     * @param y offset y
     */
    setTranslation(x: number, y: number): this;
    /**
     * set the document scale depending of the parameters isScaledVertically and isScaledHorizontally
     * @param sx scale factor in x direction
     * @param sy scale factor in y direction
     */
    setScale(sx: number, sy: number): this;
    /**
     * update the layout of the document
     * @param rect rect to layout area
     */
    updateLayout(rect: Rect): void;
    /**
     * Set area, which object occupies
     * @param area an area to occupy
     */
    setBounds(area: Rect): this;
}
/**
 * Enum of node adapter scaling options:
 *     - TrueScale : 'TrueScale'
 *     - PixelScale : 'PixelScale'
 */
export enum ScaleMode {
    /**
     * True Scale
     */
    TrueScale = 'TrueScale',
    /**
     * Pixel Scale
     */
    PixelScale = 'PixelScale'
}
