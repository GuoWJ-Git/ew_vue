import {CompositeNode} from '../scene/CompositeNode';
import {ILayout1D} from '../layout/ILayout1D';
import {AnchorType} from '../util/AnchorType';
import {LogMarker} from './LogMarker';
import {Iterator} from '../util/iterator';
import {Rect} from '../util/Rect';
import {RenderingContext} from '../renderer/RenderingContext';

/**
 * Creates custom marker visual using the overlapping markers and {@link @int/geotoolkit/layout/ILayout1D.ILayout1D}.
 */
export class MarkerSet extends CompositeNode {
    /**
     * Creates custom marker visual using the overlapping markers and {@link @int/geotoolkit/layout/ILayout1D.ILayout1D}.
     * @param options markerset options
     * @param options.layout markers layout
     * @param options.showoverlappedlabels show overlapped labels
     * @param options.visiblenamelabel visible name label
     * @param options.visibledepthlabel visible depth label
     * @param options.namelabelposition name label anchor
     * @param options.depthlabelposition depth label anchor
     * @param options.visiblenameborder visible name border
     * @param options.visibledepthborder visible depth border
     */
    constructor(options?: object | { layout?: ILayout1D; showoverlappedlabels?: boolean; visiblenamelabel?: boolean; visibledepthlabel?: boolean; namelabelposition?: AnchorType; depthlabelposition?: AnchorType; visiblenameborder?: boolean; visibledepthborder?: boolean; } );
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {layout: ILayout1D; showoverlappedlabels: boolean; visiblenamelabel: boolean; visibledepthlabel: boolean; namelabelposition: AnchorType; depthlabelposition: AnchorType; visiblenameborder: boolean; visibledepthborder: boolean} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.layout markers layout
     * @param properties.showoverlappedlabels show overlapped labels
     * @param properties.visiblenamelabel visible name label
     * @param properties.visibledepthlabel visible depth label
     * @param properties.namelabelposition name label anchor
     * @param properties.depthlabelposition depth label anchor
     * @param properties.visiblenameborder visible name border
     * @param properties.visibledepthborder visible depth border
     */
    setProperties(properties?: object | { layout?: ILayout1D; showoverlappedlabels?: boolean; visiblenamelabel?: boolean; visibledepthlabel?: boolean; namelabelposition?: AnchorType; depthlabelposition?: AnchorType; visiblenameborder?: boolean; visibledepthborder?: boolean; } ): this;
    /**
     * Specify border name visible or not.
     * @param visible border name visible or not.
     */
    setVisibleNameBorder(visible: boolean): this;
    /**
     * Return true if Name label border is visible. It is visible by default.
     */
    isVisibleNameBorder(): boolean;
    /**
     * Specify depth label border visible or not.
     * @param visible depth label border visible or not
     */
    setVisibleDepthBorder(visible: boolean): this;
    /**
     * Return true if depth label border is visible. It is visible by default.
     */
    isVisibleDepthBorder(): boolean;
    /**
     * Specify name label visible or not.
     * @param visible name label visible or not.
     */
    setVisibleNameLabel(visible: boolean): this;
    /**
     * Return true if name label is visible. It is visible by default.
     */
    isVisibleNameLabel(): boolean;
    /**
     * Specify depth label visible or not.
     * @param visible specifies if depth label visible or not
     */
    setVisibleDepthLabel(visible: boolean): this;
    /**
     * Return true if depth label is visible. It is visible by default.
     */
    isVisibleDepthLabel(): boolean;
    /**
     * Return name label position as an anchor point
     */
    getNameLabelPosition(): AnchorType;
    /**
     * Set label position
     * @param anchorPoint label position
     */
    setNameLabelPosition(anchorPoint: AnchorType): this;
    /**
     * Return depth label position as an anchor point
     */
    getDepthLabelPosition(): AnchorType;
    /**
     * Set depth label position
     * @param anchorPoint label position
     */
    setDepthLabelPosition(anchorPoint: AnchorType): this;
    /**
     * Remove marker or array of markers
     * @param marker marker(s) to remove
     */
    removeChild(marker: LogMarker | LogMarker[]): this;
    /**
     * Add marker or array of markers
     * @param marker marker(s) to add
     */
    addChild(marker: LogMarker | LogMarker[] | Iterator): this;
    /**
     * Returns parent model limits
     */
    getModelLimits(): Rect;
    /**
     * Returns parent visible model limits
     */
    getVisibleModelLimits(): Rect;
    /**
     * Verifies if object is within given context.
     * @param context Rendering Context
     */
    checkCollision(context: RenderingContext): boolean;
}
