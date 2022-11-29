import {Point} from '../../util/Point';
import {EventArgs} from './EventArgs';
import {Range} from '../../util/Range';
import {AbstractTool} from './AbstractTool';
import {AnchorType} from '../../util/AnchorType';
import {Orientation} from '../../util/Orientation';
import {PointerMode} from './PointerMode';

/**
 * Callback to return information about the current position of tooltip.
 */
export type callback = (point: Point, eventArgs?: EventArgs, tool?: ToolTipTool) => any | string | string[] | ToolTipInfo | ToolTipInfo[];
/**
 * Callback for setTooltipPositionHandler
 */
export type positionCallback = (modelPoint: Point, devicePoint: Point, eventArgs: EventArgs) => Point | Point[];
/**
 * Callback for setTooltipSizeHandler
 */
export type sizeCallback = (modelPoint: Point, devicePoint: Point, eventArgs: EventArgs, info: string | string[]) => Range | Range[];
/**
 * Provides HTML based tooltip tool to display content information
 * To initialize it is necessary to add div element on your page and specify styles:
 * @example
 * ```javascript
 * <div id="tooltip-container" style="display:none"></div>
 * ```
 */
export class ToolTipTool extends AbstractTool {
    /**
     * Provides HTML based tooltip tool to display content information
     * To initialize it is necessary to add div element on your page and specify styles:
     * @param options tool options
     * @param options.name name of the tool
     * @param options.divelement HTML div container element or callback which creating div or it will be created with className cg-tooltip-container
     * @param options.offsetx offset of tooltip from current position by x in pixels
     * @param options.offsety offset of tooltip from current position by y in pixels
     * @param options.alignment tooltip alignment according to the point set by offsets
     * @param options.orientation tooltip orientation
     * @param options.mode tooltip appearance mode
     * @param options.callback callback to return information about the current position
     * @param options.init callback function to initialize tool
     * @param options.autoupdate true if tooltip info should be auto updated after layer.invalidate() was called
     * @param options.autoflip true if need to flip the tooltip near the edge of the window to avoid cropped tooltip
     * @param options.delay delay between displaying tooltip
     * @param options.positionhandler Handler to resolve tooltip position, to be called every time mouse position changed
     * @param options.sizehandler Handler to resolve tooltip size range, to be called every time mouse position changed
     */
    constructor(options?: object | { name?: string; divelement?: HTMLElement | Function; offsetx?: number; offsety?: number; alignment?: AnchorType; orientation?: Orientation; mode?: PointerMode | string; callback?: callback; init?: Function; autoupdate?: boolean; autoflip?: boolean; delay?: number; positionhandler?: positionCallback; sizehandler?: sizeCallback; } );
    /**
     * Set callback to return information about the current position
     * @param callback callback
     */
    setCallback(callback: callback): this;
    /**
     */
    onEnabledStateChanged(): void;
    /**
     * Sets tooltip offset x
     * @param offsetX offset x
     */
    setOffsetX(offsetX: number): this;
    /**
     * Sets tooltip offset y
     * @param offsetY offset y
     */
    setOffsetY(offsetY: number): this;
    /**
     * Gets tooltip div element or callback for creates div element
     */
    getDivElement(): HTMLElement | Function;
    /**
     * Sets tooltip div element or callback for creates div element
     * @param divElement HTML div container element or callback which creating div
     */
    setDivElement(divElement: HTMLElement | Function): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {offsetx: number; offsety: number; alignment: AnchorType; orientation: Orientation; mode: PointerMode | string; autoupdate: boolean; autoflip: boolean; delay: number} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.name name of the tool
     * @param properties.divelement HTML div container element or callback which creating div or it will be created with className cg-tooltip-container
     * @param properties.offsetx offset of tooltip from current position by x in pixels
     * @param properties.offsety offset of tooltip from current position by y in pixels
     * @param properties.alignment tooltip alignment according to the point set by offsets
     * @param properties.orientation tooltip orientation
     * @param properties.mode tooltip appearance mode
     * @param properties.callback callback to return information about the current position
     * @param properties.init callback function to initialize tool
     * @param properties.autoupdate true if tooltip info should be auto updated after layer.invalidate() was called
     * @param properties.autoflip true if need to flip the tooltip near the edge of the window to avoid cropped tooltip
     * @param properties.delay delay between displaying tooltip
     * @param properties.positionhandler Handler to resolve tooltip position, to be called every time mouse position changed
     * @param properties.sizehandler Handler to resolve tooltip size range, to be called every time mouse position changed
     */
    setProperties(properties?: object | { name?: string; divelement?: HTMLElement | Function; offsetx?: number; offsety?: number; alignment?: AnchorType; orientation?: Orientation; mode?: PointerMode | string; callback?: callback; init?: Function; autoupdate?: boolean; autoflip?: boolean; delay?: number; positionhandler?: positionCallback; sizehandler?: sizeCallback; } ): this;
    /**
     * Sets tooltip options
     * @param options options
     * @param options.offsetx offset of tooltip from current position by x in pixels
     * @param options.offsety offset of tooltip from current position by y in pixels
     * @param options.alignment tooltip alignment according to the point set by offsets
     * @param options.orientation tooltip orientation
     * @param options.autoupdate true if tooltip info should be auto updated after layer.invalidate() was called
     * @param options.autoflip true if need to flip the tooltip near the edge of the window to avoid cropped tooltip
     * @param options.positionhandler Handler to resolve tooltip position, to be called every time mouse position changed
     * @param options.sizehandler Handler to resolve tooltip size range, to be called every time mouse position changed
     */
    setOptions(options?: object | { offsetx?: number; offsety?: number; alignment?: AnchorType; orientation?: Orientation; autoupdate?: boolean; autoflip?: boolean; positionhandler?: positionCallback; sizehandler?: sizeCallback; } ): this;
    /**
     * Updates tooltip information using previous tooltip point
     */
    updateInfo(): this;
    /**
     * Gets tooltip position handler, this handler will be called every time mouse position changed
     */
    getTooltipPositionHandler(): positionCallback;
    /**
     * Set tooltip position handler, this handler will be called every time mouse position changed
     * @param handler Handler to be called
     */
    setTooltipPositionHandler(handler?: sizeCallback): this;
    /**
     * Gets tooltip size handler, this handler will be called every time mouse position changed
     */
    getTooltipSizeHandler(): sizeCallback;
    /**
     * Set tooltip size handler, this handler will be called every time mouse position changed
     * @param handler Handler to be called
     */
    setTooltipSizeHandler(handler?: sizeCallback): this;
}
/**
 * Defines object containing tooltip info
 */
export type ToolTipInfo = { content: string | null; sizerange: Range | null; clientpoint: Point | null}
