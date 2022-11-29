import {AbstractUnit} from './AbstractUnit';

/**
 * Abstract factory for unit factory
 */
export class AbstractUnitFactory {
    /**
     * Abstract factory for unit factory
     */
    constructor();
    /**
     * Returns the time stamp (version) of unit factory. This value will be updated whenever modification made.
     */
    getTimeStamp(): number;
    /**
     * Returns an instance of unit based on specified information
     * @param value represent the {string} name, {string} symbol or {geotoolkit.util.AbstractUnit} unit to be created
     * @param quantityType expected quantity types
     * @param nullIfNotExist return null if unit does not exist instead of returning a user-defined unit
     */
    getUnit(value: string | AbstractUnit, quantityType?: string[], nullIfNotExist?: boolean): AbstractUnit | any;
    /**
     * Returns instance of unit factory
     */
    static getDefaultFactory(): AbstractUnitFactory;
    /**
     * Returns instance of unit factory
     * @param type factory ctor
     */
    static setType(type: Function): void;
}
