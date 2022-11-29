import {AdaptiveLogVisualHeader} from './AdaptiveLogVisualHeader';
import {LogAbstractVisual} from '../LogAbstractVisual';
import {SymbolShape} from '../../scene/shapes/SymbolShape';

/**
 * This header contains elements: ScaleFrom, Name, Description, Tracking, Unit, ScaleTo, Axis, Fill, Line, Symbol
 * @example
 * ```javascript
 * // This example shows how to change the labels color beside the curve line on the header.
 * import {CssStyle} from '@int/geotoolkit/css/CssStyle';
 * widget.setCss(new CssStyle(
 * {
 *     'css': [.geotoolkit.welllog.header.AdaptiveLogCurveVisualHeader {',
 *                     '   element-tracking-textstyle-font : bold 10px Roboto;',
 *                     '   element-tracking-textstyle-color : #C8C8C8;',
 *                     '   element-name-textstyle-font : bold 10px Roboto;',
 *                     '   element-name-textstyle-color : #C8C8C8;',
 *                     '   element-scalefrom-textstyle-font : bold 10px Roboto;',
 *                     '   element-scalefrom-textstyle-color : #C8C8C8;',
 *                     '   element-scaleto-textstyle-font : bold 10px Roboto;',
 *                     '   element-scaleto-textstyle-color : #C8C8C8;',
 *                     '}'
 * ].join('')
 * });
 * ```
 * @example
 * ```javascript
 * // This example shows how to reduce an indent aka 'gap' in this API between limits using setSettings on header instance. This provides a way to decrease the size of the legend in the header.
 * import {AdaptiveLogCurveVisualHeader} from '@int/geotoolkit/welllog/header/AdaptiveLogCurveVisualHeader';
 * import {CompositeLogCurve} from '@int/geotoolkit/welllog/CompositeLogCurve';
 * const headerProvider = widget.getHeaderContainer().getHeaderProvider();
 * // configure curve header
 * const header = new AdaptiveLogCurveVisualHeader()
 *  .setElement({
 *                'ScaleTo': {'horizontalpos': 'right', 'verticalpos': 'top'},
 *                'ScaleFrom': {'horizontalpos': 'left', 'verticalpos': 'top'},
 *                'Line': {'horizontalpos': 'center', 'verticalpos': 'center'},
 *                'Name': {'horizontalpos': 'center', 'verticalpos': 'top'},
 *                'Unit': {'horizontalpos': 'center', 'verticalpos': 'bottom'},
 *                'Tracking': {'horizontalpos': 'center', 'verticalpos': 'bottom'},
 *                'Axis': {
 *                    'visible': true,
 *                    'verticalpos': 'bottom',
 *                    'options': { // you can specify static/dynamic 'theme' or TickGenerator instance
 *                        'tickgenerator': new geotoolkit.axis.AdaptiveTickGenerator(),
 *                        'theme': function (header) {
 *                              var lineStyle = header.getVisual().getLineStyle();
 *                              var tickStyle = {
 *                                'color': lineStyle.getColor(),
 *                                'width': 1,
 *                                'pixelsnapmode': true
 *                              };
 *                              return {
 *                                'textStyle': header.getTextStyle(),
 *                                'baselineStyle': lineStyle,
 *                                'edgeStyle': tickStyle,
 *                                'majorStyle': tickStyle,
 *                                'minorStyle': null
 *                            }
 *                        }
 *                    }
 *                }
 *            }).setSettings({
 *                'gap': 1
 *            });
 * headerProvider.registerHeaderProvider(CompositeLogCurve.getClassName(), header);
 * ```
 */
export class AdaptiveLogCurveVisualHeader extends AdaptiveLogVisualHeader {
    /**
     * This header contains elements: ScaleFrom, Name, Description, Tracking, Unit, ScaleTo, Axis, Fill, Line, Symbol
     * @param options visual for the header or properties object
     * @param options.visual visual for the header
     */
    constructor(options?: LogAbstractVisual | object | { visual?: LogAbstractVisual; } );
    /**
     * Sets symbol to be used
     * @param symbol symbol to be used
     */
    setSymbol(symbol: SymbolShape): this;
    /**
     * Gets symbol
     */
    getSymbol(): SymbolShape;
}
