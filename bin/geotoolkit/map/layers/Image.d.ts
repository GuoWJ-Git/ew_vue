import {AbstractLayer} from './AbstractLayer';
import {RenderingContext} from '../../renderer/RenderingContext';

/**
 * The Image layer is an image received from a server and drawn on the canvas. Varieties (inheritors) of this case are WMS and ArcGISImage layers.
 * This layer connects to the server and displays a single image layer from that server.
 */
export class Image extends AbstractLayer {
    /**
     * The Image layer is an image received from a server and drawn on the canvas. Varieties (inheritors) of this case are WMS and ArcGISImage layers.
     * This layer connects to the server and displays a single image layer from that server.
     * @param options options
     * @param options.showlayers the server layer names that are requested
     */
    constructor(options?: object | { showlayers?: string[] | any; } );
    /**
     * Renders layer content
     * @param context rendering context
     */
    renderContent(context: RenderingContext): void;
    /**
     * Gets the JSON data of the available layers for the server
     */
    getLayers(): object | any;
    /**
     * Returns the server layer names that are requested.
     */
    getVisibleLayers(): string[] | any;
    /**
     * Adds the passed in ID's to the list of layers to show
     * @param id id(s) for the layer(s) to show
     */
    showLayers(id: number | number[]): this;
    /**
     * Adds the passed in ID's to the list of layers to hide
     * @param id ID(s) for the layers to show
     */
    hideLayers(id?: number | number[]): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {showlayers: string[] | any} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     * @param properties.showlayers the server layer names that are requested
     */
    setProperties(properties?: object | { showlayers?: string[] | any; } ): this;
}
