import {BaseEventArgs} from './BaseEventArgs';
import {Point} from '../../util/Point';
import {Node} from '../../scene/Node';
import {Plot} from '../../plot/Plot';

/**
 * Native event wrapper class.
 */
export class EventArgs extends BaseEventArgs {
    /**
     * Native event wrapper class.
     * @param eventName name of the event
     * @param nativeEventArgs arguments of the DOM event
     * @param plotPoint position of the mouse inside of the plot
     * @param node owner of the event
     * @param plot plot which renders nodes
     */
    constructor(eventName: string, nativeEventArgs: Event, plotPoint?: Point, node?: Node, plot?: Plot);
    /**
     * Returns native event target
     */
    getEventTarget(): any;
    /**
     * Returns point in plot coordinate
     */
    getPlotPoint(): Point | any;
    /**
     * Returns plot
     */
    getPlot(): Plot | any;
    /**
     * Returns node on the plot
     */
    getNode(): Node | any;
    /**
     * Returns original event args
     */
    getNativeEventArgs(): Event;
    /**
     * @param allow native event flag
     */
    protected allowNative(allow: boolean): boolean;
    /**
     * Cancels event processing
     * @param preventDefault prevent default system events
     * @param stopPropagation stop propagation to next listener
     */
    stopPropagation(preventDefault?: boolean, stopPropagation?: boolean): this;
    /**
     * Returns whether event position is inside of plot
     */
    inPlot(): boolean;
    /**
     * Sets touch points array
     * @param touches touch points
     */
    protected setTouches(touches: Point[]): this;
    /**
     * Returns touch points
     */
    protected getTouches(): Point[];
    /**
     * Returns point in css coordinates
     */
    getCSSPoint(): Point;
}
