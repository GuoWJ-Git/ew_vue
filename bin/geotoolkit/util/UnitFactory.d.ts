import {AbstractUnitFactory} from './AbstractUnitFactory';
import {AbstractUnit} from './AbstractUnit';

/**
 * Factory that creates geotoolkit.util.Unit.
 * This class acts as a factory and a registry class that can convert string representation of units into plain unit object. Unit objects themselves can perform conversion of values. <br>
 * This class embeds a default catalog of commonly used units. <b>Units Tutorial</b> in Geotoolkit/CarnacJS/Utils demonstrates how one could extend or replace units by creating and registering new units.<br>
 * It lists the base units and shows how to convert and add new units to the factory as shown in the example below.<br>
 * This class also holds the information used by the toolkit to convert device (screen) dimensions to rendering dimensions.<br>
 * For example if we are are rendering a track with width 1" on display or device size, this 1" can be measured through a ruler.
 * But Javascript cannot set size in device coordinates, so we need Pixel per Inch (PPI, each device has different value) and
 * Pixel per css Pixel (PPCP is what can be used in Javascript and is not same as Pixel).<br>
 * UnitFactory Class has a static dictionary and can recognize all existing Apple devices and we have APIs to let predefined devices set correct values.
 * The toolkit embeds a recognition algorithm that will try to retrieve those values from a dictionary by analysing the user-agent and other
 * global properties of the browser. However this algorithm will only recognize some of the predefined devices.<br>
 * One could either extend this list or customize the algorithm or explicitly set those ppi & ppcp values.<br>
 * The later is recommended for production application where the displayed scales are critical and the supported platforms list is open.
 * The suggested approach is to provide the user with a calibration tool that will let him set the actual ratios manually.
 * @example
 * ```javascript
 * const unit = factory.getUnit('foot');
 * // unit is named unit.getName(), and display a unit.getQuantityType() in unit.getSymbol()
 * // convert to another length unit:
 * unit.convert(1500.00, 'm'); // 1500.00 ft = 457.20 m
 * // Add new unit for your own use
 * factory.addUnit({
 *  // information about the new Unit
 *   'name': 'pint',
 *   'quantityType': 'volume', //or create your own
 *   'symbol': 'pt',
 *   'description': 'drink responsibly',
 *   'baseUnitSymbol': 'm3',
 *   // Computation Detail : newunit = (a+b*base)/(c+d*base)
 *   'a': 0, 'b': 0.000473176, 'c': 1, 'd': 0
 * });
 * ```
 */
