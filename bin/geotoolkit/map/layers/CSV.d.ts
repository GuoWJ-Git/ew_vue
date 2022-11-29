import {Vector} from './Vector';
import {CSV as SourcesCSV} from '../sources/CSV';
import {AbstractSystem} from '../coordinatesystems/AbstractSystem';

/**
 * The implementation is capable of loading CSV (Comma-Separated Values) data.<br>
 */
export class CSV extends Vector {
    /**
     * The implementation is capable of loading CSV (Comma-Separated Values) data.<br>
     * @param options options
     * @param options.source the layer data source
     * @param options.system initial data coordinate system
     * @param options.longitudefield string defining the field name that holds the longitude (X) coordinate
     * @param options.latitudefield string defining the field name that holds the latitude (Y) coordinate
     * @param options.delimiter CSV format data delimiter
     */
    constructor(options?: object | { source?: SourcesCSV; system?: string | AbstractSystem; longitudefield?: string; latitudefield?: string; delimiter?: string; } );
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {source: SourcesCSV; latitudefield: string; longitudefield: string; delimiter: string} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties options
     * @param properties.source the layer data source
     * @param properties.longitudefield string defining the field name that holds the longitude (X) coordinate
     * @param properties.latitudefield string defining the field name that holds the latitude (Y) coordinate
     * @param properties.delimiter CSV format data delimiter
     */
    setProperties(properties?: object | { source?: SourcesCSV; longitudefield?: string; latitudefield?: string; delimiter?: string; } ): this;
}
