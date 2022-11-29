import {LabelData} from './LabelData';
import {ILabelsFilter} from './ILabelsFilter';
import {RenderingContext} from '../../renderer/RenderingContext';
import {LabelShape} from './LabelShape';

/**
 * Callback label weight
 */
export type labelWeight = (info: LabelData) => number;
/**
 */
export class NoLabelOverlapFilter implements ILabelsFilter {
    /**
     * @param options 
     * @param options.weight labels weight to specify which labels to show/hide.
     * Labels weight can be based on a custom weight function (Labels with more weight are annotated).
     * By default uses labels's text length as labels priority (longer label has higher priority).
     */
    constructor(options?: object | { weight?: labelWeight; } );
    /**
     * Gets filtered labels
     * @param labels input array
     * @param context rendering context
     * @param labelShape label shape template
     */
    filterLabels(labels: LabelData[], context: RenderingContext, labelShape: LabelShape): LabelData[];
    /**
     * Resets itself
     */
    reset(): this;
}