export class UnitFactory extends AbstractUnitFactory {
    /**
     * Factory that creates geotoolkit.util.Unit.
     * This class acts as a factory and a registry class that can convert string representation of units into plain unit object. Unit objects themselves can perform conversion of values. <br>
     * This class embeds a default catalog of commonly used units. <b>Units Tutorial</b> in Geotoolkit/CarnacJS/Utils demonstrates how one could extend or replace units by creating and registering new units.<br>
     * It lists the base units and shows how to convert and add new units to the factory as shown in the example below.<br>
     * This class also holds the information used by the toolkit to convert device (screen) dimensions to rendering dimensions.<br>
     * For example if we are are rendering a track with width 1" on display or device size, this 1" can be measured through a ruler.
     * But Javascript cannot set size in device coordinates, so we need Pixel per Inch (PPI, each device has different value) and
     * Pixel per css Pixel (PPCP is what can be used in Javascript and is not same as Pixel).<br>
     * UnitFactory Class has a static dictionary and can recognize all existing Apple devices and we have APIs to let predefined devices set correct values.
     * The toolkit embeds a recognition algorithm that will try to retrieve those values from a dictionary by analysing the user-agent and other
     * global properties of the browser. However this algorithm will only recognize some of the predefined devices.<br>
     * One could either extend this list or customize the algorithm or explicitly set those ppi & ppcp values.<br>
     * The later is recommended for production application where the displayed scales are critical and the supported platforms list is open.
     * The suggested approach is to provide the user with a calibration tool that will let him set the actual ratios manually.
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
     * Return array of unit symbols by class name
     * @param name class name
     */
    getUnitSymbolsByClass(name: string): string[];
    /**
     * Returns all convertable unit symbols
     * @param unit unit to convert from/to
     */
    getConvertableUnitSymbols(unit: AbstractUnit | string): string[];
    /**
     * Clears all units from unit factory except CSS units (pixel, point and pica)
     */
    clearUnits(): this;
    /**
     * Adds a unit to factory. please reference the constructor in {@link @int/geotoolkit/util/Unit.Unit} for more details.
     * @param name unit name or unit inherited from AbstractUnit
     * @param quantityType expected quantity type
     * @param symbol unit symbol
     * @param baseUnitSymbol base unit symbol
     * @param a factor
     * @param b factor
     * @param c factor
     * @param d factor
     * @param description description of the unit
     */
    addUnit(name: string | AbstractUnit | object, quantityType: string[] | string, symbol: string, baseUnitSymbol: string, a: number, b: number, c: number, d: number, description?: string): this;
    /**
     * Removes a unit from factory.
     * @param unit unit name or unit inherited from AbstractUnit
     */
    removeUnit(unit: string | AbstractUnit): this;
    /**
     * Clears all unit classes from unit factory
     */
    clearUnitClasses(): this;
    /**
     * Adds a unit class to unit factory
     * @param name unit name or object
     * @param name.baseUnitSymbol base unit symbol
     * @param name.unitSymbols array of unit symbols
     * @param baseUnitSymbol base unit symbol
     * @param unitSymbols array of unit symbols
     */
    addUnitClass(name: object | { baseUnitSymbol?: string; unitSymbols?: string[]; }  | string, baseUnitSymbol?: string, unitSymbols?: string[]): this;
    /**
     * Removes a unit class from unit factory
     * @param name unit name or object
     * @param name.name unit name
     * @param name.unitSymbols array of unit symbols
     * @param unitSymbols array of unit symbols
     */
    removeUnitClass(name: string | object | { name: string; unitSymbols?: string[]; } , unitSymbols?: string[]): this;
    /**
     * Clears all unit alias from unit factory
     */
    clearUnitAlias(): this;
    /**
     * Adds a unit alias to unit factory
     * @param baseUnitSymbol base unit symbol
     * @param isCaseSensitive deprecated (since 2020.1 (3.1)). string type deprecated, use boolean. isCaseSensitive case sensitivity flag
     * @param alias alias unit symbols
     */
    addUnitAlias(baseUnitSymbol: string, isCaseSensitive: string | boolean, alias?: string[] | string): this;
    /**
     * Removes a unit alias from unit factory
     * @param baseUnitSymbol base unit symbol
     * @param isCaseSensitive case sensitivity flag
     * @param alias alias unit symbols
     */
    removeUnitAlias(baseUnitSymbol: string, isCaseSensitive: boolean, alias: string[] | string): this;
    /**
     * Adds device PPI list
     * @param list each JSON object should be <pre>{'device': 'device name', 'ppi': 96, 'ppcp': 1, 'accept': function}. </pre> Accept function returns true if device matched.
     */
    addDevicePPIList(list: object[]): this;
    /**
     * Clears device PPI list
     */
    clearDevicePPIList(): this;
    /**
     * Returns physical pixels per inch of the device
     */
    getPPI(): number;
    /**
     * Sets physical pixels per inch of the device
     * @param ppi pixel per inch
     * @param ppcp pixel per css pixel (sometimes different from geotoolkit.window.devicePixelRatio)
     */
    setPPI(ppi: number, ppcp: number): this;
    /**
     * Returns the number of CSS pixels (browser) per physical inch (device)
     * CSS pixels per physical inch is different from pixels per inch of the device.
     * It considers operating system and browser scaling and the ratio between browser inch and physical device inch
     */
    getCSSPixelPerInch(): number;
    /**
     * Updates CSS pixels per physical inch
     */
    updateDevicePPI(): this;
    /**
     * Returns instance of unit factory
     */
    static getInstance(): UnitFactory;
    /**
     * Returns instance of unit factory
     */
    static registerDefaults(): UnitFactory;
}
