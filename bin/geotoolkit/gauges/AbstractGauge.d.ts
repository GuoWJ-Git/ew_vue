import {AbstractNode} from '../scene/AbstractNode';
import {INodeEnumerable} from '../scene/INodeEnumerable';
import {ILayoutable} from '../layout/ILayoutable';
import {Rect} from '../util/Rect';
import {FunctionRegistry} from './registry/FunctionRegistry';
import {FillStyle} from '../attributes/FillStyle';
import {LineStyle} from '../attributes/LineStyle';
import {Regions} from './layout/Regions';
import {Group} from '../scene/Group';
import {Layers} from './layout/Layers';
import {Iterator} from '../util/iterator';
import {Region} from './layout/Region';
import {LayoutStyle} from '../layout/LayoutStyle';
import {RenderingContext} from '../renderer/RenderingContext';
import {Transformation} from '../util/Transformation';

/**
 */
export class AbstractGauge extends AbstractNode implements INodeEnumerable, ILayoutable {
    /**
     * @param options JSON with gauge properties
     * @param options.x X coordinate of left top corner of the gauge in its parent model limits
     * @param options.y Y coordinate of left top corner of the gauge in its parent model limits
     * @param options.width Width of the gauge in its parent model limits
     * @param options.height Height of the gauge in its parent model limits
     * @param options.bounds Bounds of the gauge in parent model limits. Will override x,y,widht,height
     * @param options.functionregistry Function registry which will be used
     * as a source of handler functions (ex: animation easing functions)
     * @param options.clipping Container group clipping
     * @param options.fillstyle a new fill style
     * @param options.linestyle line style
     */
    constructor(options: object | { x?: number; y?: number; width?: number; height?: number; bounds?: Rect; functionregistry?: FunctionRegistry; clipping?: boolean; fillstyle?: FillStyle | string | object; linestyle?: LineStyle | string | object; } );
    /**
     * Copy constructor function
     * Used to clone gauge
     * @param gauge source gauge
     */
    protected copyConstructor(gauge: AbstractGauge): this;
    /**
     * Returns current bounds of the gauge
     */
    getBounds(): Rect;
    /**
     * Sets bounds to the gauge
     * @param bounds New bounds
     */
    setBounds(bounds: Rect): this;
    /**
     * For North, South sides sets height, for East and West sets width, for custom regions sets x, y, width and height
     * @param regionType Name of the region
     * @param size Width or height of a side in CSS format, or an object with properties for custom regions
     * @param size.x X of the region in CSS notation
     * @param size.y Y of the region in CSS notation
     * @param size.width Width of the region in CSS notation
     * @param size.height Height of the region in CSS notation
     */
    setRegionSize(regionType: Regions | string, size: number | string | object | { x?: number | string; y?: number | string; width?: number | string; height?: number | string; } ): this;
    /**
     * Sets innergroup clipping
     * @param clipping clipping
     */
    enableClipping(clipping: boolean): this;
    /**
     * Adds a custom component to provided specified region. A custom component is a group with any geometry
     * inside. The group bounds will be changed to fit the region it is added to. To maintain the size of your custom
     * group it is better to add a custom region to the gauge.
     * @param component A group with custom shape(s)
     * @param region Name of the region to add component to. If such region does not
     * exist nothing will happen and the custom shape will not be added
     * @param layer name of gauge layer to add component
     */
    addCustomComponent(component: Group, region: Regions | string, layer: Layers | string): this;
    /**
     * Return iterator on registered custom components
     * @param filter a filter function. Returns all nodes if null
     */
    getCustomComponents(filter?: Function): Iterator;
    /**
     * Returns a registered custom component by its index
     * @param index Index or name of the component to return
     */
    getCustomComponent(index: number | string): Group | null;
    /**
     * Removes a registered custom component from the gauge. If such component was not registered, does nothing.
     * @param component The component which has to be deleted, or its index
     * in iterator.
     */
    removeCustomComponent(component: Group | number): this;
    /**
     * Adds a new region to the gauge. Region is a rectangular area on the gauge defined by x, y, width and height
     * all set in CSS format.
     * @param name Name of the region or a json with region parameters (including name)
     * @param name.name Name of the region
     * @param name.x x-coordinate of the region
     * @param name.y y-coordinate of the region
     * @param name.width width of the region
     * @param name.height height of the region
     * @param region JSON with region parameters
     */
    addRegion(name: string | object | { name?: string | number; x?: string | number; y?: string | number; width?: string | number; height?: string | number; } , region?: object): this;
    /**
     * Deletes a region from the layout. Only custom added regions can be removed. Will do nothing if
     * no such region was registered
     * @param name Name of the region
     */
    removeRegion(name: string): this;
    /**
     * Returns the region registered with provided name.
     * @param name Name of the region to return
     */
    getRegion(name: Regions | string): Region;
    /**
     * Debug method to display regions of the gauge in different colors
     * @param name If you want to display only one region, pass its name here
     */
    displayRegions(name?: string): this;
    /**
     * Hides the regions displayed for debug reasons
     */
    hideRegions(): this;
    /**
     * Returns the current layout of the gauge
     */
    getLayoutStyle(): LayoutStyle;
    /**
     * Specify desired layout style
     * @param layoutStyle desired layout style
     * @param merge true if you want to merge layoutStyle with existing attribute, false by default
     */
    setLayoutStyle(layoutStyle: LayoutStyle | object, merge?: boolean): this;
    /**
     * Sets function registry which will provide handlers for gauges animation and alarms
     * @param registry New registry to set
     */
    setFunctionRegistry(registry: FunctionRegistry): this;
    /**
     * Returns function registry which provides handlers for gauges animation and alarms
     */
    getFunctionRegistry(): FunctionRegistry;
    /**
     * Update scene transformation
     */
    updateSceneTransformation(): this;
    /**
     * Check if gauge falls within visible area on the screen
     * @param context Rendering Context
     */
    checkCollision(context: RenderingContext): boolean;
    /**
     * Sets properties pertaining to this gauge.
     * @param props JSON with properties
     * @param props.x X coordinate of gauge in its parent model limits
     * @param props.y Y coordinate of gauge in its parent model limits
     * @param props.width Width of the gauge in its parent model limits
     * @param props.height Height of the gauge in its parent model limits
     * @param props.bounds Bounds of the gauge in parent model limits. Overrides x, y, width, and Height
     * @param props.functionregistry Function registry which will be used
     * @param props.clipping Enables/disables axis label clipping
     * @param props.fillstyle a new fill style
     * @param props.linestyle line style
     */
    setProperties(props: object | { x?: number; y?: number; width?: number; height?: number; bounds?: Rect; functionregistry?: FunctionRegistry; clipping?: boolean; fillstyle?: FillStyle | string | object; linestyle?: LineStyle | string | object; } ): this;
    /**
     * Sets properties pertaining to this gauge.
     * @deprecated since 3.4, use setProperties instead
     * @param options JSON with properties (@see {@link @int/geotoolkit/gauges/AbstractGauge.AbstractGauge}~setProperties)
     */
    setOptions(options: any): this;
    /**
     * Gets properties pertaining to this gauge.
     * @deprecated since 3.4, use getProperties instead
     */
    getOptions(): object | any;
    /**
     * Gets properties pertaining to this gauge.
     */
    getProperties(): {bounds: Rect; functionregistry: FunctionRegistry; clipping: boolean; fillstyle: FillStyle; linestyle: LineStyle} | any;
    /**
     * Returns transformation from node to root scene
     */
    getSceneTransform(): Transformation;
    /**
     * Retrieves the transformation of bounds to parent
     */
    getLocalTransform(): Transformation;
    /**
     * Sets local transformation to be used to transform from local to parent
     * coordinate
     * @param localTransform local transformation for this node
     */
    setLocalTransform(localTransform: Transformation): this;
    /**
     * Enumerate children nodes
     * @param callback callback
     * @param target target
     */
    enumerateNodes(callback: Function, target: any): void;
}
/**
 * Layer to which a dynamic element should be added
 */
export enum DynamicElementPosition {
    /**
     * Top layer, displayed over everything else
     */
    Top = 'top',
    /**
     * Bottom layer, displayed under everything else
     */
    Bottom = 'bottom'
}
/**
 * Events fired by AbstractGauge
 */
export enum Events {
    /**
     * When gauge value has been updated
     */
    ValueUpdated = 'gaugeValueUpdated'
}
