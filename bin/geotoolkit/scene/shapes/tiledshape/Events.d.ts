/**
 * Tile shape events
 */
export enum Events {
    /**
     * This event is fired when tile begins loading
     */
    TileLoading = 'TileLoading',
    /**
     * This event is fired when tile is loaded
     */
    TileLoaded = 'TileLoaded',
    /**
     * This event is fired when tile is cancelled
     */
    TileCancelled = 'TileCancelled',
    /**
     * This event is fired when tile begins rendering
     */
    TileRendering = 'TileRendering',
    /**
     * This event is fired when tile is rendered
     */
    TileRendered = 'TileRendered',
    /**
     * This event is fired when first tile begins loading
     */
    FirstTileLoading = 'FirstTileLoading',
    /**
     * This event is fired when last tile is rendered
     */
    LastTileRendered = 'LastTileRendered'
}
