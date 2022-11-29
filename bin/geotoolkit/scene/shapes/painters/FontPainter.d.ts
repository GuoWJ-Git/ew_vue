import {EventDispatcher} from '../../../util/EventDispatcher';
import {FillStyle} from '../../../attributes/FillStyle';
import {RenderingContext} from '../../../renderer/RenderingContext';
import {SymbolShape} from '../SymbolShape';
import {Rect} from '../../../util/Rect';

/**
 * Draws a font symbol
 */
export class FontPainter extends EventDispatcher {
    /**
     * Draws a font symbol
     * @param url font url or properties object
     * @param url.url font url
     * @param url.text text which be drawn as a symbol, ascii or unicode
     * @param url.family font family, must match to file name
     * @param family font family, must match to file name
     * @param text text which be drawn as a symbol, ascii or unicode
     */
    constructor(url: string | object | { url?: string | ArrayBuffer; text?: string; family?: string; }  | ArrayBuffer, family: string, text: string);
    /**
     * Gets all the properties pertaining to the font painter
     */
    getProperties(): {url: string | ArrayBuffer; text: string; family: string; fill: FillStyle | null} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param props font painter properties
     * @param props.url font url
     * @param props.text text which be drawn as a symbol, ascii or unicode
     * @param props.family font family, must match to file name
     * @param props.fill text fill style
     */
    setProperties(props: object | { url?: string | ArrayBuffer; text?: string; family?: string; fill?: FillStyle; } ): this;
    /**
     * Draw text on context
     * @param context rendering context
     * @param symbol symbol, which uses this painter
     * @param bbox bounding box
     */
    render(context: RenderingContext, symbol: SymbolShape, bbox: Rect): void;
}
