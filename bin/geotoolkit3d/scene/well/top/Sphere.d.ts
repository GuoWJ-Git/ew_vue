import {Object3D} from '../../Object3D';
import {ColorProvider} from '../../../../geotoolkit/util/ColorProvider';
import {Color, Vector3} from '../../../THREE';

/**
 * The ball symbol of well top.
 */
export class Sphere extends Object3D {
    /**
     * The ball symbol of well top.
     * @param options The options
     * @param options.size The size of symbol
     * @param options.visible The visibility of symbol
     * @param options.opacity The opacity of symbol
     * @param options.colorprovider A color provider or a single color in css format
     * @param options.widthsegments Number of horizontal segments. Minimum value is 3
     * @param options.heightsegments Number of vertical segments. Minimum value is 2
     * @param options.phistart Specify horizontal starting angle
     * @param options.philength Specify horizontal sweep angle size
     * @param options.thetastart Specify vertical starting angle
     * @param options.thetalength Specify vertical sweep angle size
     * @param options.color The color of the symbol
     * @param options.vertexcolors vertex colors
     */
    constructor(options: object | { size?: number; visible?: boolean; opacity?: number; colorprovider?: ColorProvider | string | Color; widthsegments?: number; heightsegments?: number; phistart?: number; philength?: number; thetastart?: number; thetalength?: number; color?: Color; vertexcolors?: Color; } );
    /**
     * Update Location
     * @param position New position
     */
    updateLocation(position: Vector3): void;
    /**
     * Set options
     * @param options The options
     * @param options.visible The visibility of symbol
     * @param options.opacity The opacity of symbol
     * @param options.size The size of symbol
     * @param options.colorprovider A color provider or a single color in css format
     * @param options.widthsegments Number of horizontal segments. Minimum value is 3
     * @param options.heightsegments Number of vertical segments. Minimum value is 2
     * @param options.phistart Specify horizontal starting angle
     * @param options.philength Specify horizontal sweep angle size
     * @param options.thetastart Specify vertical starting angle
     * @param options.thetalength Specify vertical sweep angle size
     * @param options.color The color of the symbol
     * @param options.vertexcolors vertex colors
     */
    setOptions(options?: object | { visible?: boolean; opacity?: number; size?: number; colorprovider?: ColorProvider | string | Color; widthsegments?: number; heightsegments?: number; phistart?: number; philength?: number; thetastart?: number; thetalength?: number; color?: Color; vertexcolors?: Color; } ): this;
    /**
     * Get options
     */
    getOptions(): object | any;
}
