import {AbstractReservoirGrid} from '../AbstractReservoirGrid';
import {AbstractReservoirData} from '../../../data/reservoir/AbstractReservoirData';
import {ColorProvider} from '../../../../geotoolkit/util/ColorProvider';
import {Color, Box3, Mesh, Group} from '../../../THREE';
import {DisplayMode} from '../DisplayMode';
import {Side} from '../../../Constants';
import {HighlightMode} from '../HighlightMode';
import {ReservoirData} from '../../../data/reservoir/hexahedral/ReservoirData';
import {IJKIndex} from '../IJKIndex';
import {ReservoirOcclusionManager} from '../../../util/occlusion/ReservoirOcclusionManager';

/**
 * Reservoir filter
 */
export type filter = (i: number, j: number, k: number, value: number, additionalData?: object) => boolean;
/**
 * A Reservoir object.<br>
 * This object represents a 3D reservoir with an optional attribute used for coloring.<br>
 * The reservoir's input is defined by the given ReservoirData.
 * Please see {@link @int/geotoolkit3d/data/reservoir/hexahedral/ReservoirData.ReservoirData} for data format, order and more.<br>
 * The reservoir applies instanced drawing, which provides faster rendering and smaller memory usage than
 * traditional reservoir model. <br>
 * The skeleton (outline) is drawn in fragment shader, so it doesn't need extra resources.<br>
 * The default DisplayMode is showing mesh, skeleton, but not horizons.<br>
 */
export class ReservoirGrid extends AbstractReservoirGrid {
    /**
     * A Reservoir object.<br>
     * This object represents a 3D reservoir with an optional attribute used for coloring.<br>
     * The reservoir's input is defined by the given ReservoirData.
     * Please see {@link @int/geotoolkit3d/data/reservoir/hexahedral/ReservoirData.ReservoirData} for data format, order and more.<br>
     * The reservoir applies instanced drawing, which provides faster rendering and smaller memory usage than
     * traditional reservoir model. <br>
     * The skeleton (outline) is drawn in fragment shader, so it doesn't need extra resources.<br>
     * The default DisplayMode is showing mesh, skeleton, but not horizons.<br>
     * @param options The options
     * @param options.data The reservoir data
     * @param options.colorprovider A color provider to generate the colormap for cell painting
     * @param options.nullvalue The attribute nullvalue.<br>If some values are provided for coloring and if one of those values is equal to this nullvalue. <br>Then the cell won't be rendered.
     * @param options.minvalue cells with greater than or equal to this value will be rendered.
     * @param options.maxvalue cells with less than or equal to this value will be rendered.
     * @param options.mini cells with greater than or equal to this value will be rendered.
     * @param options.maxi cells with less than or equal to this value will be rendered.
     * @param options.minj cells with greater than or equal to this value will be rendered.
     * @param options.maxj cells with less than or equal to this value will be rendered.
     * @param options.mink cells with greater than or equal to this value will be rendered.
     * @param options.maxk cells with less than or equal to this value will be rendered.
     * @param options.excludemode set to true will turn to exclude mode for ijk filter
     * @param options.occlusionculled Deprecated/disabled since 3.4
     * @param options.computecellsvolume if true, precompute cells volume.
     * @param options.skeleton The skeleton options
     * @param options.skeleton.color The skeleton color
     * @param options.skeleton.linewidth The skeleton width
     * @param options.skeleton.horizons The significant horizons
     * @param options.mode The reservoir display mode
     * @param options.side The material side
     * @param options.highlightmode The reservoir highlight mode
     * @param options.filter Reservoir filter
     */
    constructor(options: object | { data: AbstractReservoirData; colorprovider?: ColorProvider | Color | string; nullvalue?: number; minvalue?: number; maxvalue?: number; mini?: number; maxi?: number; minj?: number; maxj?: number; mink?: number; maxk?: number; excludemode?: boolean; occlusionculled?: boolean; computecellsvolume?: boolean; skeleton?: object | { color?: string | Color; linewidth?: number; horizons?: {horizonk: number, color: number}[]; } ; mode?: DisplayMode; side?: Side; highlightmode?: HighlightMode; filter?: filter; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * Changing position data using setOptions is disabled because it's as expensive as creating new Reservoir object.
     * @param options The options (See {@link @int/geotoolkit3d/scene/reservoir/hexahedral/ReservoirGrid.ReservoirGrid} for more info)
     */
    setOptions(options?: object): this;
    /**
     * Get options, returned as an object
     * (see {@link @int/geotoolkit3d/scene/reservoir/hexahedral/ReservoirGrid.ReservoirGrid} for more info)
     */
    getOptions(): object | any;
    /**
     * Get bounding box of reservoir grid
     */
    getBoundingBox(): Box3;
    /**
     * Get reservoir data
     */
    getData(): ReservoirData;
    /**
     * Return the volume occupied by the remaining cells resulting from the user's filter.
     * Each cell volume is computed based on it's xyz corner coordinates.
     */
    getFilteredCellsVolume(): number;
    /**
     * Return the number of cells resulting from the user's filter.
     */
    getFilteredCellsCount(): number;
    /**
     * Get selected helper cell<br>
     * Needs to have highlighting enabled in Plot
     */
    getSelectedCell(): Mesh;
    /**
     * Get IJK info of selected cell<br>
     * Needs to have highlighting enabled in Plot
     */
    getSelectedIJKIndex(): IJKIndex;
    /**
     * Return true if the given IJK is bounded by the IJK filter of ReservoirGrid
     * @param ijk ijk index
     */
    isIJKValidInFilter(ijk: IJKIndex | number[]): boolean;
    /**
     * Return true if the given value is bounded by the value filter of this ReservoirGrid
     * @param value color value
     */
    isValueValidInFilter(value: number): boolean;
    /**
     * Get reservoir grids container
     */
    getContainer(): Group;
    /**
     * Get occlusion manager
     */
    getOcclusionManager(): ReservoirOcclusionManager;
    /**
     * Rebuild reservoir geometry depending on filters
     */
    rebuild(): this;
}
