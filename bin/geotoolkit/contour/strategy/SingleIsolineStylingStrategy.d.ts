import {IsolineStylingStrategy} from './IsolineStylingStrategy';
import {LineStyle} from '../../attributes/LineStyle';

/**
 */
export class SingleIsolineStylingStrategy implements IsolineStylingStrategy {
    /**
     * @param singleIsolineLevel level index for single isoline
     * @param singleIsolineLevel.singleisolinestyle linestyle for single line
     * @param singleIsolineLevel.commonisolinestyle linestyle for common lines
     * @param singleIsolineLevel.singleisolinelevel level index for single isoline
     * @param singleIsolineStyle linestyle for single line
     * @param commonIsolineStyle linestyle for common lines
     */
    constructor(singleIsolineLevel?: object | { singleisolinestyle?: LineStyle; commonisolinestyle?: LineStyle; singleisolinelevel?: number; }  | number, singleIsolineStyle?: LineStyle, commonIsolineStyle?: LineStyle);
    /**
     * Gets style for isoline
     * @param level level
     */
    getIsolineStyle(level: number): LineStyle;
    /**
     * Returns if isoline of specified level should be drawn
     * @param level level
     */
    getIsolineVisible(level: number): boolean;
    /**
     * Returns single isoline level value
     */
    getSingleIsolineLevel(): number;
    /**
     * Gets linestyle for single line
     */
    getSingleIsolineStyle(): LineStyle;
    /**
     * Sets linestyle for single line
     * @param style style
     */
    setSingleIsoLineStyle(style: LineStyle): this;
    /**
     * Gets linestyle for common line
     */
    getCommonIsolineStyle(): LineStyle;
    /**
     * Sets linestyle for common line
     * @param style style
     */
    setCommonIsoLineStyle(style: LineStyle): this;
    /**
     * Gets strategy properties
     */
    getProperties(): {singleisolinestyle: LineStyle; commonisolinestyle: LineStyle; singleisolinelevel: number} | any;
    /**
     * Sets strategy properties
     * @param props An object containing the properties to set
     * @param props.singleisolinestyle Style of single isoline
     * @param props.commonisolinestyle Style of common isoline
     * @param props.singleisolinelevel Single isoline level value
     */
    setProperties(props?: object | { singleisolinestyle?: LineStyle; commonisolinestyle?: LineStyle; singleisolinelevel?: number; } ): this;
}
