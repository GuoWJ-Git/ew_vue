import {IComponentsFilter} from './IComponentsFilter';
import {Iterator} from '../../util/iterator';
import {RenderingContext} from '../../renderer/RenderingContext';
import {LocationType} from './LocationType';

/**
 * Filter implementation accepting a function with three parameters:<br>
 * 1) component node (@see {@link @int/geotoolkit/schematics/scene/ComponentNode.ComponentNode})<br>
 * 2) rendering context (@see {@link @int/geotoolkit/renderer/RenderingContext.RenderingContext})<br>
 * 3) options (with options['locationtype'] of @see {@link @int/geotoolkit/schematics/labeling/LocationType.LocationType})<br>
 */
export class FunctionComponentsFilter implements IComponentsFilter {
    /**
     * Filter implementation accepting a function with three parameters:<br>
     * 1) component node (@see {@link @int/geotoolkit/schematics/scene/ComponentNode.ComponentNode})<br>
     * 2) rendering context (@see {@link @int/geotoolkit/renderer/RenderingContext.RenderingContext})<br>
     * 3) options (with options['locationtype'] of @see {@link @int/geotoolkit/schematics/labeling/LocationType.LocationType})<br>
     * @param f function to operate on ComponentNode, RenderingContext and options
     */
    constructor(f: Function);
    /**
     * Gets iterator over filtered components
     * @param iterator input components iterator
     * @param context rendering context
     */
    filterComponents(iterator: Iterator, context: RenderingContext): Iterator;
    /**
     * Resets itself
     * @param options options
     * @param options.locationtype location type
     */
    reset(options: object | { locationtype: LocationType; } ): this;
}
