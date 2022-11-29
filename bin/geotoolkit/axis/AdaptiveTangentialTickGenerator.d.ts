import {NumericTickGenerator} from './NumericTickGenerator';

/**
 * Tangential tick generator with automatic spacing of ticks and labels.
 */
export class AdaptiveTangentialTickGenerator extends NumericTickGenerator {
    /**
     * Tangential tick generator with automatic spacing of ticks and labels.
     * @param options options
     * @param options.rounded specify if start/end tick values should be rounded
     * @param options.minorticksamount count of minor ticks
     * @param options.majorticksamount count of major ticks
     */
    constructor(options?: object | { rounded?: boolean; minorticksamount?: number; majorticksamount?: number; } );
    /**
     * Returns minor ticks amount
     */
    getMinorTicksAmount(): number;
    /**
     * Set amount of minor ticks
     * @param minorTicksAmount minor ticks amount
     */
    setMinorTicksAmount(minorTicksAmount: number): this;
    /**
     * Returns major ticks amount
     */
    getMajorTicksAmount(): number;
    /**
     * Set amount of major ticks
     * @param majorTicksAmount major ticks amount
     */
    setMajorTicksAmount(majorTicksAmount: number): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {rounded: boolean; minorticksamount: number; majorticksamount: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.rounded rounded
     * @param properties.minorticksamount count of minor ticks
     * @param properties.majorticksamount count of major ticks
     */
    setProperties(properties: object | { rounded?: boolean; minorticksamount?: number; majorticksamount?: number; } ): this;
}
