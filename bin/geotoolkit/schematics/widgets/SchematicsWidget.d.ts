import {AnnotatedWidget} from '../../widgets/AnnotatedWidget';
import {ISchematicsWidget} from './ISchematicsWidget';
import {LabelingStrategy} from '../labeling/LabelingStrategy';
import {AlignmentType} from '../labeling/AlignmentType';
import {LocationType} from '../labeling/LocationType';
import {Alignment} from '../../layout/BoxLayout';
import {TickPosition, LabelPosition} from '../../axis/TickInfo';
import {TextStyle} from '../../attributes/TextStyle';
import {Rect} from '../../util/Rect';
import {SpaceStyle} from '../../attributes/SpaceStyle';
import {TrackWidthStrategy} from '../../deviation/TrackWidthStrategy';
import {ScaleScrollStrategy} from '../../scene/ScaleScrollStrategy';
import {WellBoreData} from '../data/WellBoreData';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {BoundsCalculation} from '../utils/BoundsCalculation';
import {Mode} from '../labeling/Mode';
import {LabelShape} from '../labeling/LabelShape';
import {ConnectorShape} from '../labeling/ConnectorShape';
import {AnnotationLocation} from '../../layout/AnnotationLocation';
import {AnchorType} from '../../util/AnchorType';
import {AbstractLegendItemInfoProvider} from './legend/AbstractLegendItemInfoProvider';
import {RubberBandRenderMode} from '../../controls/tools/RubberBandRenderMode';
import {MultiDiameterSelectionMode} from './MultiDiameterSelectionMode';
import {ViewMode} from '../scene/WellBoreNode';
import {Point} from '../../util/Point';
import {ComponentNode} from '../scene/ComponentNode';
import {Node} from '../../scene/Node';

/**
 * <p>
 * A schematics widget overrides {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget} class
 * to work with {@link @int/geotoolkit/schematics/scene/WellBoreNode.WellBoreNode} as a data model with labeling capabilities
 * </p>
 * <p>
 * SchematicsWidget inherits from AnnotatedWidget, so it takes most of its functionality too.
 * The main way to configure and customize the widget is to use its setOptions() function
 * that provide a comprehensible way of changing the default look and feel of the widget.
 * <ul>
 * <li> setData() will pass through everything to the {@link @int/geotoolkit/schematics/scene/WellBoreNode.WellBoreNode}'s "setWellBoreData" for the internal shape.</li>
 * </ul>
 * </p>
 * @example
 * ```javascript
 * import {WellBoreData} from '@int/geotoolkit/schematics/data/WellBoreData';
 * import {SchematicsWidget} from '@int/geotoolkit/schematics/widgets/SchematicsWidget';
 * // Initialize the data
 * const wellBoreData = new WellBoreData();
 * wellBoreData.addComponents([...]);
 * // Create the widget using the data
 * const widget = new SchematicsWidget({'options': options, 'data': wellBoreData});
 * ```
 */
