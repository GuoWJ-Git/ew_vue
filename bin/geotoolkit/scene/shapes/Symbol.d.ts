import {SymbolShape} from './SymbolShape';
import {AnchorType} from '../../util/AnchorType';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {EventDispatcher} from '../../util/EventDispatcher';

/**
 * Symbols are shapes created using Symbol Painters (geotoolkit.scene.shapes.painters). It has builtin function to draw the shape based on the selected painter.
 * @deprecated since 2021.1 (3.3) use geotoolkit.scene.shapes.SymbolShape instead
 */
export class Symbol extends SymbolShape {
    /**
     * Symbols are shapes created using Symbol Painters (geotoolkit.scene.shapes.painters). It has builtin function to draw the shape based on the selected painter.
     * @param options anchor x position
     * @param options.ax anchor x position
     * @param options.ay anchor y position
     * @param options.width symbol width
     * @param options.height symbol height
     * @param options.alignment anchor type of symbol
     * @param options.sizeIsInDeviceSpace flag to indicate if size of the symbol in device
     * @param options.painter a function with has parameters: symbol, box, context
     * @param options.lineStyle line style of symbol
     * @param options.fillStyle fill style of symbol
     * @param ay anchor y position
     * @param width symbol width
     * @param height symbol height
     * @param alignment anchor type of symbol
     * @param sizeisindevicespace flag to indicate if size of the symbol in device
     * @param painter a function with has parameters: symbol, box, context or object, which must have method render at least
     * @param lineStyle line style of symbol
     * @param fillStyle fill style of symbol
     */
    constructor(options?: number | object | { ax?: number; ay?: number; width?: number; height?: number; alignment?: AnchorType; sizeIsInDeviceSpace?: boolean; painter?: Function | object; lineStyle?: LineStyle | string | object; fillStyle?: FillStyle | string | object; } , ay?: number, width?: number, height?: number, alignment?: AnchorType, sizeisindevicespace?: boolean, painter?: Function | EventDispatcher | object | string, lineStyle?: LineStyle | string | object, fillStyle?: FillStyle | string | object);
}
