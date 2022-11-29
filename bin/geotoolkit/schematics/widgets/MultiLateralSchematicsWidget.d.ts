import {AnnotatedWidget} from '../../widgets/AnnotatedWidget';
import {ISchematicsWidget} from './ISchematicsWidget';
import {TickPosition, LabelPosition} from '../../axis/TickInfo';
import {ScaleScrollStrategy} from '../../scene/ScaleScrollStrategy';
import {ScalesRatioMode} from '../scene/MultiLateralWellBoreNode';
import {WellBoreData} from '../data/WellBoreData';
import {ViewMode} from '../scene/WellBoreNode';
import {Rect} from '../../util/Rect';
import {Node} from '../../scene/Node';
import {LabelingStrategy} from '../labeling/LabelingStrategy';

/**
 * <p>
 * A schematics widget overrides {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget} class
 * to work with {@link @int/geotoolkit/schematics/scene/MultiLateralWellBoreNode.MultiLateralWellBoreNode} as a data model
 * </p>
 * <p>
 * MultiLateralSchematicsWidget inherits from AnnotatedWidget, so it takes most of its functionality too.
 * The main way to configure and customize the widget is to use its setOptions() function
 * that provide a comprehensible way of changing the default look and feel of the widget.
 * <ul>
 * <li> setData() will pass through everything to the {@link @int/geotoolkit/schematics/scene/WellBoreNode.WellBoreNode}'s "setWellBoreData" for the internal shape.</li>
 * </ul>
 * </p>
 * @example
 * ```javascript
 * import {MultiLateralSchematicsWidget} from '@int/geotoolkit/schematics/widgets/MultiLateralSchematicsWidget';
 * // Initialize the data
 * // ...
 * // Create the widget using the data
 * const widget = new MultiLateralSchematicsWidget({...});
 * ```
 */
