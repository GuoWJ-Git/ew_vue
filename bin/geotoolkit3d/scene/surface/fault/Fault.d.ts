import {AbstractSurface} from '../AbstractSurface';
import {PillarSurfaceData} from '../../../data/surface/PillarSurfaceData';
import {Color} from '../../../THREE';
import {ColorProvider} from '../../../../geotoolkit/util/ColorProvider';
import {DefaultColorProvider} from '../../../../geotoolkit/util/DefaultColorProvider';

/**
 * Fault surface implementation
 */
export class Fault extends AbstractSurface {
    /**
     * Fault surface implementation
     * @param options options object
     * @param options.data data object
     * @param options.data.surface data
     * @param options.fault is fault visible
     * @param options.lines is lines visible
     * @param options.points is points visible
     * @param options.colorprovider color provider for fault
     * @param options.linescolor color for lines
     * @param options.pointscolor color for points
     * @param options.opacity opacity
     */
    constructor(options: object | { data: object | { surface: PillarSurfaceData; } ; fault?: boolean; lines?: boolean; points?: boolean; colorprovider?: string | Color | ColorProvider; linescolor?: string | Color | string[] | Color[] | DefaultColorProvider; pointscolor?: string | Color | string[] | Color[] | DefaultColorProvider; opacity?: number; } );
    /**
     * Set options
     * @param options options object
     * @param options.fault is fault visible
     * @param options.lines is lines visible
     * @param options.points is points visible
     * @param options.colorprovider color provider
     * @param options.linescolor color for lines
     * @param options.pointscolor color for points
     * @param options.opacity opacity
     */
    setOptions(options?: object | { fault?: boolean; lines?: boolean; points?: boolean; colorprovider?: string | Color | ColorProvider; linescolor?: string | Color | string[] | Color[] | DefaultColorProvider; pointscolor?: string | Color | string[] | Color[] | DefaultColorProvider; opacity?: number; } ): this;
    /**
     * Get options
     */
    getOptions(): {fault: boolean; lines: boolean; points: boolean; colorprovider: string | Color | ColorProvider; linescolor: DefaultColorProvider; pointscolor: DefaultColorProvider; opacity: number} | any;
}
