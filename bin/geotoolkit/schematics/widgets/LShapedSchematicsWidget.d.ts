import {AnnotatedWidget} from '../../widgets/AnnotatedWidget';
import {ISchematicsWidget} from './ISchematicsWidget';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {TextStyle} from '../../attributes/TextStyle';
import {LabelingStrategy} from '../labeling/LabelingStrategy';
import {ConnectorShape} from '../labeling/ConnectorShape';
import {ViewMode} from '../scene/WellBoreNode';
import {ScaleScrollStrategy} from '../../scene/ScaleScrollStrategy';
import {AnnotationLocation} from '../../layout/AnnotationLocation';
import {AnchorType} from '../../util/AnchorType';
import {SpaceStyle} from '../../attributes/SpaceStyle';
import {WellBoreData} from '../data/WellBoreData';
import {Rect} from '../../util/Rect';
import {Node} from '../../scene/Node';

/**
 * <p>
 * A L-shaped schematics widget overrides {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget} class
 * to work with {@link @int/geotoolkit/schematics/scene/LShapedWellBoreNode.LShapedWellBoreNode} as a data model with labeling capabilities
 * </p>
 * <p>
 * LShapedSchematicsWidget inherits from AnnotatedWidget, so it takes most of its functionality too.
 * The main way to configure and customize the widget is to use its setOptions() function
 * that provide a comprehensible way of changing the default look and feel of the widget.
 * <ul>
 * <li> setData() will pass through everything to the {@link @int/geotoolkit/schematics/scene/WellBoreNode.WellBoreNode}'s "setWellBoreData" for the internal shape.</li>
 * </ul>
 * </p>
 */
