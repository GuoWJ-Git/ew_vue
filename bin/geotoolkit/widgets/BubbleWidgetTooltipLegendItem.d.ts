import {LegendItem} from '../controls/shapes/LegendItem';
import {TextStyle} from '../attributes/TextStyle';

/**
 * this legend is only for bubblechart to show tooltip
 */
export class BubbleWidgetTooltipLegendItem extends LegendItem {
    /**
     * this legend is only for bubblechart to show tooltip
     * @param object 
     * @param options 
     * @param options.axisname displayed name for this item
     * @param options.unit displayed unit for this item
     * @param options.value displayed value for this item
     * @param options.textstyle textstyle for the text
     */
    constructor(object: object, options: object | { axisname?: string; unit?: string; value?: number | string; textstyle?: TextStyle; } );
}
