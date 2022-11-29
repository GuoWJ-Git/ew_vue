import {ColorProvider} from './ColorProvider';
import {Range} from './Range';
import {RgbaColor} from './RgbaColor';

/**
 * Creates a representation of Range color provider
 * @example
 * ```javascript
 * import {Range} from '@int/geotoolkit/util/Range';
 * import {RangeColorProvider} from '@int/geotoolkit/util/RangeColorProvider';
 * // Discrete Range Color Provider allows for specific bins
 * const rangem2 = new Range(-2,-1.5); // set color orange in the [-2,-1.5] range.
 * ...
 * // Do the same for the [-1.5, 0], [0, 0.5], [0.5,1] and [1,2] ranges
 * const rangeCP = new RangeColorProvider({
 *    'values' : [ rangem2, rangem1, range0, rangep1, rangep2 ],
 *    'colors' : ['orange', 'yellow', 'blue', 'green', 'gray']
 * });
 * ```
 */
export class RangeColorProvider extends ColorProvider {
    /**
     * Creates a representation of Range color provider
     * @param values list of ranges or properties object
     * @param values.values list of ranges
     * @param values.colors list of colors
     * @param values.style display style
     * @param values.default default color
     * @param colors list of colors
     */
    constructor(values?: Range[] | number[] | object | { values?: Range[] | number[]; colors?: (string | RgbaColor)[]; style?: DisplayStyle; default?: RgbaColor | any; } , colors?: (string | RgbaColor)[]);
    /**
     * Returns how many colors can be provided
     */
    getColorNumber(): number;
    /**
     * Method used to set graphical representation of LogColorProvider in a fillStyle
     * @param style display style
     */
    setDisplayStyle(style: DisplayStyle): this;
    /**
     */
    getDisplayStyle(): DisplayStyle;
    /**
     */
    getStopPoints(): object[];
    /**
     * Replace all colors in the collection by this set
     * @param values list of ranges or properties object
     * @param values.values list of ranges
     * @param values.colors list of colors
     * @param values.style display style
     * @param values.default default color
     * @param colors list of colors
     */
    setColors(values: Range[] | number[] | object | { values?: Range[] | number[]; colors?: (string | RgbaColor)[]; style?: DisplayStyle; default?: RgbaColor | string | any; } , colors: string[] | RgbaColor[]): this;
    /**
     * sets the default/out of range color
     * @param color default/out of range color
     */
    setDefaultColor(color: string | RgbaColor): this;
    /**
     * gets the default/out of range color
     */
    getDefaultColor(): RgbaColor;
    /**
     * Returns minimum value set in the collection
     */
    getMinValue(): number;
    /**
     * Returns the maximum value set in this collection
     */
    getMaxValue(): number;
    /**
     * Returns color provider properties
     */
    getProperties(): {values: Range[]; colors: string[]; default: string; style: DisplayStyle} | any;
    /**
     * Sets properties
     * @param properties properties
     * @param properties.values list of ranges
     * @param properties.colors list of colors
     * @param properties.style display style
     * @param properties.default default color
     */
    setProperties(properties: object | { values?: Range[]; colors?: string[] | RgbaColor[]; style?: DisplayStyle; default?: RgbaColor | any; } ): this;
    /**
     * Invalidate Default ColorProvider and notify visuals for update
     */
    invalidate(): this;
    /**
     * Return state of notification
     */
    isNotificationEnabled(): boolean;
    /**
     * Enable / disable notification
     * @param enable enable or disable notifications
     * @param force true if parent should be invalidated immediately
     */
    setNotification(enable: boolean, force?: boolean): this;
    /**
     * Create or get RangeColorProvider from an object
     * @param object color provider
     */
    static fromObject(object: RangeColorProvider | object): RangeColorProvider;
}
/**
 * Enum of display style
 */
export enum DisplayStyle {
    /**
     * linear
     */
    Linear = 'linear',
    /**
     * block
     */
    Block = 'block'
}
