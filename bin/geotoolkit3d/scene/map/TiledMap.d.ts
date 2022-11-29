import {Object3D} from '../Object3D';
import {Box2} from '../../THREE';

/**
 * A 3D map object.<br>
 * <br>
 * This object provides a shape that can be used to display a tiledMap in a 3D scene.<br>
 * The Map is composed of planes that are dynamically altered to increase level of detail.<br>
 * <br>
 * The map's location and size can be configured independently of the map's extent<br>
 * The map's location can be configured through setting the maplimits property in setOptions<br>
 * The map's extent can be configured through setting the extent property in setOptions<br>
 * <br>
 */
export class TiledMap extends Object3D {
    /**
     * A 3D map object.<br>
     * <br>
     * This object provides a shape that can be used to display a tiledMap in a 3D scene.<br>
     * The Map is composed of planes that are dynamically altered to increase level of detail.<br>
     * <br>
     * The map's location and size can be configured independently of the map's extent<br>
     * The map's location can be configured through setting the maplimits property in setOptions<br>
     * The map's extent can be configured through setting the extent property in setOptions<br>
     * <br>
     * @param options The options
     * @param options.maxlod This defines the max Resolution of the map, this is either the max lod from the server, or as refined as you want to see the map for performance reasons
     * @param options.minlod This defines the min Resolution of the map this is for maps that do not support tiles lower than
     * this resolution
     * @param options.extent This defines the area of the map we want to show.
     * @param options.maplimits This defines the area that the TiledMap should occupy
     * @param options.opacity opacity of the map
     * @param options.server Server that this object will pull tiles from
     * @param options.server.url Server that this object will pull tiles from
     * @param options.formatterfunction function that takes x y z values and turns them into a path on the connected server
     */
    constructor(options: object | { maxlod?: number; minlod?: number; extent?: Box2; maplimits?: Box2; opacity?: number; server?: string | object | { url?: string | string[]; } ; formatterfunction?: Function; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options to set on this object
     * @param options.maplimits This defines the area that the TiledMap should occupy
     * @param options.maxlod This defines the max Resolution of the map
     * @param options.minlod This defines the min Resolution of the map this is for maps that do not support tiles lower than
     * this resolution
     * @param options.extent This defines the area of the map we want to show.
     * @param options.server Server that this object will pull tiles from
     * @param options.opacity opacity of the map
     * @param options.formatterfunction function that takes x y z values and turns them into a path on the connected server
     */
    setOptions(options?: object | { maplimits?: Box2; maxlod?: number; minlod?: number; extent?: Box2; server?: string; opacity?: number; formatterfunction?: Function; } ): this;
    /**
     * Get options
     * see {@link @int/geotoolkit3d/scene/map/TiledMap.TiledMap#setOptions} for more info)
     */
    getOptions(): object | any;
}
