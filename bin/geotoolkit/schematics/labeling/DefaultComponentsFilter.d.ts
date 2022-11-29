import {IComponentsFilter} from './IComponentsFilter';
import {ViewMode} from '../scene/WellBoreNode';
import {Iterator} from '../../util/iterator';
import {RenderingContext} from '../../renderer/RenderingContext';
import {Rect} from '../../util/Rect';

/**
 * Default components filter implementation
 * @example
 * ```javascript
 * // The component filter's parameter 'mdsizedevice' defines how small (in pixels) is component's height which is to be labeled.
 * import {DefaultComponentsFilter} from '@int/geotoolkit/schematics/labeling/DefaultComponentsFilter';
 * wellBoreWithLabels.getLabelingStrategy().setOptions({
 *       'componentsfilter': new DefaultComponentsFilter({'mdsizedevice': 100})
 * });
 * ```
 */
export class DefaultComponentsFilter implements IComponentsFilter {
    /**
     * Default components filter implementation
     * @param options options
     * @param options.labelinfoprovider label info provider
     * @param options.orientation orientation
     * @param options.viewmode view mode
     * @param options.mdsizedevice smallest component MD-size to have label (in device space)
     */
    constructor(options?: object | { labelinfoprovider?: Function; orientation?: string; viewmode?: ViewMode; mdsizedevice?: number; } );
    /**
     * Gets iterator over filtered components
     * @param iterator input components iterator
     * @param context rendering context
     */
    filterComponents(iterator: Iterator, context: RenderingContext): Iterator;
    /**
     * Resets itself using given options
     * @param options options
     * @param options.labelinfoprovider label info provider
     * @param options.orientation orientation
     * @param options.viewmode view mode
     * @param options.mdsizedevice smallest component size to have label (in device space)
     * @param options.labelsarea labels area in device space
     */
    reset(options?: object | { labelinfoprovider?: Function; orientation?: string; viewmode?: ViewMode; mdsizedevice?: number; labelsarea?: Rect; } ): this;
    /**
     * Returns options (deep copy)
     */
    getOptions(): any;
    /**
     * Returns all the properties pertaining to this object
     */
    getProperties(): {labelinfoprovider: Function; orientation: string; viewmode: ViewMode; mdsizedevice: number; labelsarea: Rect} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties properties
     * @param properties.labelinfoprovider label info provider
     * @param properties.orientation orientation
     * @param properties.viewmode view mode
     * @param properties.mdsizedevice smallest component MD-size to have label (in device space)
     */
    setProperties(properties?: object | { labelinfoprovider?: Function; orientation?: string; viewmode?: ViewMode; mdsizedevice?: number; } ): this;
}
