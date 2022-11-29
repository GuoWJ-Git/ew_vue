import {EventDispatcher} from '../../util/EventDispatcher';
import {LegendItem} from './LegendItem';

/**
 * Abstract class that creates {@link @int/geotoolkit/controls/shapes/LegendItem.LegendItem} elements
 * based on the "shape" state
 */
export class ShapeLegendAdapter extends EventDispatcher {
    /**
     * Abstract class that creates {@link @int/geotoolkit/controls/shapes/LegendItem.LegendItem} elements
     * based on the "shape" state
     * @param object an object to tie legend items to
     * @param legendItemOptions external legend item options
     */
    constructor(object?: any, legendItemOptions?: any);
    /**
     * Gets object the adapter and legend items are associated with
     */
    getObject(): any;
    /**
     * Creates legend items based on its shape's state
     * @param options legend items' options
     */
    createLegendItems(options?: any): LegendItem[];
    /**
     * Gets legend item's external options
     */
    getLegendItemOptions(): any;
    /**
     * Sets legend item's external options.
     * Sends {@link @int/geotoolkit/controls/shapes/ShapeLegendAdapter.Events.LegendItemOptionsChanged} event
     * @param options options
     */
    setLegendItemOptions(options: any): this;
}
/**
 * Legend adapter events enumerator
 */
export enum Events {
    /**
     * LegendItemOptionsChanged
     */
    LegendItemOptionsChanged = 'LegendItemOptionsChanged',
    /**
     * LegendSourceStateChanged
     */
    LegendSourceStateChanged = 'LegendSourceStateChanged'
}
