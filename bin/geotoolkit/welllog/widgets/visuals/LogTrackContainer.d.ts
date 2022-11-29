import {TrackContainer} from '../../TrackContainer';
import {TrackFactory} from '../../TrackFactory';
import {LogTrack} from '../../LogTrack';
import {DataBinding} from '../../../data/DataBinding';
import {DataBindingRegistry} from '../../../data/DataBindingRegistry';
import {DataSource} from '../../../data/DataSource';
import {AbstractDataTable} from '../../../data/AbstractDataTable';
import {RenderingContext} from '../../../renderer/RenderingContext';
import {CompositeNode} from '../../../scene/CompositeNode';
import {TrackType} from '../../TrackType';
import {FillStyle} from '../../../attributes/FillStyle';
import {LineStyle} from '../../../attributes/LineStyle';
import {Registry} from '../../../persistence/Registry';
import {LogHeaderContainer} from './LogHeaderContainer';
import {Rect} from '../../../util/Rect';
import {StateChanges} from '../../../scene/Node';

/**
 */
export class LogTrackContainer extends TrackContainer {
    /**
     * @param options track factory or properties object
     * @param options.trackfactory track factory
     * @param options.indent indent indent between tracks
     * @param options.tracks tracks
     */
    constructor(options?: TrackFactory | object | { trackfactory?: TrackFactory; indent?: number; tracks?: LogTrack[]; } );
    /**
     * Return the data binding
     */
    getDataBinding(): DataBinding | DataBindingRegistry;
    /**
     * Sets the data binding
     * @param binding data binding
     * @param silent silent mode to forbid
     */
    setDataBinding(binding: DataBinding | DataBindingRegistry, silent?: boolean): this;
    /**
     * Enumerate each visual in track container
     * @param callback callback method
     */
    forEachVisual(callback: Function): void;
    /**
     * Sets a new data model
     * @param data logdata
     */
    setData(data: DataSource | AbstractDataTable): this;
    /**
     * returns data source
     */
    getData(): DataSource | AbstractDataTable;
    /**
     * Update model limits
     */
    updateModelLimits(): void;
    /**
     * Render children
     * Overrides method from CompositeNode
     * @param context Rendering Context
     */
    protected renderChildren(context: RenderingContext): void;
    /**
     * Sets node filter for selection tool
     * @param nodeFilter filter that allows to filter selected nodes.
     */
    setNodeFilter(nodeFilter: Function): this;
    /**
     */
    dispose(): void;
    /**
     * Set indent between tracks
     * @param indent indent between tracks
     */
    setIndent(indent: number): this;
    /**
     * Return indent between tracks
     */
    getIndent(): number;
    /**
     * Add layer or layer collection to container
     * @param layer layer to be added
     */
    addLayer(layer: CompositeNode | CompositeNode[]): this;
    /**
     * Remove layer from container
     * @param layer layer to be removed
     */
    removeLayer(layer: CompositeNode): this;
    /**
     * Returns amount of layers
     */
    getLayersCount(): number;
    /**
     * Return layer at specified index
     * @param index index at which to get the layer for
     */
    getLayerAt(index: number): CompositeNode;
    /**
     * Insert a track
     * @example
     * ```javascript
     * import {TrackType} from '@int/geotoolkit/welllog/TrackType';
     * widget.addTrack(TrackType.LinearTrack);
     * ```
     * @example
     * ```javascript
     * // index tracks has 'INDEX_TRACK' css class defined, so it can be used to modify style with css:
     * widget.getTrackContainer().setCss('*[cssclass="INDEX_TRACK"] { visible: false; }');
     * // or differ it from another tracks:
     * if (track.getCssClass() === 'INDEX_TRACK') {
     *     // do smth
     * }
     * ```
     * @param index index
     * @param track track to insert
     * @param track.type track type to insert
     * @param track.name track name
     * @param track.width track width
     * @param track.gridlinestyle grid line style
     * @param track.background track background
     * @param track.border track border options
     * @param track.border.visible track border visibility
     * @param track.border.color track border line style
     * @param track.indextrack index track options
     * @param track.indextrack.style index track tick styles
     * @param track.indextrack.labelformat index track label format
     * @param track.logtrack log track options
     * @param track.logtrack.decadecount log track decade count
     * @param track.logtrack.reverse log track reverse direction
     */
    insertTrack(index: number, track: object | { type?: TrackType; name?: string; width?: number; gridlinestyle?: any; background?: object | string | FillStyle; border?: object | { visible?: boolean; color?: object | string | LineStyle; } ; indextrack?: object | { style?: any; labelformat?: any; } ; logtrack?: object | { decadecount?: number; reverse?: boolean; } ; }  | TrackType | LogTrack | LogTrack[]): LogTrack;
    /**
     * Add track to container
     * @deprecated since 2020.1 (3.1) use geotoolkit.welllog.widgets.visuals.LogTrackContainer.insertTrack() instead
     * @param track track to be added
     */
    addTrack(track: LogTrack): this;
    /**
     * Remove track from container
     * @param track track to be removed
     */
    removeTrack(track: LogTrack): this;
    /**
     * Returns amount of tracks
     */
    getTracksCount(): number;
    /**
     * Return track at specified index
     * @param index index at which to get the track for
     */
    getTrackAt(index: number): LogTrack;
    /**
     * return index of track
     * @param track index of track
     */
    getTrackIndex(track: LogTrack): number;
    /**
     * Set track width and layout remains tracks
     * @param width track width
     * @param track current track
     */
    setTrackWidth(width: number, track: LogTrack | any[]): this;
    /**
     * Returns the minimum width of a track
     * @param track track to get minimum width
     */
    getMinWidth(track?: LogTrack): number | string | any;
    /**
     * Returns the maximum width of a track
     * @param track track to get maximum width
     */
    getMaxWidth(track?: LogTrack): number | string | any;
    /**
     * Find nearest track at specified {number} x-coordinate
     * @param x x coordinate to get the track at
     * @param gap gap
     * @param tracks tracks
     */
    static getTrackAtPosition(x: number, gap: number, tracks?: LogTrack[]): any;
    /**
     * Load template
     * @param template template to be applied to the widget
     * @param registry registry
     * @param headerContainer header container
     */
    loadTemplate(template: string, registry?: Registry, headerContainer?: LogHeaderContainer): void;
    /**
     * Save template
     * @param registry registry
     */
    saveTemplate(registry?: Registry): string;
    /**
     * Find nearest track at specified {number} x-coordinate
     * @param x x coordinate to get the track at
     * @param gap gap
     */
    getTrackAtPosition(x: number, gap: number): any;
    /**
     * Update state.
     * @param regions optional array to return invalid rectangles
     * @param changes optional parameter to specify a reason of changes
     */
    updateState(regions?: Rect[], changes?: StateChanges | null): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {trackfactory: TrackFactory; indent: number; tracks: LogTrack[]} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.trackfactory track factory
     * @param properties.indent indent indent between tracks
     * @param properties.tracks tracks
     */
    setProperties(properties: object | { trackfactory?: TrackFactory; indent?: number; tracks?: LogTrack[]; } ): this;
    /**
     * Sets track factory
     * @param trackFactory track factory
     */
    setTrackFactory(trackFactory: TrackFactory): this;
    /**
     * Returns track factory
     */
    getTrackFactory(): TrackFactory;
}
