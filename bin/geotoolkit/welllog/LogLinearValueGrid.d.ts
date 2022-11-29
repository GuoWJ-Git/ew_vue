import {LogAbstractVisual} from './LogAbstractVisual';
import {Rect} from '../util/Rect';

/**
 * Create the standard representation of a well linear value grid.
 */
export class LogLinearValueGrid extends LogAbstractVisual {
    /**
     * Create the standard representation of a well linear value grid.
     * @param options number of lines by default 10 or properties object
     * @param options.linescount number of lines to display
     * @param options.edge edge object
     * @param options.edge.visible show / hide the edge lines
     */
    constructor(options?: number | object | { linescount?: number; edge?: object | { visible?: boolean; } ; } );
    /**
     * Return counts line
     */
    getLinesCount(): number;
    /**
     * Sets lines count
     * @param linesCount number of lines to display
     */
    setLinesCount(linesCount: number): this;
    /**
     * Sets first and the last line visible. It is visible by default
     * @param visible show / hide the edge lines
     */
    setVisibleEdgeLines(visible: boolean): this;
    /**
     */
    getVisibleEdgeLines(): boolean;
    /**
     * return meaning data limits
     * @param fullLimits default value is false
     */
    getDataLimits(fullLimits?: boolean): Rect | any;
    /**
     * Return bound in the parent coordinates
     */
    getBounds(): Rect | null;
    /**
     * Sets bounds of the curve in the parent coordinates
     * @param bounds bounds or position of the visual
     */
    setBounds(bounds: Rect): this;
    /**
     * Put grid inside track (to avoid clipping)
     * @param inside default is false
     */
    setInsideTrack(inside: boolean): this;
    /**
     * Get grid state, is it inside track or not
     */
    isInsideTrack(): boolean;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {linescount: number; edge: {visible: boolean}} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.linescount number of lines to display
     * @param properties.edge edge object
     * @param properties.edge.visible show / hide the edge lines
     */
    setProperties(properties: object | { linescount?: number; edge?: object | { visible?: boolean; } ; } ): this;
}
