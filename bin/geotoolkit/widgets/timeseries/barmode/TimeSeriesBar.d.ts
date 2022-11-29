import {LineStyle} from '../../../attributes/LineStyle';
import {FillStyle} from '../../../attributes/FillStyle';

/**
 * Callback for renderingOrder
 * @example
 * ```javascript
 * // To render bar with the smallest value first
 * widget.setProperties({
 *      'barmode': function (valueOrderPairs) {
 *           // valueOrderPairs = [{
 *           //     'order': 0,
 *           //     'value': 8,
 *           //     'height: 8,
 *           // }, {
 *           //     'order': 1,
 *           //     'value': 15,
 *           //     'height: 15,
 *           // }, {
 *           //     'order': 2,
 *           //     'value': 3,
 *           //     'height: 3,
 *           // }, {
 *           //     'order': 3,
 *           //     'value': 5,
 *           //     'height: 5,
 *           // }];
 *           return valueOrderPairs.sort(function (a, b) {
 *               return b['value'] - a['value'];
 *           });
 *           // return array: [{
 *           //     'order': 2,
 *           //     'value': 3,
 *           //     'height: 3,
 *           // }, {
 *           //     'order': 3,
 *           //     'value': 5,
 *           //     'height: 5,
 *           // }, {
 *           //     'order': 0,
 *           //     'value': 8,
 *           //     'height: 8,
 *           // }, {
 *           //     'order': 1,
 *           //     'value': 15,
 *           //     'height: 15,
 *           // }];
 *      }
 * });
 * ```
 */
export type barRenderingOrder = (valueOrderPairs: BarValueOrderPair[]) => BarValueOrderPair[];
/**
 * Callback for highlighting method
 * @example
 * ```javascript
 * widget.setProperties({
 *      'barmode': {
 *          'highlightingmethod': function (highlightBar, lineStyle, fillStyle) {
 *              lineStyle.setWidth(3);
 *              return {
 *                  'linestyle': lineStyle,
 *                  'fillstyle': fillStyle
 *              };
 *          }
 *     }
 * });
 * ```
 */
export type barHighlightingMethod = (highlightBar: object | { datapointindex: number; lineindex: number; } , linestyle: object | LineStyle, fillstyle: object | FillStyle) => BarHighlightingStyle;
/**
 * Defines value order pair
 */
export type BarValueOrderPair = { order: number; value: number; height: number}
/**
 * Defines bar highlighting style
 */
export type BarHighlightingStyle = { linestyle: LineStyle; fillstyle: FillStyle}
