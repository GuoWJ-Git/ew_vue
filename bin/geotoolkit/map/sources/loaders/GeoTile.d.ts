import {AbstractSystem} from '../../coordinatesystems/AbstractSystem';
import {Rect} from '../../../util/Rect';
import {Point} from '../../../util/Point';
import {AbstractLoader} from './AbstractLoader';

/**
 * Callback for GeoTile.getSettingsData
 */
export type getSettingsData = (settings: object | { epsg: number | string | AbstractSystem; imagedevicelimits: Rect; imagemodelpoints: Point[]; tiledshapeoptions?: object | { minlod?: number; maxlod?: number; images?: {id: string, width: number, height: number}[]; } ; } ) => void;
/**
 * GeoTile loader
 */
export class GeoTile extends AbstractLoader {
    /**
     * GeoTile loader
     * @param options options object
     */
    constructor(options?: object);
    /**
     * Loads data that needed for GeoTile
     * @param data data loaded from server
     * @param callback settings callback
     */
    getSettingsData(data: object, callback: getSettingsData): void;
}
