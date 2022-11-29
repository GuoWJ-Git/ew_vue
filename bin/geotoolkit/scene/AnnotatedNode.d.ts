import {Group} from './Group';
import {Rect} from '../util/Rect';
import {Node} from './Node';
import {Layout} from '../layout/Layout';
import {AnnotationLocation} from '../layout/AnnotationLocation';
import {Axis} from '../axis/Axis';
import {Orientation} from '../util/Orientation';
import {ScaleScrollStrategy} from './ScaleScrollStrategy';
import {Transformation} from '../util/Transformation';
import {TickGenerator} from '../axis/TickGenerator';
import {TextStyle} from '../attributes/TextStyle';

/**
 * Defines node with eight annotations (west, north, east, south, southeast, southwest, northeast, and northwest) and a center model
 * @example
 * ```javascript
 * import {AnnotatedNode} from '@int/geotoolkit/scene/AnnotatedNode';
 * import {Rect} from '@int/geotoolkit/util/Rect';
 * ...
 * const node = new AnnotatedNode({
 *    'model': model,
 *    'bounds': new Rect(clientArea),
 *    'north': [titleNorth, groupLegend],
 *    'west': [titleWest1, axisWest1, titleWest2, axisWest2],
 *    'east': [axisEast1, titleEast1, axisEast2, titleEast2]
 * });
 * ```
 * @example
 * ```javascript
 * import {Events} from '@int/geotoolkit/scene/AnnotatedNode';
 * // A handler that listens to the bounds and transformation change events
 * // can be attached to this node by using the following method:
 * annotationNode.on(Events.Updating, () => { ... });
 * ```
 */
