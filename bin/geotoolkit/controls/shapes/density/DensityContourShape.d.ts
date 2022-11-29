import {Shape} from '../../../scene/shapes/Shape';
import {DensityGrid} from '../../util/density/DensityGrid';
import {ColorProvider} from '../../../util/ColorProvider';
import {Rect} from '../../../util/Rect';

/**
 * Defines shape to draw contour polygons to be provided from density grid.
 */
export class DensityContourShape extends Shape {
    /**
     * Defines shape to draw contour polygons to be provided from density grid.
     * @param options An object containing the properties to set
     * @param options.grid density grid or properties, see {@link @int/geotoolkit/controls/util/density/DensityGrid.DensityGrid#setProperties}
     * @param options.bandspacing band spacing, 0 means that there is no band spacing applied to contours
     * @param options.bandopacity band opacity
     * @param options.colorprovider color provider
     * @param options.geometry geometry mode
     */
    constructor(options?: object | { grid?: DensityGrid | object | any; bandspacing?: number; bandopacity?: number; colorprovider?: ColorProvider | null; geometry?: GeometryMode; } );
    /**
     * Return density grid
     */
    getDensityGrid(): DensityGrid;
    /**
     * Set density grid
     * @param densityGrid density grid or density grid options, see {@link @int/geotoolkit/controls/util/density/DensityGrid.DensityGrid#setProperties}
     * @param merge true if you want to merge grid options with existing grid, false by default
     */
    setDensityGrid(densityGrid: DensityGrid | object | any, merge?: boolean): this;
    /**
     * Return density values
     */
    getDensityValues(): number[] | null;
    /**
     * Return color provider
     */
    getColorProvider(): ColorProvider;
    /**
     * Set color provider
     * @param colorProvider color provider
     */
    setColorProvider(colorProvider: ColorProvider): this;
    /**
     * Return shape geometry mode
     */
    getGeometry(): GeometryMode;
    /**
     * Set shape geometry mode
     * @param geometryMode geometry mode
     */
    setGeometry(geometryMode: GeometryMode): this;
    /**
     * Return band spacing
     */
    getBandSpacing(): number;
    /**
     * Set band spacing
     * @param bandSpacing band spacing
     */
    setBandSpacing(bandSpacing: number): this;
    /**
     * Return  band opacity
     */
    getBandOpacity(): number;
    /**
     * Set  band opacity
     * @param opacity band opacity
     */
    setBandOpacity(opacity: number): this;
    /**
     * Sets band options
     * @param options the band rendering options
     * @param options.bandspacing band spacing
     * @param options.bandopacity band opacity
     */
    setBandOptions(options?: object | { bandspacing?: number; bandopacity?: number; } ): this;
    /**
     * Return bounds
     */
    getBounds(): Rect;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {grid: DensityGrid | null; bandspacing: number; bandopacity: number; colorprovider: ColorProvider | null; geometry: GeometryMode} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set, see {@link @int/geotoolkit/scene/shapes/Shape.Shape#setProperties}
     * @param properties.grid density grid or properties, see {@link @int/geotoolkit/controls/util/density/DensityGrid.DensityGrid#setProperties}
     * @param properties.bandspacing band spacing
     * @param properties.bandopacity band opacity
     * @param properties.colorprovider color provider
     * @param properties.geometry geometry mode
     */
    setProperties(properties?: object | { grid?: DensityGrid | object | any; bandspacing?: number; bandopacity?: number; colorprovider?: ColorProvider | null; geometry?: GeometryMode; } ): this;
}
/**
 * Density contour shape geometry mode
 */
export enum GeometryMode {
    /**
     * Path
Path geometry
     */
    Path = 'path',
    /**
     * Spline
Spline geomtery
     */
    Spline = 'spline'
}
