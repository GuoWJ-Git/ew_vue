import {LogDataStyle} from './LogDataStyle';
import {DiscreteGradientColorProvider} from '../../util/DiscreteGradientColorProvider';
import {FillStyle} from '../../attributes/FillStyle';

/**
 * Defines log discrete fill style. This fillstyle has an array of value ranges and an array of corresponding fillstyles.
 */
export class LogDiscreteStyle extends LogDataStyle {
    /**
     * Defines log discrete fill style. This fillstyle has an array of value ranges and an array of corresponding fillstyles.
     * @param options properties object
     * @param options.type the fill type
     * @param options.colorprovider the color provider
     * @param options.fillstyles list of fillstyles
     * @param options.ranges array of ranges
     * @param options.codes code value for each section
     */
    constructor(options?: object | { type?: FillType; colorprovider?: DiscreteGradientColorProvider; fillstyles?: FillStyle[]; ranges?: number[][]; codes?: number[]; } );
    /**
     * Returns array of ranges
     */
    getRanges(): number[][];
    /**
     * Sets array of ranges
     * @param ranges array of ranges
     */
    setRanges(ranges: number[][]): this;
    /**
     * Returns array of ranges
     */
    getCodes(): number[];
    /**
     * Sets array of codes
     * @param codes array of codes
     */
    setCodes(codes: number[]): this;
    /**
     * Returns filltype
     */
    getFillType(): FillType;
    /**
     * Sets filltype
     * @param filltype filltype
     */
    setFillType(filltype: FillType): this;
    /**
     * Returns color provider
     */
    getColorProvider(): DiscreteGradientColorProvider;
    /**
     * Sets colorprovider
     * @param colorprovider color provider
     */
    setColorProvider(colorprovider: DiscreteGradientColorProvider): this;
    /**
     * Returns array of fillstyles
     */
    getFillStyles(): FillStyle[];
    /**
     * Sets array of fillstyles
     * @param fillStyles list of fillstyles
     */
    setFillStyles(fillStyles: FillStyle[]): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {fillstyles: FillStyle[]; ranges: number[][]; codes: number[]; type: FillType; colorprovider: DiscreteGradientColorProvider} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.fillstyles list of fillstyles
     * @param properties.ranges array of ranges
     * @param properties.codes array of codes
     * @param properties.type fill type
     * @param properties.colorprovider color provider
     */
    setProperties(properties?: object | { fillstyles?: FillStyle[]; ranges?: number[][]; codes?: number[]; type?: FillType; colorprovider?: DiscreteGradientColorProvider; } ): this;
}
/**
 * fill type
 */
export enum FillType {
    /**
     * color provider
     */
    ColorProvider = 'ColorProvider',
    /**
     * discrete
     */
    Discrete = 'Discrete',
    /**
     * continuous
     */
    Continuous = 'Continuous'
}
