import {Rect} from '../../util/Rect';
import {FillStyle} from '../../attributes/FillStyle';
import {LineStyle} from '../../attributes/LineStyle';
import {Regions} from './Regions';

/**
 * Implements a region which is the main component in the process of layouting the gauge elements. A region
 * is an abstract rectangle which defines some area withing the gauge bounds and can contain any part of the gauge.
 * By default, gauge is divided into 9 regions, but not limited to that. Custom regions can be added. Since regions
 * are an abstract object, no fill style and/or linestyle can be applied to them. Bounds of a region are calculated
 * and set by the gauge, thus, setting bounds from an application will be overridden.
 */
export class Region {
    /**
     * Implements a region which is the main component in the process of layouting the gauge elements. A region
     * is an abstract rectangle which defines some area withing the gauge bounds and can contain any part of the gauge.
     * By default, gauge is divided into 9 regions, but not limited to that. Custom regions can be added. Since regions
     * are an abstract object, no fill style and/or linestyle can be applied to them. Bounds of a region are calculated
     * and set by the gauge, thus, setting bounds from an application will be overridden.
     * @param options JSON with properties
     * @param options.x X coordinate of the region
     * @param options.y Y coordinate of the region
     * @param options.width Width of the region
     * @param options.height Height of the region
     * @param options.bounds 
     * @param options.name 
     * @param options.fillstyle 
     * @param options.linestyle 
     * @param options.parent The region relative to which this region is calculated
     */
    constructor(options: object | { x?: number; y?: number; width?: number; height?: number; bounds?: Rect; name?: string; fillstyle?: FillStyle; linestyle?: LineStyle; parent?: string | Regions; } );
    /**
     * Get a clone of this object
     */
    clone(): Region;
    /**
     * Gets properties pertaining to this object
     */
    getProperties(): {bounds: Rect; name: string; fillstyle: FillStyle; linestyle: LineStyle; parent: string | Regions} | any;
    /**
     * Sets properties pertaining to this object
     * @param params JSON with properties
     * @param params.bounds region bounds
     * @param params.name region name
     * @param params.fillstyle region fillstyle
     * @param params.linestyle region border linestyle
     * @param params.parent The region relative to which this region is calculated
     */
    setProperties(params: object | { bounds?: Rect; name?: string; fillstyle?: FillStyle; linestyle?: LineStyle; parent?: string | Regions; } ): this;
    /**
     * Returns bounds of the region
     */
    getBounds(): Rect;
    /**
     * Sets bounds for this region
     * @param bounds New bounds
     */
    setBounds(bounds: Rect): this;
    /**
     * Sets Width property of region
     * @param w New Width to set
     */
    setWidth(w: number): this;
    /**
     * Sets Height property of region
     * @param h New Height to set
     */
    setHeight(h: number): this;
    /**
     * Returns Width property of region
     */
    getWidth(): number;
    /**
     * Returns Height property of region
     */
    getHeight(): number;
    /**
     * Sets X property of region
     * @param x New X to set
     */
    setX(x: number): this;
    /**
     * Sets Y property of region
     * @param y New Y to set
     */
    setY(y: number): this;
    /**
     * Gets Line Style of this region
     */
    getLineStyle(): LineStyle;
    /**
     * Gets Fill Style of this region
     */
    getFillStyle(): FillStyle;
    /**
     * Gets the parent where this region is rendered
     */
    getParent(): string | Regions;
    /**
     * Returns the name of region relative to which this region is calculated
     * @param parent region parent
     */
    setParent(parent: Regions): this;
    /**
     * Create or get a region from an object
     * @param region A region or an object with region properties
     */
    static fromObject(region: Region | object): Region;
}