export class MultiLateralSchematicsWidget extends AnnotatedWidget implements ISchematicsWidget {
    /**
     * <p>
     * A schematics widget overrides {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget} class
     * to work with {@link @int/geotoolkit/schematics/scene/MultiLateralWellBoreNode.MultiLateralWellBoreNode} as a data model
     * </p>
     * <p>
     * MultiLateralSchematicsWidget inherits from AnnotatedWidget, so it takes most of its functionality too.
     * The main way to configure and customize the widget is to use its setOptions() function
     * that provide a comprehensible way of changing the default look and feel of the widget.
     * <ul>
     * <li> setData() will pass through everything to the {@link @int/geotoolkit/schematics/scene/WellBoreNode.WellBoreNode}'s "setWellBoreData" for the internal shape.</li>
     * </ul>
     * </p>
     * @param options options
     * @param options.gap gap size value or object
     * @param options.gap.horizontal horizontal gap size value or object
     * @param options.gap.horizontal.left left gap size
     * @param options.gap.horizontal.right right gap size
     * @param options.gap.vertical vertical gap size value or object
     * @param options.gap.vertical.top top gap size
     * @param options.gap.vertical.bottom bottom gap size
     * @param options.annotationssizes annotations sizes section
     * @param options.annotationssizes.north north annotation (widget title) size
     * @param options.annotationssizes.west west annotation (axis area) size
     * @param options.annotationssizes.south south annotation (axis area) size
     * @param options.annotationssizes.east east annotation (axis area) size
     * @param options.west west annotation configuration
     * @param options.west.axis west axis configuration
     * @param options.west.axis.tickposition west axis tick position
     * @param options.west.axis.labelposition west axis label position
     * @param options.south west annotation configuration
     * @param options.south.axis west axis configuration
     * @param options.south.axis.tickposition west axis tick position
     * @param options.south.axis.labelposition west axis label position
     * @param options.wellborenode wellbore node options see {@link @int/geotoolkit/schematics/scene/WellBoreNode.WellBoreNode#setProperties}
     * @param options.scalescrollstrategy scale scroll strategy\
     * @param options.tooltip tooltip settings
     * @param options.tooltip.gettext get tooltip text function (default displays top-most component's toString info)
     * @param options.tooltip.divelement HTML div container element or it will be created with className cg-tooltip-container
     * @param options.scalesratiomode Y-to-X scales ratio mode
     * @param options.scalesratio Y-to-X scales ratio used for scalesratiomode=ScalesRatioMode.Keep only
     * @param options.data data
     */
    constructor(options?: object | { gap?: number | object | { horizontal?: number | object | { left?: number; right?: number; } ; vertical?: number | object | { top?: number; bottom?: number; } ; } ; annotationssizes?: object | { north?: number; west?: number; south?: number; east?: number; } ; west?: object | { axis?: object | { tickposition?: TickPosition; labelposition?: LabelPosition; } ; } ; south?: object | { axis?: object | { tickposition?: TickPosition; labelposition?: LabelPosition; } ; } ; wellborenode?: any; scalescrollstrategy?: ScaleScrollStrategy; tooltip?: object | { gettext?: Function; divelement?: HTMLElement; } ; scalesratiomode?: ScalesRatioMode; scalesratio?: number; data?: any[] | WellBoreData; } );
    /**
     * Gets well bore view mode (returns geotoolkit.schematics.scene.WellBoreNode.ViewMode.Regular always)
     */
    getViewMode(): ViewMode;
    /**
     * Empty implementation
     * @param viewMode well bore view mode
     */
    setViewMode(viewMode: ViewMode): {modelLimitsDepths: any[]; boundsDepths: any[]} | object;
    /**
     * Gets WellBoreNode's model limits
     */
    getCenterModelLimits(): Rect | null;
    /**
     * Sets data
     * @param data wellbore data to set
     */
    setData(data: WellBoreData | any[] | any): this;
    /**
     * Gets widget options (see "setOptions" API for the options format)
     */
    getOptions(): object | any;
    /**
     * Sets options
     * @param options widget options see {@link @int/geotoolkit/schematics/widgets/MultiLateralSchematicsWidget.MultiLateralSchematicsWidget#setProperties}
     */
    setOptions(options: object): this;
    /**
     * Updates layout(s)
     * @param targets not used (entire content gets layouted)
     */
    updateLayout(targets?: Node[]): this;
    /**
     * Returns all the properties pertaining to this object
     */
    getProperties(): {gap: {horizontal: {left: number; right: number}; vertical: {top: number; bottom: number}}; annotationssizes: {north: number; west: number; south: number; east: number}; west: {axis: {tickposition: TickPosition; labelposition: LabelPosition}}; south: {axis: {tickposition: TickPosition; labelposition: LabelPosition}}; wellborenode: any; scalescrollstrategy: ScaleScrollStrategy; scalesratiomode: ScalesRatioMode; scalesratio: number; data: any[] | WellBoreData} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties properties
     * @param properties.gap gap size value or object
     * @param properties.gap.horizontal horizontal gap size value or object
     * @param properties.gap.horizontal.left left gap size
     * @param properties.gap.horizontal.right right gap size
     * @param properties.gap.vertical vertical gap size value or object
     * @param properties.gap.vertical.top top gap size
     * @param properties.gap.vertical.bottom bottom gap size
     * @param properties.annotationssizes annotations sizes section
     * @param properties.annotationssizes.north north annotation (widget title) size
     * @param properties.annotationssizes.west west annotation (axis area) size
     * @param properties.annotationssizes.south south annotation (axis area) size
     * @param properties.annotationssizes.east east annotation (axis area) size
     * @param properties.west west annotation configuration
     * @param properties.west.axis west axis configuration
     * @param properties.west.axis.tickposition west axis tick position
     * @param properties.west.axis.labelposition west axis label position
     * @param properties.south west annotation configuration
     * @param properties.south.axis west axis configuration
     * @param properties.south.axis.tickposition west axis tick position
     * @param properties.south.axis.labelposition west axis label position
     * @param properties.wellborenode wellbore node properties see {@link @int/geotoolkit/schematics/scene/WellBoreNode.WellBoreNode#setProperties}
     * @param properties.scalescrollstrategy scale scroll strategy\
     * @param properties.tooltip tooltip settings
     * @param properties.tooltip.gettext get tooltip text function (default displays top-most component's toString info)
     * @param properties.tooltip.divelement HTML div container element or it will be created with className cg-tooltip-container
     * @param properties.scalesratiomode Y-to-X scales ratio mode
     * @param properties.scalesratio Y-to-X scales ratio used for scalesratiomode=ScalesRatioMode.Keep only
     * @param properties.data data
     */
    setProperties(properties?: object | { gap?: number | object | { horizontal?: number | object | { left?: number; right?: number; } ; vertical?: number | object | { top?: number; bottom?: number; } ; } ; annotationssizes?: object | { north?: number; west?: number; south?: number; east?: number; } ; west?: object | { axis?: object | { tickposition?: TickPosition; labelposition?: LabelPosition; } ; } ; south?: object | { axis?: object | { tickposition?: TickPosition; labelposition?: LabelPosition; } ; } ; wellborenode?: any; scalescrollstrategy?: ScaleScrollStrategy; tooltip?: object | { gettext?: Function; divelement?: HTMLElement; } ; scalesratiomode?: ScalesRatioMode; scalesratio?: number; data?: any[] | WellBoreData; } ): this;
    /**
     * Gets labeling strategy (the widget currently does not support labeling)<br>
     * Returns "null"
     */
    getLabelingStrategy(): LabelingStrategy;
}
