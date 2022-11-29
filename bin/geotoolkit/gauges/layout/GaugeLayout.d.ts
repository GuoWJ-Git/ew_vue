import {Region} from './Region';
import {Rect} from '../../util/Rect';
import {Regions} from './Regions';
import {Node} from '../../scene/Node';

/**
 * Defines a layout for gauges
 */
export class GaugeLayout {
    /**
     * Defines a layout for gauges
     * @param options JSON with properties
     * @param options.regions layout regions
     * @param options.regions.east east region
     * @param options.regions.west west region
     * @param options.regions.north north region
     * @param options.regions.south south region
     * @param options.regions.northwest northwest region
     * @param options.regions.northeast northeast region
     * @param options.regions.southeast southeast region
     * @param options.regions.southwest southwest region
     * @param options.regions.center central region
     * @param options.sides layout sides
     * @param options.sides.north top position
     * @param options.sides.south bottom position
     * @param options.sides.west left position
     * @param options.sides.east right position
     * @param options.bounds layout bounds
     * @param options.componentpositions component positions
     * @param options.componentpositions.gauge gauge position
     * @param options.componentpositions.value value position
     * @param options.componentpositions.name name position
     */
    constructor(options?: object | { regions?: object | { east?: Region; west?: Region; north?: Region; south?: Region; northwest?: Region; northeast?: Region; southeast?: Region; southwest?: Region; center?: Region; } ; sides?: object | { north?: number; south?: number; west?: number; east?: number; } ; bounds?: Rect; componentpositions?: object | { gauge?: Regions; value?: Regions; name?: Regions; } ; } );
    /**
     * Deletes a region from the layout. Only custom added regions can be removed.
     * @param name Name of the region
     */
    removeRegion(name: string): this;
    /**
     * Returns a custom component which was registered by provided name
     * @param name Name of component to return
     */
    getCustomComponent(name: string): Node;
    /**
     * Parser region CSS parameters and updates regions accordingly
     */
    updateCssRegions(): void;
    /**
     * Checks if the region with this name is a custom region
     * @param name Name of the region to test
     */
    isCustomRegion(name: string): boolean;
    /**
     * Changes parameters of custom regions
     * @param name Name of the custom region
     * @param params JSON with CSS properties
     * @param params.x X of the region relative to its parent
     * @param params.y Y of the region relative to its parent
     * @param params.width Width of the region relative to its parent
     * @param params.height Height of the region relative to its parent
     */
    setCustomRegionParams(name: string, params: object | { x?: number | string; y?: number | string; width?: number | string; height?: number | string; } ): this;
}
