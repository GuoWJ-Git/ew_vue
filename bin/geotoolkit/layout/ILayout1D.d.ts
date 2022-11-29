import {Iterator} from '../util/iterator';
import {RenderingContext} from '../renderer/RenderingContext';
import {Range} from '../util/Range';

/**
 * Interface to layout {@link @int/geotoolkit/layout/ILayoutElement1D.ILayoutElement1D} elements.
 */
export abstract class ILayout1D {
    /**
     * Layouts elements
     * @param elements {@link @int/geotoolkit/layout/ILayoutElement1D.ILayoutElement1D} elements to layout
     * @param context rendering context
     * @param limits limits to layout elements within
     */
    abstract layout(elements: Iterator, context: RenderingContext, limits: Range): void;
}
