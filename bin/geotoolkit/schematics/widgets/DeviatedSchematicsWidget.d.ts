import {AnnotatedWidget} from '../../widgets/AnnotatedWidget';
import {ISchematicsWidget} from './ISchematicsWidget';
import {Mode} from '../labeling/Mode';
import {LocationType} from '../labeling/LocationType';
import {LabelShape} from '../labeling/LabelShape';
import {ConnectorShape} from '../labeling/ConnectorShape';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {TextStyle} from '../../attributes/TextStyle';
import {AbstractUnit} from '../../util/AbstractUnit';
import {ScaleScrollStrategy} from '../../scene/ScaleScrollStrategy';
import {WellBoreData} from '../data/WellBoreData';
import {Trajectory2d} from '../../deviation/Trajectory2d';
import {AnnotationLocation} from '../../layout/AnnotationLocation';
import {AnchorType} from '../../util/AnchorType';
import {SpaceStyle} from '../../attributes/SpaceStyle';
import {AbstractLegendItemInfoProvider} from './legend/AbstractLegendItemInfoProvider';
import {Transformer2d} from '../../deviation/Transformer2d';
import {ScalesRatioMode} from '../scene/MultiLateralWellBoreNode';
import {RubberBandRenderMode} from '../../controls/tools/RubberBandRenderMode';
import {Point} from '../../util/Point';
import {ViewMode} from '../scene/WellBoreNode';
import {Rect} from '../../util/Rect';
import {ComponentNode} from '../scene/ComponentNode';
import {DefaultDeviatedStrategy} from '../labeling/DefaultDeviatedStrategy';
import {Node} from '../../scene/Node';

/**
 * <p>
 * A schematics widget overrides {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget} class
 * to work with {@link @int/geotoolkit/schematics/scene/DeviatedWellBoreWithLabels.DeviatedWellBoreWithLabels} as a data model
 * </p>
 * <p>
 * DeviatedSchematicsWidget inherits from AnnotatedWidget, so it takes most of its functionality too.
 * The main way to configure and customize the widget is to use its setOptions() function
 * that provide a comprehensible way of changing the default look and feel of the widget.
 * <ul>
 * <li> setData() will pass through everything to the {@link @int/geotoolkit/schematics/scene/WellBoreNode.WellBoreNode}'s "setWellBoreData" for the internal shape.</li>
 * </ul>
 * </p>
 */
