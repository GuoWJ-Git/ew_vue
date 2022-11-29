import {AbstractTool} from './AbstractTool';
import {Functions} from '../../animation/Easing';
import {ZoomEventArgs} from './ZoomEventArgs';

/**
 * Defines a Zoom tool for the target or object to zoom. It supports various events shown below and has builtin functions to capture the wheel ratios.
 */
export class Zoom extends AbstractTool {
    /**
     * Defines a Zoom tool for the target or object to zoom. It supports various events shown below and has builtin functions to capture the wheel ratios.
     * @param options options for the tool
     * @param options.name tool name
     * @param options.min minimum limits for zooming (>= 0)
     * @param options.max maximum limits for zooming (>= options.zoom.min)
     * @param options.speed speed of zooming (>= 1)
     * @param options.time zooming time in ms (> 0 for elastic, 0 for instant)
     * @param options.easing easing animation function for elastic zooming
     * @param options.mode mode of pinch zooming
     */
    constructor(options?: object | { name?: string; min?: number; max?: number; speed?: number; time?: number; easing?: Functions; mode?: Mode; } );
    /**
     * Stops elastic zooming process
     * @remarks fires {@link @int/geotoolkit/controls/tools/Zoom~Events~onZoomEnd}
     * @param eventArgs event args
     */
    stopInertia(eventArgs?: ZoomEventArgs): this;
    /**
     * Sets zoom mode
     * @param mode mode of zooming
     */
    setMode(mode: Mode): this;
    /**
     * Scales node content to point
     * @param zoomx zoom X (> 0)
     * @param zoomy zoom Y (> 0)
     * @param pointx point X
     * @param pointy point Y
     */
    zoom(zoomx: number, zoomy?: number, pointx?: number, pointy?: number): void;
    /**
     * Sets properties
     * @param properties properties for the tool
     * @param properties.name tool name
     * @param properties.min minimum limits for zooming (>= 0)
     * @param properties.max maximum limits for zooming (>=min)
     * @param properties.speed speed of elastic zooming (>= 1)
     * @param properties.time time of elastic zooming (>= 0)
     * @param properties.easing easing animation function for elastic zooming
     * @param properties.mode mode of zooming
     */
    setProperties(properties?: object | { name?: string; min?: number; max?: number; speed?: number; time?: number; easing?: Functions; mode?: Mode; } ): this;
    /**
     * Gets properties
     */
    getProperties(): {min: number; max: number; speed: number; time: number; easing: Functions; mode: Mode} | any;
}
/**
 * Zoom mode enum
 */
export enum Mode {
    /**
     * Only horizontal zoom
     */
    X = 0,
    /**
     * Only vertical zoom
     */
    Y = 1,
    /**
     * Horizontal and vertical zoom
     */
    XY = 2,
    /**
     * Zoom from the users' touch point
     */
    TouchPoint = 4
}
/**
 * Zoom tool events
 */
export enum Events {
    /**
     * This Event is fired when the Tool starts zoom
     */
    onZoomStart = 'onZoomStart',
    /**
     * This Event is fired when the Tool zooms
     */
    onZoom = 'onZoom',
    /**
     * This Event is fired when the Tool stops zoom
     */
    onZoomEnd = 'onZoomEnd',
    /**
     * This Event is fired on double click
     */
    onDoubleClick = 'onDoubleClick'
}
