import {AbstractVisual} from './AbstractVisual';

/**
 * This class stores the colorMap table for the Visuals (AbstractVisual and its derivatives).
 */
export class VisualColorMap {
    /**
     * This class stores the colorMap table for the Visuals (AbstractVisual and its derivatives).
     * @param visual The associated visual
     * @param visual.visual The associated visual
     * @param visual.colors The colorMap
     * @param colors deprecated (since 2020.1 (3.1)). array type deprecated.The colorMap
     */
    constructor(visual: AbstractVisual | object | { visual?: AbstractVisual; colors?: string[]; } , colors?: VisualColorMap | string[]);
    /**
     * Gets the colorMap as an array of color strings.
     */
    getColors(): string[];
    /**
     * Sets the colorMap colors.
     * @param colors The colorMap colors in string format.
     */
    setColors(colors: string[]): this;
    /**
     * Gets the size of the colorMap.
     */
    getSize(): number;
    /**
     * Returns the Color for the supplied index.
     * @param index Index for the requested color.
     */
    getColorFor(index: number): string;
    /**
     * Sets the Color object for the supplied colorMap index.
     * This is required for the Editor dialog boxes, and is not used by any of the visuals
     * to modify a supplied colorMap.
     * @param index Index into the colorMap.
     * @param color The new color for this index.
     */
    setColorFor(index: number, color: string): this;
    /**
     * Make and return a deep copy of this colorMap
     */
    clone(): VisualColorMap;
    /**
     * Rotates colors in the colorMap, in a positive direction.
     * Ie. index 0 -> index (delta). Can also handle negative delta values
     * @param nStart Start of range to rotate.
     * @param nEnd End (inclusive) of range to rotate.
     * @param delta The rotation value.
     */
    rotate(nStart: number, nEnd: number, delta: number): void;
    /**
     * Delete the colors in the range nStart->nEnd inclusive.
     * Not used by any of the Visuals classes - only used by the Editor classes.
     * @param start Start of range to delete
     * @param end End of range to delete
     */
    deleteColors(start: number, end: number): void;
    /**
     * Insert a new colour into the colorMap.
     * Not used by any of the Visuals classes - only used by the Editor classes.
     * Set nStart to Size to insert at the end of the colorMap
     * @param nStart Index to insert new colour at. The colour at this index will be copied.
     */
    insertColor(nStart: number): void;
    /**
     * Interpolate colors in the colorMap.
     * Not used by any of the Visuals classes - only used by the Editor classes.
     * @param nStart Start of range to interpolate (this color stays the same)
     * @param nEnd End of range to delete (this color stays the same)
     */
    interpolate(nStart: number, nEnd: number): void;
    /**
     * Gets the colorMap properties
     */
    getProperties(): {visual: AbstractVisual; colors: string[]} | any;
    /**
     * Sets the colorMap properties
     * @param props colorMap properties
     * @param props.visual The associated visual
     * @param props.colors The colorMap
     */
    setProperties(props: object | { visual?: AbstractVisual; colors?: string[]; } ): this;
}