export class DeviatedSchematicsWidget extends AnnotatedWidget implements ISchematicsWidget {
    /**
     * <p>
     * A schematics widget overrides {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget} class
     * to work with {@link @int/geotoolkit/schematics/scene/DeviatedWellBoreWithLabels.DeviatedWellBoreWithLabels} as a data model
     * </p>
     * <p>
     * DeviatedSchematicsWidget inherits from AnnotatedWidget, so it takes most of its functionality too.
     * The main way to configure and customize the widget is to use its setOptions() function
     * that provide a comprehensible way of changing the default look and feel of the widget.
     * <ul>
     * <li> setData() will pass through everything to the {@link @int/geotoolkit/schematics/scene/WellBoreNode.WellBoreNode}'s "setWellBoreData" for the internal shape.</li>
     * </ul>
     * </p>
     * @param options options object
     * @param options.labeling labeling options
     * @param options.labeling.mode labeling  mode
     * @param options.labeling.gap gap from trajectory center in along trajectory labeling mode
     * @param options.labeling.defaultLocation default labels location
     * @param options.labeling.labelShape regular label shape
     * @param options.labeling.labelShapeHighlighted highlighted label shape
     * @param options.labeling.labelInfoProvider method to retrieve component node info
     * @param options.labeling.connectorShape connector shape
     * @param options.gap gap area options
     * @param options.gap.left left gap area options
     * @param options.gap.left.visible left gap area visibility
     * @param options.gap.left.resizable left gap area resizable flag
     * @param options.gap.left.size left gap area size
     * @param options.gap.left.linestyle left gap area linestyle
     * @param options.gap.left.fillstyle left gap area fillstyle
     * @param options.gap.right right gap area options
     * @param options.gap.right.visible right gap area visibility
     * @param options.gap.right.resizable right gap area resizable flag
     * @param options.gap.right.size right gap area size
     * @param options.gap.right.linestyle right gap area linestyle
     * @param options.gap.right.fillstyle right gap area fillstyle
     * @param options.gap.top top gap area options
     * @param options.gap.top.visible top gap area visibility
     * @param options.gap.top.resizable top gap area resizable flag
     * @param options.gap.top.size top gap area size
     * @param options.gap.top.linestyle top gap area linestyle
     * @param options.gap.top.fillstyle top gap area fillstyle
     * @param options.gap.bottom bottom gap area options
     * @param options.gap.bottom.visible bottom gap area visibility
     * @param options.gap.bottom.resizable bottom gap area resizable flag
     * @param options.gap.bottom.size bottom gap area size
     * @param options.gap.bottom.linestyle bottom gap area linestyle
     * @param options.gap.bottom.fillstyle bottom gap area fillstyle
     * @param options.annotationssizes annotations sizes section
     * @param options.annotationssizes.north north annotation (widget title) size
     * @param options.annotationssizes.west west annotation (axis area) size
     * @param options.annotationssizes.south south annotation (axis area) size
     * @param options.annotationssizes.east east annotation (axis area) size
     * @param options.northwest northwest options
     * @param options.northwest.title title options
     * @param options.northwest.title.textstyle title textstyle
     * @param options.southwest southwest options
     * @param options.southwest.title title options
     * @param options.southwest.title.textstyle title textstyle
     * @param options.wellborenode wellbore node options see {@link @int/geotoolkit/schematics/scene/WellBoreNode.WellBoreNode#setProperties}
     * @param options.wellborenode.componentsvisibility components visibility options
     * @param options.wellborenode.componentsvisibility.visible array of visible component names or JSON object
     * @param options.wellborenode.componentsvisibility.visible.name array of visible component names
     * @param options.wellborenode.componentsvisibility.visible.id array of visible component ids
     * @param options.wellborenode.componentsvisibility.invisible array of invisible component names or JSON object
     * @param options.wellborenode.componentsvisibility.invisible.name array of visible component names
     * @param options.wellborenode.componentsvisibility.invisible.id array of visible component ids *
     * @param options.wellborenode.units wellborenode units
     * @param options.wellborenode.units.depth wellborenode depth units
     * @param options.wellborenode.units.value wellborenode value units
     * @param options.scalescrollstrategy scale scroll strategy
     * @param options.data data object
     * @param options.data.elements WellBoreData instance or array of component data objects
     * @param options.data.trajectory trajectory
     * @param options.tooltip tooltip settings
     * @param options.tooltip.gettext get tooltip text function (default displays top-most component's toString info)
     * @param options.tooltip.divelement HTML div container element or it will be created with className cg-tooltip-container
     * @param options.tooltip.autoflip autoflip
     * @param options.legendalignmentarea legend alignment area.<br>
     * @param options.legend legend options
     * @param options.legend.visible legend visibility
     * @param options.legend.alignment legend alignment
     * @param options.legend.linestyle legend line style
     * @param options.legend.fillstyle legend fill style
     * @param options.legend.padding paddings for each side of an legend
     * @param options.legend.padding.top top padding in pixels
     * @param options.legend.padding.bottom top padding  in pixels
     * @param options.legend.padding.right right padding  in pixels
     * @param options.legend.padding.left left padding  in pixels
     * @param options.legend.legenditem legend item options
     * @param options.legend.legenditem.gettext legend item text provider/method
     * @param options.legend.legenditem.textstyle legend item text style
     * @param options.legend.legenditem.symbol legend item symbol options see {@link @int/geotoolkit/controls/shapes/SymbolLegendItem.SymbolLegendItem#setOptions}
     * @param options.webglrendering true for webgl rendering
     * @param options.deviation deviation options
     * @param options.deviation.transformer 2d-transformer to use
     * @param options.deviation.trackWidth track width (pixels)
     * @param options.deviation.offset track offset (pixels)
     * @param options.deviation.clip clipping flag
     * @param options.scalesratiomode Y-to-X scales ratio mode
     * @param options.scalesratio Y-to-X scales ratio used for scalesratiomode=ScalesRatioMode.Keep only
     * @param options.border line style for border
     * @param options.units widget units
     * @param options.units.x 'x' (horizontal) widget unit
     * @param options.units.y 'y' (vertical) widget unit
     * @param options.padding deviated shape padding settings
     * @param options.padding.top top padding
     * @param options.padding.bottom top padding
     * @param options.padding.right right padding
     * @param options.padding.left left padding
     * @param options.tools tools tools options see {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget#setToolsOptions} for inherited options and {@link @int/geotoolkit/schematics/widgets/SchematicsWidget.SchematicsWidget#setToolsOptions} for specific ones)
     * @param options.tools.crosshair crosshair cursor options
     * @param options.tools.crosshair.enabled crosshair cursor enabled state
     * @param options.tools.crosshair.horizontal crosshair cursor's horizontal line style
     * @param options.tools.crosshair.vertical crosshair cursor's vertical line style
     * @param options.tools.crosshair.center JSON for center label. See setLabelSettings for more details
     * @param options.tools.crosshair.center.lockx lock x position, can be useful if vertical cursor is hidden
     * @param options.tools.crosshair.center.textstyle text style of the text
     * @param options.tools.crosshair.center.fillstyle fill style of the text
     * @param options.tools.crosshair.center.linestyle line style of the text border
     * @param options.tools.crosshair.center.visible visibility of the text
     * @param options.tools.crosshair.center.alignment alignment of the text
     * @param options.tools.crosshair.center.padding padding between the text and the border
     * @param options.tools.crosshair.center.radius radius of the cross-hair center target
     * @param options.tools.crosshair.center.textconverter strategy to convert x,y to text
     * @param options.tools.rubberbandzoom rubber band zoom options
     * @param options.tools.rubberbandzoom.mode mode rubber band zoom rendering mode
     */
    constructor(options?: object | { labeling?: object | { mode?: Mode; gap?: number; defaultLocation?: LocationType; labelShape?: LabelShape; labelShapeHighlighted?: LabelShape; labelInfoProvider?: Function; connectorShape?: ConnectorShape; } ; gap?: object | { left?: object | { visible?: boolean; resizable?: boolean; size?: string; linestyle?: string | LineStyle | any; fillstyle?: string | FillStyle | any; } ; right?: object | { visible?: boolean; resizable?: boolean; size?: string; linestyle?: string | LineStyle | any; fillstyle?: string | FillStyle | any; } ; top?: object | { visible?: boolean; resizable?: boolean; size?: string; linestyle?: string | LineStyle | any; fillstyle?: string | FillStyle | any; } ; bottom?: object | { visible?: boolean; resizable?: boolean; size?: string; linestyle?: string | LineStyle | any; fillstyle?: string | FillStyle | any; } ; } ; annotationssizes?: object | { north?: number; west?: number; south?: number; east?: number; } ; northwest?: object | { title?: object | { textstyle?: any | TextStyle; } ; } ; southwest?: object | { title?: object | { textstyle?: any | TextStyle; } ; } ; wellborenode?: object | { componentsvisibility?: object | { visible?: any[] | object | { name?: string[] | string; id?: string[] | string; } ; invisible?: any[] | object | { name?: string[] | string; id?: string[] | string; } ; } ; units?: object | { depth?: string | AbstractUnit; value?: string | AbstractUnit; } ; }  | any; scalescrollstrategy?: ScaleScrollStrategy; data?: object | { elements?: any[] | WellBoreData; trajectory?: Trajectory2d; } ; tooltip?: object | { gettext?: Function; divelement?: HTMLElement; autoflip?: boolean; } ; legendalignmentarea?: AnnotationLocation; legend?: object | { visible?: boolean; alignment?: AnchorType; linestyle?: LineStyle | string | any; fillstyle?: FillStyle | string | any; padding?: object | { top?: number; bottom?: number; right?: number; left?: number; }  | SpaceStyle; legenditem?: object | { gettext?: AbstractLegendItemInfoProvider | Function; textstyle?: TextStyle; symbol?: any; } ; } ; webglrendering?: boolean; deviation?: object | { transformer?: Transformer2d; trackWidth?: number; offset?: number; clip?: boolean; } ; scalesratiomode?: ScalesRatioMode; scalesratio?: number; border?: LineStyle | any | string; units?: object | { x?: string | AbstractUnit; y?: string | AbstractUnit; } ; padding?: number | object | { top?: number; bottom?: number; right?: number; left?: number; }  | Function; tools?: object | { crosshair?: object | { enabled?: boolean; horizontal?: any | string | LineStyle; vertical?: any | string | LineStyle; center?: object | { lockx?: boolean; textstyle?: any | TextStyle; fillstyle?: any | string | FillStyle; linestyle?: any | string | LineStyle; visible?: boolean; alignment?: AnchorType; padding?: number; radius?: number; textconverter?: Function; } ; } ; rubberbandzoom?: object | { mode?: RubberBandRenderMode; } ; } ; } );
    /**
     * Gets model coordinates (where y-ordinate is true MD-value) at given device ones.<br>
     * If conversion fails then returned point contains NaN values as its x- and y- ordinates.
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
     * Gets WellBoreNode's model limits
     */
    getCenterModelLimits(): Rect | null;
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
     * Gets widget options (see "setOptions" API for the options format)
     */
    getOptions(): any;
    /**
     * Sets tools options
     * @param options options (see {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget.setToolsOptions} for inherited options)
     * @param options.rubberbandzoom rubber band zoom options
     * @param options.rubberbandzoom.mode rubberbandzoom mode
     */
    setToolsOptions(options: object | { rubberbandzoom?: object | { mode?: RubberBandRenderMode; } ; } ): this;
    /**
     * Sets options
     * @param options options object
     * @param options.labeling labeling options
     * @param options.labeling.mode labeling  mode
     * @param options.labeling.gap gap from trajectory center in along trajectory labeling mode
     * @param options.labeling.defaultLocation default labels location
     * @param options.labeling.labelShape regular label shape
     * @param options.labeling.labelShapeHighlighted highlighted label shape
     * @param options.labeling.labelInfoProvider method to retrieve component node info
     * @param options.labeling.connectorShape connector shape
     * @param options.gap gap area options
     * @param options.gap.left left gap area options
     * @param options.gap.left.visible left gap area visibility
     * @param options.gap.left.resizable left gap area resizable flag
     * @param options.gap.left.size left gap area size
     * @param options.gap.left.linestyle left gap area linestyle
     * @param options.gap.left.fillstyle left gap area fillstyle
     * @param options.gap.right right gap area options
     * @param options.gap.right.visible right gap area visibility
     * @param options.gap.right.resizable right gap area resizable flag
     * @param options.gap.right.size right gap area size
     * @param options.gap.right.linestyle right gap area linestyle
     * @param options.gap.right.fillstyle right gap area fillstyle
     * @param options.gap.top top gap area options
     * @param options.gap.top.visible top gap area visibility
     * @param options.gap.top.resizable top gap area resizable flag
     * @param options.gap.top.size top gap area size
     * @param options.gap.top.linestyle top gap area linestyle
     * @param options.gap.top.fillstyle top gap area fillstyle
     * @param options.gap.bottom bottom gap area options
     * @param options.gap.bottom.visible bottom gap area visibility
     * @param options.gap.bottom.resizable bottom gap area resizable flag
     * @param options.gap.bottom.size bottom gap area size
     * @param options.gap.bottom.linestyle bottom gap area linestyle
     * @param options.gap.bottom.fillstyle bottom gap area fillstyle
     * @param options.annotationssizes annotations sizes section
     * @param options.annotationssizes.north north annotation (widget title) size
     * @param options.annotationssizes.west west annotation (axis area) size
     * @param options.annotationssizes.south south annotation (axis area) size
     * @param options.annotationssizes.east east annotation (axis area) size
     * @param options.northwest northwest options
     * @param options.northwest.title title options
     * @param options.northwest.title.textstyle title textstyle
     * @param options.southwest southwest options
     * @param options.southwest.title title options
     * @param options.southwest.title.textstyle title textstyle
     * @param options.wellborenode wellbore node options see {@link @int/geotoolkit/schematics/scene/WellBoreNode.WellBoreNode#setProperties}
     * @param options.wellborenode.componentsvisibility components visibility options
     * @param options.wellborenode.componentsvisibility.visible array of visible component names or JSON object
     * @param options.wellborenode.componentsvisibility.visible.name array of visible component names
     * @param options.wellborenode.componentsvisibility.visible.id array of visible component ids
     * @param options.wellborenode.componentsvisibility.invisible array of invisible component names or JSON object
     * @param options.wellborenode.componentsvisibility.invisible.name array of visible component names
     * @param options.wellborenode.componentsvisibility.invisible.id array of visible component ids *
     * @param options.wellborenode.units wellborenode units
     * @param options.wellborenode.units.depth wellborenode depth units
     * @param options.wellborenode.units.value wellborenode value units
     * @param options.scalescrollstrategy scale scroll strategy
     * @param options.tooltip tooltip settings
     * @param options.tooltip.gettext get tooltip text function (default displays top-most component's toString info)
     * @param options.tooltip.divelement HTML div container element or it will be created with className cg-tooltip-container
     * @param options.tooltip.autoflip autoflip
     * @param options.legendalignmentarea legend alignment area.<br>
     * @param options.legend legend options
     * @param options.legend.visible legend visibility
     * @param options.legend.alignment legend alignment
     * @param options.legend.linestyle legend line style
     * @param options.legend.fillstyle legend fill style
     * @param options.legend.padding paddings for each side of an legend
     * @param options.legend.padding.top top padding in pixels
     * @param options.legend.padding.bottom top padding  in pixels
     * @param options.legend.padding.right right padding  in pixels
     * @param options.legend.padding.left left padding  in pixels
     * @param options.legend.legenditem legend item options
     * @param options.legend.legenditem.gettext legend item text provider/method
     * @param options.legend.legenditem.textstyle legend item text style
     * @param options.legend.legenditem.symbol legend item symbol options see {@link @int/geotoolkit/controls/shapes/SymbolLegendItem.SymbolLegendItem#setOptions}
     * @param options.webglrendering true for webgl rendering
     * @param options.deviation deviation options
     * @param options.deviation.transformer 2d-transformer to use
     * @param options.deviation.trackWidth track width (pixels)
     * @param options.deviation.offset track offset (pixels)
     * @param options.deviation.clip clipping flag
     * @param options.scalesratiomode Y-to-X scales ratio mode
     * @param options.scalesratio Y-to-X scales ratio used for scalesratiomode=ScalesRatioMode.Keep only
     * @param options.border line style for border
     * @param options.units widget units
     * @param options.units.x 'x' (horizontal) widget unit
     * @param options.units.y 'y' (vertical) widget unit
     * @param options.padding deviated shape padding settings
     * @param options.padding.top top padding
     * @param options.padding.bottom top padding
     * @param options.padding.right right padding
     * @param options.padding.left left padding
     * @param options.tools tools tools options see {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget#setToolsOptions} for inherited options and {@link @int/geotoolkit/schematics/widgets/SchematicsWidget.SchematicsWidget#setToolsOptions} for specific ones)
     * @param options.tools.crosshair crosshair cursor options
     * @param options.tools.crosshair.enabled crosshair cursor enabled state
     * @param options.tools.crosshair.horizontal crosshair cursor's horizontal line style
     * @param options.tools.crosshair.vertical crosshair cursor's vertical line style
     * @param options.tools.crosshair.center JSON for center label. See setLabelSettings for more details
     * @param options.tools.crosshair.center.lockx lock x position, can be useful if vertical cursor is hidden
     * @param options.tools.crosshair.center.textstyle text style of the text
     * @param options.tools.crosshair.center.fillstyle fill style of the text
     * @param options.tools.crosshair.center.linestyle line style of the text border
     * @param options.tools.crosshair.center.visible visibility of the text
     * @param options.tools.crosshair.center.alignment alignment of the text
     * @param options.tools.crosshair.center.padding padding between the text and the border
     * @param options.tools.crosshair.center.radius radius of the cross-hair center target
     * @param options.tools.crosshair.center.textconverter strategy to convert x,y to text
     * @param options.tools.rubberbandzoom rubber band zoom options
     * @param options.tools.rubberbandzoom.mode mode rubber band zoom rendering mode
     */
    setOptions(options?: object | { labeling?: object | { mode?: Mode; gap?: number; defaultLocation?: LocationType; labelShape?: LabelShape; labelShapeHighlighted?: LabelShape; labelInfoProvider?: Function; connectorShape?: ConnectorShape; } ; gap?: object | { left?: object | { visible?: boolean; resizable?: boolean; size?: string; linestyle?: string | LineStyle | any; fillstyle?: string | FillStyle | any; } ; right?: object | { visible?: boolean; resizable?: boolean; size?: string; linestyle?: string | LineStyle | any; fillstyle?: string | FillStyle | any; } ; top?: object | { visible?: boolean; resizable?: boolean; size?: string; linestyle?: string | LineStyle | any; fillstyle?: string | FillStyle | any; } ; bottom?: object | { visible?: boolean; resizable?: boolean; size?: string; linestyle?: string | LineStyle | any; fillstyle?: string | FillStyle | any; } ; } ; annotationssizes?: object | { north?: number; west?: number; south?: number; east?: number; } ; northwest?: object | { title?: object | { textstyle?: any | TextStyle; } ; } ; southwest?: object | { title?: object | { textstyle?: any | TextStyle; } ; } ; wellborenode?: object | { componentsvisibility?: object | { visible?: any[] | object | { name?: string[] | string; id?: string[] | string; } ; invisible?: any[] | object | { name?: string[] | string; id?: string[] | string; } ; } ; units?: object | { depth?: string | AbstractUnit; value?: string | AbstractUnit; } ; }  | any; scalescrollstrategy?: ScaleScrollStrategy; tooltip?: object | { gettext?: Function; divelement?: HTMLElement; autoflip?: boolean; } ; legendalignmentarea?: AnnotationLocation; legend?: object | { visible?: boolean; alignment?: AnchorType; linestyle?: LineStyle | string | any; fillstyle?: FillStyle | string | any; padding?: object | { top?: number; bottom?: number; right?: number; left?: number; }  | SpaceStyle; legenditem?: object | { gettext?: AbstractLegendItemInfoProvider | Function; textstyle?: TextStyle; symbol?: any; } ; } ; webglrendering?: boolean; deviation?: object | { transformer?: Transformer2d; trackWidth?: number; offset?: number; clip?: boolean; } ; scalesratiomode?: ScalesRatioMode; scalesratio?: number; border?: LineStyle | any | string; units?: object | { x?: string | AbstractUnit; y?: string | AbstractUnit; } ; padding?: number | object | { top?: number; bottom?: number; right?: number; left?: number; }  | Function; tools?: object | { crosshair?: object | { enabled?: boolean; horizontal?: any | string | LineStyle; vertical?: any | string | LineStyle; center?: object | { lockx?: boolean; textstyle?: any | TextStyle; fillstyle?: any | string | FillStyle; linestyle?: any | string | LineStyle; visible?: boolean; alignment?: AnchorType; padding?: number; radius?: number; textconverter?: Function; } ; } ; rubberbandzoom?: object | { mode?: RubberBandRenderMode; } ; } ; } ): this;
    /**
     * Gets labeling strategy
     */
    getLabelingStrategy(): DefaultDeviatedStrategy;
    /**
     * Updates layout(s)
     * @param targets optional parameter about which element to layout
     * @param point device point to keep position
     */
    updateLayout(targets?: Node[], point?: Point): this;
    /**
     * Sets data
     * @param data data object
     * @param data.elements WellBoreData instance or array of component data objects
     * @param data.trajectory trajectory
     */
    setData(data: object | { elements: any[] | WellBoreData | null; trajectory: Trajectory2d; } ): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {labeling: {mode: Mode; gap: number; defaultLocation: LocationType; labelShape: LabelShape; labelShapeHighlighted: LabelShape; labelInfoProvider: Function; connectorShape: ConnectorShape}; gap: {left: {visible: boolean; resizable: boolean; size: string; linestyle: string | LineStyle | any; fillstyle: string | FillStyle | any}; right: {visible: boolean; resizable: boolean; size: string; linestyle: string | LineStyle | any; fillstyle: string | FillStyle | any}; top: {visible: boolean; resizable: boolean; size: string; linestyle: string | LineStyle | any; fillstyle: string | FillStyle | any}; bottom: {visible: boolean; resizable: boolean; size: string; linestyle: string | LineStyle | any; fillstyle: string | FillStyle | any}}; annotationssizes: {north: number; west: number; south: number; east: number}; northwest: {title: {textstyle: any | TextStyle}}; southwest: {title: {textstyle: any | TextStyle}}; wellborenode: {componentsvisibility: {visible: {name: string[] | string; id: string[] | string}; invisible: {name: string[] | string; id: string[] | string}}; units: {depth: string | AbstractUnit; value: string | AbstractUnit}}; scalescrollstrategy: ScaleScrollStrategy; legendalignmentarea: AnnotationLocation; legend: {visible: boolean; alignment: AnchorType; linestyle: LineStyle | string | any; fillstyle: FillStyle | string | any; padding: {top: number; bottom: number; right: number; left: number}; legenditem: {gettext: AbstractLegendItemInfoProvider | Function; textstyle: TextStyle; symbol: any}}; webglrendering: boolean; deviation: {transformer: Transformer2d; trackWidth: number; offset: number; clip: boolean}; scalesratiomode: ScalesRatioMode; scalesratio: number; border: LineStyle | any | string; units: {x: string | AbstractUnit; y: string | AbstractUnit}; padding: {top: number; bottom: number; right: number; left: number}} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param options options object
     * @param options.labeling labeling options
     * @param options.labeling.mode labeling  mode
     * @param options.labeling.gap gap from trajectory center in along trajectory labeling mode
     * @param options.labeling.defaultLocation default labels location
     * @param options.labeling.labelShape regular label shape
     * @param options.labeling.labelShapeHighlighted highlighted label shape
     * @param options.labeling.labelInfoProvider method to retrieve component node info
     * @param options.labeling.connectorShape connector shape
     * @param options.gap gap area options
     * @param options.gap.left left gap area options
     * @param options.gap.left.visible left gap area visibility
     * @param options.gap.left.resizable left gap area resizable flag
     * @param options.gap.left.size left gap area size
     * @param options.gap.left.linestyle left gap area linestyle
     * @param options.gap.left.fillstyle left gap area fillstyle
     * @param options.gap.right right gap area options
     * @param options.gap.right.visible right gap area visibility
     * @param options.gap.right.resizable right gap area resizable flag
     * @param options.gap.right.size right gap area size
     * @param options.gap.right.linestyle right gap area linestyle
     * @param options.gap.right.fillstyle right gap area fillstyle
     * @param options.gap.top top gap area options
     * @param options.gap.top.visible top gap area visibility
     * @param options.gap.top.resizable top gap area resizable flag
     * @param options.gap.top.size top gap area size
     * @param options.gap.top.linestyle top gap area linestyle
     * @param options.gap.top.fillstyle top gap area fillstyle
     * @param options.gap.bottom bottom gap area options
     * @param options.gap.bottom.visible bottom gap area visibility
     * @param options.gap.bottom.resizable bottom gap area resizable flag
     * @param options.gap.bottom.size bottom gap area size
     * @param options.gap.bottom.linestyle bottom gap area linestyle
     * @param options.gap.bottom.fillstyle bottom gap area fillstyle
     * @param options.annotationssizes annotations sizes section
     * @param options.annotationssizes.north north annotation (widget title) size
     * @param options.annotationssizes.west west annotation (axis area) size
     * @param options.annotationssizes.south south annotation (axis area) size
     * @param options.annotationssizes.east east annotation (axis area) size
     * @param options.northwest northwest options
     * @param options.northwest.title title options
     * @param options.northwest.title.textstyle title textstyle
     * @param options.southwest southwest options
     * @param options.southwest.title title options
     * @param options.southwest.title.textstyle title textstyle
     * @param options.wellborenode wellbore node options see {@link @int/geotoolkit/schematics/scene/WellBoreNode.WellBoreNode#setProperties}
     * @param options.wellborenode.componentsvisibility components visibility options
     * @param options.wellborenode.componentsvisibility.visible array of visible component names or JSON object
     * @param options.wellborenode.componentsvisibility.visible.name array of visible component names
     * @param options.wellborenode.componentsvisibility.visible.id array of visible component ids
     * @param options.wellborenode.componentsvisibility.invisible array of invisible component names or JSON object
     * @param options.wellborenode.componentsvisibility.invisible.name array of visible component names
     * @param options.wellborenode.componentsvisibility.invisible.id array of visible component ids *
     * @param options.scalescrollstrategy scale scroll strategy
     * @param options.data data object
     * @param options.data.elements WellBoreData instance or array of component data objects
     * @param options.data.trajectory trajectory
     * @param options.tooltip tooltip settings
     * @param options.tooltip.gettext get tooltip text function (default displays top-most component's toString info)
     * @param options.tooltip.divelement HTML div container element or it will be created with className cg-tooltip-container
     * @param options.tooltip.autoflip autoflip
     * @param options.legendalignmentarea legend alignment area.<br>
     * @param options.legend legend options
     * @param options.legend.visible legend visibility
     * @param options.legend.alignment legend alignment
     * @param options.legend.linestyle legend line style
     * @param options.legend.fillstyle legend fill style
     * @param options.legend.padding paddings for each side of an legend
     * @param options.legend.padding.top top padding in pixels
     * @param options.legend.padding.bottom top padding  in pixels
     * @param options.legend.padding.right right padding  in pixels
     * @param options.legend.padding.left left padding  in pixels
     * @param options.legend.legenditem legend item options
     * @param options.legend.legenditem.gettext legend item text provider/method
     * @param options.legend.legenditem.textstyle legend item text style
     * @param options.legend.legenditem.symbol legend item symbol options see {@link @int/geotoolkit/controls/shapes/SymbolLegendItem.SymbolLegendItem#setOptions}
     * @param options.webglrendering true for webgl rendering
     * @param options.deviation deviation options
     * @param options.deviation.transformer 2d-transformer to use
     * @param options.deviation.trackWidth track width (pixels)
     * @param options.deviation.offset track offset (pixels)
     * @param options.deviation.clip clipping flag
     * @param options.scalesratiomode Y-to-X scales ratio mode
     * @param options.scalesratio Y-to-X scales ratio used for scalesratiomode=ScalesRatioMode.Keep only
     * @param options.border line style for border
     * @param options.units units info
     * @param options.units.depth depth units
     * @param options.units.value value units
     * @param options.padding deviated shape padding settings
     * @param options.padding.top top padding
     * @param options.padding.bottom top padding
     * @param options.padding.right right padding
     * @param options.padding.left left padding
     * @param options.tools tools tools options see {@link @int/geotoolkit/widgets/AnnotatedWidget.AnnotatedWidget#setToolsOptions} for inherited options and {@link @int/geotoolkit/schematics/widgets/SchematicsWidget.SchematicsWidget#setToolsOptions} for specific ones)
     * @param options.tools.crosshair crosshair cursor options
     * @param options.tools.crosshair.enabled crosshair cursor enabled state
     * @param options.tools.crosshair.horizontal crosshair cursor's horizontal line style
     * @param options.tools.crosshair.vertical crosshair cursor's vertical line style
     * @param options.tools.crosshair.center JSON for center label. See setLabelSettings for more details
     * @param options.tools.crosshair.center.lockx lock x position, can be useful if vertical cursor is hidden
     * @param options.tools.crosshair.center.textstyle text style of the text
     * @param options.tools.crosshair.center.fillstyle fill style of the text
     * @param options.tools.crosshair.center.linestyle line style of the text border
     * @param options.tools.crosshair.center.visible visibility of the text
     * @param options.tools.crosshair.center.alignment alignment of the text
     * @param options.tools.crosshair.center.padding padding between the text and the border
     * @param options.tools.crosshair.center.radius radius of the cross-hair center target
     * @param options.tools.crosshair.center.textconverter strategy to convert x,y to text
     * @param options.tools.rubberbandzoom rubber band zoom options
     * @param options.tools.rubberbandzoom.mode mode rubber band zoom rendering mode
     */
    setProperties(options?: object | { labeling?: object | { mode?: Mode; gap?: number; defaultLocation?: LocationType; labelShape?: LabelShape; labelShapeHighlighted?: LabelShape; labelInfoProvider?: Function; connectorShape?: ConnectorShape; } ; gap?: object | { left?: object | { visible?: boolean; resizable?: boolean; size?: string; linestyle?: string | LineStyle | any; fillstyle?: string | FillStyle | any; } ; right?: object | { visible?: boolean; resizable?: boolean; size?: string; linestyle?: string | LineStyle | any; fillstyle?: string | FillStyle | any; } ; top?: object | { visible?: boolean; resizable?: boolean; size?: string; linestyle?: string | LineStyle | any; fillstyle?: string | FillStyle | any; } ; bottom?: object | { visible?: boolean; resizable?: boolean; size?: string; linestyle?: string | LineStyle | any; fillstyle?: string | FillStyle | any; } ; } ; annotationssizes?: object | { north?: number; west?: number; south?: number; east?: number; } ; northwest?: object | { title?: object | { textstyle?: any | TextStyle; } ; } ; southwest?: object | { title?: object | { textstyle?: any | TextStyle; } ; } ; wellborenode?: object | { componentsvisibility?: object | { visible?: any[] | object | { name?: string[] | string; id?: string[] | string; } ; invisible?: any[] | object | { name?: string[] | string; id?: string[] | string; } ; } ; }  | any; scalescrollstrategy?: ScaleScrollStrategy; data?: object | { elements?: any[] | WellBoreData; trajectory?: Trajectory2d; } ; tooltip?: object | { gettext?: Function; divelement?: HTMLElement; autoflip?: boolean; } ; legendalignmentarea?: AnnotationLocation; legend?: object | { visible?: boolean; alignment?: AnchorType; linestyle?: LineStyle | string | any; fillstyle?: FillStyle | string | any; padding?: object | { top?: number; bottom?: number; right?: number; left?: number; }  | SpaceStyle; legenditem?: object | { gettext?: AbstractLegendItemInfoProvider | Function; textstyle?: TextStyle; symbol?: any; } ; } ; webglrendering?: boolean; deviation?: object | { transformer?: Transformer2d; trackWidth?: number; offset?: number; clip?: boolean; } ; scalesratiomode?: ScalesRatioMode; scalesratio?: number; border?: LineStyle | any | string; units?: object | { depth?: string | AbstractUnit; value?: string | AbstractUnit; } ; padding?: number | object | { top?: number; bottom?: number; right?: number; left?: number; }  | Function; tools?: object | { crosshair?: object | { enabled?: boolean; horizontal?: any | string | LineStyle; vertical?: any | string | LineStyle; center?: object | { lockx?: boolean; textstyle?: any | TextStyle; fillstyle?: any | string | FillStyle; linestyle?: any | string | LineStyle; visible?: boolean; alignment?: AnchorType; padding?: number; radius?: number; textconverter?: Function; } ; } ; rubberbandzoom?: object | { mode?: RubberBandRenderMode; } ; } ; } ): this;
    /**
     * Set deviation properties
     * @param options deviation options
     * @param options.trajectory trajectory
     * @param options.transformer transformer
     * @param options.trackWidth track width
     * @param options.offset offset
     * @param options.clip clipping
     * @param options.webglrendering webgl rendering
     */
    setDeviation(options: object | { trajectory: Trajectory2d; transformer?: Transformer2d; trackWidth?: number; offset?: number; clip?: boolean; webglrendering?: boolean; } ): this;
    /**
     * Gets deviation properties
     */
    getDeviation(): {trajectory: Trajectory2d; transformer: Transformer2d; trackWidth: number; offset: number; clip: boolean} | object;
    /**
     * Sets labeling mode (convenience method with all labeling default settings).<br>
     * For fine tuning use "setOptions" with "labeling" customized parameters section
     * @param mode labeling mode
     */
    setLabelsMode(mode: Mode): this;
}
