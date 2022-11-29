import {AbstractTool} from '../../../controls/tools/AbstractTool';
import {SeismicViewWidget} from '../SeismicViewWidget';
import {CompositeNode} from '../../../scene/CompositeNode';
import {Orientation} from '../../../util/Orientation';
import {HorizontalAlignment} from '../../../util/HorizontalAlignment';
import {LineStyle} from '../../../attributes/LineStyle';
import {FillStyle} from '../../../attributes/FillStyle';
import {TextStyle} from '../../../attributes/TextStyle';
import {Dimension} from '../../../util/Dimension';
import {SpaceStyle} from '../../../attributes/SpaceStyle';
import {Locale} from '../../../util/Locale';
import {NumberFormat} from '../../../util/NumberFormat';
import {Point} from '../../../util/Point';

/**
 * Creates default implementation of the seismic comparison tool.
 * @deprecated since 2021.1 (3.3). use geotoolkit.widgets.tools.FloatingColorBarTool instead
 */
export class FloatingColorBar extends AbstractTool {
    /**
     * Creates default implementation of the seismic comparison tool.
     * @param widget widget
     * @param options additional options
     * @param options.name tool name
     * @param options.enabled enabled state
     * @param options.layer layer to place floating window
     * @param options.orientation color bar orientation
     * @param options.alignment color bar alignment in vertical mode
     * @param options.linestyle border linestyle
     * @param options.fillstyle border fillstyle
     * @param options.textstyle labels textstyle
     * @param options.textfillstyle labels background fillstyle
     * @param options.size size of the floating window
     * @param options.radius border radius
     * @param options.padding It has properties for specifying the padding for each side, color bar will fit the rest area
     * @param options.padding.top top padding
     * @param options.padding.bottom top padding
     * @param options.padding.right right padding
     * @param options.padding.left left padding
     * @param options.locale locale for number format
     * @param options.labelformat number format for labels
     */
    constructor(widget: SeismicViewWidget, options?: object | { name?: string; enabled?: boolean; layer?: CompositeNode; orientation?: Orientation; alignment?: HorizontalAlignment; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; textstyle?: TextStyle | string | object; textfillstyle?: FillStyle | string | object; size?: Dimension | object; radius?: number; padding?: SpaceStyle | string | object | { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string; } ; locale?: Locale; labelformat?: NumberFormat; } );
    /**
     * Set options
     * @param options floating color bar options
     * @param options.name tool name
     * @param options.enabled enabled state
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
    setOptions(options: object | { name?: string; enabled?: boolean; layer?: CompositeNode; orientation?: Orientation; alignment?: HorizontalAlignment; linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; textstyle?: TextStyle | string | object; textfillstyle?: FillStyle | string | object; size?: Dimension | object; position?: Point | object; radius?: number; padding?: SpaceStyle | string | object | { top?: number | string; bottom?: number | string; right?: number | string; left?: number | string; } ; locale?: Locale; labelformat?: NumberFormat; } ): this;
    /**
     */
    getOptions(): object | any;
    /**
     * Show floating point at specified position
     * @param position window position
     */
    showColorBarWindow(position?: Point): this;
}
/**
 * enum of FloatingColorBar Events
 */
export enum Events {
    /**
     * onPosition changed
     */
    onPositionChanged = 'onPositionChanged',
    /**
     * onVisibility Changed
     */
    onVisibilityChanged = 'onVisibilityChanged'
}
