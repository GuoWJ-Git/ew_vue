/**
 * Feature sources events.
 */
export enum Events {
    /**
     * Feature added (Vector source only)
     */
    FeatureAdded = 'FeatureAdded',
    /**
     * Feature removed (Vector source only)
     */
    FeatureRemoved = 'FeatureRemoved',
    /**
     * All features cleared (Vector source only)
     */
    FeaturesCleared = 'FeaturesCleared',
    /**
     * Image Loaded (Image source only)
     */
    ImageLoaded = 'ImageLoaded',
    /**
     * Image Cleared (Image source only)
     */
    ImageCleared = 'ImageCleared',
    /**
     * Tiles Updated (Tile source only)
     */
    TilesUpdated = 'TilesUpdated',
    /**
     * Info Updated
     */
    InfoUpdated = 'InfoUpdated'
}
