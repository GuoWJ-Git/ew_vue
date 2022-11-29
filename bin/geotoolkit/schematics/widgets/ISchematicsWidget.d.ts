import {ViewMode} from '../scene/WellBoreNode';
import {LabelingStrategy} from '../labeling/LabelingStrategy';
import {Rect} from '../../util/Rect';

/**
 * Defines base interface for all schematics widgets
 */
export abstract class ISchematicsWidget {
    /**
     * Gets well bore view mode
     */
    abstract getViewMode(): ViewMode;
    /**
     * Sets well bore view mode
     * @param viewMode well bore view mode
     * @param options the mode options
     */
    abstract setViewMode(viewMode: ViewMode, options?: object): {modelLimitsDepths: any[]; boundsDepths: any[]} | object;
    /**
     * Gets labeling strategy (if any)
     */
    abstract getLabelingStrategy(): LabelingStrategy | null;
    /**
     * Gets WellBoreNode's model limits
     */
    abstract getCenterModelLimits(): Rect | null;
    /**
     * Sets data
     * @param data wellbore data to set
     */
    abstract setData(data: any): this;
    /**
     * Gets widget options
     */
    abstract getOptions(): any;
    /**
     * Sets widget options
     * @param options widget options
     */
    abstract setOptions(options: any): this;
}
