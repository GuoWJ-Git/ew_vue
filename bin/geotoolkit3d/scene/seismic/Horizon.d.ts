import {Object3D} from '../Object3D';
import {Volume} from './Volume';
import {ColorProvider} from '../../../geotoolkit/util/ColorProvider';
import {Color} from '../../THREE';

/**
 * A Horizon 3D object used in seismic volume.<br>
 * <br>
 * This object represents a surface with an optional attribute used for coloring.<br>
 * If there are not enough data for the surface, set average elevation coordinates and average color values.<br>
 * <br>
 */
export class Horizon extends Object3D {
    /**
     * A Horizon 3D object used in seismic volume.<br>
     * <br>
     * This object represents a surface with an optional attribute used for coloring.<br>
     * If there are not enough data for the surface, set average elevation coordinates and average color values.<br>
     * <br>
     * @param options The options to use to create the horizon
     * @param options.seismicvolume The volume which hosts horizons
     * @param options.inline The inline coordinates
     * @param options.xline The xline coordinates
     * @param options.elevation The elevation coordinates
     * @param options.values The optional attribute values used to colorize the surface
     * @param options.nullvalue Null value for elevation
     * @param options.colorprovider A optional color provider or a single color in css format
     */
    constructor(options: object | { seismicvolume: Volume; inline: number[]; xline: number[]; elevation: number[]; values: number[]; nullvalue: number; colorprovider?: ColorProvider | string | Color; } );
    /**
     * Set data based on different geomotry mode
     * @param options The options to use to create the horizon
     * @param options.colorprovider A optional color provider or a single color in css format
     * @param options.inline The inline coordinates
     * @param options.xline The xline coordinates
     * @param options.elevation The elevation coordinates
     * @param options.values The optional attribute values used to colorize the surface
     */
    setOptions(options?: object | { colorprovider?: ColorProvider | string | Color; inline?: number[]; xline?: number[]; elevation?: number[]; values?: number[]; } ): this;
    /**
     * Get options of this.
     */
    getOptions(): object | any;
    /**
     * Get the horizon object
     */
    getHorizonObject(): Object3D;
    /**
     * Set the display mode of horizon, like 'XY', 'IJ' and 'IJFLIPPED'
     * @param displayMode The display mode of horizon
     */
    setDisplayMode(displayMode: string): void;
}
