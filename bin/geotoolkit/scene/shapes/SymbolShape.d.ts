import {AnchoredShape} from './AnchoredShape';
import {INodeEnumerable} from '../INodeEnumerable';
import {AnchorType} from '../../util/AnchorType';
import {EventDispatcher} from '../../util/EventDispatcher';
import {LineStyle} from '../../attributes/LineStyle';
import {FillStyle} from '../../attributes/FillStyle';
import {RenderingContext} from '../../renderer/RenderingContext';

/**
 * Symbols are shapes created using Symbol Painters (geotoolkit.scene.shapes.painters). It has builtin function to draw the shape based on the selected painter.
 */
export class SymbolShape extends AnchoredShape implements INodeEnumerable {
    /**
     * Symbols are shapes created using Symbol Painters (geotoolkit.scene.shapes.painters). It has builtin function to draw the shape based on the selected painter.
     * @param options anchor x position
     * @param options.cache set it to true if you want to cache complex geometry to raster
     * @param options.width symbol width
     * @param options.height symbol height
     * @param options.alignment anchor type of symbol
     * @param options.painter a function with has parameters: symbol, box, context
     * @param options.painterproperties symbol's painter's properties
     * @param ay anchor y position
     * @param width symbol width
     * @param height symbol height
     * @param alignment anchor type of symbol
     * @param sizeisindevicespace flag to indicate if size of the symbol in device
     * @param painter a function with has parameters: symbol, box, context or object, which must have method render at least
     * @param lineStyle line style of symbol
     * @param fillStyle fill style of symbol
     */
    constructor(options?: number | object | { cache?: boolean; width?: number; height?: number; alignment?: AnchorType; painter?: Function | EventDispatcher | string; painterproperties?: any; } , ay?: number, width?: number, height?: number, alignment?: AnchorType, sizeisindevicespace?: boolean, painter?: Function | EventDispatcher | object | string, lineStyle?: LineStyle | string | object, fillStyle?: FillStyle | string | object);
    /**
     * Sets painter function for this symbol.
     * @param painter painter function for this symbol
     */
    setPainter(painter: string | EventDispatcher | Function | object): this;
    /**
     * Get painter function
     */
    getPainter(): EventDispatcher | Function;
    /**
     * Set cache flag
     * @param useCache cache flag
     */
    setCache(useCache: boolean): this;
    /**
     * Get cache flag
     */
    hasCache(): boolean;
    /**
     * Draw
     * @param context Rendering Context
     */
    draw(context: RenderingContext): this;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {cache: boolean; painter: string; painterproperties: any} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     * @param properties.cache symbol cache flag
     * @param properties.width symbol width
     * @param properties.height symbol height
     * @param properties.alignment anchor type of symbol
     * @param properties.painter symbol's painter's className
     * @param properties.painterproperties symbol's painter's properties
     */
    setProperties(properties?: object | { cache?: boolean; width?: number; height?: number; alignment?: AnchorType; painter?: Function | string; painterproperties?: any; } ): this;
    /**
     * Enumerate children nodes
     * @param callback callback
     * @param target target
     */
    enumerateNodes(callback: Function, target: any): void;
}
