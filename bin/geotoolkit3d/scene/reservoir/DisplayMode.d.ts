/**
 * Enum of Reservoir Skeleton Modes.<br>
 * <br>
 * The values of this enums can be used to determine the rendering mode of a reservoir.
 */
export class DisplayMode extends Array<boolean> {
    /**
     * Show everything: the mesh, the property (skeleton) and the horizons
     */
    static readonly Full: DisplayMode;
    /**
     * Show everything but the horizons
     */
    static readonly IgnoreHorizons: DisplayMode;
    /**
     * Show everything but the mesh
     */
    static readonly IgnoreMesh: DisplayMode;
    /**
     * Show everything but the grid property (skeleton)
     */
    static readonly IgnoreProperty: DisplayMode;
    /**
     * Show only the property (skeleton)
     */
    static readonly Property: DisplayMode;
    /**
     * Show only the mesh
     */
    static readonly Mesh: DisplayMode;
    /**
     * Show only the horizons
     */
    static readonly Horizons: DisplayMode;
    /**
     * Hide all
     */
    static readonly Nothing: DisplayMode;
}
