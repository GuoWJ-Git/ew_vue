import {EventDispatcher} from '../util/EventDispatcher';
import {Node} from '../scene/Node';
import {IToolContainer} from './IToolContainer';
import {AnchoredShape} from '../scene/shapes/AnchoredShape';

/**
 * A plot with 2D rendering capabilities.<br>
 * The plot requires a canvas to be passed in the options to render its content.<br>
 * <br>
 * The plot is internally structured as a SceneGraph, using {@link @int/geotoolkit/scene/Node.Node}.<br>
 * Each node having a scene-transform transformation that will be applied at render time.<br>
 * <br>
 * The plot offers an autoupdate behavior that will check regularly if a render is required (using requestanimationframe if available,
 * polling otherwise).<br> When this autoupdate lands, the plot will check if it is flagged as dirty.<br> If so, it will trigger a render
 * phase.<br> This mechanism can be configured when instantiating the Plot or changed using the corresponding setters.<br> One could also
 * temporarily suspend any rendering by calling suspendUpdate in order to apply large scale changes or simply force the plot to hibernate
 * when not used/visible.<br>
 * <br>
 * If the autoupdate mechanism is not enabled, the client code is responsible of calling the update function to tell the plot that it
 * should render itself.<br>
 * <br>
 */
export class Plot extends EventDispatcher {
    /**
     * A plot with 2D rendering capabilities.<br>
     * The plot requires a canvas to be passed in the options to render its content.<br>
     * <br>
     * The plot is internally structured as a SceneGraph, using {@link @int/geotoolkit/scene/Node.Node}.<br>
     * Each node having a scene-transform transformation that will be applied at render time.<br>
     * <br>
     * The plot offers an autoupdate behavior that will check regularly if a render is required (using requestanimationframe if available,
     * polling otherwise).<br> When this autoupdate lands, the plot will check if it is flagged as dirty.<br> If so, it will trigger a render
     * phase.<br> This mechanism can be configured when instantiating the Plot or changed using the corresponding setters.<br> One could also
     * temporarily suspend any rendering by calling suspendUpdate in order to apply large scale changes or simply force the plot to hibernate
     * when not used/visible.<br>
     * <br>
     * If the autoupdate mechanism is not enabled, the client code is responsible of calling the update function to tell the plot that it
     * should render itself.<br>
     * <br>
     * @param options The plot options
     * @param options.canvaselement The canvas to be used as target for rendering
     * @param options.root The scenegraph root
     * @param options.autoupdate If true, the plot will automatically update when a node is invalidated
     * @param options.autoupdateinterval Auto update time interval. window.requestAnimationFrame will be used if available and
     *     autoUpdateInterval not specified
     * @param options.infiniteautoupdate Enables or disables infinite auto update mechanism.<br>
     * if true, run timer or request animation frame in infinite loop overwise if node is invalidated it will trigger a Plot
     * update/render. if false, browser pixel scale is not updated.
     * @param options.autosize If true, canvas element automatically fulfill its parent element
     * @param options.autorootbounds If true, set automatically root node bounds to the size of the canvas
     * @param options.suspendupdate Suspend plot update until resumeUpdate is called
     * @param options.offscreendetection Suspend auto plot update if canvas is not in the visible part of the page. if this mode is enabled then
     * infiniteautoupdate is enabled automatically
     * @param options.debuginfo If true, plot will write to console render time in milliseconds
     * @param options.canvassize 
     * @param options.divelement 
     */
    constructor(options?: object | { canvaselement?: HTMLCanvasElement; root?: Node; autoupdate?: boolean; autoupdateinterval?: number; infiniteautoupdate?: boolean; autosize?: boolean; autorootbounds?: boolean; suspendupdate?: boolean; offscreendetection?: boolean; debuginfo?: boolean; canvassize?: number; divelement?: HTMLDivElement; } );
    /**
     * Returns root tool associated to plot
     */
    getTool(): IToolContainer;
    /**
     * Enable/disable dev tool support
     * @param enabled True to enable dev tool support, false otherwise
     */
    static setEnableDevTool(enabled: boolean): void;
    /**
     * Disposes the plot and the associated resources.<br>
     * This may also call dispose on the root node (see disposeRoot).<br>
     * The plot should not be used/accessed anymore after this has been called.<br>
     * @param disposeRoot Also dispose root node
     */
    dispose(disposeRoot?: boolean): void;
    /**
     * Sets the root node ot be the given node.<br>
     * @param root The scenegraph root node
     */
    setRoot(root: Node): this;
    /**
     * Returns the root node of the scenegraph.<br>
     */
    getRoot(): Node;
    /**
     * Sets watermark to have on a plot
     * @example
     * ```javascript
     * import {Text} from '@int/geotoolkit/scene/shapes/Text';
     * import {AnchorType} from '@int/geotoolkit/util/AnchorType';
     * const watermark = new Text({
     *     'alignment': AnchorType.LeftBottom, // watermark position on the screen
     *     'textstyle': {
     *         'font': '60px sans-serif'
     *     },
     *     'text': 'My Watermark'
     * });
     * plot.setWatermark(watermark);
     * ```
     * @param watermark watermark shape
     */
    setWatermark(watermark: AnchoredShape | any): this;
    /**
     * Updates the plot, forcing a render.<br>
     * This will be called automatically when the plot has been marked as dirty if the autoupdate is enabled.<br>
     */
    update(): this;
    /**
     * Returns the canvas element or elements used by this plot
     */
    getCanvas(): HTMLCanvasElement | HTMLCanvasElement[];
    /**
     * Sets the plot size to the given dimensions.<br>
     * This will also change the canvas size if autosize is enabled.<br>
     * If autorootbounds is enabled, this will also update the bounds of the root node.<br>
     * @param width The width of plot
     * @param height The height of plot
     */
    setSize(width: number, height: number): this;
    /**
     * Returns the containing element for the plot<br>
     * This is either the canvas element or the div element depending on the chosen functionality<br>
     */
    getContainingElement(): HTMLElement | null;
    /**
     * Returns the containing element width in virtual pixels.<br>
     * This returns the raw size given at initialization or through the setSize function.<br>
     * It ignores any Browser zoom.<br>
     */
    getWidth(): number;
    /**
     * Returns the containing element height in virtual pixels.<br>
     * This returns the raw size given at initialization or through the setSize function.<br>
     * It ignores any Browser zoom.<br>
     */
    getHeight(): number;
    /**
     * Suspends plot update, preventing the update function from triggering a render.<br>
     */
    suspendUpdate(): this;
    /**
     * Resumes plot update, allowing the update function of triggering a render.<br>
     * @param refresh If set to true, a render will be run immediately
     */
    resumeUpdate(refresh?: boolean): this;
    /**
     * Enables or disables auto update mechanism.<br>
     * If auto update is enabled, whenever a node is invalidated it will trigger a Plot update/render.<br>
     * @param enable The autoupdate status
     * @param infinite Enables or disables infinite auto update mechanism.<br>
     * if true, run timer or request animation frame in infinite
     * loop overwise if node is invalidated it will trigger a Plot
     * update/render. if false, browser pixel scale is not updated.
     */
    setAutoUpdate(enable: boolean, infinite?: boolean): this;
    /**
     * Return true if auto update is enabled.<br>
     */
    isAutoUpdate(): boolean;
    /**
     * Return true if infinite auto update is enabled.<br>
     */
    isInfiniteAutoUpdate(): boolean;
    /**
     * Sets the time interval for autoupdate mechanism.<br>
     * This will define the delay for polling the status of the Plot and trigger an update/render if necessary.<br>
     * @param interval The time interval in ms. window.requestAnimationFrame will be used if available and interval set to null.
     */
    setAutoUpdateInterval(interval?: number): this;
    /**
     * Returns the time interval for autoupdate mechanism.<br>
     */
    getAutoUpdateInterval(): number | null;
    /**
     * Returns the client rect for the plots container element as DOMRect.<br>
     */
    getBoundingClientRect(): object | null;
    /**
     * Enable or disable autosize mechanism.<br>
     * If enabled, this will let the Plot resize the associated canvas whenever the plot itself is resized.<br>
     * @param autoSize The status of autosize
     */
    setAutoSize(autoSize: boolean): this;
    /**
     * Forces a resize on the plot using its known width and height.<br>
     */
    onResize(): this;
}
/**
 * Plot events
 */
export enum Events {
    /**
     * Rendering
     */
    Rendering = 'rendering',
    /**
     * Rendered
     */
    Rendered = 'rendered',
    /**
     * Invalidated
     */
    Invalidated = 'invalidated',
    /**
     * Resized
     */
    Resized = 'resized'
}
