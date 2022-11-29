import {AbstractTool} from './AbstractTool';
import {EventArgs} from './EventArgs';
import {Group} from '../../scene/Group';

/**
 * Defines a Panning tool for the target or object to pan. It supports various events shown below and has builtin functions to capture the panning direction and wheel ratios.<br>
 * User can use the default panning function or customize the function and add listeners.
 */
export class Panning extends AbstractTool {
    /**
     * Defines a Panning tool for the target or object to pan. It supports various events shown below and has builtin functions to capture the panning direction and wheel ratios.<br>
     * User can use the default panning function or customize the function and add listeners.
     * @param options options for the tool
     * @param options.name tool name
     * @param options.wheelratio number that represent the number default
     * @param options.acceptx 
     * @param options.inertiacoef inertia coefficient for inertia effect
     * @param options.panningthreshold Threshold to prevent panning. If user pointer movement is under this value the panning will be ignore.
     * WARNING: if you set positive inertia coefficient, some panning events'll be fired with null eventArgs
     */
    constructor(options?: object | { name?: string; wheelratio?: number; acceptx?: boolean; inertiacoef?: number | boolean; panningthreshold?: number; } );
    /**
     * returns Panning direction
     * @param eventArgs contains info of the event
     */
    getDirection(eventArgs: EventArgs): {x: number; y: number; start: {x: number; y: number}; end: {x: number; y: number}} | object;
    /**
     * Sets the target for panning
     * @param target the target for panning
     * @param translateMethod method that is responsible to translate the target
     */
    setTarget(target: Group, translateMethod?: Function | any): this;
    /**
     * returns acceptX
     */
    getAcceptX(): boolean;
    /**
     * set acceptX
     * @param acceptX true, if panning need to accept X in mouse wheel zooming
     */
    setAcceptX(acceptX: boolean): this;
    /**
     * returns wheel ratio
     */
    getWheelRatio(): number;
    /**
     * set wheel ratio
     * @param ratio wheel ratio
     */
    setWheelRatio(ratio: number): this;
    /**
     * Sets inertia coefficient for inertia effect while panning
     * WARNING: if you set positive inertia coefficient, some panning events'll be fired with null eventArgs
     * @param inertiaCoef inertia coefficient
     */
    setInertia(inertiaCoef: number | boolean): this;
    /**
     * Stop panning inertia effect
     * @remarks fires {@link @int/geotoolkit/controls/tools/Panning~Events~onPanningEnd}
     */
    stopInertia(): this;
    /**
     * Enable window events for moving mouse, when pointer is not on canvas
     * @param enabled true, if window events enabled
     */
    setWindowEventsEnabled(enabled: boolean): this;
    /**
     * Threshold to prevent panning.
     * If direction is under this value the panning will be ignore.
     * @param threshold Threshold value
     */
    setPanningThreshold(threshold: number): this;
    /**
     * Get panning threshold
     */
    getPanningThreshold(): number;
}
/**
 * Panning Events
 */
export enum Events {
    /**
     * This Event is fired when the Tool start Panning
     */
    onPanningStart = 'onPanningStart',
    /**
     * This Event is fired when the Tool is Panning
     */
    onPanning = 'onPanning',
    /**
     * This Event is fired when the Tool end Panning
     */
    onPanningEnd = 'onPanningEnd',
    /**
     * This Event is fired on double click
     */
    onDoubleClick = 'onDoubleClick'
}
