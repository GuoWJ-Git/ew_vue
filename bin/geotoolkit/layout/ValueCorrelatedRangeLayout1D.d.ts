import {ILayout1D} from './ILayout1D';
import {Iterator} from '../util/iterator';
import {RenderingContext} from '../renderer/RenderingContext';
import {Range} from '../util/Range';

/**
 */
export class ValueCorrelatedRangeLayout1D implements ILayout1D {
    /**
     * @param options layout options
     * @param options.maxoffset if defined do not draw labels further than 'maxoffset' device units from its model position
     * @param options.overlap what to do if ranges don't fit: 'some' or 'all'
     */
    constructor(options?: object | { maxoffset?: number; overlap?: string; } );
    /**
     * Layouts elements
     * @param elements elements to layout
     * @param context rendering context
     * @param limits limits to layout elements within
     */
    layout(elements: Iterator, context: RenderingContext, limits?: Range): void;
    /**
     * Returns maxOffset
     */
    getMaxOffset(): number;
    /**
     * Sets maxOffset
     * @param maxOffset maxOffset
     */
    setMaxOffset(maxOffset: number): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {maxoffset: number; overlap: string} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.maxoffset offset offset
     * @param properties.overlap overlapped overlapped
     */
    setProperties(properties: object | { maxoffset?: number; overlap?: string; } ): this;
}
