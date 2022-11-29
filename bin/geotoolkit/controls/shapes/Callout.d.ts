import {Text} from '../../scene/shapes/Text';
import {AnchorType} from '../../util/AnchorType';
import {Rect} from '../../util/Rect';

/**
 * Define a callout shape
 */
export class Callout extends Text {
    /**
     * Define a callout shape
     * @param options callout options
     * @param options.arrowsize callout arrow size in device coordinates
     * @param options.ispointingup true if shape should always pointing up (even if scene flipped)
     * @param options.radius border radius in device coordinates
     * @param options.padding inner padding in device coordinates
     * @param options.alignment alignment according of the anchor point
     */
    constructor(options?: object | { arrowsize?: number; ispointingup?: boolean; radius?: number; padding?: number; alignment?: AnchorType; } );
    /**
     * Moves callout text to the provided distance
     * @param x x-ordinate move distance
     * @param y y-ordinate move distance
     */
    move(x: number, y: number): this;
    /**
     * Returns x-ordinate distance from anchor to the text position
     */
    getOffsetX(): number;
    /**
     * Returns y-ordinate distance from anchor to the text position
     */
    getOffsetY(): number;
    /**
     * Returns callout rectangular text area
     */
    getTextBounds(): Rect;
    /**
     * Sets callout text visibility
     * @param visible text visibility
     */
    setTextVisible(visible: boolean): this;
    /**
     * Returns true if callout text is visible
     */
    getTextVisible(): boolean;
    /**
     * Sets callout size and anchor so that rectangular text area matches the bounds provided
     * @param bounds text bounding box in parent coordinates
     */
    setTextBounds(bounds: Rect): this;
}
