import {Layout} from './Layout';

/**
 */
export class HorizontalPriorityLayout extends Layout {
    /**
     * @param options properties object
     * @param options.direction direction of the layout
     */
    constructor(options?: object | { direction?: Direction; } );
    /**
     * Set direction
     * @param value direction of layout
     */
    setDirection(value: Direction): this;
    /**
     * Returns direction
     */
    getDirection(): Direction;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {direction: Direction} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.direction direction of the layout
     */
    setProperties(properties?: object | { direction?: Direction; } ): this;
}
/**
 * Enum for Horizontal Priority Layout
 */
export enum Direction {
    /**
     * LeftToRight
     */
    LeftToRight = 'lefttoright',
    /**
     * RightToLeft
     */
    RightToLeft = 'righttoleft'
}
