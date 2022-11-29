import {AbstractReservoirGrid} from '../AbstractReservoirGrid';
import {AbstractReservoirData} from '../../../data/reservoir/AbstractReservoirData';
import {ColorProvider} from '../../../../geotoolkit/util/ColorProvider';
import {Color, Box3} from '../../../THREE';
import {DisplayMode} from '../DisplayMode';
import {Side} from '../../../Constants';

/**
 * A reservoir subgrid object. <br>
 * A subgrid supports all features the normal reservoir object has, and is created to break down a large dataset,
 * for the purpose of improving performance. <br>
 */
export class ReservoirSubgrid extends AbstractReservoirGrid {
    /**
     * A reservoir subgrid object. <br>
     * A subgrid supports all features the normal reservoir object has, and is created to break down a large dataset,
     * for the purpose of improving performance. <br>
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
     * @param options.skeleton The skeleton options
     * @param options.skeleton.color The skeleton color
     * @param options.skeleton.linewidth The skeleton width
     * @param options.skeleton.horizons The significant horizons
     * @param options.skeleton.horizons.horizonk The horizon index
     * @param options.skeleton.horizons.color The horizon color
     * @param options.mode The reservoir display mode
     * @param options.side The material side
     */
    constructor(options: object | { data: AbstractReservoirData; colorprovider?: ColorProvider | Color | string; nullvalue?: number; minvalue?: number; maxvalue?: number; mini?: number; maxi?: number; minj?: number; maxj?: number; mink?: number; maxk?: number; excludemode?: boolean; skeleton?: object | { color?: string | Color; linewidth?: number; horizons?: object[] | object | { horizonk?: number; color?: number; } ; } ; mode?: DisplayMode; side?: Side; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options (See {@link @int/geotoolkit3d/scene/reservoir/hexahedral/ReservoirSubgrid.ReservoirSubgrid} for more info)
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
     * Get reservoir subgrid data
     */
    getData(): object;
    /**
     * Get index of this subgrid
     */
    getGridIndex(): number;
}
