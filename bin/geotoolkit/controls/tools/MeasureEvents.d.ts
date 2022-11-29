/**
 * Events fired by geotoolkit.controls.tools.Measure tool
 */
export enum MeasureEvents {
    /**
     * Distance measured with polyline has changed
     */
    DistanceChanged = 'DistanceChanged',
    /**
     * Area measured with polygon has changed
     */
    AreaChanged = 'AreaChanged',
    /**
     * Measures defined by current mouse position were changed
     */
    PositionChanged = 'PositionChanged'
}
