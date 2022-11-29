import {LogAbstractVisual} from '../../LogAbstractVisual';
import {LogTrack} from '../../LogTrack';
import {AbstractTool} from '../../../controls/tools/AbstractTool';
import {CompositeNode} from '../../../scene/CompositeNode';
import {FillStyle} from '../../../attributes/FillStyle';
import {LineStyle} from '../../../attributes/LineStyle';

/**
 * filterVisualsCallback definition
 */
export type visualsFilterCallback = (visuals: LogAbstractVisual[], track: LogTrack) => LogAbstractVisual[] | any;
/**
 * Creates tool to compare curves and tops between tracks
 * <br>
 * <h5>Events {@link @int/geotoolkit/welllog/widgets/tools/GhostTool.Events}</h5>
 * <table class="params">
 *     <thead>
 *          <tr>
 *              <th>Event</th><th>Arguments</th><th>Description</th>
 *          </tr>
 *      </thead>
 *      <tbody>
 *          <tr>
 *              <td>Selected</td>
 *              <td>{@link @int/geotoolkit/welllog/widgets/tools/GhostToolEventArgs.GhostToolEventArgs}</td>
 *              <td>This Event is fired when the Ghost Tool selection in track occurs.</td>
 *          </tr>
 *      <tbody>
 *  </table>
 *  <br>
 * @example
 * ```javascript
 * // To provide visuals for this selection
 * import {Events as GhostToolEvents} from '@int/geotoolkit/welllog/widgets/tools/GhostTool';
 * this.ghost.addListener(GhostToolEvents.Selected, (sender, evt) => evt.setSelection([curve]));
 * ```
 */
export class GhostTool extends AbstractTool {
    /**
     * Creates tool to compare curves and tops between tracks
     * <br>
     * <h5>Events {@link @int/geotoolkit/welllog/widgets/tools/GhostTool.Events}</h5>
     * <table class="params">
     *     <thead>
     *          <tr>
     *              <th>Event</th><th>Arguments</th><th>Description</th>
     *          </tr>
     *      </thead>
     *      <tbody>
     *          <tr>
     *              <td>Selected</td>
     *              <td>{@link @int/geotoolkit/welllog/widgets/tools/GhostToolEventArgs.GhostToolEventArgs}</td>
     *              <td>This Event is fired when the Ghost Tool selection in track occurs.</td>
     *          </tr>
     *      <tbody>
     *  </table>
     *  <br>
     * @param manipulatorLayer layer for holding temporary shapes
     * @param options options for box
     * @param options.ghost options for ghost
     * @param options.ghost.fillstyle options for active ghost fill style
     * @param options.ghost.linestyle options for ghost line style
     * @param options.rubberband options for rubber band
     * @param options.rubberband.fillstyle options for active rubber band fill style
     * @param options.rubberband.linestyle options for rubber band line style
     * @param options.highlight options for highlighting the track where the tool will snap
     * @param options.highlight.enable enable highlighting of the snap track (note: the "snaptotrack" option must also be enabled)
     * @param options.highlight.fillstyle options for track highlighting fill style
     * @param options.highlight.linestyle options for track highlighting line style
     * @param options.snaptotrack snap to track
     * @param options.shadow shadow to show original selection location
     */
    constructor(manipulatorLayer: CompositeNode, options?: object | { ghost?: object | { fillstyle?: object | FillStyle; linestyle?: object | LineStyle; } ; rubberband?: object | { fillstyle?: object | FillStyle; linestyle?: object | LineStyle; } ; highlight?: object | { enable?: boolean; fillstyle?: object | FillStyle; linestyle?: object | LineStyle; } ; snaptotrack?: boolean; shadow?: boolean; } );
    /**
     * Return true if the representation is flipped vertically
     */
    isVerticalFlip(): boolean;
    /**
     * Set vertical flip of the representation
     * @param flip flag to set the vertical flip of the representation
     */
    setVerticalFlip(flip: boolean): this;
    /**
     * Return true if the representation is flipped horizontally
     */
    isHorizontalFlip(): boolean;
    /**
     * Set horizontal flip of the representation
     * @param enable enable flip
     */
    setHorizontalFlip(enable: boolean): this;
    /**
     * Set visuals filter callback
     * @param callback visuals filter callback
     */
    setVisualsFilter(callback: visualsFilterCallback | boolean | any): this;
    /**
     * Shift ghost track if it is created
     * @param deltaX delta in pixels in horizontal direction
     * @param deltaY delta in pixels in vertical direction
     */
    shiftGhost(deltaX: number, deltaY: number): void;
    /**
     * Returns active track to apply selection
     */
    getActiveTrack(): LogTrack | null;
}
/**
 * GhostTool Events
 */
export enum Events {
    /**
     * Visual Selected
     */
    Selected = 'selected'
}