export class SchematicsWidget extends AnnotatedWidget implements ISchematicsWidget {
    /**
     * <p>
     * A schematics widget overrides {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget} class
     * to work with {@link @int/geotoolkit/schematics/scene/WellBoreNode.WellBoreNode} as a data model with labeling capabilities
     * </p>
     * <p>
     * SchematicsWidget inherits from AnnotatedWidget, so it takes most of its functionality too.
     * The main way to configure and customize the widget is to use its setOptions() function
     * that provide a comprehensible way of changing the default look and feel of the widget.
     * <ul>
     * <li> setData() will pass through everything to the {@link @int/geotoolkit/schematics/scene/WellBoreNode.WellBoreNode}'s "setWellBoreData" for the internal shape.</li>
     * </ul>
     * </p>
     * @remarks fires {@link @int/geotoolkit/schematics/scene/WellBoreNode~Events~ComponentsLoaded}
     * @param options options
     * @param options.labelingStrategy labeling strategy
     * @param options.labelingStrategy.defaultAlignment labels alignment type
     * @param options.labelingStrategy.defaultLocation labels default location area type
     * @param options.alignment wellbore horizontal alignment
     * @param options.gap gap size value or object
     * @param options.gap.horizontal horizontal gap size value or object
     * @param options.gap.horizontal.left left gap size
     * @param options.gap.horizontal.right right gap size
     * @param options.gap.vertical vertical gap size value or object
     * @param options.gap.vertical.top top gap size
     * @param options.gap.vertical.bottom bottom gap size
     * @param options.annotationssizes annotations sizes section
     * @param options.annotationssizes.west west annotation (axis area) size
     * @param options.annotationssizes.north north annotation (widget title) size
     * @param options.annotationssizes.south south annotation (axis area) size
     * @param options.annotationssizes.east east annotation (widget title) size
     * @param options.west west annotation configuration
     * @param options.west.axis west axis configuration
     * @param options.west.axis.tickposition west axis tick position
     * @param options.west.axis.labelposition west axis label position
     * @param options.west.axis.type depth axis type (NOTE: the 'type' parameter is ignored if 'tickgenerator' is set explicitely)
     * @param options.northwest northwest options
     * @param options.northwest.title title options
     * @param options.northwest.title.textstyle title textstyle
     * @param options.sealevel sea level options
     * @param options.sealevel.depth sea level display depth
     * @param options.sealevel.visible sea level visibility flag
     * @param options.wellborenode wellbore node options see {@link @int/geotoolkit/schematics/scene/WellBoreNode.WellBoreNode#setProperties}
     * @param options.wellborenode.automodellimitsmode wellbore node auto model limits mode flag
     * @param options.wellborenode.componentsvisibility components visibility options
     * @param options.wellborenode.componentsvisibility.visible array of visible component names or JSON object
     * @param options.wellborenode.componentsvisibility.visible.name array of visible component names
     * @param options.wellborenode.componentsvisibility.visible.id array of visible component ids
     * @param options.wellborenode.componentsvisibility.invisible array of invisible component names or JSON object
     * @param options.wellborenode.componentsvisibility.invisible.name array of visible component names
     * @param options.wellborenode.componentsvisibility.invisible.id array of visible component ids
     * @param options.wellborenode.geometrylimits wellbore node explicit geometry limits
     * @param options.labelshape label shape options
     * @param options.labelshape.padding paddings for each side of the DefaultLabelShape
     * @param options.labelshape.padding.top top padding in pixels
     * @param options.labelshape.padding.bottom top padding in pixels
     * @param options.labelshape.padding.right right padding in pixels
     * @param options.labelshape.padding.left left padding in pixels
     * @param options.trackWidthStrategy track width strategy
     * @param options.scalescrollstrategy 
     * @param options.data wellbore data
     * @param options.tooltip tooltip settings
     * @param options.tooltip.gettext get tooltip text function (default displays top-most component's toString info)
     * @param options.tooltip.divelement HTML div container element or it will be created with className cg-tooltip-container
     * @param options.highlight define highlight properties
     * @param options.highlight.label define label highlight properties
     * @param options.highlight.label.cssclass define label highlight class name (see cssstyle.html tutorial)
     * @param options.highlight.label.linestyle define line style attribute for label highlight
     * @param options.highlight.label.fillstyle define fill style attribute for label highlight
     * @param options.highlight.component define component highlight properties
     * @param options.highlight.component.boundscalculation implementation to define component's area to highlight
     * @param options.highlight.component.cssclass define component highlight class name (see cssstyle.html tutorial)
     * @param options.highlight.component.linestyle define line style attribute for component highlight
     * @param options.highlight.component.fillstyle define fill style attribute for component highlight
     * @param options.labeling labeling options
     * @param options.labeling.mode labeling mode
     * @param options.labeling.labelShape regular label shape
     * @param options.labeling.labelShapeHighlighted highlighted label shape
     * @param options.labeling.labelInfoProvider method to retrieve component node info
     * @param options.labeling.connectorShape connector shape
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
     * @param options.legend.visible legend visibility
     * @param options.legend.legenditem legend item options
     * @param options.legend.legenditem.gettext legend item text provider/method
     * @param options.legend.legenditem.textstyle legend item text style
     * @param options.legend.legenditem.symbol legend item symbol options (see geotoolkit.controls.shapes.SymbolLegendItem for more details)
     * @param options.tools tools tools optionssee {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget#setToolsOptions} for inherited options and {@link @int/geotoolkit/schematics/widgets/SchematicsWidget.SchematicsWidget#setToolsOptions} for specific ones)
     * @param options.tools.crosshair crosshair cursor options
     * @param options.tools.crosshair.enabled crosshair cursor enabled state
     * @param options.tools.crosshair.horizontal crosshair cursor's horizontal line style
     * @param options.tools.crosshair.vertical crosshair cursor's vertical line style
     * @param options.tools.rubberbandzoom rubber band zoom options
     * @param options.tools.rubberbandzoom.mode mode rubber band zoom rendering mode
     * @param options.tools.rubberbandzoom.enabled rubber band enabled state
     * @param options.tools.rubberbandzoom.linestyle rubber band linestyle
     * @param options.tools.rubberbandzoom.fillstyle rubber band fillstyle
     * @param options.multidiameterselectionmode multi diameter selection/highlight/tooltip mode
     */
    constructor(options?: object | { labelingStrategy?: LabelingStrategy | object | { defaultAlignment?: AlignmentType; defaultLocation?: LocationType; } ; alignment?: Alignment; gap?: number | object | { horizontal?: number | object | { left?: number; right?: number; } ; vertical?: number | object | { top?: number; bottom?: number; } ; } ; annotationssizes?: object | { west?: number; north?: number; south?: number; east?: number; } ; west?: object | { axis?: object | { tickposition?: TickPosition; labelposition?: LabelPosition; type?: DepthAxisType; } ; } ; northwest?: object | { title?: object | { textstyle?: any | TextStyle; } ; } ; sealevel?: object | { depth?: object; visible?: boolean; } ; wellborenode?: object | { automodellimitsmode?: boolean; componentsvisibility?: object | { visible?: any[] | object | { name?: string[]; id?: string[]; } ; invisible?: any[] | object | { name?: string[]; id?: string[]; } ; } ; geometrylimits?: Rect | null; } ; labelshape?: object | { padding?: object | { top?: number; bottom?: number; right?: number; left?: number; }  | SpaceStyle; } ; trackWidthStrategy?: TrackWidthStrategy; scalescrollstrategy?: ScaleScrollStrategy; data?: any | any[] | WellBoreData; tooltip?: object | { gettext?: Function; divelement?: HTMLElement; } ; highlight?: object | { label?: object | { cssclass?: string; linestyle?: LineStyle; fillstyle?: FillStyle; } ; component?: object | { boundscalculation?: BoundsCalculation; cssclass?: string; linestyle?: LineStyle; fillstyle?: FillStyle; } ; } ; labeling?: object | { mode?: Mode; labelShape?: LabelShape; labelShapeHighlighted?: LabelShape; labelInfoProvider?: Function; connectorShape?: ConnectorShape; } ; legendalignmentarea?: AnnotationLocation; legend?: object | { alignment?: AnchorType; linestyle?: LineStyle | any | string; fillstyle?: FillStyle | any | string; padding?: object | { top?: number; bottom?: number; right?: number; left?: number; }  | SpaceStyle; visible?: boolean; legenditem?: object | { gettext?: AbstractLegendItemInfoProvider | Function; textstyle?: TextStyle; symbol?: any; } ; } ; tools?: object | { crosshair?: object | { enabled?: boolean; horizontal?: string | any | LineStyle; vertical?: string | any | LineStyle; } ; rubberbandzoom?: object | { mode?: RubberBandRenderMode; enabled?: boolean; linestyle?: any | LineStyle; fillstyle?: any | FillStyle; } ; } ; multidiameterselectionmode?: MultiDiameterSelectionMode; } );
    /**
     * Transforms depth value between linear and MD model space.<br>
     * If not possible returns NaN
     * @param val depth value to transform
     * @param mdToLinear direction of transformation
     */
    transformDepth(val: number, mdToLinear?: boolean): number;
    /**
     * Gets well bore view mode
     */
    getViewMode(): ViewMode;
    /**
     * Sets well bore view mode
     * @param viewMode well bore view mode
     * @param options the mode options
     */
    setViewMode(viewMode: ViewMode, options?: object): {modelLimitsDepths: any[]; boundsDepths: any[]} | object;
    /**
     * Gets model coordinates (where y-ordinate is true MD-value) at given device ones
     * @param devicePoint source device point
     * @param modelPoint destination model point
     */
    getModelPoint(devicePoint: Point, modelPoint?: Point): Point;
    /**
     * Gets device coordinates at given model ones
     * @param modelPoint source model point (where y-ordinate is true MD-value)
     * @param devicePoint destination device point
     */
    getDevicePoint(modelPoint: Point, devicePoint?: Point): Point;
    /**
     * Gets labeling strategy
     */
    getLabelingStrategy(): LabelingStrategy;
    /**
     * Gets WellBoreNode's model limits
     */
    getCenterModelLimits(): Rect | null;
    /**
     * Sets tools options
     * @param options options (see {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget.setToolsOptions} for inherited options)
     * @param options.rubberbandzoom rubber band zoom options
     * @param options.rubberbandzoom.mode rubberbandzoom mode
     */
    setToolsOptions(options: any | object | { rubberbandzoom?: object | { mode?: RubberBandRenderMode; } ; } ): this;
    /**
     * Gets selected component nodes
     */
    getSelectedComponentNodes(): ComponentNode[];
    /**
     * Sets selected component nodes
     * @param selectedComponentNodes selected component nodes
     */
    setSelectedComponentNodes(selectedComponentNodes: ComponentNode[]): this;
    /**
     * Gets {@link @int/geotoolkit/schematics/data/WellBoreData.WellBoreData} data instance
     */
    getData(): WellBoreData | null;
    /**
     * Sets data
     * @param data wellbore data to set
     */
    setData(data: WellBoreData | any[] | null): this;
    /**
     * Gets widget options (see "setOptions" API for the options format)
     */
    getOptions(): object | any;
    /**
     * Sets widget options
     * @param options properties
     * @param options.labelingStrategy labeling strategy
     * @param options.labelingStrategy.defaultAlignment labels alignment type
     * @param options.labelingStrategy.defaultLocation labels default location area type
     * @param options.alignment wellbore horizontal alignment
     * @param options.gap gap size value or object
     * @param options.gap.horizontal horizontal gap size value or object
     * @param options.gap.horizontal.left left gap size
     * @param options.gap.horizontal.right right gap size
     * @param options.gap.vertical vertical gap size value or object
     * @param options.gap.vertical.top top gap size
     * @param options.gap.vertical.bottom bottom gap size
     * @param options.annotationssizes annotations sizes section
     * @param options.annotationssizes.west west annotation (axis area) size
     * @param options.annotationssizes.north north annotation (widget title) size
     * @param options.annotationssizes.south south annotation (axis area) size
     * @param options.annotationssizes.east east annotation (widget title) size
     * @param options.west west annotation configuration
     * @param options.west.axis west axis configuration
     * @param options.west.axis.tickposition west axis tick position
     * @param options.west.axis.labelposition west axis label position
     * @param options.west.axis.type depth axis type (NOTE: the 'type' parameter is ignored if 'tickgenerator' is set explicitely)
     * @param options.northwest northwest properties
     * @param options.northwest.title title properties
     * @param options.northwest.title.textstyle title textstyle
     * @param options.sealevel sea level properties
     * @param options.sealevel.depth sea level display depth
     * @param options.sealevel.visible sea level visibility flag
     * @param options.wellborenode wellbore node properties see {@link @int/geotoolkit/schematics/scene/WellBoreNode.WellBoreNode#setProperties}
     * @param options.wellborenode.automodellimitsmode wellbore node auto model limits mode flag
     * @param options.wellborenode.componentsvisibility components visibility properties
     * @param options.wellborenode.componentsvisibility.visible array of visible component names or JSON object
     * @param options.wellborenode.componentsvisibility.visible.name array of visible component names
     * @param options.wellborenode.componentsvisibility.visible.id array of visible component ids
     * @param options.wellborenode.componentsvisibility.invisible array of invisible component names or JSON object
     * @param options.wellborenode.componentsvisibility.invisible.name array of visible component names
     * @param options.wellborenode.componentsvisibility.invisible.id array of visible component ids
     * @param options.wellborenode.geometrylimits wellbore node explicit geometry limits
     * (default "null" value means data geometry limits to use)
     * @param options.labelshape label shape properties
     * @param options.labelshape.padding paddings for each side of the DefaultLabelShape
     * @param options.labelshape.padding.top top padding in pixels
     * @param options.labelshape.padding.bottom top padding in pixels
     * @param options.labelshape.padding.right right padding in pixels
     * @param options.labelshape.padding.left left padding in pixels
     * @param options.trackWidthStrategy track width strategy
     * @param options.scalescrollstrategy scalescrollstrategy
     * @param options.tooltip tooltip settings
     * @param options.tooltip.gettext get tooltip text function (default displays top-most component's toString info)
     * @param options.tooltip.divelement HTML div container element or it will be created with className cg-tooltip-container
     * @param options.highlight define highlight properties
     * @param options.highlight.label define label highlight properties
     * @param options.highlight.label.cssclass define label highlight class name (see cssstyle.html tutorial)
     * @param options.highlight.label.linestyle define line style attribute for label highlight
     * @param options.highlight.label.fillstyle define fill style attribute for label highlight
     * @param options.highlight.component define component highlight properties
     * @param options.highlight.component.boundscalculation implementation to define component's area to highlight
     * @param options.highlight.component.cssclass define component highlight class name (see cssstyle.html tutorial)
     * @param options.highlight.component.linestyle define line style attribute for component highlight
     * @param options.highlight.component.fillstyle define fill style attribute for component highlight
     * @param options.labeling labeling properties
     * @param options.labeling.mode labeling mode
     * @param options.labeling.labelShape regular label shape
     * @param options.labeling.labelShapeHighlighted highlighted label shape
     * @param options.labeling.labelInfoProvider method to retrieve component node info
     * @param options.labeling.connectorShape connector shape
     * @param options.legendalignmentarea legend alignment area.<br>
     * @param options.legend legend properties
     * @param options.legend.alignment legend alignment
     * @param options.legend.linestyle legend line style
     * @param options.legend.fillstyle legend fill style
     * @param options.legend.padding paddings for each side of an legend
     * @param options.legend.padding.top top padding in pixels
     * @param options.legend.padding.bottom top padding  in pixels
     * @param options.legend.padding.right right padding  in pixels
     * @param options.legend.padding.left left padding  in pixels
     * @param options.legend.visible legend visibility
     * @param options.legend.legenditem legend item properties
     * @param options.legend.legenditem.gettext legend item text provider/method
     * @param options.legend.legenditem.textstyle legend item text style
     * @param options.legend.legenditem.symbol legend item symbol properties (see geotoolkit.controls.shapes.SymbolLegendItem for more details)
     * @param options.tools tools tools optionssee {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget#setToolsOptions} for inherited properties and {@link @int/geotoolkit/schematics/widgets/SchematicsWidget.SchematicsWidget#setToolsOptions} for specific ones)
     * @param options.tools.crosshair crosshair cursor properties
     * @param options.tools.crosshair.enabled crosshair cursor enabled state
     * @param options.tools.crosshair.horizontal crosshair cursor's horizontal line style
     * @param options.tools.crosshair.vertical crosshair cursor's vertical line style
     * @param options.tools.rubberbandzoom rubber band zoom properties
     * @param options.tools.rubberbandzoom.mode mode rubber band zoom rendering mode
     * @param options.tools.rubberbandzoom.enabled rubber band enabled state
     * @param options.tools.rubberbandzoom.linestyle rubber band linestyle
     * @param options.tools.rubberbandzoom.fillstyle rubber band fillstyle
     * @param options.multidiameterselectionmode multi diameter selection/highlight/tooltip mode
     */
    setOptions(options?: object | { labelingStrategy?: LabelingStrategy | object | { defaultAlignment?: AlignmentType; defaultLocation?: LocationType; } ; alignment?: Alignment; gap?: number | object | { horizontal?: number | object | { left?: number; right?: number; } ; vertical?: number | object | { top?: number; bottom?: number; } ; } ; annotationssizes?: object | { west?: number; north?: number; south?: number; east?: number; } ; west?: object | { axis?: object | { tickposition?: TickPosition; labelposition?: LabelPosition; type?: DepthAxisType; } ; } ; northwest?: object | { title?: object | { textstyle?: any | TextStyle; } ; } ; sealevel?: object | { depth?: object; visible?: boolean; } ; wellborenode?: object | { automodellimitsmode?: boolean; componentsvisibility?: object | { visible?: any[] | object | { name?: string[]; id?: string[]; } ; invisible?: any[] | object | { name?: string[]; id?: string[]; } ; } ; geometrylimits?: Rect | null; } ; labelshape?: object | { padding?: object | { top?: number; bottom?: number; right?: number; left?: number; }  | SpaceStyle; } ; trackWidthStrategy?: TrackWidthStrategy; scalescrollstrategy?: ScaleScrollStrategy; tooltip?: object | { gettext?: Function; divelement?: HTMLElement; } ; highlight?: object | { label?: object | { cssclass?: string; linestyle?: LineStyle; fillstyle?: FillStyle; } ; component?: object | { boundscalculation?: BoundsCalculation; cssclass?: string; linestyle?: LineStyle; fillstyle?: FillStyle; } ; } ; labeling?: object | { mode?: Mode; labelShape?: LabelShape; labelShapeHighlighted?: LabelShape; labelInfoProvider?: Function; connectorShape?: ConnectorShape; } ; legendalignmentarea?: AnnotationLocation; legend?: object | { alignment?: AnchorType; linestyle?: LineStyle | any | string; fillstyle?: FillStyle | any | string; padding?: object | { top?: number; bottom?: number; right?: number; left?: number; }  | SpaceStyle; visible?: boolean; legenditem?: object | { gettext?: AbstractLegendItemInfoProvider | Function; textstyle?: TextStyle; symbol?: object; } ; } ; tools?: object | { crosshair?: object | { enabled?: boolean; horizontal?: string | any | LineStyle; vertical?: string | any | LineStyle; } ; rubberbandzoom?: object | { mode?: RubberBandRenderMode; enabled?: boolean; linestyle?: object | LineStyle; fillstyle?: object | FillStyle; } ; } ; multidiameterselectionmode?: MultiDiameterSelectionMode; } ): this;
    /**
     * Updates layout(s)
     * @param targets not used (entire content gets layouted)
     */
    updateLayout(targets?: Node[]): this;
    /**
     * Gets underlying WellBoreNode display width
     */
    protected calcWellBoreDisplayWidth(): number;
    /**
     * @param orientation orientation name ('horizontal' or 'vertical')
     * @param side side name
     */
    protected getGapSize(orientation: string, side: string): number;
    /**
     * Performs layout (within widget's model area) of WellBoreNode and labels' area(s)
     */
    protected setupInnerLayout(): void;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {labelingStrategy: {defaultAlignment: AlignmentType; defaultLocation: LocationType}; alignment: Alignment; gap: {horizontal: {left: number; right: number}; vertical: {top: number; bottom: number}}; annotationssizes: {west: number; north: number; south: number; east: number}; west: {axis: {tickposition: TickPosition; labelposition: LabelPosition; type: DepthAxisType}}; northwest: {title: {textstyle: any | TextStyle}}; sealevel: {depth: object; visible: boolean}; wellborenode: {automodellimitsmode: boolean; componentsvisibility: {visible: {name: string[]; id: string[]}; invisible: {name: string[]; id: string[]}}}; labelshape: {padding: {top: number; bottom: number; right: number; left: number}}; trackWidthStrategy: TrackWidthStrategy; scalescrollstrategy: ScaleScrollStrategy; highlight: {label: {cssclass: string; linestyle: LineStyle; fillstyle: FillStyle}; component: {boundscalculation: BoundsCalculation; cssclass: string; linestyle: LineStyle; fillstyle: FillStyle}}; labeling: {mode: Mode; labelShape: LabelShape; labelShapeHighlighted: LabelShape; labelInfoProvider: Function; connectorShape: ConnectorShape}; legendalignmentarea: AnnotationLocation; legend: {alignment: AnchorType; linestyle: LineStyle | any | string; fillstyle: FillStyle | any | string; padding: {top: number; bottom: number; right: number; left: number}; visible: boolean; legenditem: {gettext: AbstractLegendItemInfoProvider | Function; textstyle: TextStyle; symbol: any}}; multidiameterselectionmode: MultiDiameterSelectionMode} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties properties
     * @param properties.labelingStrategy labeling strategy
     * @param properties.labelingStrategy.defaultAlignment labels alignment type
     * @param properties.labelingStrategy.defaultLocation labels default location area type
     * @param properties.alignment wellbore horizontal alignment
     * @param properties.gap gap size value or object
     * @param properties.gap.horizontal horizontal gap size value or object
     * @param properties.gap.horizontal.left left gap size
     * @param properties.gap.horizontal.right right gap size
     * @param properties.gap.vertical vertical gap size value or object
     * @param properties.gap.vertical.top top gap size
     * @param properties.gap.vertical.bottom bottom gap size
     * @param properties.annotationssizes annotations sizes section
     * @param properties.annotationssizes.west west annotation (axis area) size
     * @param properties.annotationssizes.north north annotation (widget title) size
     * @param properties.annotationssizes.south south annotation (axis area) size
     * @param properties.annotationssizes.east east annotation (widget title) size
     * @param properties.west west annotation configuration
     * @param properties.west.axis west axis configuration
     * @param properties.west.axis.tickposition west axis tick position
     * @param properties.west.axis.labelposition west axis label position
     * @param properties.west.axis.type depth axis type (NOTE: the 'type' parameter is ignored if 'tickgenerator' is set explicitely)
     * @param properties.northwest northwest properties
     * @param properties.northwest.title title properties
     * @param properties.northwest.title.textstyle title textstyle
     * @param properties.sealevel sea level properties
     * @param properties.sealevel.depth sea level display depth
     * @param properties.sealevel.visible sea level visibility flag
     * @param properties.wellborenode wellbore node properties see {@link @int/geotoolkit/schematics/scene/WellBoreNode.WellBoreNode#setProperties}
     * @param properties.wellborenode.automodellimitsmode wellbore node auto model limits mode flag
     * @param properties.wellborenode.componentsvisibility components visibility properties
     * @param properties.wellborenode.componentsvisibility.visible array of visible component names or JSON object
     * @param properties.wellborenode.componentsvisibility.visible.name array of visible component names
     * @param properties.wellborenode.componentsvisibility.visible.id array of visible component ids
     * @param properties.wellborenode.componentsvisibility.invisible array of invisible component names or JSON object
     * @param properties.wellborenode.componentsvisibility.invisible.name array of visible component names
     * @param properties.wellborenode.componentsvisibility.invisible.id array of visible component ids
     * @param properties.labelshape label shape properties
     * @param properties.labelshape.padding paddings for each side of the DefaultLabelShape
     * @param properties.labelshape.padding.top top padding in pixels
     * @param properties.labelshape.padding.bottom top padding in pixels
     * @param properties.labelshape.padding.right right padding in pixels
     * @param properties.labelshape.padding.left left padding in pixels
     * @param properties.trackWidthStrategy track width strategy
     * @param properties.scalescrollstrategy scalescrollstrategy
     * @param properties.data wellbore data
     * @param properties.tooltip tooltip settings
     * @param properties.tooltip.gettext get tooltip text function (default displays top-most component's toString info)
     * @param properties.tooltip.divelement HTML div container element or it will be created with className cg-tooltip-container
     * @param properties.highlight define highlight properties
     * @param properties.highlight.label define label highlight properties
     * @param properties.highlight.label.cssclass define label highlight class name (see cssstyle.html tutorial)
     * @param properties.highlight.label.linestyle define line style attribute for label highlight
     * @param properties.highlight.label.fillstyle define fill style attribute for label highlight
     * @param properties.highlight.component define component highlight properties
     * @param properties.highlight.component.boundscalculation implementation to define component's area to highlight
     * @param properties.highlight.component.cssclass define component highlight class name (see cssstyle.html tutorial)
     * @param properties.highlight.component.linestyle define line style attribute for component highlight
     * @param properties.highlight.component.fillstyle define fill style attribute for component highlight
     * @param properties.labeling labeling properties
     * @param properties.labeling.mode labeling mode
     * @param properties.labeling.labelShape regular label shape
     * @param properties.labeling.labelShapeHighlighted highlighted label shape
     * @param properties.labeling.labelInfoProvider method to retrieve component node info
     * @param properties.labeling.connectorShape connector shape
     * @param properties.legendalignmentarea legend alignment area.<br>
     * @param properties.legend legend properties
     * @param properties.legend.alignment legend alignment
     * @param properties.legend.linestyle legend line style
     * @param properties.legend.fillstyle legend fill style
     * @param properties.legend.padding paddings for each side of an legend
     * @param properties.legend.padding.top top padding in pixels
     * @param properties.legend.padding.bottom top padding  in pixels
     * @param properties.legend.padding.right right padding  in pixels
     * @param properties.legend.padding.left left padding  in pixels
     * @param properties.legend.visible legend visibility
     * @param properties.legend.legenditem legend item properties
     * @param properties.legend.legenditem.gettext legend item text provider/method
     * @param properties.legend.legenditem.textstyle legend item text style
     * @param properties.legend.legenditem.symbol legend item symbol properties (see geotoolkit.controls.shapes.SymbolLegendItem for more details)
     * @param properties.tools tools tools optionssee {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget#setToolsOptions} for inherited properties and {@link @int/geotoolkit/schematics/widgets/SchematicsWidget.SchematicsWidget#setToolsOptions} for specific ones)
     * @param properties.tools.crosshair crosshair cursor properties
     * @param properties.tools.crosshair.enabled crosshair cursor enabled state
     * @param properties.tools.crosshair.horizontal crosshair cursor's horizontal line style
     * @param properties.tools.crosshair.vertical crosshair cursor's vertical line style
     * @param properties.tools.rubberbandzoom rubber band zoom properties
     * @param properties.tools.rubberbandzoom.mode mode rubber band zoom rendering mode
     * @param properties.tools.rubberbandzoom.enabled rubber band enabled state
     * @param properties.tools.rubberbandzoom.linestyle rubber band linestyle
     * @param properties.tools.rubberbandzoom.fillstyle rubber band fillstyle
     * @param properties.multidiameterselectionmode multi diameter selection/highlight/tooltip mode
     */
    setProperties(properties?: object | { labelingStrategy?: LabelingStrategy | object | { defaultAlignment?: AlignmentType; defaultLocation?: LocationType; } ; alignment?: Alignment; gap?: number | object | { horizontal?: number | object | { left?: number; right?: number; } ; vertical?: number | object | { top?: number; bottom?: number; } ; } ; annotationssizes?: object | { west?: number; north?: number; south?: number; east?: number; } ; west?: object | { axis?: object | { tickposition?: TickPosition; labelposition?: LabelPosition; type?: DepthAxisType; } ; } ; northwest?: object | { title?: object | { textstyle?: any | TextStyle; } ; } ; sealevel?: object | { depth?: object; visible?: boolean; } ; wellborenode?: object | { automodellimitsmode?: boolean; componentsvisibility?: object | { visible?: any[] | object | { name?: string[]; id?: string[]; } ; invisible?: any[] | object | { name?: string[]; id?: string[]; } ; } ; } ; labelshape?: object | { padding?: object | { top?: number; bottom?: number; right?: number; left?: number; }  | SpaceStyle; } ; trackWidthStrategy?: TrackWidthStrategy; scalescrollstrategy?: ScaleScrollStrategy; data?: any | any[] | WellBoreData; tooltip?: object | { gettext?: Function; divelement?: HTMLElement; } ; highlight?: object | { label?: object | { cssclass?: string; linestyle?: LineStyle; fillstyle?: FillStyle; } ; component?: object | { boundscalculation?: BoundsCalculation; cssclass?: string; linestyle?: LineStyle; fillstyle?: FillStyle; } ; } ; labeling?: object | { mode?: Mode; labelShape?: LabelShape; labelShapeHighlighted?: LabelShape; labelInfoProvider?: Function; connectorShape?: ConnectorShape; } ; legendalignmentarea?: AnnotationLocation; legend?: object | { alignment?: AnchorType; linestyle?: LineStyle | any | string; fillstyle?: FillStyle | any | string; padding?: object | { top?: number; bottom?: number; right?: number; left?: number; }  | SpaceStyle; visible?: boolean; legenditem?: object | { gettext?: AbstractLegendItemInfoProvider | Function; textstyle?: TextStyle; symbol?: any; } ; } ; tools?: object | { crosshair?: object | { enabled?: boolean; horizontal?: string | any | LineStyle; vertical?: string | any | LineStyle; } ; rubberbandzoom?: object | { mode?: RubberBandRenderMode; enabled?: boolean; linestyle?: any | LineStyle; fillstyle?: any | FillStyle; } ; } ; multidiameterselectionmode?: MultiDiameterSelectionMode; } ): this;
}
/**
 * Enum of depth (vertical) axis types
 */
export enum DepthAxisType {
    /**
     * Auto: instance of {@link @int/geotoolkit/axis/DiscreteValueTickGenerator.DiscreteValueTickGenerator} is used for "Compressed"
and "KeepAspectRatio" view modes; instance of {@link @int/geotoolkit/axis/AdaptiveTickGenerator.AdaptiveTickGenerator} is used for
"Regular" view mode
     */
    Auto = 'Auto',
    /**
     * Linear: instance of {@link @int/geotoolkit/axis/AdaptiveTickGenerator.AdaptiveTickGenerator} is used for every view mode
     */
    Linear = 'Linear'
}