export class LShapedSchematicsWidget extends AnnotatedWidget implements ISchematicsWidget {
    /**
     * <p>
     * A L-shaped schematics widget overrides {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget} class
     * to work with {@link @int/geotoolkit/schematics/scene/LShapedWellBoreNode.LShapedWellBoreNode} as a data model with labeling capabilities
     * </p>
     * <p>
     * LShapedSchematicsWidget inherits from AnnotatedWidget, so it takes most of its functionality too.
     * The main way to configure and customize the widget is to use its setOptions() function
     * that provide a comprehensible way of changing the default look and feel of the widget.
     * <ul>
     * <li> setData() will pass through everything to the {@link @int/geotoolkit/schematics/scene/WellBoreNode.WellBoreNode}'s "setWellBoreData" for the internal shape.</li>
     * </ul>
     * </p>
     * @param options options
     * @param options.labeldevpoints dev points labels parameters
     * @param options.labeldevpoints.visible dev points visibility
     * @param options.labeldevpoints.gettext dev points labels text formatter
     * @param options.labeldevpoints.padding text padding
     * @param options.labeldevpoints.linestyle dev points linestyle
     * @param options.labeldevpoints.fillstyle dev points fillstyle
     * @param options.labeldevpoints.textstyle dev points textstyle
     * @param options.labeling labeling options
     * @param options.labeling.labelInfoProvider method to retrieve component node info
     * @param options.labeling.connectorShape connector shape
     * @param options.labelingStrategy labeling strategy
     * @param options.wellborenode wellbore node options
     * @param options.wellborenode.viewMode view mode
     * @param options.wellborenode.trackWidth track width
     * @param options.wellborenode.deviationDepth deviation depth value or object (if "null" then it's calculated based on the data)
     * @param options.wellborenode.deviationDepth.KOP KOP ("kick off point") value
     * @param options.wellborenode.deviationDepth.EOC EOC ("end of curve" or "landing point") value
     * @param options.wellborenode.LShapeAccuracy accuracy (bigger number means smoother L-shape)
     * @param options.scalescrollstrategy scale scroll strategy
     * @param options.skips skips options
     * @param options.skips.visible skips visibility
     * @param options.skips.linestyle skips linestyle
     * @param options.skips.thickness skips thickness
     * @param options.tooltip tooltip settings
     * @param options.tooltip.gettext get tooltip text function (default displays top-most component's toString info)
     * @param options.tooltip.divelement HTML div container element or it will be created with className cg-tooltip-container
     * @param options.legendalignmentarea legend alignment area.<br>
     * @param options.legend legend options
     * @param options.legend.alignment legend alignment
     * @param options.legend.linestyle legend line style
     * @param options.legend.fillstyle legend fill style
     * @param options.legend.padding paddings for each side of an legend
     * @param options.legend.padding.top top padding in pixels
     * @param options.legend.padding.bottom top padding  in pixels
     * @param options.legend.padding.right right padding  in pixels
     * @param options.legend.padding.left left padding  in pixels
     * @param options.data wellbore data
     * @param options.gap gap size value or object
     * @param options.gap.horizontal horizontal gap size value or object
     * @param options.gap.horizontal.left left gap size
     * @param options.gap.horizontal.right right gap size
     * @param options.gap.vertical vertical gap size value or object
     * @param options.gap.vertical.top top gap size
     * @param options.gap.vertical.bottom bottom gap size
     */
    constructor(options?: object | { labeldevpoints?: object | { visible?: boolean; gettext?: Function; padding?: number; linestyle?: LineStyle | string | any; fillstyle?: FillStyle | string | any; textstyle?: TextStyle | string | any; } ; labeling?: object | { labelInfoProvider?: Function; connectorShape?: ConnectorShape; } ; labelingStrategy?: LabelingStrategy; wellborenode?: object | { viewMode?: ViewMode; trackWidth?: number; deviationDepth?: number | object | { KOP?: number; EOC?: number; } ; LShapeAccuracy?: number; } ; scalescrollstrategy?: ScaleScrollStrategy; skips?: object | { visible?: boolean; linestyle?: LineStyle | string | any; thickness?: number; } ; tooltip?: object | { gettext?: Function; divelement?: HTMLElement; } ; legendalignmentarea?: AnnotationLocation; legend?: object | { alignment?: AnchorType; linestyle?: LineStyle | string | any; fillstyle?: FillStyle | string | any; padding?: object | { top?: number; bottom?: number; right?: number; left?: number; }  | SpaceStyle; } ; data?: any[] | WellBoreData; gap?: object | { horizontal?: object | { left?: number; right?: number; } ; vertical?: object | { top?: number; bottom?: number; } ; } ; } );
    /**
     * Gets well bore view mode
     */
    getViewMode(): ViewMode;
    /**
     * Sets well bore view mode
     * @param viewMode well bore view mode
     */
    setViewMode(viewMode: ViewMode): {modelLimitsDepths: any[]; boundsDepths: any[]} | object;
    /**
     * Gets {@link @int/geotoolkit/schematics/data/WellBoreData.WellBoreData} data instance
     */
    getData(): WellBoreData;
    /**
     * Sets data
     * @param data wellbore data to set
     */
    setData(data: WellBoreData | any[] | any): this;
    /**
     * Gets WellBoreWithLabels's model limits
     */
    getCenterModelLimits(): Rect | null;
    /**
     * Gets labeling strategy
     */
    getLabelingStrategy(): LabelingStrategy;
    /**
     * Sets labeling strategy
     * @param labelingStrategy labeling strategy
     */
    setLabelingStrategy(labelingStrategy: LabelingStrategy): this;
    /**
     * Updates layout(s)
     * @param targets not used (entire content gets layouted)
     */
    updateLayout(targets?: Node[]): this;
    /**
     * Sets bounds of the node in the parent coordinates
     * @param bounds bound of the node in the parent coordinates
     */
    setBounds(bounds: Rect | object): this;
    /**
     * Gets widget options (see "setOptions" API for the options format)
     */
    getOptions(): object | any;
    /**
     * Sets properties
     * @param properties properties
     * @param properties.labeldevpoints dev points labels parameters
     * @param properties.labeldevpoints.visible dev points visibility
     * @param properties.labeldevpoints.gettext dev points labels text formatter
     * @param properties.labeldevpoints.padding text padding
     * @param properties.labeldevpoints.linestyle dev points linestyle
     * @param properties.labeldevpoints.fillstyle dev points fillstyle
     * @param properties.labeldevpoints.textstyle dev points textstyle
     * @param properties.labeling labeling options
     * @param properties.labeling.labelInfoProvider method to retrieve component node info
     * @param properties.labeling.connectorShape connector shape
     * @param properties.labelingStrategy labeling strategy
     * @param properties.wellborenode wellbore node options
     * @param properties.wellborenode.viewMode view mode
     * @param properties.wellborenode.trackWidth track width
     * @param properties.wellborenode.deviationDepth deviation depth value or object (if "null" then it's calculated based on the data)
     * @param properties.wellborenode.deviationDepth.KOP KOP ("kick off point") value
     * @param properties.wellborenode.deviationDepth.EOC EOC ("end of curve" or "landing point") value
     * @param properties.wellborenode.LShapeAccuracy accuracy (bigger number means smoother L-shape)
     * @param properties.scalescrollstrategy scale scroll strategy
     * @param properties.skips skips options
     * @param properties.skips.visible skips visibility
     * @param properties.skips.linestyle skips linestyle
     * @param properties.skips.thickness skips thickness
     * @param properties.tooltip tooltip settings
     * @param properties.tooltip.gettext get tooltip text function (default displays top-most component's toString info)
     * @param properties.tooltip.divelement HTML div container element or it will be created with className cg-tooltip-container
     * @param properties.legendalignmentarea legend alignment area.<br>
     * @param properties.legend legend options
     * @param properties.legend.alignment legend alignment
     * @param properties.legend.linestyle legend line style
     * @param properties.legend.fillstyle legend fill style
     * @param properties.legend.padding paddings for each side of an legend
     * @param properties.legend.padding.top top padding in pixels
     * @param properties.legend.padding.bottom top padding  in pixels
     * @param properties.legend.padding.right right padding  in pixels
     * @param properties.legend.padding.left left padding  in pixels
     * @param properties.data wellbore data
     * @param properties.gap gap size value or object
     * @param properties.gap.horizontal horizontal gap size value or object
     * @param properties.gap.horizontal.left left gap size
     * @param properties.gap.horizontal.right right gap size
     * @param properties.gap.vertical vertical gap size value or object
     * @param properties.gap.vertical.top top gap size
     * @param properties.gap.vertical.bottom bottom gap size
     */
    setProperties(properties?: object | { labeldevpoints?: object | { visible?: boolean; gettext?: Function; padding?: number; linestyle?: LineStyle | string | any; fillstyle?: FillStyle | string | any; textstyle?: TextStyle | string | any; } ; labeling?: object | { labelInfoProvider?: Function; connectorShape?: ConnectorShape; } ; labelingStrategy?: LabelingStrategy; wellborenode?: object | { viewMode?: ViewMode; trackWidth?: number; deviationDepth?: number | object | { KOP?: number; EOC?: number; } ; LShapeAccuracy?: number; } ; scalescrollstrategy?: ScaleScrollStrategy; skips?: object | { visible?: boolean; linestyle?: LineStyle | string | any; thickness?: number; } ; tooltip?: object | { gettext?: Function; divelement?: HTMLElement; } ; legendalignmentarea?: AnnotationLocation; legend?: object | { alignment?: AnchorType; linestyle?: LineStyle | string | any; fillstyle?: FillStyle | string | any; padding?: object | { top?: number; bottom?: number; right?: number; left?: number; }  | SpaceStyle; } ; data?: any[] | WellBoreData; gap?: object | { horizontal?: object | { left?: number; right?: number; } ; vertical?: object | { top?: number; bottom?: number; } ; } ; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {labeldevpoints: {visible: boolean; gettext: Function; padding: number; linestyle: LineStyle | string | any; fillstyle: FillStyle | string | any; textstyle: TextStyle | string | any}; labeling: {labelInfoProvider: Function; connectorShape: ConnectorShape}; labelingStrategy: LabelingStrategy; wellborenode: {viewMode: ViewMode; trackWidth: number; deviationDepth: {KOP: number; EOC: number}; LShapeAccuracy: number}; scalescrollstrategy: ScaleScrollStrategy; skips: {visible: boolean; linestyle: LineStyle | string | any; thickness: number}; tooltip: {gettext: Function; divelement: HTMLElement}; legendalignmentarea: AnnotationLocation; legend: {alignment: AnchorType; linestyle: LineStyle | string | any; fillstyle: FillStyle | string | any; padding: {top: number; bottom: number; right: number; left: number}}; gap: {horizontal: {left: number; right: number}; vertical: {top: number; bottom: number}}} | any;
    /**
     * Sets options
     * @param options options
     * @param options.labeldevpoints dev points labels parameters
     * @param options.labeldevpoints.visible dev points visibility
     * @param options.labeldevpoints.gettext dev points labels text formatter
     * @param options.labeldevpoints.padding text padding
     * @param options.labeldevpoints.linestyle dev points linestyle
     * @param options.labeldevpoints.fillstyle dev points fillstyle
     * @param options.labeldevpoints.textstyle dev points textstyle
     * @param options.labeling labeling options
     * @param options.labeling.labelInfoProvider method to retrieve component node info
     * @param options.labeling.connectorShape connector shape
     * @param options.labelingStrategy labeling strategy
     * @param options.wellborenode wellbore node options
     * @param options.wellborenode.viewMode view mode
     * @param options.wellborenode.trackWidth track width
     * @param options.wellborenode.deviationDepth deviation depth value or object (if "null" then it's calculated based on the data)
     * @param options.wellborenode.deviationDepth.KOP KOP ("kick off point") value
     * @param options.wellborenode.deviationDepth.EOC EOC ("end of curve" or "landing point") value
     * @param options.wellborenode.LShapeAccuracy accuracy (bigger number means smoother L-shape)
     * @param options.scalescrollstrategy scale scroll strategy
     * @param options.skips skips options
     * @param options.skips.visible skips visibility
     * @param options.skips.linestyle skips linestyle
     * @param options.skips.thickness skips thickness
     * @param options.tooltip tooltip settings
     * @param options.tooltip.gettext get tooltip text function (default displays top-most component's toString info)
     * @param options.tooltip.divelement HTML div container element or it will be created with className cg-tooltip-container
     * @param options.legendalignmentarea legend alignment area.<br>
     * @param options.legend legend options
     * @param options.legend.alignment legend alignment
     * @param options.legend.linestyle legend line style
     * @param options.legend.fillstyle legend fill style
     * @param options.legend.padding paddings for each side of an legend
     * @param options.legend.padding.top top padding in pixels
     * @param options.legend.padding.bottom top padding  in pixels
     * @param options.legend.padding.right right padding  in pixels
     * @param options.legend.padding.left left padding  in pixels
     * @param options.gap gap size value or object
     * @param options.gap.horizontal horizontal gap size value or object
     * @param options.gap.horizontal.left left gap size
     * @param options.gap.horizontal.right right gap size
     * @param options.gap.vertical vertical gap size value or object
     * @param options.gap.vertical.top top gap size
     * @param options.gap.vertical.bottom bottom gap size
     */
    setOptions(options?: object | { labeldevpoints?: object | { visible?: boolean; gettext?: Function; padding?: number; linestyle?: LineStyle | string | any; fillstyle?: FillStyle | string | any; textstyle?: TextStyle | string | any; } ; labeling?: object | { labelInfoProvider?: Function; connectorShape?: ConnectorShape; } ; labelingStrategy?: LabelingStrategy; wellborenode?: object | { viewMode?: ViewMode; trackWidth?: number; deviationDepth?: number | object | { KOP?: number; EOC?: number; } ; LShapeAccuracy?: number; } ; scalescrollstrategy?: ScaleScrollStrategy; skips?: object | { visible?: boolean; linestyle?: LineStyle | string | any; thickness?: number; } ; tooltip?: object | { gettext?: Function; divelement?: HTMLElement; } ; legendalignmentarea?: AnnotationLocation; legend?: object | { alignment?: AnchorType; linestyle?: LineStyle | string | any; fillstyle?: FillStyle | string | any; padding?: object | { top?: number; bottom?: number; right?: number; left?: number; }  | SpaceStyle; } ; gap?: object | { horizontal?: object | { left?: number; right?: number; } ; vertical?: object | { top?: number; bottom?: number; } ; } ; } ): this;
    /**
     * Resets well bore to its original state
     */
    fitToBounds(): this;
    /**
     * Translates model
     * @param dx dx
     * @param dy dy
     */
    translateModel(dx: number, dy: number): this;
    /**
     * Scales active ('horizontal' or 'vertical') group
     * @param scaleX scaleX
     * @param scaleY scaleY
     * @param posX posX
     * @param posY posY
     */
    scaleModel(scaleX: number, scaleY: number, posX?: number, posY?: number): this;
}
