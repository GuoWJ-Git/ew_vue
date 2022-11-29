import {Rect} from '../../util/Rect';
import {Point} from '../../util/Point';

/**
 * This layer is a collection of geotoolkit shapes that will be displayed on a map
 * Setting the limits will change the extents of the map.
 */
export class Query {
    /**
     * This layer is a collection of geotoolkit shapes that will be displayed on a map
     * Setting the limits will change the extents of the map.
     * @param options options
     * @param options.geometry spacial geometry in map coordinate system to define the query
     * @param options.properties Map of properties to look for
     * @param options.filter node filter that will return true to keep the element
     * @param options.name name
     */
    constructor(options: object | { geometry?: Rect | Point[]; properties?: any; filter?: Function; name?: string; } );
    /**
     * sets the geometry for this query
     * @param geo geometry
     */
    setGeometry(geo: Rect | Point[]): this;
    /**
     * sets the search properties for this query
     * @param properties options
     * @param properties.geometry spacial geometry in map coordinate system to define the query
     * @param properties.properties Map of properties to look for
     * @param properties.filter node filter that will return true to keep the element
     * @param properties.name name
     */
    setProperties(properties: object | { geometry?: Rect | Point[]; properties?: any; filter?: Function; name?: string; } ): this;
    /**
     * sets the name field for this query
     * @param name name
     */
    setName(name: string): this;
    /**
     * gets the name field for this query
     */
    getName(): string;
    /**
     * gets the geometry for this query
     */
    getGeometry(): Rect | Point[];
    /**
     * Returns the properties for this query
     */
    getProperties(): {geometry: Rect | Point[]; properties: any; filter: Function; name: string} | any;
    /**
     * sets the filter for this query
     * @param filter filter function
     */
    setFilter(filter: Function): this;
    /**
     * gets the filter for this query
     */
    getFilter(): Function;
}
