/**
 * An enum representing all the possible positions inside a gauge
 */
export enum Regions {
    /**
     * East position - exists in every gauge
     */
    East = 'east',
    /**
     * West position - exists in every gauge
     */
    West = 'west',
    /**
     * North position - exists in every gauge
     */
    North = 'north',
    /**
     * South position - exists in every gauge
     */
    South = 'south',
    /**
     * NorthWest position - exists in every gauge
     */
    NorthWest = 'northwest',
    /**
     * NorthEast position - exists in every gauge
     */
    NorthEast = 'northeast',
    /**
     * SouthEast position - exists in every gauge
     */
    SouthEast = 'southeast',
    /**
     * SouthWest position - exists in every gauge
     */
    SouthWest = 'southwest',
    /**
     * Center position - exists in every gauge
     */
    Center = 'center',
    /**
     * InnerSouth position - Exists in Circular gauges and Numeric gauges
     */
    InnerSouth = 'innersouth',
    /**
     * InnerNorth position - Exists in Circular gauges and Numeric gauges
     */
    InnerNorth = 'innernorth',
    /**
     * InnerNorth position - Exists in Circular gauges and Numeric gauges
     */
    InnerCenter = 'innercenter',
    /**
     * InnerCenter position - Exists in Circular gauges
     */
    InnerEast = 'innereast',
    /**
     * InnerCenter position - Exists in Circular gauges
     */
    InnerWest = 'innerwest',
    /**
     * The region which is a square containing the circle of the axis
     */
    CircleRegion = 'circleregion'
}
