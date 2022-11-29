import {DataObject} from './DataObject';
import {DataOrder} from './DataOrder';
import {AbstractUnit} from '../util/AbstractUnit';

/**
 * Define an abstract series of data of any type.
 * This is an abstract class and cannot be instantiated.
 */
export class AbstractDataSeries extends DataObject {
    /**
     * Define an abstract series of data of any type.
     * This is an abstract class and cannot be instantiated.
     * @param options options
     * @param options.id unique id of the data series
     * @param options.name name name of the data series
     * @param options.type type type of the data series
     */
    constructor(options?: object | { id?: number | string; name?: string; type?: string; } );
    /**
     * Returns the identifier of the data series.
     */
    getId(): number | string;
    /**
     * Sets the identifier of the data series.
     * @param id a new identifier
     */
    setId(id: number | string): this;
    /**
     * Notifies the data series has been updated.
     * The timestamp will be updated and geotoolkit.data.Events.Updated event will be fired.
     * @remarks fires {@link @int/geotoolkit/data/Events~Events~Updated}
     * @param args event args
     */
    update(args?: any): this;
    /**
     * Notifies the data series has been started updating.
     * The timestamp will be updated and geotoolkit.data.Events.Updated event will be fired.
     * @remarks fires {@link @int/geotoolkit/data/Events~Events~Updating}
     * @param args event args
     */
    protected updating(args?: any): this;
    /**
     * Returns the timestamp of the data series.
     */
    protected getTimeStamp(): number;
    /**
     * Updates timestamp of the data series.
     */
    protected updateTimeStamp(): void;
    /**
     * Returns data ordering of the data series.
     */
    getDataOrder(): DataOrder | number;
    /**
     * Returns whether the data series is immutable and cannot be changed.
     */
    isReadOnly(): boolean;
    /**
     * Returns unit of the data series.
     */
    getUnit(): AbstractUnit | null;
    /**
     * Returns the number of values in the data series.
     */
    getLength(): number;
    /**
     * Returns the value at the given index.
     * The type of the returned value depends on the data series type.
     * @param index 
     */
    getValue(index: number): any;
    /**
     * Returns an array of objects in the data series.
     * @param copy whether creating a copy of data
     * @param unit unit optional output unit to convert the data to. if not specified, data will not be converted
     */
    toArray(copy?: boolean, unit?: string | AbstractUnit): any[];
    /**
     * Converts values from one unit to another specified unit.
     * @param values array of values or a single value
     * @param fromUnit the original unit of the value(s)
     * @param toUnit the unit to convert the value(s) to
     */
    protected convertValues(values: any[] | any, fromUnit?: AbstractUnit, toUnit?: AbstractUnit): any[] | any;
}
/**
 * AbstractDataSeries events.
 */
export enum Events {
    /**
     * ValuesAdding
     */
    ValuesAdding = 'ValuesAdding',
    /**
     * ValuesAdded
     */
    ValuesAdded = 'ValuesAdded',
    /**
     * ValuesUpdating
     */
    ValuesUpdating = 'ValuesUpdating',
    /**
     * ValuesUpdated
     */
    ValuesUpdated = 'ValuesUpdated',
    /**
     * ValuesRemoving
     */
    ValuesRemoving = 'ValuesRemoving',
    /**
     * ValuesRemoved
     */
    ValuesRemoved = 'ValuesRemoved',
    /**
     * ValuesSetting
     */
    ValuesSetting = 'ValuesSetting',
    /**
     * ValuesSet
     */
    ValuesSet = 'ValuesSet',
    /**
     * UnitChanged
     */
    UnitChanged = 'UnitChanged',
    /**
     * Disposing
     */
    Disposing = 'Disposing'
}
