import {DeviceSizeGroup} from './DeviceSizeGroup';
import {WellBoreData} from '../data/WellBoreData';
import {SortComponents} from '../data/sort/SortComponents';
import {BoundsCalculation} from '../utils/BoundsCalculation';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {ComponentNodeFactoryRegistry} from '../factory/ComponentNodeFactoryRegistry';
import {AbstractUnit} from '../../util/AbstractUnit';
import {ComponentNode} from './ComponentNode';
import {IViewModeBuilder} from '../builder/IViewModeBuilder';
import {Iterator} from '../../util/iterator';

/**
 * Top-most Well bore node implementation used to visualize schematics data.<br>
 * If user does not need any custom elements (i.e. {@link @int/geotoolkit/schematics/scene/ComponentNode.ComponentNode} implementations), reference to the data is the only argument to pass to WellBoreNode constructor.
 * If user does need any custom elements, then a {@link @int/geotoolkit/schematics/factory/ComponentNodeFactoryRegistry.ComponentNodeFactoryRegistry} instance used in the WellBoreNode object must contain an entry to make the custom data displayed within WellBoreNode.
 * If labeling is not needed the WellBoreNode object is the CarnacJS node instance to insert into {@link @int/geotoolkit/plot/Plot.Plot} as a root.
 * If labeling IS needed then {@link @int/geotoolkit/schematics/scene/WellBoreWithLabels.WellBoreWithLabels} object must be created based on user’s WellBoreNode object.
 * @example
 * ```javascript
 * import {WellBoreNode, ViewMode} from '@int/geotoolkit/schematics/scene/WellBoreNode';
 * ...
 * const wellBoreNode = new WellBoreNode({
 *       'data': wellboreData,
 *       'viewMode': ViewMode.Compressed
 * });
 * ```
 */
