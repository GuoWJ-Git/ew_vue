import {GaugeLayout} from './GaugeLayout';
import {Region} from './Region';
import {Point} from '../../util/Point';

/**
 * Defines layout for circular gauges
 */
export class CircularLayout extends GaugeLayout {
    /**
     * Defines layout for circular gauges
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
     * @param options.regions.innereast innereast region
     * @param options.regions.innerwest innerwest region
     * @param options.regions.innernorth innernorth region
     * @param options.regions.innersouth innersouth region
     * @param options.regions.innercenter innercenter region
     * @param options.regions.circleregion circleregion region
     * @param options.center center
     */
    constructor(options: object | { regions?: object | { east?: Region; west?: Region; north?: Region; south?: Region; northwest?: Region; northeast?: Region; southeast?: Region; southwest?: Region; center?: Region; innereast?: Region; innerwest?: Region; innernorth?: Region; innersouth?: Region; innercenter?: Region; circleregion?: Region; } ; center?: Point; } );
    /**
     * Gets properties pertaining to this object
     */
    getProperties(): {regions: {east: Region; west: Region; north: Region; south: Region; northwest: Region; northeast: Region; southeast: Region; southwest: Region; center: Region; innereast: Region; innerwest: Region; innernorth: Region; innersouth: Region; innercenter: Region; circleregion: Region}; center: Point} | any;
    /**
     * Sets properties pertaining to this object
     * @param props JSON with properties
     * @param props.regions layout regions
     * @param props.regions.east east region
     * @param props.regions.west west region
     * @param props.regions.north north region
     * @param props.regions.south south region
     * @param props.regions.northwest northwest region
     * @param props.regions.northeast northeast region
     * @param props.regions.southeast southeast region
     * @param props.regions.southwest southwest region
     * @param props.regions.center central region
     * @param props.regions.innereast innereast region
     * @param props.regions.innerwest innerwest region
     * @param props.regions.innernorth innernorth region
     * @param props.regions.innersouth innersouth region
     * @param props.regions.innercenter innercenter region
     * @param props.regions.circleregion circleregion region
     * @param props.center center
     */
    setProperties(props: object | { regions?: object | { east?: Region; west?: Region; north?: Region; south?: Region; northwest?: Region; northeast?: Region; southeast?: Region; southwest?: Region; center?: Region; innereast?: Region; innerwest?: Region; innernorth?: Region; innersouth?: Region; innercenter?: Region; circleregion?: Region; } ; center?: Point; } ): this;
}
