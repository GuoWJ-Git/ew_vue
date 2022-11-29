import {Shape} from './Shape';
import {ILayoutable} from '../../layout/ILayoutable';
import {AnchorType} from '../../util/AnchorType';
import {Dimension} from '../../util/Dimension';
import {LayoutStyle} from '../../layout/LayoutStyle';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {Rect} from '../../util/Rect';
import {Point} from '../../util/Point';
import {Transformation} from '../../util/Transformation';

/**
 * Define abstract shape with defined anchor point and scalable or restricted size.
 */
export class AnchoredShape extends Shape implements ILayoutable {
    /**
     * Define abstract shape with defined anchor point and scalable or restricted size.
     * @param options anchor x position
     * @param options.ax anchor x position
     * @param options.ay anchor y position
     * @param options.width shape width
     * @param options.height shape height
     * @param options.rotationangle rotation angle at anchor
     * @param options.alignment alignment according of the anchor point
     * @param options.sizeisindevicespace is coordinate in device space
     * @param options.preserveaspectratio preserve aspect ratio of the anchored shape
     * @param options.ispointingup pointing up
     * @param options.preservereadingorientation preserve reading orientation for local transform
     * @param options.preserverightangle preserve right angle for local transformation
     * @param options.useminmaxdimensions use the min max dimensions to limit visual size
     * @param options.mindimension minimum size for rendering
     * @param options.maxdimension maximum size for rendering
     * @param options.layoutstyle layout style to specify how to lay out shape
     * @param ay anchor y position
     * @param width symbol width
     * @param height symbol height
     * @param alignment alignment according of the anchor point
     * @param sizeIsInDeviceSpace flag to indicate if size of the symbol in device,
     * @param linestyle the line style
     * @param fillstyle the fill style
     */
    constructor(options: number | object | { ax?: number; ay?: number; width?: number; height?: number; rotationangle?: number; alignment?: AnchorType; sizeisindevicespace?: boolean; preserveaspectratio?: boolean; ispointingup?: boolean; preservereadingorientation?: boolean; preserverightangle?: boolean; useminmaxdimensions?: boolean; mindimension?: Dimension; maxdimension?: Dimension; layoutstyle?: LayoutStyle | object; } , ay?: number, width?: number, height?: number, alignment?: AnchorType, sizeIsInDeviceSpace?: boolean, linestyle?: LineStyle | string | object, fillstyle?: FillStyle | string | object);
    /**
     * Return anchor position
     * @param rect rectangle to get anchor position
     * @param anchorType anchor type
     */
    static getAnchorPosition(rect: Rect, anchorType: AnchorType): Point;
    /**
     * Sets whether the shape size is set in device space.
     * @param sizeIsInDeviceSpace true if the shape size is fixed in device space; otherwise, false.
     */
    setSizeIsInDeviceSpace(sizeIsInDeviceSpace: boolean): this;
    /**
     * Returns true if the shape size is set in device space
     */
    getSizeIsInDeviceSpace(): boolean;
    /**
     * Sets whether to use the min max device space sizes
     * @param useMinMaxSize true if using the min max device space sizes otherwise, false.
     */
    setUseMinMaxSize(useMinMaxSize: boolean): this;
    /**
     * true if using the min max device space sizes
     */
    getUseMinMaxSize(): boolean;
    /**
     * returns the maximum device space rendering dimension
     * only works when setUseMinMaxSize is enabled.
     */
    getMaxSize(): Dimension;
    /**
     * returns the minimum device space rendering dimension
     * * only works when setUseMinMaxSize is enabled.
     */
    getMinSize(): Dimension;
    /**
     * sets the maximum device space rendering dimension
     * @param maxSize maximum device space rendering dimension
     */
    setMaxSize(maxSize: Dimension): this;
    /**
     * sets the minimum device space rendering dimension
     * only works when setUseMinMaxSize is enabled.
     * @param minSize minimum device space rendering dimension
     */
    setMinSize(minSize: Dimension): this;
    /**
     * Sets whether the shape is always pointing up. Particularly useful for text.
     * @param isPointingUp flag setting whether the shape is always pointing up
     */
    setIsPointingUp(isPointingUp: boolean): this;
    /**
     * Returns true if the shape is always pointing up
     */
    getIsPointingUp(): boolean;
    /**
     * Sets whether the shape is always in a readable orientation. Particularly useful for text. Prevents mirror effects
     * @param preserveReadingOrientation sets flag whether the shape is always in a readable orientation
     */
    setPreserveReadingOrientation(preserveReadingOrientation: boolean): this;
    /**
     * Returns true if the shape is always in a readable orientation
     */
    getPreserveReadingOrientation(): boolean;
    /**
     * Sets whether right angles are preserved
     * @param preserveRightAngle flag setting if right angles are preserved
     */
    setPreserveRightAngle(preserveRightAngle: boolean): this;
    /**
     * Returns true if right angles are preserved
     */
    getPreserveRightAngle(): boolean;
    /**
     * Sets whether aspect ratio is preserved
     * @param preserveAspectRatio flag Sets whether aspect ratio is preserved
     */
    setPreserveAspectRatio(preserveAspectRatio: boolean): this;
    /**
     * Returns true if aspect ratio is preserved
     */
    getPreserveAspectRatio(): boolean;
    /**
     * Returns aspect ratio of the content of the shape
     * Returns 1
     */
    getAspectRatio(): number;
    /**
     * Returns the current anchor type.
     */
    getAnchorType(): AnchorType;
    /**
     * Sets the anchor type.
     * @param alignment anchor alignment
     */
    setAnchorType(alignment: AnchorType): this;
    /**
     * Returns rotation angle (in radians)
     */
    getRotationAngle(): number;
    /**
     * Set rotation angle
     * @param rotationAngle rotation angle (in radians) at anchor
     */
    setRotationAngle(rotationAngle: number): this;
    /**
     * Gets the anchor
     * @param tr transformation to transform anchor
     */
    getAnchor(tr?: Transformation): Point;
    /**
     * Return anchored x position
     */
    getAnchorX(): number;
    /**
     * Sets x anchor position
     * @param ax anchor x position
     */
    setAnchorX(ax: number): this;
    /**
     * Return anchored y position
     */
    getAnchorY(): number;
    /**
     * Sets y anchor position
     * @param ay anchor x position
     */
    setAnchorY(ay: number): this;
    /**
     * Sets anchor point to given position
     * @param p1 point or x coordinate
     * @param p2 y coordinate
     */
    setAnchor(p1: Point | number, p2?: number): this;
    /**
     * Sets size of the shape, will accept a width and height number or a Dimension object.
     * @param width width of the shape
     * @param height height of the shape
     */
    setSize(width: number | Dimension, height?: number): this;
    /**
     * Returns the size as a dimension object.
     */
    getSize(): Dimension;
    /**
     * Return width of the shape
     */
    getWidth(): number;
    /**
     * Sets width of the shape
     * @param width width of the shape
     */
    setWidth(width: number): this;
    /**
     * Return height of the shape
     */
    getHeight(): number;
    /**
     * Sets height of the shape
     * @param height height of the shape
     */
    setHeight(height: number): this;
    /**
     * Return bound in the parent coordinates
     */
    getBounds(): Rect;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {ax: number; ay: number; width: number; height: number; rotationangle: number; alignment: AnchorType; sizeisindevicespace: boolean; preserveaspectratio: boolean; ispointingup: boolean; preservereadingorientation: boolean; preserverightangle: boolean; useminmaxdimensions: boolean; mindimension: Dimension; maxdimension: Dimension; layoutstyle: LayoutStyle} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     * @param properties.ax x coordinate of the anchor
     * @param properties.ay y coordinate of the anchor
     * @param properties.width width
     * @param properties.height height
     * @param properties.rotationangle rotation angle
     * @param properties.alignment anchor type
     * @param properties.sizeisindevicespace size is in device space
     * @param properties.preserveaspectratio is preserve ratio activated
     * @param properties.ispointingup is pointing up
     * @param properties.preservereadingorientation is preserve reading orientation activated
     * @param properties.preserverightangle is preserve right angle activated
     * @param properties.useminmaxdimensions use device space size capping
     * @param properties.mindimension minimum device space size
     * @param properties.maxdimension maximum device space size
     * @param properties.layoutstyle layout style to specify how to lay out shape
     */
    setProperties(properties?: object | { ax?: number; ay?: number; width?: number; height?: number; rotationangle?: number; alignment?: AnchorType; sizeisindevicespace?: boolean; preserveaspectratio?: boolean; ispointingup?: boolean; preservereadingorientation?: boolean; preserverightangle?: boolean; useminmaxdimensions?: boolean; mindimension?: Dimension; maxdimension?: Dimension; layoutstyle?: LayoutStyle | object; } ): this;
    /**
     * Specify desired layout style
     * @param layoutStyle desired layout style
     * @param merge true if you want to merge layoutStyle with existing attribute, false by default
     */
    setLayoutStyle(layoutStyle: LayoutStyle | object, merge?: boolean): this;
    /**
     * Sets bounds of the node in the parent coordinates. This method
     * takes anchor position and width and height if size is not in device space.
     * This method was added to support layout.
     * @param bounds bound of the node in the parent coordinates
     */
    setBounds(bounds: Rect | object): this;
    /**
     * Return desired layout style
     */
    getLayoutStyle(): LayoutStyle;
}
