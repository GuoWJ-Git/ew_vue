import {BaseWidget} from '../../widgets/BaseWidget';
import {ISchematicsWidget} from './ISchematicsWidget';
import {WellBoreData} from '../data/WellBoreData';
import {ViewMode} from '../scene/WellBoreNode';
import {LabelingStrategy} from '../labeling/LabelingStrategy';
import {Rect} from '../../util/Rect';
import {SchematicsWidget} from './SchematicsWidget';

/**
 * <p>
 * A schematics widget overrides {@link @int/geotoolkit/widgets/BaseWidget.BaseWidget} class
 * to work with two {@link @int/geotoolkit/schematics/data/WellBoreData.WellBoreData} instances
 * to show/compare two states of schematics (for example, "Planned" vs. "Actual")
 * </p>
 * @example
 * ```javascript
 * import {DualSchematicsWidget} from '@int/geotoolkit/schematics/widgets/DualSchematicsWidget';
 * // Initialize the data
 * // ...
 * // Create the widget using the data
 * const widget = new DualSchematicsWidget({
 *      // ... common options
 *     'planned': {
 *      // ... 'planned' options
 *      },
 *      'actual':  {
 *         // ... 'actual' options
 *      }
 *     'data': {
 *         'planned': {
 *             // ... 'planned' data
 *         },
 *         'actual':  {
 *             // ... 'actual' data
 *         }
 *      }
 * });
 * ```
 */
export class DualSchematicsWidget extends BaseWidget implements ISchematicsWidget {
    /**
     * <p>
     * A schematics widget overrides {@link @int/geotoolkit/widgets/BaseWidget.BaseWidget} class
     * to work with two {@link @int/geotoolkit/schematics/data/WellBoreData.WellBoreData} instances
     * to show/compare two states of schematics (for example, "Planned" vs. "Actual")
     * </p>
     * @param options argument object
     * @param options.planned specific planned-half options (@see {@link @int/geotoolkit/schematics/widgets/SchematicsWidget.SchematicsWidget#setProperties} for details)
     * @param options.actual specific actual-half (@see {@link @int/geotoolkit/schematics/widgets/SchematicsWidget.SchematicsWidget#setProperties} for details)
     * @param options.data data
     * @param options.data.planned planned wellbore data to set
     * @param options.data.actual actual wellbore data to set
     */
    constructor(options?: object | { planned?: any; actual?: any; data?: object | { planned?: WellBoreData | any[]; actual?: WellBoreData | any[]; } ; } );
    /**
     * Sets properties
     * @param properties argument object
     * @param properties.planned specific planned-half options (@see {@link @int/geotoolkit/schematics/widgets/SchematicsWidget.SchematicsWidget#setProperties} for details)
     * @param properties.actual specific actual-half (@see {@link @int/geotoolkit/schematics/widgets/SchematicsWidget.SchematicsWidget#setProperties} for details)
     * @param properties.data data
     * @param properties.data.planned planned wellbore data to set
     * @param properties.data.actual actual wellbore data to set
     */
    setProperties(properties?: object | { planned?: any; actual?: any; data?: object | { planned?: WellBoreData | any; actual?: WellBoreData | any; } ; } ): this;
    /**
     * Returns properties
     */
    getProperties(): {planned: any; actual: any} | any;
    /**
     * Sets widget data
     * @param data data to set
     * @param data.planned planned wellbore data to set
     * @param data.actual actual wellbore data to set
     */
    setData(data?: object | { planned?: WellBoreData | any[] | null; actual?: WellBoreData | any[] | null; }  | any): this;
    /**
     * Gets well bore view mode.<br>
     * The implementations returns geotoolkit.schematics.scene.WellBoreNode.ViewMode.Regular always.
     */
    getViewMode(): ViewMode;
    /**
     * Gets labeling strategy. The implementations returns null.<br>
     * To retreive specific ("planned" or "actual" widget's) strategy call for
     * this.getPlannedWidget().getLabelingStrategy() or this.getActualWidget().getLabelingStrategy().
     */
    getLabelingStrategy(): LabelingStrategy | null;
    /**
     * Gets widget options (@see {@link @int/geotoolkit/schematics/widgets/DualSchematicsWidget.DualSchematicsWidget}~setOptions for details)
     */
    getOptions(): object | any;
    /**
     * Gets data model limits as a union of underlying widget's data model limits
     */
    getCenterModelLimits(): Rect | null;
    /**
     * Sets widget options
     * @param options widget options<br>
     * The top-most options may include settings common for both halves.<br>
     * If an option defined in the top-most section is also defined in specific display mode,
     * then the specific value overrides common one.
     * @param options.planned planned-half options (@see {@link @int/geotoolkit/schematics/widgets/SchematicsWidget.SchematicsWidget}~setOptions for details)
     * @param options.actual actual-half (@see {@link @int/geotoolkit/schematics/widgets/SchematicsWidget.SchematicsWidget}~setOptions for details)
     */
    setOptions(options: object | { planned?: any; actual?: any; } ): this;
    /**
     * Gets 'planned' schematics widget (widget on left side)
     */
    getPlannedWidget(): SchematicsWidget;
    /**
     * Gets 'actual' schematics widget (widget on right side)
     */
    getActualWidget(): SchematicsWidget;
    /**
     * Sets well bore view mode
     * @param viewMode well bore view mode
     * @param options the mode options
     */
    setViewMode(viewMode: ViewMode, options?: object): {modelLimitsDepths: any[]; boundsDepths: any[]} | object;
}
