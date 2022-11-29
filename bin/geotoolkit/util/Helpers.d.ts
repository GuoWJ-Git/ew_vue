import {FillStyle} from '../attributes/FillStyle';
import {Node} from '../scene/Node';

/**
 * This class contains various helpers methods
 */
export class Helpers {
    /**
     * This class contains various helpers methods
     */
    constructor();
    /**
     * Create or get fill style from object
     * @param object object can be in format of constructor
     * geotoolkit.attributes.FillStyle
     */
    static createFillStyleFromObject(object?: object | FillStyle): FillStyle | any;
    /**
     * Merge css fillstyle object with existing instance
     * @example
     * ```javascript
     * import {Shape} from '@int/geotoolkit/scene/shapes/Shape';
     *   import {Helpers} from '@int/geotoolkit/util/Helpers';
     *   import {FillStyle} from '@int/geotoolkit/attributes/FillStyle';
     *   class CustomSymbol extends Shape {
     *     ...
     *     setFillStyle(fillStyle, merge) {
     *         fillStyle = Helpers.mergeFillStyleFromObject(this, this.getFillStyle(), fillStyle, merge);
     *         return Shape.prototype.setLFillStyle.call(this, fillStyle);
     *      }
     *     ...
     *   }
     *   const imgPattern = geotoolkit.attributes.PatternFactory.getInstance().createPattern(imgurl);
     *   const symbol = new CustomSymbol(new Rect(50, 50, 150, 150))
     *     .setFillStyle({
     *          'color': KnownColors.Orange
     *      })
     *     .setFillStyle({
     *          'pattern': imgPattern
     *   }, true);
     * ```
     * @param node node
     * @param fillStyle instance of node property
     * @param object contains fill style
     * @param merge merge flag
     * @param invalidateMethod invalidate method
     */
    static mergeFillStyleFromObject(node: Node | null, fillStyle: FillStyle | null, object: FillStyle | object | string, merge?: boolean, invalidateMethod?: Function): FillStyle;
}
