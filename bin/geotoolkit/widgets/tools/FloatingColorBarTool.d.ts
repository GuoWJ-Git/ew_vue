import {AbstractTool} from '../../controls/tools/AbstractTool';
import {BaseWidget} from '../BaseWidget';
import {Group} from '../../scene/Group';
import {ColorBar} from '../../controls/shapes/ColorBar';
import {Orientation} from '../../util/Orientation';
import {HorizontalAlignment} from '../../util/HorizontalAlignment';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {TextStyle} from '../../attributes/TextStyle';
import {Dimension} from '../../util/Dimension';
import {SpaceStyle} from '../../attributes/SpaceStyle';
import {Locale} from '../../util/Locale';
import {NumberFormat} from '../../util/NumberFormat';
import {CompositeNode} from '../../scene/CompositeNode';
import {Point} from '../../util/Point';

/**
 * Tool to handle moving and resizing of floating colorbar around widget
 * @example
 * ```javascript
 * import {FloatingColorBarTool, Events as FloatingColorBarEvents} from '@int/geotoolkit/widgets/tools/FloatingColorBarTool';
 * const floatingColorBarTool = new FloatingColorBarTool({
 *      'widget': widget,
 *      'manipulatorlayer': manipulatorLayer,
 *      'group': legendShape
 * });
 * // Insert the tool to the head of tool's collection
 * widget.getTool().insert(0, floatingColorBarTool);
 * attach listeners to events to add functionality conditional on moving floating colorbar
 * floatingColorbarTool.addListener(FloatingColorBarEvents.onPositionChanged,
 *    (colorbar, eventArgs) => {
 *        // check
 * });
 * ```
 */
export class FloatingColorBarTool extends AbstractTool {
    /**
     * Tool to handle moving and resizing of floating colorbar around widget
     * @param options 
     * @param options.name tool name
     * @param options.widget widget
     * @param options.group Collection of legends or shape.
     * @param options.layer Manipulator layer for holding shapes.
     * @param options.colorbar color bar to manipulate
     * @param options.orientation color bar orientation
     * @param options.alignment color bar alignment in vertical mode
     * @param options.linestyle border linestyle
     * @param options.fillstyle border fillstyle
     * @param options.textstyle labels textstyle
     * @param options.textfillstyle labels background fillstyle
     * @param options.size size of the floating window
     * @param options.radius border radius
     * @param options.padding padding around the legends.
     * @param options.padding.top top padding in pixels
     * @param options.padding.bottom top padding in pixels
     * @param options.padding.right right padding in pixels
     * @param options.padding.left left padding in pixels
     * @param options.locale locale for number format
     * @param options.labelformat number format for labels
     */
    constructor(options?: object | { name?: string; widget?: BaseWidget; group?: Group; layer?: Group; colorbar?: ColorBar; orientation?: Orientation; alignment?: HorizontalAlignment; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; textstyle?: TextStyle | string | object; textfillstyle?: FillStyle | string | object; size?: Dimension | object; radius?: number; padding?: SpaceStyle | object | { top?: number; bottom?: number; right?: number; left?: number; } ; locale?: Locale; labelformat?: NumberFormat; } );
    /**
     * Set options
     * @param options floating color bar options
     * @param options.name tool name
     * @param options.enabled enabled state
     * @param options.range floating colorbar range
     * @param options.range.min floating colorbar range min value
     * @param options.range.max floating colorbar range max value
     * @param options.layer layer to place floating window
     * @param options.orientation color bar orientation
     * @param options.alignment color bar alignment in vertical mode
     * @param options.linestyle border linestyle
     * @param options.fillstyle border fillstyle
     * @param options.textstyle labels textstyle
     * @param options.textfillstyle labels background fillstyle
     * @param options.size size of the floating window
     * @param options.position position of the floating window
     * @param options.radius border radius
     * @param options.padding It has properties for specifying the padding for each side, color bar will fit the rest area
     * @param options.padding.top top padding
     * @param options.padding.bottom top padding
     * @param options.padding.right right padding
     * @param options.padding.left left padding
     * @param options.locale locale for number format
     * @param options.labelformat number format for labels
     */
    setOptions(options: object | { name?: string; enabled?: boolean; range?: object | { min?: number; max?: number; } ; layer?: CompositeNode; orientation?: Orientation; alignment?: HorizontalAlignment; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; textstyle?: TextStyle | string | object; textfillstyle?: FillStyle | string | object; size?: Dimension | object; position?: Point | object; radius?: number; padding?: SpaceStyle | string | object | { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string; } ; locale?: Locale; labelformat?: NumberFormat; } ): this;
    /**
     */
    getOptions(): object | any;
    /**
     * Hides floating colorbar
     */
    hideFloatingColorBar(): this;
    /**
     * Show floating point at specified position
     * @param position window position
     */
    showFloatingColorBar(position?: Point): this;
}
/**
 * enum of FloatingColorBar Events
 */
export enum Events {
    /**
     * onPositionChanged - fires when position of floating colorbar is changed
     */
    onPositionChanged = 'onPositionChanged',
    /**
     * onVisibilityChanged - fires when visibility is toggled
     */
    onVisibilityChanged = 'onVisibilityChanged',
    /**
     * onDropping - fires when colorbar is being dropped
     */
    onDropping = 'onDropping',
    /**
     * onDropped - fires when colorbar has been dropped
     */
    onDropped = 'onDropped'
}
