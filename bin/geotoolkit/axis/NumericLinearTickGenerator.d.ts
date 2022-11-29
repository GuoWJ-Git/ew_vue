import {NumericTickGenerator} from './NumericTickGenerator';

/**
 * Creates numeric linear tick generator
 */
export class NumericLinearTickGenerator extends NumericTickGenerator {
    /**
     * Creates numeric linear tick generator
     * @param options An object containing the properties to set
     * @param options.majormodelstep step for each major tick
     * @param options.minormodelstep step for each minor tick
     * @param options.precision precision
     * @param options.offset tick generator offset
     * @param options.hidelabelsonspantoosmall hide labels flag
     */
    constructor(options?: object | { majormodelstep?: number; minormodelstep?: number; precision?: number; offset?: number; hidelabelsonspantoosmall?: boolean; } );
    /**
     * Set Major or Minor tick step size
     * @param tickGrade tick grade major or minor
     * @param tickStep amount each tick should step
     */
    setTickStep(tickGrade: string, tickStep: number): this;
    /**
     * Sets offset for tick generator
     * @param offset tick generator offset
     */
    setOffset(offset: number): this;
    /**
     * Return offset
     */
    getOffset(): number;
    /**
     * Returns precision
     */
    getPrecision(): number;
    /**
     * set precision
     * @param precision precision value to be set
     */
    setPrecision(precision: number): this;
    /**
     * Gets hide labels on span between labels is too small flag ("true" by default)
     */
    getHideLabelsOnSpanTooSmall(): boolean;
    /**
     * Sets hide labels on span between labels too small flag
     * @param flag hide labels flag
     */
    setHideLabelsOnSpanTooSmall(flag: boolean): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {majormodelstep: number; minormodelstep: number; precision: number; offset: number; hidelabelsonspantoosmall: boolean} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.majormodelstep step for each major tick
     * @param properties.minormodelstep step for each minor tick
     * @param properties.precision precision
     * @param properties.offset tick generator offset
     * @param properties.hidelabelsonspantoosmall hide labels flag
     */
    setProperties(properties: object | { majormodelstep?: number; minormodelstep?: number; precision?: number; offset?: number; hidelabelsonspantoosmall?: boolean; } ): this;
}
