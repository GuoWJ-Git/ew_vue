import {EventDispatcher} from '../../../util/EventDispatcher';
import {RenderingContext} from '../../../renderer/RenderingContext';
import {SymbolShape} from '../SymbolShape';
import {Rect} from '../../../util/Rect';

/**
 * Draws a image symbol
 */
export class ImagePainter extends EventDispatcher {
    /**
     * Draws a image symbol
     * @param url url
     */
    constructor(url: string);
    /**
     * Returns all the properties pertaining to the image painter
     */
    getProperties(): {url: string} | any;
    /**
     * Sets all the properties pertaining to the painter
     * @param props image painter properties
     * @param props.url image url
     */
    setProperties(props: object | { url?: string; } ): this;
    /**
     * Draw image on context
     * @param context rendering context
     * @param symbol symbol, which uses this painter
     * @param bbox bounding box
     */
    render(context: RenderingContext, symbol: SymbolShape, bbox: Rect): void;
}
