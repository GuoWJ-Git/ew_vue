/**
 * Direction positions for geotoolkit.controls.tools.Measure tool to determine where to put direction symbol (for distance measuring only)
 */
export enum MeasureDirection {
    /**
     * Don't show measuring direction
     */
    None = 0,
    /**
     * Draw direction symbol at the start of each path
     */
    Start = 1,
    /**
     * Draw direction symbol in the middle of each path
     */
    Middle = 2,
    /**
     * Draw direction symbol at the end  of each path
     */
    End = 4
}
