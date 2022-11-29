import {CrossPlot} from './CrossPlot';
import {Point} from '../../util/Point';
import {PolarGrid} from './PolarGrid';
import {ColorProvider} from '../../util/ColorProvider';

/**
 * Defines an crossplot shape in the polar coordinates. First a polar grid will need to be created and then CrossPlot shape can be added to the grid as shown in the example below.<br>
 * Sectors can be added to highlight the area and third dimension can be defined for each point in the cross plot. To display a tool tip while clicking a symbol on polar cross plot, refer to the Polar Plot section Polar Chart tutorial.
 * @example
 * ```javascript
 * const crossPlotShape = new PolarCrossPlot({
 *   'center': {x: 100, y: 100},
 *   'outerradius': 100,
 *   'data': {
 *      'radius': [0, 15, 50, 70],
 *      'angle': [0, 15, 25, 35]
 *   }
 * });
 * ```
 */
export class PolarCrossPlot extends CrossPlot {
    /**
     * Defines an crossplot shape in the polar coordinates. First a polar grid will need to be created and then CrossPlot shape can be added to the grid as shown in the example below.<br>
     * Sectors can be added to highlight the area and third dimension can be defined for each point in the cross plot. To display a tool tip while clicking a symbol on polar cross plot, refer to the Polar Plot section Polar Chart tutorial.
     * @param options 
     * @param options.center a center of the polar chart
     * @param options.outerradius a radius of the polar chart
     * @param options.modelradius a radius of the polar chart in the model coordinates
     * @param options.startangle a start angle to be used for 0 angle (by default it is E direction)
     * @param options.polargrid grid to get initialization parameters. If grid is specified other
     * parameters are ignored
     * @param options.data a data in polar coordinates
     * @param options.data.radius an array of radius
     * @param options.data.angle an array of angles in grad
     * @param options.data.variable an array of numbers to be used for third dimension
     */
    constructor(options?: object | { center?: Point; outerradius?: number; modelradius?: number; startangle?: number; polargrid?: PolarGrid; data?: object | { radius?: number[]; angle?: number[]; variable?: number[]; } ; } );
    /**
     * @param options options
     * @param options.center a center of the polar chart
     * @param options.center.x x coordinate of the center
     * @param options.center.y y coordinate of the center
     * @param options.outerradius a radius of the polar chart
     * @param options.modelradius a radius of the polar chart in the model coordinates
     * @param options.startangle a start angle to be used for 0 angle (by default it is E direction)
     * @param options.colorProvider a color provider
     * @param options.painter a painter
     * @param options.polargrid grid to get initialization parameters. If grid is specified other
     * parameters are ignored
     * @param options.data a data in polar coordinates
     * @param options.data.radius an array of radius
     * @param options.data.angle an array of angles in grad
     * @param options.data.variable an array of numbers to be used for third dimension
     */
    setData(options: object | { center?: Point | object | { x?: number; y?: number; } ; outerradius?: number; modelradius?: number; startangle?: number; colorProvider?: ColorProvider; painter?: any; polargrid?: PolarGrid; data?: object | { radius?: number[]; angle?: number[]; variable?: number[]; } ; } ): this;
    /**
     * Convert point from polar to cartesian coordinate system. the center is int e
     * @param r radius
     * @param theta angle in grad
     */
    polarToCartesian(r: number, theta: number): Point;
    /**
     * Convert point from polar to cartesian coordinate system
     * @param x x coordinate (offset from center point)
     * @param y coordinate (offset from center point)
     */
    cartesianToPolar(x: number, y: number): Point;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {center: Point; outerradius: number; modelradius: number; startangle: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties properties
     * @param properties.center a center of the polar chart
     * @param properties.outerradius a radius of the polar chart
     * @param properties.modelradius a radius of the polar chart in the model coordinates
     * @param properties.startangle a start angle to be used for 0 angle (by default it is E direction)
     * @param properties.polargrid grid to get initialization parameters. If grid is specified other
     * parameters are ignored
     * @param properties.data a data in polar coordinates
     * @param properties.data.radius an array of radius
     * @param properties.data.angle an array of angles in grad
     * @param properties.data.variable an array of numbers to be used for third dimension
     */
    setProperties(properties?: object | { center?: Point; outerradius?: number; modelradius?: number; startangle?: number; polargrid?: PolarGrid; data?: object | { radius?: number[]; angle?: number[]; variable?: number[]; } ; } ): this;
}
