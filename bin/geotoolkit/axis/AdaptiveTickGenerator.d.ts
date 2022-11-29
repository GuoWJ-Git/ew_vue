import {NumericTickGenerator} from './NumericTickGenerator';

/**
 * Creates adaptive tick generator. It generates ticks and labels considering the minimum distance between ticks in pixels and it automatically configures itself to create ticks at a reasonable intervals.<br>
 */
export class AdaptiveTickGenerator extends NumericTickGenerator {
    /**
     * Creates adaptive tick generator. It generates ticks and labels considering the minimum distance between ticks in pixels and it automatically configures itself to create ticks at a reasonable intervals.<br>
     * @param options An object containing the properties to set
     * @param options.minspan minimum distance between ticks
     * @param options.minlabelspan minimum distance between labels
     * @param options.minspangrade tick grade to be used for minimum distance between ticks
     * @param options.modelorigin origin in model space for initial tick in the sequence
     * @param options.precision precision for legacy algorithm
     * @param options.adaptivetype type of adaptive algorithm
     * @param options.minorticksamount count of minor ticks
     * @param options.gradespriority grades priority
     * @param options.hidelabelsonspantoosmall hide labels flag
     * @param options.spacing spacing see {@link @int/geotoolkit/axis/AdaptiveTickGenerator.AdaptiveTickGenerator#setSpacing}
     */
    constructor(options?: object | { minspan?: number; minlabelspan?: number; minspangrade?: number; modelorigin?: number; precision?: AdaptivePrecision; adaptivetype?: AdaptiveType; minorticksamount?: number; gradespriority?: string[]; hidelabelsonspantoosmall?: boolean; spacing?: number; } );
    /**
     * Gets the origin in model space for initial tick in the sequence
     */
    getModelOrigin(): number;
    /**
     * Sets the origin in model space for initial tick in the sequence
     * @param modelOrigin origin to set
     */
    setModelOrigin(modelOrigin: number): this;
    /**
     * Gets min span
     */
    getMinSpan(): number;
    /**
     * Sets min span
     * @param minSpan minimum distance between ticks
     */
    setMinSpan(minSpan: number): this;
    /**
     * Sets min labels span
     * @param minLabelSpan minimum distance between labels
     */
    setMinLabelSpan(minLabelSpan: number): this;
    /**
     * Gets min label span
     */
    getMinLabelSpan(): number;
    /**
     * Set tick grades priority
     * @param tickGradesPriority default is ["major", "minor", "edge"]
     */
    setGradesPriority(tickGradesPriority: string[]): this;
    /**
     * Returns tick grades priority
     */
    getGradesPriority(): string[];
    /**
     * Sets min span's grade
     * @param minSpanGrade ('major' or 'minor' values are allowed)
     */
    setMinSpanGrade(minSpanGrade: string): this;
    /**
     * Gets min span's grade ('minor' by default)
     */
    getMinSpanGrade(): string;
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
     * Returns precision
     */
    getPrecision(): AdaptivePrecision;
    /**
     * Sets precision
     * @param precision legacy algorithm precision
     */
    setPrecision(precision: number | string | AdaptivePrecision): this;
    /**
     * Returns type of adaptive algorithm
     */
    getAdaptiveType(): AdaptiveType;
    /**
     * Sets type of adaptive algorithm
     * @param adaptiveType type of adaptive algorithm
     */
    setAdaptiveType(adaptiveType: AdaptiveType): this;
    /**
     * Sets spacing to be used instead of calculated step in nice mode
     * If spacing is NaN then it is not used
     * @param spacing desired step between major ticks
     */
    setSpacing(spacing: number): this;
    /**
     * Returns spacing to be used instead of calculated step in nice mode
     * If spacing is NaN then it is not used
     */
    getSpacing(): number;
    /**
     * Reset
     */
    reset(): string[];
    /**
     * Gets hide labels on span too small flag ("true" by default)
     */
    getHideLabelsOnSpanTooSmall(): boolean;
    /**
     * Sets hide labels on span too small flag
     * @param flag hide labels flag
     */
    setHideLabelsOnSpanTooSmall(flag: boolean): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {minspan: number; minspangrade: number; minlabelspan: number; modelorigin: number; precision: AdaptivePrecision; adaptivetype: AdaptiveType; minorticksamount: number; gradespriority: string[]; hidelabelsonspantoosmall: boolean; spacing: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.minspan minimum distance between ticks
     * @param properties.minspangrade tick grade to be used for minimum distance between ticks
     * @param properties.minlabelspan minimum distance between labels
     * @param properties.modelorigin origin in model space for initial tick in the sequence
     * @param properties.precision precision for legacy algorithm
     * @param properties.adaptivetype type of adaptive algorithm
     * @param properties.minorticksamount count of minor ticks
     * @param properties.gradespriority default is ["major", "minor", "edge"]
     * @param properties.hidelabelsonspantoosmall hide labels flag
     * @param properties.spacing desired step between major ticks to be used instead of calculated step in nice mode. If spaicng is NaN then it is not used.
     */
    setProperties(properties: object | { minspan?: number; minspangrade?: number; minlabelspan?: number; modelorigin?: number; precision?: AdaptivePrecision; adaptivetype?: AdaptiveType; minorticksamount?: number; gradespriority?: string[]; hidelabelsonspantoosmall?: boolean; spacing?: number; } ): this;
}
/**
 * An enumeration defining rounding precision values.
 */
export enum AdaptivePrecision {
    /**
     * By1
     */
    By1 = 0,
    /**
     * By2
     */
    By2 = 1,
    /**
     * By3
     */
    By3 = 2,
    /**
     * By4
     */
    By4 = 4,
    /**
     * By5
     */
    By5 = 8,
    /**
     * By6
     */
    By6 = 16,
    /**
     * By7
     */
    By7 = 17,
    /**
     * By8
     */
    By8 = 18,
    /**
     * By9
     */
    By9 = 20
}
/**
 * An enumeration defining rounding precision values.
 */
export enum AdaptiveType {
    /**
     * Fixed limits
     */
    Fixed = 'fixed',
    /**
     * Nice, nice adaptive algorithm
     */
    Nice = 'nice'
}
