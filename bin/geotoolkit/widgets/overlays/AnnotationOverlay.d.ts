import {AbstractOverlay} from './AbstractOverlay';
import {AnnotatedWidget} from '../AnnotatedWidget';
import {Layer} from '../../scene/Layer';
import {Group} from '../../scene/Group';
import {IAnnotation} from './IAnnotation';
import {Point} from '../../util/Point';
import {Node} from '../../scene/Node';
import {Dimension} from '../../util/Dimension';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {TextStyle} from '../../attributes/TextStyle';
import {Iterator} from '../../util/iterator';
import {Orientation} from '../../util/Orientation';

/**
 * Creates default implementation of the widget annotation overlay
 */
export class AnnotationOverlay extends AbstractOverlay {
    /**
     * Creates default implementation of the widget annotation overlay
     * @param widget widget to create overlay
     * @param options extra options
     * @param options.overlay Overlay layer can be specified instead of default layer
     * @param options.cancreate can create annotation
     * @param options.candelete can delete annotation
     * @param options.canedit can edit annotation
     * @param options.canmove can move annotation
     * @param options.annotationcontainer annotation container id
     * @param options.handles handles properties {@see geotoolkit.scene.shapes.RectangularShape.setProperties}
     * @param options.handles.anchor handles anchor properties
     * @param options.handles.topleft handles topleft properties
     * @param options.handles.topright handles topright properties
     * @param options.handles.bottomleft handles bottomleft properties
     * @param options.handles.bottomright handles bottomright properties
     * @param options.handles.top-left deprecated since 2021.1 (3.3), handles top-left properties
     * @param options.handles.top-right deprecated since 2021.1 (3.3), handles top-right properties
     * @param options.handles.bottom-left deprecated since 2021.1 (3.3), handles bottom-left properties
     * @param options.handles.bottom-right deprecated since 2021.1 (3.3), handles bottom-right properties
     */
    constructor(widget: AnnotatedWidget, options?: object | { overlay?: Layer; cancreate?: boolean; candelete?: boolean; canedit?: boolean; canmove?: boolean; annotationcontainer?: string; handles?: object | { anchor?: any; topleft?: any; topright?: any; bottomleft?: any; bottomright?: any; "top-left"?: any; "top-right"?: any; "bottom-left"?: any; "bottom-right"?: any; } ; } );
    /**
     * Disposes this node, once disposes a node should not be used anymore.<br>
     * Clear all listeners, and disconnect styles to avoid memory leaks.<br>
     * Also aggressively 'cleanup' this node by setting some of its members to null.
     */
    dispose(): void;
    /**
     */
    protected getModel(): Group;
    /**
     */
    protected onUpdateGeometry(): void;
    /**
     * @param state overlay state
     */
    protected onStateChanged(state: object): this;
    /**
     * Set options
     * @param options options
     * @param options.cancreate can create annotation
     * @param options.candelete can delete annotation
     * @param options.canedit can edit annotation
     * @param options.canmove can move annotation
     */
    setOptions(options: object | { cancreate?: boolean; candelete?: boolean; canedit?: boolean; canmove?: boolean; } ): this;
    /**
     * Return options
     */
    getOptions(): {cancreate: boolean; candelete: boolean; canedit: boolean; canmove: boolean} | any;
    /**
     * Add annotation
     * @param annotation annotation object
     * @param annotation.name annotation name
     * @param annotation.text annotation text
     * @param annotation.symbol base64 image
     * @param annotation.anchor anchor position in target coordinates
     * @param annotation.target node to specify anchor position
     * @param annotation.options extra options
     * @param annotation.options.connectorsize connector size
     * @param annotation.options.offset offset of text frame from anchor in device coordinates
     * @param annotation.options.frame annotation text dimension
     * @param annotation.options.linestyle line style
     * @param annotation.options.fillstyle fill style
     * @param annotation.options.textstyle text style
     */
    addAnnotation(annotation: object | { name?: string; text?: string; symbol?: string; anchor?: Point; target?: Node; options?: object | { connectorsize?: number; offset?: Point; frame?: Dimension; linestyle?: object | LineStyle; fillstyle?: object | FillStyle; textstyle?: object | TextStyle; } ; }  | IAnnotation): IAnnotation;
    /**
     * Clear annotations
     */
    clearAnnotations(): this;
    /**
     * Remove annotation
     * @param annotation annotation to be removed
     */
    removeAnnotation(annotation: IAnnotation): this;
    /**
     * Edit annotation, by default it starts embedded TextArea editor
     * @param annotation annotation to edit
     */
    editAnnotation(annotation: IAnnotation): this;
    /**
     * Scroll to annotation
     * @param annotation annotation
     */
    scrollToAnnotation(annotation: IAnnotation): this;
    /**
     * Return iterator by child nodes
     * @param filter a filter function. Returns all nodes if null
     */
    getAnnotations(filter?: Function): Iterator;
    /**
     * Return active annotation
     */
    getActiveAnnotation(): IAnnotation | null;
    /**
     * Set active annotation
     * @param annotation annotation
     */
    setActiveAnnotation(annotation: IAnnotation): this;
    /**
     * Set orientation
     * @param orientation overlay orientation
     */
    setOrientation(orientation: Orientation): this;
    /**
     * Register geometry extension
     * @param geometryName geometry name
     * @param extension geometry extension
     */
    static registerGeometry(geometryName: string, extension: Function): void;
    /**
     * Return known geometry
     * @param geometryName geometry name
     */
    static getGeometry(geometryName: string): Function;
}
/**
 * AnnotationOverlay Events
 */
export enum Events {
    /**
     * This Event is fired when the Annotation should be created
     */
    CreateAnnotation = 'CreateAnnotation',
    /**
     * This Event is fired when the Annotation should be removed
     */
    RemoveAnnotation = 'RemoveAnnotation',
    /**
     * This Event is fired when the Annotation should be edited
     */
    EditAnnotation = 'EditAnnotation',
    /**
     * This Event is fired when active annotation has to be changed
     */
    ChangeActiveAnnotation = 'ChangeActiveAnnotation'
}
