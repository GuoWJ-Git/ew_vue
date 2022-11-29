/**
 * Utility class related to geotoolkit3d.scene.well.logarray.LogArray
 */
export class LogArrayUtil {
    /**
     * Utility class related to geotoolkit3d.scene.well.logarray.LogArray
     */
    constructor();
}
/**
 * Enum to configure the LogArray sector 0 location.<br>
 * <br>
 * This enum provides several reference mechanism to determine where the sector 0 should be.<br>
 * For example it could be the sector pointing upward, or the sector pointing toward the North.<br>
 */
export enum ReferenceMode {
    /**
     * This reference mode switches between Up or North depending on the inclination of the path.<br>
If the current section of the path has an inclination greater than the given angle, then Up will be used.<br>
<br>
As this check is done per 'section' of the LogArray, a 'twist' may appear on the resulting cylinder when the switch between Up/North reference occurs.<br>
<br>
This mode accepts a parameter to define the inclination angle threshold (in radians), the default value is 0.1745 (10 degrees).<br>
The angle is 0 for a vertical section and PI/2 for an horizontal section.<br>
<br>
To use a custom angle of 60 degrees for example, do geotoolkit3d.util.well.logarray.LogArrayUtil.ReferenceMode.UpNorth(1.0472)
     */
    UpNorth = 0,
    /**
     * Use North as reference for sector 0.<br>
This is not suitable for horizontal trajectories pointing north.
     */
    North = 1,
    /**
     * Use Up as reference for sector 0.<br>
This is not suitable for vertical trajectories.
     */
    Up = 2
}
