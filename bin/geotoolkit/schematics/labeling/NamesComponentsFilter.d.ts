import {IComponentsFilter} from './IComponentsFilter';
import {Iterator} from '../../util/iterator';
import {RenderingContext} from '../../renderer/RenderingContext';

/**
 * Filter component labels by names
 * @example
 * ```javascript
 * // Hide labels for 'casing' components only (show ALL other labels):
 * import {NamesComponentsFilter} from '@int/geotoolkit/schematics/labeling/NamesComponentsFilter';
 * wellBoreWithLabels.getLabelingStrategy().setOptions({
 *       'componentsfilter': new NamesComponentsFilter({'names': 'casing', 'visible': false})
 * });
 * ```
 */
export class NamesComponentsFilter implements IComponentsFilter {
    /**
     * Filter component labels by names
     * @param options options
     * @param options.visible visibility flag
     * @param options.names component name(s) to show/hide labels (ALL labels are visible by defaults)
     */
    constructor(options?: object | { visible?: boolean; names?: string | any[]; } );
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
     * @param options.names component name(s) to show/hide labels
     */
    setOptions(options: object | { visible?: boolean; names: string | any[]; } ): this;
    /**
     * Returns all the properties pertaining to this object
     */
    getProperties(): {properties: object; options: {visible: boolean; names: any[]}} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties properties
     * @param properties.visible visibility flag
     * @param properties.names component names to show/hide labels
     */
    setProperties(properties: object | { visible: boolean; names: any[]; } ): this;
    /**
     * Resets itself
     * @param options options
     */
    reset(options: any): this;
}
