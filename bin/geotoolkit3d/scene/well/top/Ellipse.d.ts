import {Object3D} from '../../Object3D';
import {ColorProvider} from '../../../../geotoolkit/util/ColorProvider';
import {Color, Vector3} from '../../../THREE';

/**
 * The ball symbol of well top.
 */
export class Ellipse extends Object3D {
    /**
     * The ball symbol of well top.
     * @param options The options
     * @param options.size The size of symbol
     * @param options.visible The visibility of symbol
     * @param options.opacity The opacity of symbol
     * @param options.colorprovider A color provider or a single color in css format
     * @param options.color The color of the symbol
     * @param options.vertexcolors vertex colors
     */
    constructor(options: object | { size?: number; visible?: boolean; opacity?: number; colorprovider?: ColorProvider | string | Color; color?: Color; vertexcolors?: Color; } );
    /**
     * Update Location
     * @param position New position
     * @param lookat New lookat
     */
    updateLocation(position: Vector3, lookat: Vector3): void;
    /**
     * @param options The options
     * @param options.visible The visibility of symbol
     * @param options.opacity The opacity of symbol
     * @param options.size The size of symbol
     * @param options.colorprovider A color provider or a single color in css format
     * @param options.color The color of the symbol
     * @param options.vertexcolors vertex colors
     */
    setOptions(options?: object | { visible?: boolean; opacity?: number; size?: number; colorprovider?: ColorProvider | string | Color; color?: Color; vertexcolors?: Color; } ): this;
}
