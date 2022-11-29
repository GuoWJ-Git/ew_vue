/**
 * Features query mode (the way to calculate requesting area) for the Vector sources
 */
export enum QueryMode {
    /**
     * Query all features with a single request
     */
    All = 'All',
    /**
     * Query features based on the visible bounding box
     */
    Bbox = 'Bbox',
    /**
     * Query features using 256x256px tiles
     */
    Tile = 'Tile',
    /**
     * Query features using grid cells
     */
    Grid = 'Grid'
}
