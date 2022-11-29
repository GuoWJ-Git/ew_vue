import {LogAbstractVisual} from './LogAbstractVisual';
import {FillStyle} from '../attributes/FillStyle';
import {RgbaColor} from '../util/RgbaColor';
import {Pattern} from '../attributes/Pattern';
import {Rect} from '../util/Rect';

/**
 * Defines visual to displayed blocks of the depths
 */
export class LogBlock extends LogAbstractVisual {
    /**
     * Defines visual to displayed blocks of the depths
     * @param options An object containing the properties to set
     * @param options.position position (left or right or both)
     * @param options.fillstyle The fill style
     */
    constructor(options?: object | { position?: Position; fillstyle?: FillStyle | string | object; } );
    /**
     * Sets reference depths
     * @param depths an array of numbers specifying point along the track
     */
    setReferenceDepths(depths: number[]): this;
    /**
     * Sets depths
     * @param depths an array of numbers
     */
    setDepths(depths: number[]): this;
    /**
     * Gets position
     */
    getPosition(): Position;
    /**
     * Sets position
     * @param pos position(left or right or both)
     */
    setPosition(pos: Position): this;
    /**
     * Gets fill style
     */
    getFillStyle(): FillStyle | null;
    /**
     * Sets fill style
     * @param fillStyle a new fill style
     * @param fillStyle.color color
     * @param fillStyle.pattern pattern
     * @param fillStyle.foreground foreground color
     * @param merge true if you want to merge fillStyle with existing attribute, false by default
     */
    setFillStyle(fillStyle: FillStyle | object | { color?: string | RgbaColor; pattern?: Pattern; foreground?: string | RgbaColor; }  | string, merge?: boolean): this;
    /**
     * Gets parent model limits
     */
    getModelLimits(): Rect;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {position: Position; fillstyle: FillStyle} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.position position (left or right or both)
     * @param properties.fillstyle The fill style
     */
    setProperties(properties?: object | { position?: Position; fillstyle?: FillStyle | string | object; } ): this;
}
/**
 * Position
 */
export enum Position {
    /**
     * Left
     */
    Left = 0,
    /**
     * Right
     */
    Right = 1,
    /**
     * Both
     */
    Both = 2
}
