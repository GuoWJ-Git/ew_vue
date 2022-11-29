import {AbstractLayer} from './AbstractLayer';
import {Rect} from '../../util/Rect';
import {Iterator} from '../../util/iterator';
import {Node} from '../../scene/Node';
import {RenderingContext} from '../../renderer/RenderingContext';
import {Point} from '../../util/Point';

/**
 * The Shape layer is a collection of geotoolkit shapes (polylines, polygons, symbols, etc.)<br>
 * In essence, it copies the functionality of the Vector layer, but instead of features it displays shapes — features combined with its drawing style. <br>
 * This approach increases consumed memory, but it is comparatively easier to use. Also, not all objects can be represented by a point, polyline or polygon (for example, a bezier curve), which makes this layer more universal for some special cases.
 * @example
 * ```javascript
 * // to add a custom shape with fixed width and height
 * import {CirclePainter} from '@int/geotoolkit/scene/shapes/painters/CirclePainter';
 * import {AnchorType} from '@int/geotoolkit/util/AnchorType';
 * import {SymbolShape} from '@int/geotoolkit/scene/shapes/SymbolShape';
 * import {Shape as ShapeLayer} from '@int/geotoolkit/map/layers/Shape';
 * const circle = new SymbolShape({
 *     'ax': -12460000,
 *     'ay': 4055800,
 *     'width': 20,
 *     'height': 20,
 *     'alignment': AnchorType.Center,
 *     'sizeisindevicespace': true,
 *     'linestyle': 'red',
 *     'fillstyle': 'yellow',
 *     'painter': CirclePainter
 * });
 * const layer = new ShapeLayer();
 * layer.addShape(circle);
 * ```
 */
export class Shape extends AbstractLayer {
    /**
     * The Shape layer is a collection of geotoolkit shapes (polylines, polygons, symbols, etc.)<br>
     * In essence, it copies the functionality of the Vector layer, but instead of features it displays shapes — features combined with its drawing style. <br>
     * This approach increases consumed memory, but it is comparatively easier to use. Also, not all objects can be represented by a point, polyline or polygon (for example, a bezier curve), which makes this layer more universal for some special cases.
     * @param options options (see {@link @int/geotoolkit/map/layers/AbstractLayer.AbstractLayer} for details)
     * @param options.tooltip tooltip options
     * @param options.tooltip.visible tooltip visibility flag
     * @param options.tooltip.formatter tooltip data formatter
     */
    constructor(options?: object | { tooltip?: object | { visible?: boolean; formatter?: Function; } ; } );
    /**
     */
    protected calculateDefaultModelLimits(): Rect;
    /**
     * Gets shapes iterator
     * @param filter a filter function.
     */
    getShapes(filter?: Function): Iterator;
    /**
     * Adds shape(s)
     * @param parameter shape(s) to be added
     */
    addShape(parameter: Node | Node[] | Iterator): this;
    /**
     * Removes shape(s) (and dispose them if needed)
     * @param parameter shape(s) to be removed
     * @param dispose dispose shape(s)
     */
    removeShape(parameter: Node | Node[] | Iterator, dispose?: boolean): this;
    /**
     * Removes all shapes (and dispose them if needed)
     * @param dispose automatically dispose shape(s)
     */
    clearShapes(dispose?: boolean): this;
    /**
     * Renders content
     * @param context rendering context
     */
    renderContent(context: RenderingContext): void;
    /**
     * Returns the format function to use (null if tooltips are not visible)
     */
    getTooltipFormatter(): object | Function;
    /**
     * Performs selection of the shapes with its device coordinates
     * @param pt is the device coordinates received by mouse event
     * @param radius is the radius of selection
     */
    hitTest(pt: Point, radius?: number): Node[];
}
