import {LabelData} from './LabelData';
import {RenderingContext} from '../../renderer/RenderingContext';
import {LabelShape} from './LabelShape';

/**
 * Labels filter interface
 */
export abstract class ILabelsFilter {
    /**
     * Gets filtered labels
     * @param labels input array
     * @param context rendering context
     * @param labelShape label shape template
     */
    abstract filterLabels(labels: LabelData[], context: RenderingContext, labelShape: LabelShape): LabelData[];
    /**
     * Resets itself
     */
    abstract reset(): this;
}
