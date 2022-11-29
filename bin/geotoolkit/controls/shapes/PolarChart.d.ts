import {Shape} from '../../scene/shapes/Shape';
import {Point} from '../../util/Point';
import {PolarGrid} from './PolarGrid';
import {Rect} from '../../util/Rect';

/**
 * A Polar Chart is a circular graph used for data comparison.
 */
export class PolarChart extends Shape {
    /**
     * A Polar Chart is a circular graph used for data comparison.
     * @param options 
     * @param options.center a center of the polar chart
     * @param options.center.x x coordinate of the center
     * @param options.center.y y coordinate of the center
     * @param options.polargrid grid to get initialization parameters.
     * @param options.outerradius a radius of the polar chart
     * @param options.modelradius radius of the polar chart in the model coordinates
     * @param options.startangle a start angle to be used for 0 angle (by default it is E direction)
     * @param options.data array of polar chart data
     */
    constructor(options?: object | { center?: Point | object | { x?: number; y?: number; } ; polargrid?: PolarGrid; outerradius?: number; modelradius?: number; startangle?: number; data?: any[]; } );
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.center a center of the polar chart
     * @param properties.center.x x coordinate of the center
     * @param properties.center.y y coordinate of the center
     * @param properties.polargrid grid to get initialization parameters.
     * @param properties.outerradius a radius of the polar chart
     * @param properties.modelradius radius of the polar chart in the model coordinates
     * @param properties.startangle a start angle to be used for 0 angle (by default it is E direction)
     * @param properties.data array of polar chart data
     */
    setProperties(properties?: object | { center?: Point | object | { x?: number; y?: number; } ; polargrid?: PolarGrid; outerradius?: number; modelradius?: number; startangle?: number; data?: any[]; } ): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {center: Point; polargrid: PolarGrid; outerradius: number; modelradius: number; startangle: number} | any;
    /**
     * set model radius
     * @param radius model radius
     */
    setModelRadius(radius: number): this;
    /**
     * Return model radius
     */
    getModelRadius(): number;
    /**
     * Set the data to be plotted in chart
     * @param data polar chart options
     * @param data.name chart name
     * @param data.polargrid chart grid
     * @param data.outerRadius outer radius
     * @param data.modelradius model radius
     * @param data.startangle start angle
     * @param data.center center point
     * @param data.data to be charted in polar chart
     */
    setData(data: object | { name?: string; polargrid?: PolarGrid; outerRadius?: number; modelradius?: number; startangle?: number; center?: Point; data?: any[]; } ): this;
    /**
     * Returns current bounds
     */
    getBounds(): Rect;
    /**
     * Return array of chart options
     */
    getOptions(): object | any;
    /**
     * Sets bounds of the node in the parent coordinates
     * @param bounds bound of the node in the parent coordinates
     */
    setBounds(bounds: Rect): this;
    /**
     * Reset highlighting
     */
    resetHighlighting(): void;
    /**
     * Highlights the selected indices
     * @param indices indices to be highlighted
     * @param series series number
     * @param reset un-highlights previously selected indices
     */
    highlightIndices(indices: number[], series?: number, reset?: boolean): this;
    /**
     * Hit test in the device coordinate
     * @param area model area or position
     * @param radius radius of selection
     */
    hitTest(area: Rect | Point, radius?: number): any[];
    /**
     * Convert point from polar to cartesian coordinate system. the center is int e
     * @param r radius
     * @param theta angle in grad
     */
    polarToCartesian(r: number, theta: number): Point;
    /**
     * Convert model radius to outer radius
     * @param value value of the outer radius
     */
    modelToOuterRadius(value: number): number;
}
