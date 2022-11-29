/**
 * Multilateral well data combines an array of wells into one object.
 */
export class MultiLateralWellData {
    /**
     * Multilateral well data combines an array of wells into one object.
     * @param options The object of wells data
     * @param options.data The array of wells
     */
    constructor(options: object | { data: object[]; } );
    /**
     * Returns the well data as an array
     */
    getWellArray(): {x: object[]; y: number[]; z: number[]; values: number[]; tops: number[]; bots: number[]; num: number} | object;
    /**
     * Returns the well data's options
     */
    getOptions(): object[] | any;
    /**
     * Add a well into existing well object
     * @param well The new well object
     * @param well.x The well x coordinate array
     * @param well.y The well y coordinate array
     * @param well.z The elevation of the well
     * @param well.values The well colors
     */
    addWell(well: object | { x: number[]; y: number[]; z: number[]; values?: number[]; } ): this;
    /**
     * Get n-th well
     * @param index The index of well
     */
    getWell(index: number): object;
    /**
     * Remove n-th well from current wells
     * @param index The index of well
     */
    removeWell(index: number): this;
}
