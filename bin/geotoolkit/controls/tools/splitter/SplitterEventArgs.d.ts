import {ProxyEventArgs} from '../ProxyEventArgs';
import {EventArgs} from '../EventArgs';
import {Group} from '../../../scene/Group';

/**
 * SplitterEventArgs
 */
export class SplitterEventArgs extends ProxyEventArgs {
    /**
     * SplitterEventArgs
     * @param eventArgs info about the event arguments
     * @param delta delta
     * @param affectedPlots json object contains information about affected plots
     * @param affectedPlots.top top plot
     * @param affectedPlots.bottom bottom plot
     * @param affectedPlots.left left plot
     * @param affectedPlots.right right plot
     */
    constructor(eventArgs: EventArgs, delta: number, affectedPlots?: object | { top?: Group | any; bottom?: Group | any; left?: Group | any; right?: Group | any; } );
    /**
     * Return effective delta
     */
    getDelta(): number;
    /**
     * Returns affected plots
     */
    getPlots(): {top: Group | any; bottom: Group | any} | object;
}
/**
 * HorizontalSplitterEventArgs
 * @deprecated since 2021 (3.2) use geotoolkit.controls.tools.splitter.SplitterEventArgs instead
 */
export class HorizontalSplitterEventArgs extends ProxyEventArgs {
    /**
     * HorizontalSplitterEventArgs
     * @param eventArgs info about the event argments
     * @param delta delta
     * @param affectedPlots json object contains information about affected plots
     * @param affectedPlots.top top plot
     * @param affectedPlots.bottom bottom plot
     */
    constructor(eventArgs: EventArgs, delta: number, affectedPlots: object | { top?: Group | any; bottom?: Group | any; } );
}