export class AnnotatedNode extends Group {
    /**
     * Defines node with eight annotations (west, north, east, south, southeast, southwest, northeast, and northwest) and a center model
     * @param model properties
     * @param model.model the model to display
     * @param model.bounds the bounds to use
     * @param model.north the Array of geotoolkit.scene.Node to display on top of the model
     * @param model.south the Array of geotoolkit.scene.Node to display on bottom of the model
     * @param model.west the Array of geotoolkit.scene.Node to display on left of the model
     * @param model.east the Array of geotoolkit.scene.Node to display on right of the model
     * @param model.northwest the Array of geotoolkit.scene.Node to display on northwest corner of the model
     * @param model.northeast the Array of geotoolkit.scene.Node to display on northeast corner of the model
     * @param model.southwest the Array of geotoolkit.scene.Node to display on southwest corner of the model
     * @param model.southeast the Array of geotoolkit.scene.Node to display on southeast corner of the model
     * @param model.keepvisiblelimits keep visible model limits of the center part if size of the node is changed
     * @param model.isdatamodel is the model passed via first parameter the data model
     * @param model.annotationitemswrap wrap annotation items in constructor with a new group with zero to one limits
     * @param bounds the bounds to use
     * @param north the Array of geotoolkit.scene.Node to display on top of the model
     * @param south the Array of geotoolkit.scene.Node to display on bottom of the model
     * @param west the Array of geotoolkit.scene.Node to display on left of the model
     * @param east the Array of geotoolkit.scene.Node to display on right of the model
     * @param keepvisiblelimits keep visible model limits of the center part if size of the node is changed
     * @param isdatamodel is the model passed via first parameter the data model
     */
    constructor(model?: object | { model?: Group; bounds?: Rect; north?: Node[] | Node; south?: Node[] | Node; west?: Node[] | Node; east?: Node[] | Node; northwest?: Node[] | Node; northeast?: Node[] | Node; southwest?: Node[] | Node; southeast?: Node[] | Node; keepvisiblelimits?: boolean; isdatamodel?: boolean; annotationitemswrap?: boolean; } , bounds?: Rect, north?: Node[] | Node, south?: Node[] | Node, west?: Node[] | Node, east?: Node[] | Node, keepvisiblelimits?: boolean, isdatamodel?: boolean);
    /**
     * Sets layout, not supported in this class
     * @param layout layout
     */
    setLayout(layout: Layout): this;
    /**
     * get Annotation at given point
     * @param x x coordinate in parent domain coordinates
     * @param y y coordinate in parent domain coordinates
     */
    getAnnotationAt(x: number, y: number): Group;
    /**
     * get Annotation Location at given point
     * @param x x coordinate in parent domain coordinates
     * @param y y coordinate in parent domain coordinates
     */
    getAnnotationLocationAt(x: number, y: number): AnnotationLocation;
    /**
     * Gets center plot
     */
    getCenterPlot(): Group;
    /**
     * Gets annotation items wrap
     */
    getAnnotationItemsWrap(): boolean;
    /**
     * Sets annotation items wrap
     * @param annotationItemsWrap true if you want to wrap annotation items in constructor with a new group with zero to one limits
     */
    setAnnotationItemsWrap(annotationItemsWrap: boolean): this;
    /**
     * Gets annotation at specified location
     * @param location Enum of annotation locations used to specify direction to insert
     */
    getAnnotation(location: AnnotationLocation): Group | null;
    /**
     * Helper method to add group to the annotation and layout at specified location
     * @param item group to be inserted in the annotated node
     * @param location Enum of annotation locations used to specify direction to insert
     */
    addItem(item: Group, location: AnnotationLocation): this;
    /**
     * Helper method to insert group to the annotation and it layout at specified location
     * @param index index where to item to be inserted
     * @param item group to be inserted in the annotated node
     * @param location Enum of annotation locations used to specify direction to insert
     */
    insertItem(index: number, item: Group, location: AnnotationLocation): this;
    /**
     * Helper method to remove group from the annotation and it layout at specified location
     * @param item group to be inserted in the annotated node
     * @param location Enum of annotation locations used to specify direction to insert
     */
    removeItem(item: Group, location: AnnotationLocation): this;
    /**
     * Synchronizes object with a model
     * @param object object to connect to the central component
     * @param model source model
     * @param orientation model orientation
     * @param autoSize true if object and model share the same device size in the orientation, true by default if not specified
     */
    connect(object: Group | Axis, model?: Group, orientation?: Orientation, autoSize?: boolean): this;
    /**
     * Disconnect an object from its source model
     * @param object object to disconnect
     */
    disconnect(object: Group | Axis): this;
    /**
     * Gets data model
     */
    getModel(): Group;
    /**
     * Sets data model
     * @param model data model
     * @param keepvisiblelimits keep visible model limits of the center part
     * @param isdatamodel is the model passed the data model?
     */
    setModel(model: Group, keepvisiblelimits?: boolean, isdatamodel?: boolean): this;
    /**
     * Sets scale scroll strategy. <br>
     * <pre>
     * Parameter can be either:
     * (A) reference to {geotoolkit.scene.ScaleScrollStrategy} implementation
     * - or -
     * (B) a function with two parameters as follows:
     * {geotoolkit.scene.Group} data model
     * {geotoolkit.util.Transformation} input transformation to adjust
     * The function must return adjusted transformation instance.
     * </pre>
     * @param scaleScrollStrategy scaleScrollStrategy to set
     */
    setScaleScrollStrategy(scaleScrollStrategy: ScaleScrollStrategy | Function): this;
    /**
     * Gets ScaleScrollStrategy ("undefined" by default)
     */
    getScaleScrollStrategy(): ScaleScrollStrategy | Function;
    /**
     * Attempts to set local transformation for the model.
     * NOTE: the local transformation set may not be equal
     * to tranformation passed - it depends on current
     * ScaleScrollStrategy set on the node.
     * @param transformation transformation to set
     */
    setModelTransformation(transformation: Transformation): this;
    /**
     * Attempts to translate the model using specified "dx" and "dy" pixels.
     * @param dx in pixels
     * @param dy in pixels
     */
    translateModel(dx: number, dy: number): this;
    /**
     * Attempts to scale the model using specified x and y scale factors
     * relative to {posX, posY} provided.
     * NOTE: the local transformation set may not be equal
     * to transformation passed - it depends on current
     * ScaleScrollStrategy set on the node.
     * @param fX x scaling factor
     * @param fY y scaling factor
     * @param posX x position to scale from (in pxl)
     * @param posY y position to scale from (in pxl)
     */
    scaleModel(fX: number, fY: number, posX?: number, posY?: number): this;
    /**
     * Attempts to set model's visible limits to specified limits.
     * NOTE: the limits set may not be equal
     * to the limit passed - it depends on current
     * ScaleScrollStrategy set on the node.
     * @param newVisibleModelLimits limits to set
     * @param deviceBounds device bounds
     */
    setVisibleModelLimits(newVisibleModelLimits: Rect, deviceBounds?: Rect): this;
    /**
     * Updates underlying layout
     */
    updateLayout(): this;
    /**
     * Suspends layout update.
     */
    suspendUpdateLayout(): this;
    /**
     * Resumes layout update.
     */
    resumeUpdateLayout(): this;
    /**
     * Sets bounds of the node in its parent's coordinate system
     * @param bounds bound of the node to set
     */
    setBounds(bounds: Rect): this;
    /**
     * Update model limits and transform of all connected objects
     */
    updateConnectedObjects(): this;
    /**
     * This method creates an axis, put it in the
     * new group, add this group to annotated node and returns the axis and group
     * @param annotatednode node to add axis
     * @param options options
     * @param options.location location of the axis
     * @param options.tickgenerator optional tick generator (by default geotoolkit.axis.AdaptiveTickGenerator is used)
     * @param options.connect connect axis to the center model
     * @param options.autolabelrotation auto label rotation {@link @int/geotoolkit/axis/Axis.Axis.setAutoLabelRotation}
     * @param options.autolabelrotationangle auto label rotation {@link @int/geotoolkit/axis/Axis.Axis.setAutoLabelRotationAngle}
     * @param options.annotationitemswrap wrap annotation items in a new group. if it is false then a group is not created
     * @param options.title title properties {@link @int/geotoolkit/axis/Axis.Axis.setTitle}
     */
    static createAxis(annotatednode: AnnotatedNode, options?: object | { location?: AnnotationLocation; tickgenerator?: TickGenerator; connect?: boolean; autolabelrotation?: boolean; autolabelrotationangle?: number; annotationitemswrap?: boolean; title?: object | string; } ): any;
    /**
     * This method creates text title, put it in the
     * new group, add this group to annotated node
     * and return the title and group
     * @param annotatednode node to add title
     * @param options options
     * @param options.text text to display int eh title
     * @param options.location location of the axis
     * @param options.textstyle title text style
     */
    static createTitle(annotatednode: AnnotatedNode, options: object | { text?: string; location?: AnnotationLocation; textstyle?: object | TextStyle; } ): any;
}
/**
 * AnnotatedNode's Events enumerator
 */
export enum Events {
    /**
     * Event type fired when the shape is updating
     */
    Updating = 'updating'
}
