import {ShapeAdapter} from '../../../controls/editing/ShapeAdapter';
import {Node} from '../../../scene/Node';
import {Rect} from '../../../util/Rect';
import {LineStyle} from '../../../attributes/LineStyle';
import {FillStyle} from '../../../attributes/FillStyle';

/**
 * The class for visual plugins manipulation
 */
export class VisualPluginAdapter extends ShapeAdapter {
    /**
     * The class for visual plugins manipulation
     */
    constructor();
    /**
     * Sets shape
     * @param shapes current shape
     */
    setShape(shapes: Node): this;
    /**
     * Return shape bounds
     */
    getShapeBounds(): Rect;
    /**
     * Active state is changed
     * @param active active state or not
     */
    onActiveStateChanged(active: boolean): void;
    /**
     * OnInitialize
     */
    onInitialize(): boolean;
    /**
     * OnMove
     * @param x x coordinate
     * @param y y coordinate
     */
    onMove(x: number, y: number): this;
    /**
     * Sets linestyle and fillstyle for the main handle (rectangle) and all the corner handles (squares)
     * @param json a JSON object with style
     * @param json.main object contains properties for main rectangle
     * @param json.main.linestyle linestyle
     * @param json.main.fillstyle fillstyle
     * @param json.corners object contains properties for all the corners and sides handles
     * @param json.corners.linestyle linestyle
     * @param json.corners.fillstyle fillstyle
     */
    setStyle(json?: object | { main?: object | { linestyle?: object | LineStyle; fillstyle?: object | FillStyle; } ; corners?: object | { linestyle?: object | LineStyle; fillstyle?: object | FillStyle; } ; } ): this;
}
