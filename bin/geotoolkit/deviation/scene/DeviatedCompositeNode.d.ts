import {CompositeNode} from '../../scene/CompositeNode';
import {ITransformable} from '../../util/ITransformable';
import {Trajectory2d} from '../Trajectory2d';
import {Transformer2d} from '../Transformer2d';
import {Rect} from '../../util/Rect';
import {Transformation} from '../../util/Transformation';
import {Range} from '../../util/Range';
import {DeviatedTransformation} from '../DeviatedTransformation';
import {Point} from '../../util/Point';
import {Polygon} from '../../util/Polygon';

/**
 * This class extends the composite node class to accept deviation (trajectory). This is only a container which allows to deviate a track when the trajectory is provided to it.<br>
 * The method setDeviation described below sets the trajectory along the path. 'trajectory' is the only mandatory parameter; 'transformer', 'trackWidth' and 'offset' are optional.<br>
 * The following code shows how to deviate a trackcontainer.
 * @example
 * ```javascript
 * import {Plot} from '@int/geotoolkit/plot/Plot';
 * import {Trajectory2d} from '@int/geotoolkit/deviation/Trajectory2d';
 * import {TrackContainer} from '@int/geotoolkit/welllog/TrackContainer';
 * import {DeviatedCompositeNode} from '@int/geotoolkit/deviation/scene/DeviatedCompositeNode';
 * // Create  plot
 * const plot = new Plot({...});
 * // Create TrackContainer and fill it in:
 * const trackContainer = new TrackContainer()
 *    .addChild([...]);
 * // Create trajectory:
 * const trajectory = new Trajectory2d(...);
 * // Deviation options:
 * const deviation = {
 *     'trajectory': trajectory,
 *     'trackWidth': deviatedTrackWidth,
 *     'offset': deviatedTrackOffset
 * };
 * // Create deviated node, set the options:
 * const deviatedNode = new DeviatedCompositeNode()
 *     .setDeviation(deviation);
 * // Deviate the track container:
 * deviatedNode.addChild(trackContainer);
 * // Set the deviated node as a root one:
 * plot.setRoot(deviatedNode);
 * ```
 */
export class DeviatedCompositeNode extends CompositeNode implements ITransformable {
    /**
     * This class extends the composite node class to accept deviation (trajectory). This is only a container which allows to deviate a track when the trajectory is provided to it.<br>
     * The method setDeviation described below sets the trajectory along the path. 'trajectory' is the only mandatory parameter; 'transformer', 'trackWidth' and 'offset' are optional.<br>
     * The following code shows how to deviate a trackcontainer.
     * @param options 
     */
    constructor(options?: object);
    /**
     * Adds event listener
     * @param eventName name of the event
     * @param listener event listener
     */
    addListener(eventName: string, listener: Function): this;
    /**
     * Removes event listener
     * @param eventName event name
     * @param listener event listener
     */
    removeListener(eventName: string, listener: Function): this;
    /**
     */
    protected onDeviationChanged(): void;
    /**
     * Sets deviation options. Fires 'onDeviationChanged' event.
     * @param options deviation options
     * @param options.trajectory trajectory along the path
     * @param options.transformer transformer to be used
     * @param options.trackWidth track width. if trackWidthStrategy
     * is specified then it calculates width in pixels using provided strategy
     * @param options.offset offset in the same unit as traceWidth
     * to the trajectory segment
     * @param options.clip flag to enable clipping
     */
    setDeviation(options: object | { trajectory: Trajectory2d; transformer?: Transformer2d; trackWidth?: number; offset?: number; clip?: boolean; }  | null): this;
    /**
     * Gets deviation options (see "setDeviation" method for options description).
     */
    getDeviation(): any;
    /**
     * Returns shallow copy of node
     */
    shallowClone(): this;
    /**
     * Gets actual (there: non-deviated) model limits
     */
    getModelLimits(): Rect | null;
    /**
     * Gets the node's bounds if set; trajectory limits otherwise
     */
    getBounds(): Rect;
    /**
     * Sets bounds of the node in the parent coordinates
     * @param bounds bound of the node in the parent coordinates
     */
    setBounds(bounds: Rect | object): this;
    /**
     * Gets trajectory limits if deviation (trajectory) is set; "null" otherwise
     */
    getTrajectoryLimits(): Rect | null;
    /**
     * Transformation of inner contents (i.e. trajectory limits) to bounds
     */
    getContentsTransform(): Transformation;
    /**
     * Returns the bounding box of the area in the model space.
     * @param tr The transformation from model to device space.
     * if transformation is not passed then scene transformation is used
     */
    getBoundingBox(tr?: Transformation): Rect;
    /**
     * Computes the deviated node's depth range corresponding to its parent's rect area (if any)
     * @param parentRect Rect for which to compute the depth
     * @param outRange optional parameter used to return range
     */
    findDepthRange(parentRect: Rect, outRange: Range | null): Range | null;
    /**
     * Gets underlying deviated transformation
     */
    getDeviatedTransformation(): DeviatedTransformation | null;
    /**
     * Sets webgl rendering
     * @experimental
     * @param webGLEnabled true for webgl rendering
     */
    setWebGLRendering(webGLEnabled: boolean): this;
    /**
     * Gets webgl rendering
     * @experimental
     */
    getWebGLRendering(): boolean;
    /**
     * Transforms point from linear to target space
     * @param point point to transform
     */
    transform(point: Point): Point;
    /**
     * Transforms point from target to linear space
     * @param point point to transform
     */
    inverseTransform(point: Point): Point;
    /**
     * Gets node outline
     * @param tr transformation which will be applied to outline
     */
    getOutline(tr: Transformation): Polygon;
}
/**
 * DeviatedCompositeNode's Events enumerator
 */
export enum Events {
    /**
     * Event type fired when the deviation changes
     */
    DeviationChanged = 'onDeviationChanged'
}
