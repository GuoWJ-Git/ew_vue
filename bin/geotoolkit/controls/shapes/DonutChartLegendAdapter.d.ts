import {ShapeLegendAdapter} from './ShapeLegendAdapter';
import {DonutChart} from './DonutChart';

/**
 * Creates {@link @int/geotoolkit/controls/shapes/SymbolLegendItem.SymbolLegendItem} elements
 * based on {@link @int/geotoolkit/controls/shapes/DonutChart.DonutChart} shape
 */
export class DonutChartLegendAdapter extends ShapeLegendAdapter {
    /**
     * Creates {@link @int/geotoolkit/controls/shapes/SymbolLegendItem.SymbolLegendItem} elements
     * based on {@link @int/geotoolkit/controls/shapes/DonutChart.DonutChart} shape
     * @param donutChart shape
     * @param options external options
     */
    constructor(donutChart: DonutChart, options?: any);
    /**
     * Creates legend items based on donut shape instance (and options if provided)
     * @param options legend items' options
     */
    createLegendItems(options?: any): any[];
    /**
     * Disposes the object.
     */
    dispose(): void;
}
