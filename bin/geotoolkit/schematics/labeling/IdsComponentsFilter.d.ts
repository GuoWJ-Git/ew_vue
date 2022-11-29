import {IComponentsFilter} from './IComponentsFilter';
import {Iterator} from '../../util/iterator';
import {RenderingContext} from '../../renderer/RenderingContext';

/**
 * Filter component labels by IDs
 * @example
 * ```javascript
 * // Show label for components with specified IDs (hide ALL other labels):
 * import {IdsComponentsFilter} from '@int/geotoolkit/schematics/labeling/IdsComponentsFilter';
 * wellBoreWithLabels.getLabelingStrategy().setOptions({
 *       'componentsfilter': new IdsComponentsFilter({'ids': ['7', '13', '157']})
 * });
 * ```
 */
export class IdsComponentsFilter implements IComponentsFilter {
    /**
     * Filter component labels by IDs
     * @param options options
     * @param options.visible visibility flag
     * @param options.ids component ids(s) to show/hide labels (ALL labels are visible by defaults)
     */
    constructor(options: object | { visible?: boolean; ids?: string | any[]; } );
    /**
     * Gets iterator over filtered components
     * @param iterator input components iterator
     * @param context rendering context
     */
    filterComponents(iterator: Iterator, context: RenderingContext): Iterator;
    /**
     * Returns options (deep copy)
     */
    getOptions(): any;
    /**
     * Sets filtering options<br>
     * (NOTE: new options _replace_ old ones)
     * @param options options
     * @param options.visible visibility flag
     * @param options.ids component ID(s) to show/hide labels
     */
    setOptions(options: object | { visible?: boolean; ids: string | any[]; } ): this;
    /**
     * Returns all the properties pertaining to this object
     */
    getProperties(): {properties: object; options: {visible: boolean; ids: any[]}} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties properties
     * @param properties.visible visibility flag
     * @param properties.ids component IDs to show/hide labels
     */
    setProperties(properties: object | { visible: boolean; ids: any[]; } ): this;
    /**
     * Resets itself
     * @param options options
     */
    reset(options: any): this;
}
