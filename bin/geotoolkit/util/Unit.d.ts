import {AbstractUnit} from './AbstractUnit';

/**
 * Defines an interface, which represents an unit of measure,
 * the ratio for new unit is computed with: y=(a+b*x)/(c+d*x)
 */
export class Unit extends AbstractUnit {
    /**
     * Defines an interface, which represents an unit of measure,
     * the ratio for new unit is computed with: y=(a+b*x)/(c+d*x)
     * @param name represent the name of the unit (example : 'pint') or properties object
     * @param name.name represent the name of the unit (example : 'pint')
     * @param name.quantitytype represent the quantity type of the unit like length, time, pressure etc. (example: 'volume')
     * @param name.symbol symbol to represent the unit (example: 'pt' to represent pint)
     * @param name.baseunitsymbol represents the unit symbol of it's base unit (example for volume, 'm3' can be the base unit)
     * @param name.a factor
     * @param name.b factor
     * @param name.c factor
     * @param name.d factor
     * @param name.description It represents the description of unit
     * @param quantityType represent the quantity type of the unit like length, time, pressure etc. (example: 'volume')
     * @param symbol symbol to represent the unit (example: 'pt' to represent pint)
     * @param baseUnitSymbol represents the unit symbol of it's base unit (example for volume, 'm3' can be the base unit)
     * @param a factor
     * @param b factor
     * @param c factor
     * @param d factor
     * @param description It represents the description of unit
     */
    constructor(name?: string | Unit | object | { name?: string; quantitytype?: string[]; symbol?: string; baseunitsymbol?: string; a?: number; b?: number; c?: number; d?: number; description?: string; } , quantityType?: string[], symbol?: string, baseUnitSymbol?: string, a?: number, b?: number, c?: number, d?: number, description?: string);
    /**
     * Converts value from base unit and gives value in current unit
     * @param value value to be converted
     */
    fromBaseUnit(value: number): number;
    /**
     * Converts value from current unit to base unit
     * @param value value to be converted
     */
    toBaseUnit(value: number): number;
    /**
     * Returns the quantityTypes of this unit
     */
    getQuantityType(): string[];
    /**
     * Returns the symbol of this unit
     */
    getSymbol(): string;
    /**
     * Returns baseUnitSymbol of this unit
     */
    getBaseUnitSymbol(): string;
    /**
     * Returns the name of the unit
     */
    getName(): string;
    /**
     * Returns the description of the unit
     */
    getDescription(): string;
    /**
     * Convert value to other unit if conversation is possible and giver converted value(s) in other unit
     * @param value specific value(s) to be converted to other unit
     * @param other represents the other unit to which the values will be converted
     */
    convert(value: number | number[], other: AbstractUnit | string): number | number[];
    /**
     * Returns whether the unit conversation is possible from this unit to other unit
     * @param other unit to be converted
     */
    canConvertTo(other: AbstractUnit | string): boolean;
    /**
     * Returns whether current unit belongs to the specified type(s)
     * @param type quantityType(s) to be tested
     */
    belongsTo(type: string | string[]): boolean;
    /**
     * Returns whether this unit is similar to other unit
     * @param other other
     */
    sameAs(other: AbstractUnit | string): boolean;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {name: string; quantitytype: string[]; symbol: string; baseunitsymbol: string; a: number; b: number; c: number; d: number; description: string} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.name represent the name of the unit (example : 'pint')
     * @param properties.quantitytype represent the quantity type of the unit like length, time, pressure etc. (example: 'volume')
     * @param properties.symbol symbol to represent the unit (example: 'pt' to represent pint)
     * @param properties.baseunitsymbol represents the unit symbol of it's base unit (example for volume, 'm3' can be the base unit)
     * @param properties.a factor
     * @param properties.b factor
     * @param properties.c factor
     * @param properties.d factor
     * @param properties.description It represents the description of unit
     */
    setProperties(properties: object | { name?: string; quantitytype?: string[]; symbol?: string; baseunitsymbol?: string; a?: number; b?: number; c?: number; d?: number; description?: string; } ): this;
    /**
     * Returns a clone of the unit.
     */
    clone(): Unit;
}
