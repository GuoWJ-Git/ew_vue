import {ShapeAdapter} from '../ShapeAdapter';
import {FillStyle} from '../../../attributes/FillStyle';
import {AnchorType} from '../../../util/AnchorType';
import {LineStyle} from '../../../attributes/LineStyle';
import {Node} from '../../../scene/Node';
import {Rect} from '../../../util/Rect';
import {BoxHandle} from '../BoxHandle';

/**
 * Defines adapter to scale and move rectangular shape
 */
export class RectangularShapeAdapter extends ShapeAdapter {
    /**
     * Defines adapter to scale and move rectangular shape
     * @param options options
     * @param options.box options for box
     * @param options.box.activefillstyle options for active box fill style
     * @param options.box.inactivefillstyle options for inactive box fill style
     * @param options.handlers handlers positions
     * @param options.handlestyle handle style
     * @param options.handlestyle.activefillstyle handle fill style
     * @param options.handlestyle.inactivefillstyle handle fill style
     * @param options.handlestyle.activelinestyle handle connection style when active
     * @param options.handlestyle.inactivelinestyle handle connection style when inactive
     */
    constructor(options?: object | { box?: object | { activefillstyle?: object | string | FillStyle; inactivefillstyle?: object | string | FillStyle; } ; handlers?: AnchorType[]; handlestyle?: object | { activefillstyle?: object | string | FillStyle; inactivefillstyle?: object | string | FillStyle; activelinestyle?: object | string | LineStyle; inactivelinestyle?: object | string | LineStyle; } ; } );
    /**
     * Set display options
     * @param options options
     * @param options.box options for box
     * @param options.box.activefillstyle options for active box fill style
     * @param options.box.inactivefillstyle options for inactive box fill style
     * @param options.handlers handlers positions
     * @param options.handlestyle handle style
     * @param options.handlestyle.activefillstyle handle fill style
     * @param options.handlestyle.inactivefillstyle handle fill style
     * @param options.handlestyle.activelinestyle handle connection style when active
     * @param options.handlestyle.inactivelinestyle handle connection style when inactive
     */
    setOptions(options?: object | { box?: object | { activefillstyle?: object; inactivefillstyle?: object; } ; handlers?: AnchorType[]; handlestyle?: object | { activefillstyle?: object | string | FillStyle; inactivefillstyle?: object | string | FillStyle; activelinestyle?: object | string | LineStyle; inactivelinestyle?: object | string | LineStyle; } ; } ): this;
    /**
     * Get display options
     */
    getOptions(): {box: {activefillstyle: object; inactivefillstyle: object}; handlers: AnchorType[]; handlestyle: {activefillstyle: object | string | FillStyle; inactivefillstyle: object | string | FillStyle; activelinestyle: object | string | LineStyle; inactivelinestyle: object | string | LineStyle}} | any;
    /**
     * Sets shape
     * @param shape current shape
     */
    setShape(shape: Node): this;
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
     * Return box handle
     */
    getHandle(): BoxHandle;
    /**
     * OnInitialize
     */
    onInitialize(): boolean;
    /**
     * Sets linestyle and fillstyle for the main handle (rectangle) and all the corner handles (squares)
     * @param json json object for new style
     * @param json.main object contains properties for main rectangle
     * @param json.main.linestyle linestyle
     * @param json.main.fillstyle fillstyle
     * @param json.corners object contains properties for all the corners and sides handles
     * @param json.corners.linestyle linestyle
     * @param json.corners.fillstyle fillstyle
     */
    setStyle(json?: object | { main?: object | { linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; } ; corners?: object | { linestyle?: LineStyle | string | object; fillstyle?: FillStyle | string | object; } ; } ): this;
    /**
     * Update handles
     */
    updateHandles(): void;
}
