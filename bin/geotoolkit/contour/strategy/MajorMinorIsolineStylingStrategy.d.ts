import {IsolineStylingStrategy} from './IsolineStylingStrategy';
import {LineStyle} from '../../attributes/LineStyle';

/**
 * Major-minor isoline styling strategy
 */
export class MajorMinorIsolineStylingStrategy implements IsolineStylingStrategy {
    /**
     * Major-minor isoline styling strategy
     * @param options options
     * @param options.majorstyle linestyle for major lines deprecated (since 2021.1 (3.3))
     * @param options.minorstyle linestyle for minor lines deprecated (since 2021.1 (3.3))
     * @param options.majorlinestyle linestyle for major lines
     * @param options.minorlinestyle linestyle for minor lines
     * @param options.majorstep step for major lines
     * @param options.minorstep step for minor lines
     * @param options.majorisolinesvisible visibility of major lines
     * @param options.minorisolinesvisible visibility of minor lines
     */
    constructor(options?: object | { majorstyle?: LineStyle; minorstyle?: LineStyle; majorlinestyle?: LineStyle; minorlinestyle?: LineStyle; majorstep?: number; minorstep?: number; majorisolinesvisible?: boolean; minorisolinesvisible?: boolean; } );
    /**
     * Gets style for isoline
     * @param level level
     */
    getIsolineStyle(level: number): LineStyle | any;
    /**
     * Returns if isoline of specified level should be drawn
     * @param level level
     */
    getIsolineVisible(level: number): boolean;
    /**
     * Sets linestyle for major isoline
     * @param style major style
     */
    setMajorLineStyle(style: LineStyle): this;
    /**
     * Sets linestyle for minor isoline
     * @param style minor style
     */
    setMinorLineStyle(style: LineStyle): this;
    /**
     * Gets linestyle for major isoline
     */
    getMajorLineStyle(): LineStyle;
    /**
     * Gets linestyle for major isoline
     */
    getMinorLineStyle(): LineStyle;
    /**
     * Sets show major isolines
     * @param visible visible
     */
    setMajorIsolinesVisible(visible: boolean): this;
    /**
     * Sets show minor isolines
     * @param visible visible
     */
    setMinorIsolinesVisible(visible: boolean): this;
    /**
     * Gets show major isolines
     */
    getMajorIsolinesVisible(): boolean;
    /**
     * Gets show minor isolines
     */
    getMinorIsolinesVisible(): boolean;
    /**
     * Gets if level is major
     * @param i level index
     */
    isMajorLevel(i: number): boolean;
    /**
     * Gets if level is minor
     * @param i level index
     */
    isMinorLevel(i: number): boolean;
    /**
     * Gets major step
     */
    getMajorStep(): number;
    /**
     * Gets minor step
     */
    getMinorStep(): number;
    /**
     * Sets major step
     * @param step step
     */
    setMajorStep(step: number): this;
    /**
     * Sets minor step
     * @param step step
     */
    setMinorStep(step: number): this;
    /**
     * Gets strategy properties
     */
    getProperties(): {majorlinestyle: LineStyle; minorlinestyle: LineStyle; majorstep: number; minorstep: number; majorisolinevisible: boolean; minorisolinevisible: boolean} | any;
    /**
     * Sets strategy properties
     * @param props An object containing the properties to set
     * @param props.majorlinestyle Line style form major isoline
     * @param props.minorlinestyle Line style form minor isoline
     * @param props.majorstep Major step
     * @param props.minorstep Minor step
     * @param props.majorisolinevisible Major isoline visibility
     * @param props.minorisolinevisible Minor isoline visibility
     */
    setProperties(props?: object | { majorlinestyle?: LineStyle; minorlinestyle?: LineStyle; majorstep?: number; minorstep?: number; majorisolinevisible?: boolean; minorisolinevisible?: boolean; } ): this;
}
