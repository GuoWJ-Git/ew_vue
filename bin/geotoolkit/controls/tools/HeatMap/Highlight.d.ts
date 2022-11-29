import {AbstractTool} from '../AbstractTool';
import {HeatMap} from '../../shapes/HeatMap';
import {LineStyle} from '../../../attributes/LineStyle';
import {FillStyle} from '../../../attributes/FillStyle';
import {EventArgs} from '../EventArgs';

/**
 * Tool name: 'Highlight'
 */
export class Highlight extends AbstractTool {
    /**
     * Tool name: 'Highlight'
     * @param options current heat map shape or tool options
     * @param options.heatmap current heat map shape
     * @param options.linestyle scale handle line style
     * @param options.fillstyle scale handle fill style
     * @param properties deprecated since 2021.1 (3.3), use first argument instead
     */
    constructor(options?: HeatMap | object | { heatmap?: HeatMap; linestyle?: LineStyle | object | string; fillstyle?: FillStyle | object | string; } , properties?: any);
    /**
     * Highlight the cell when move the mouse
     * @param eventArgs information about event arguments
     */
    onMouseMove(eventArgs: EventArgs): void;
}