export class WellBoreNode extends DeviceSizeGroup {
    /**
     * Top-most Well bore node implementation used to visualize schematics data.<br>
     * If user does not need any custom elements (i.e. {@link @int/geotoolkit/schematics/scene/ComponentNode.ComponentNode} implementations), reference to the data is the only argument to pass to WellBoreNode constructor.
     * If user does need any custom elements, then a {@link @int/geotoolkit/schematics/factory/ComponentNodeFactoryRegistry.ComponentNodeFactoryRegistry} instance used in the WellBoreNode object must contain an entry to make the custom data displayed within WellBoreNode.
     * If labeling is not needed the WellBoreNode object is the CarnacJS node instance to insert into {@link @int/geotoolkit/plot/Plot.Plot} as a root.
     * If labeling IS needed then {@link @int/geotoolkit/schematics/scene/WellBoreWithLabels.WellBoreWithLabels} object must be created based on user’s WellBoreNode object.
     * @remarks fires {@link @int/geotoolkit/schematics/scene/WellBoreNode~Events~ComponentsLoaded}
     * @param options 
     * @param options.data well bore data
     * @param options.sortcomponents sort components
     * @param options.highlight component highlight options
     * @param options.highlight.boundscalculation implementation to calculate component's area to highlight
     * @param options.highlight.cssclass define component highlight class name (see cssstyle.html tutorial)
     * @param options.highlight.linestyle define line style attribute for component highlight
     * @param options.highlight.fillstyle define fill style attribute for component highlight
     * @param options.forceopenhole force showing open hole (even if it's not in the data)
     * @param options.renderinghints rendering hints for components
     * @param options.registry factory registry
     * @param options.viewMode view mode type or
     * an object containing view mode type and options
     * @param options.viewMode.name view mode name (type)
     * @param options.viewMode.options view mode options
     * @param options.viewMode.options.tolerance gap/overlap tolerance along MD axis (for "Compressed" view mode)
     * @param options.valueviewmode value view mode
     * @param options.units units options
     * @param options.units.depth depth units
     * @param options.units.value value units
     */
    constructor(options?: object | { data?: WellBoreData; sortcomponents?: SortComponents; highlight?: object | { boundscalculation?: BoundsCalculation; cssclass?: string; linestyle?: LineStyle; fillstyle?: FillStyle; } ; forceopenhole?: boolean; renderinghints?: any; registry?: ComponentNodeFactoryRegistry; viewMode?: object | { name?: ViewMode; options?: object | { tolerance?: number; } ; }  | ViewMode; valueviewmode?: ValueViewMode; units?: object | { depth?: string | AbstractUnit; value?: string | AbstractUnit; } ; } );
    /**
     */
    protected getHighlightBoundsCalculator(): BoundsCalculation;
    /**
     * Draws specified component node as highlighted or non-highlighted
     * @param node node to setup highlight
     * @param on highlight flag
     */
    highlightComponentNode(node: ComponentNode, on: boolean): void;
    /**
     * Highlights top-most component node in the selection while de-highlighting previously highlighted node (if any)
     * @param selectedComponentNodes array of component nodes of interest
     */
    highlightSelection(selectedComponentNodes: any[]): void;
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
     * Gets well bore view mode.
     */
    getViewMode(): ViewMode;
    /**
     * Sets  builder for the view mode passed
     * @param builder the mode builder to set
     * @param viewMode view mode
     */
    setBuilder(builder: IViewModeBuilder, viewMode: ViewMode): this;
    /**
     * Gets the view mode's builder
     * @param viewMode view mode
     */
    getBuilder(viewMode: ViewMode): IViewModeBuilder | null;
    /**
     * Gets well bore value view mode
     */
    getValueViewMode(): ValueViewMode;
    /**
     * Sets well bore value view mode
     * @param mode value view mode
     */
    setValueViewMode(mode?: ValueViewMode): this;
    /**
     * Sets well bore view mode.
     * @param viewMode view mode type or
     * an object containing view mode type and options
     * @param viewMode.name view mode name (type)
     * @param viewMode.options view mode options
     * @param viewMode.options.tolerance gap/overlap tolerance along MD axis (for "Compressed" view mode)
     */
    setViewMode(viewMode?: object | { name?: ViewMode; options?: object | { tolerance?: number; } ; }  | ViewMode): {modelLimitsDepths: any[]; boundsDepths: any[]} | object;
    /**
     * Rebuilds all components with a given "componentName"
     * @param componentName component name
     */
    replaceComponent(componentName: string): this;
    /**
     * Gets rendering hints for various component types (if any)
     */
    getRenderingHints(): object;
    /**
     * Sets rendering hints for various component types (if any)
     * @example
     * ```javascript
     * // Customizing 'fluid' component's subsets:
     * const renderingHints = {
     *     'fluid': {
     *         'Mud': { 'fillstyle': { 'color': 'rgb(191,127,127)' } },
     *         'Spacer Fluid': { 'fillstyle': { 'color': 'rgb(113,244,151)' } },
     *         'Head Slurry': { 'fillstyle': { 'color': 'rgb(127,127,127)' } },
     *         'Tail Slurry': { 'fillstyle': { 'color': 'rgb(80,80,80)' } }
     *     }
     * };
     * // The call tells wellbore node to render fluid's subsets: 'Mud', 'Spacer Fluid', 'Head Slurry' and 'Tail Slurry'
     * // with their corresponding fill colors:
     * wellBoreNode.setRenderingHints(renderingHints);
     * ```
     * @example
     * ```javascript
     * // Customizing casing shoe painter, proportions and styles:
     * import {FillStyle} from '@int/geotoolkit/attributes/FillStyle';
     * import {LineStyle} from '@int/geotoolkit/attributes/LineStyle';
     * const renderingHints = {
     *     'casing': {
     *         'shoe': {
     *             'painter': (symbol, bbox, context) => { // Replace default shoe painter
     *                 const x = [bbox.x, bbox.x + bbox.width, bbox.x + bbox.width, bbox.x + bbox.width, bbox.x];
     *                 const y = [bbox.y, bbox.y, bbox.y + bbox.height / 2, bbox.y + bbox.height, bbox.y + bbox.height];
     *                 context.drawPolygon(x, y);
     *             },
     *             'height': 10,
     *             'width': 10,
     *             'linestyle': new LineStyle('red'),
     *             'fillstyle': new FillStyle('blue')
     *         }
     *     }
     * };
     * wellBoreNode.setRenderingHints(renderingHints);
     * ```
     * @example
     * ```javascript
     * // Add a color gradient
     * import {Point} from '@int/geotoolkit/util/Point';
     * import {LinearGradientStyle} from '@int/geotoolkit/attributes/LinearGradientStyle';
     * const gradStyleMud = new LinearGradientStyle( {
     *    'startPoint': new Point(0, 0), 'endPoint': new Point(1, 1), 'startColor': 'red', 'endColor': 'blue'
     * });
     * const renderingHints = {
     *    'casing':
     *           {'shoe': {'fillstyle': gradStyleMud}}
     * };
     * wellBoreNode.setRenderingHints(renderingHints);
     * ```
     * @param hints rendering hints
     */
    setRenderingHints(hints: object | null): this;
    /**
     * Gets forced open hole state
     */
    getForceOpenHole(): boolean;
    /**
     * Sets forced open hole mode
     * @param force mode state
     */
    setForceOpenHole(force: boolean): this;
    /**
     * @param disposeComponents automatically dispose components
     */
    protected clearComponents(disposeComponents?: boolean): void;
    /**
     * Gets iterator over its {@link @int/geotoolkit/schematics/scene/ComponentNode.ComponentNode} components
     * @param filter a filter function
     */
    getComponents(filter?: Function): Iterator;
    /**
     * Gets factory registry associated with the node.
     */
    getFactoryRegistry(): ComponentNodeFactoryRegistry;
    /**
     * Associates the factory registry with the node.
     * @param factoryRegistry factory registry to be associated with the node
     */
    setFactoryRegistry(factoryRegistry: ComponentNodeFactoryRegistry): this;
    /**
     * Gets well bore data the node is built on.
     */
    getWellBoreData(): WellBoreData;
    /**
     * Sets well bore data to build the node on.
     * @param wellBoreData well bore data the node is built on
     */
    setWellBoreData(wellBoreData: WellBoreData): this;
    /**
     * Sets visibility for all components, or just the components with specified name or ID
     * @param visible visibility state
     * @param value component name or ID
     */
    setVisible(visible: boolean, value?: string): this;
    /**
     * Gets visibility (convenience method)
     * @param componentName component name
     */
    getVisible(componentName?: string): boolean;
    /**
     * Gets visibility settings (see "setComponentsVisibility" for detailed format)
     */
    getComponentsVisibility(): any;
    /**
     * Sets component visibility according to the component names/ID-s passed (convenience method).
     * @param parameter visibility options
     * @param parameter.visible array of visible component names or JSON object
     * @param parameter.visible.name array of visible component names
     * @param parameter.visible.id array of visible component ids
     * @param parameter.invisible array of invisible component names or JSON object
     * @param parameter.invisible.name array of invisible component names
     * @param parameter.invisible.id array of invisible component ids
     */
    setComponentsVisibility(parameter: object | { visible?: any[] | object | { name?: string[] | string; id?: string[] | string; } ; invisible?: any[] | object | { name?: string[] | string; id?: string[] | string; } ; } ): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {data: WellBoreData; sortcomponents: SortComponents; highlight: {boundscalculation: BoundsCalculation; cssclass: string; linestyle: LineStyle; fillstyle: FillStyle}; forceopenhole: boolean; renderinghints: any; viewMode: ViewMode; valueviewmode: ValueViewMode; units: {depth: string | AbstractUnit; value: string | AbstractUnit}} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.data well bore data the node is built on
     * @param properties.sortcomponents sort components
     * @param properties.highlight component highlight options
     * @param properties.highlight.boundscalculation implementation to calculate component's area to highlight
     * @param properties.highlight.cssclass define component highlight class name
     * @param properties.highlight.linestyle define line style attribute for component highlight
     * @param properties.highlight.fillstyle define fill style attribute for component highlight
     * @param properties.forceopenhole force showing open hole
     * @param properties.renderinghints rendering hints for components
     * @param properties.registry factory registry
     * @param properties.viewMode well bore view mode
     * @param properties.viewMode.name view mode name (type)
     * @param properties.viewMode.options view mode options
     * @param properties.viewMode.options.tolerance gap/overlap tolerance along MD axis (for "Compressed" view mode)
     * @param properties.valueviewmode value view mode
     * @param properties.units units options
     * @param properties.units.depth depth units
     * @param properties.units.value value units
     */
    setProperties(properties?: object | { data?: WellBoreData; sortcomponents?: SortComponents; highlight?: object | { boundscalculation?: BoundsCalculation; cssclass?: string; linestyle?: LineStyle; fillstyle?: FillStyle; } ; forceopenhole?: boolean; renderinghints?: any; registry?: ComponentNodeFactoryRegistry; viewMode?: object | { name?: ViewMode; options?: object | { tolerance?: number; } ; }  | ViewMode; valueviewmode?: ValueViewMode; units?: object | { depth?: string | AbstractUnit; value?: string | AbstractUnit; } ; } ): this;
    /**
     * Gets units options (see "setUnitsOptions"  API for the options format)
     */
    getUnitsOptions(): any;
    /**
     * Gets depth unit
     */
    getDepthUnit(): AbstractUnit;
    /**
     * Gets value unit
     */
    getValueUnit(): AbstractUnit;
    /**
     * Sets units options
     * @param unitOptions An object containing the properties to set
     * @param unitOptions.depth depth units
     * @param unitOptions.value value units
     */
    setUnitsOptions(unitOptions: object | { depth?: string | AbstractUnit; value?: string | AbstractUnit; } ): this;
}
/**
 * Events
 */
export enum Events {
    /**
     * Event type fired when components started loading
     */
    ComponentsLoading = 'ComponentsLoading',
    /**
     * Event type fired when components are loaded
     */
    ComponentsLoaded = 'ComponentsLoaded'
}
/**
 * ViewMode
 */
export enum ViewMode {
    /**
     * Regular
     */
    Regular = 0,
    /**
     * Compressed
     */
    Compressed = 1,
    /**
     * KeepAspectRatio
     */
    KeepAspectRatio = 2
}
/**
 * ValueViewMode
 */
export enum ValueViewMode {
    /**
     * Whole
     */
    Whole = 'whole',
    /**
     * LeftHalf
     */
    LeftHalf = 'lefthalf',
    /**
     * RightHalf
     */
    RightHalf = 'righthalf'
}
