import {AbstractTool} from '../AbstractTool';
import {CompositeNode} from '../../../scene/CompositeNode';
import {Orientation} from '../../../util/Orientation';
import {Group} from '../../../scene/Group';
import {LineStyle} from '../../../attributes/LineStyle';

/**
 * Creates default implementation of the splitter
 * Tool name: 'splitter'
 */
export class Splitter extends AbstractTool {
    /**
     * Creates default implementation of the splitter
     * Tool name: 'splitter'
     * @param options layer for holding temporary shapes or tool options
     * @param options.orientation splitter orientation
     * @param orientation splitter orientation
     */
    constructor(options?: CompositeNode | object | { orientation?: Orientation; } , orientation?: Orientation);
    /**
     * Set the plots managed by the splitter in the correct order (order on screen)
     * @param plots group for which we want to change the size
     */
    setPlots(plots: Group[]): this;
    /**
     * Sets splitter linestyle
     * @param linestyle splitter linestyle
     */
    setLineStyle(linestyle: LineStyle): void;
}
/**
 * Events
 */
export enum Events {
    /**
     * onPlotSizeChanged
     */
    onPlotSizeChanged = 'onPlotSizeChanged',
    /**
     * beforePlotSizeChanged
     */
    beforePlotSizeChanged = 'beforePlotSizeChanged',
    /**
     * onShow
     */
    onShow = 'onShow'
}
