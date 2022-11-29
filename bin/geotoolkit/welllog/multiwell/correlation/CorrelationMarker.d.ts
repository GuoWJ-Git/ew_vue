import {Correlation} from './Correlation';
import {ILineDecoration} from '../../../attributes/ILineDecoration';

/**
 * Define line correlation to connect two depth on different wells
 * @example
 * ```javascript
 * import {CorrelationMarker} from '@int/geotoolkit/welllog/multiwell/correlation/CorrelationMarker';
 * // Following example shows how to add a correlation marker
 * track.addChild(new CorrelationMarker({
 *       'linestyle': {
 *           'color': color,
 *           'width': 2,
 *           'pixelsnapmode': {'x': true, 'y': true}
 *       },
 *       'linedecoration': 'wavy',
 *       'leftdepth': leftDepth,
 *       'rightdepth': rightDepth
 *   }));
 * ```
 */
export class CorrelationMarker extends Correlation {
    /**
     * Define line correlation to connect two depth on different wells
     * @param options additional options
     * @param options.leftdepth depth on left well
     * @param options.rightdepth depth on right well
     * @param options.linedecoration line decoration style
     * @param rightDepth deprecated since 2021.1 (3.3), depth on right well
     * @param props deprecated since 2021.1 (3.3), use first argument instead
     */
    constructor(options?: number | object | { leftdepth?: number; rightdepth?: number; linedecoration?: ILineDecoration | string; } , rightDepth?: number, props?: object);
    /**
     * Return Correlation Marker Line Decoration Style
     */
    getLineDecoration(): ILineDecoration;
    /**
     * Specify Correlation Marker Line Decoration style
     * @param lineDecoration line decoration style
     */
    setLineDecoration(lineDecoration: ILineDecoration | string): this;
    /**
     * Set depth for correlation
     * @param leftDepth depth of the left well
     * @param rightDepth depth of the right well
     */
    setDepth(leftDepth: number, rightDepth: number): this;
    /**
     * Returns depth of the left well
     */
    getLeftDepth(): number;
    /**
     * Returns depth of the right well
     */
    getRightDepth(): number;
}
