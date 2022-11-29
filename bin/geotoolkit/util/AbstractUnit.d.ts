/**
 * An interface that represents an unit
 */
export class AbstractUnit {
    /**
     * An interface that represents an unit
     */
    constructor();
    /**
     * Convert unit value from base unit
     * @param value value to be converted
     */
    fromBaseUnit(value: number): number;
    /**
     * Convert unit value to base unit
     * @param value value to be converted
     */
    toBaseUnit(value: number): number;
    /**
     * Unit symbol
     */
    getSymbol(): string;
    /**
     * get the Quantity types of the unit
     */
    getQuantityType(): string[];
    /**
     * Returns unit name
     */
    getName(): string;
    /**
     * Returns unit description
     */
    getDescription(): string;
    /**
     * Convert the value to a specific unit if <code>canConvertTo</code>
     * @param value value to be converted
     * @param other other unit to be converted
     */
    convert(value: number | number[], other: AbstractUnit | string): number | number[];
    /**
     * Check if a unit can be converted from the current unit
     * @param other unit to be converted
     */
    canConvertTo(other: AbstractUnit | string): boolean;
    /**
     * Check if the unit belongs to the type
     * @param type quantity type to be tested
     */
    belongsTo(type: string): boolean;
    /**
     * Compares this unit with another unit
     * @param other 
     */
    sameAs(other: AbstractUnit | string): boolean;
    /**
     * Returns base unit symbol
     */
    getBaseUnitSymbol(): string;
    /**
     * Gets the properties
     */
    getProperties(): object | any;
    /**
     * Sets the properties
     * @param props properties
     */
    setProperties(props?: object): this;
}
