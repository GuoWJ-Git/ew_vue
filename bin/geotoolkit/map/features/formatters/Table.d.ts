import {AbstractFeature} from '../AbstractFeature';

/**
 * Features info formatter that creates table based on the one attribute field.
 */
export class Table {
    /**
     * Features info formatter that creates table based on the one attribute field.
     * @param fields fields to show in table, all fields are shown if no value provided
     * @param vertical true if feature info should be located in a column with the field names at the first.
     * Otherwise features are placed in a row one under another with field names as a header
     */
    constructor(fields?: string[], vertical?: boolean);
    /**
     * Formats html text based on the provided features attribute field
     * @param features features list to format
     * @param text text created by the previous formatters from other layers
     */
    format(features: AbstractFeature[], text: string): string;
    /**
     * Creates table formatter function based on the provided object with structure { tableField: fieldFormatterFunction }
     * @example
     * ```javascript
     * import {Table} from '@int/geotoolkit/map/features/formatters/Table';
     * const formatter = Table.fromObject({
     *      'City': (feature) => feature.getAttributes()['city'] + ', ' + feature.getAttributes()['country']',
     *      'Population': f(feature) => feature.getAttributes()['pop'],
     *      'Latitude': (feature) => feature.getGeometry()['y'],
     *      'Longitude': (feature) => feature.getGeometry()['x']
     * });
     * ```
     * @param obj fields formatter object
     * @param vertical true if feature info should be located in a column with the field names at the first.
     * Otherwise features are placed in a row one under another with field names as a header
     */
    static fromObject(obj: object, vertical?: boolean): Function;
}
