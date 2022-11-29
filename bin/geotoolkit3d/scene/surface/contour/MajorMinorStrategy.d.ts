/**
 * A contour's class that controls the drawing of major and minor isolines.
 * <br>
 * MajorStep variable indicates the elevation step between two adjacent major isoline, i.e. 500 feet.
 * MinorIncrement variable indicates the minor isoline increments between two adjacent major isoline, i.e. 3 increments.
 * <br>
 * For example, <br>
 *    ________________  major 800 ft <br>
 *    ----------------  minor        <br>
 *    ----------------  minor        <br>
 *    ________________  major 300 ft <br>
 */
export class MajorMinorStrategy {
    /**
     * A contour's class that controls the drawing of major and minor isolines.
     * <br>
     * MajorStep variable indicates the elevation step between two adjacent major isoline, i.e. 500 feet.
     * MinorIncrement variable indicates the minor isoline increments between two adjacent major isoline, i.e. 3 increments.
     * <br>
     * For example, <br>
     *    ________________  major 800 ft <br>
     *    ----------------  minor        <br>
     *    ----------------  minor        <br>
     *    ________________  major 300 ft <br>
     * @param options The options
     * @param options.majorstep the steps for major isoline in elevation unit
     * @param options.minorincrement the increment for minor isoline in quantity unit
     */
    constructor(options: object | { majorstep?: number; minorincrement?: number; } );
    /**
     * Set options
     * @param options the option for MajorMinorStrategy
     * @param options.majorstep the steps for major isoline in elevation unit
     * @param options.minorincrement the increment for minor isoline in quantity unit
     */
    setOptions(options: object | { majorstep?: number; minorincrement?: number; } ): this;
    /**
     * Get options
     */
    getOptions(): {majorstep: number; minorincrement: number} | any;
    /**
     * Set options
     * @param options the option for MajorMinorStrategy
     * @param options.majorstep the steps for major isoline in elevation unit
     * @param options.minorincrement the increment for minor isoline in quantity unit
     */
    setProperties(options: object | { majorstep?: number; minorincrement?: number; } ): this;
    /**
     * Get options
     */
    getProperties(): {majorstep: number; minorincrement: number} | any;
    /**
     * Set step for major isoline
     * @param step the steps for major isoline in elevation unit
     */
    setMajorStep(step: number): this;
    /**
     * Set step for minor isoline
     * @param step the increment for minor isoline in quantity unit
     */
    setMinorIncrement(step: number): this;
    /**
     * Check if the strategy equals this strategy
     * @param strategy the strategy to test
     */
    equals(strategy: MajorMinorStrategy): boolean;
    /**
     * Return the options in string
     */
    stringify(): string;
    /**
     * Clone this strategy
     */
    clone(): this;
}
