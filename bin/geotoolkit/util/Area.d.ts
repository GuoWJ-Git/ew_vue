import {Point} from './Point';
import {Rect} from './Rect';

/**
 * Represents an abstract class that specify model area.
 */
export class Area {
    /**
     * Represents an abstract class that specify model area.
     */
    constructor();
    /**
     * Check if the area contains point
     * @param x x position of the point if parameter is a number OR if parameter is a point then it checks if point is inside the rect or not
     * @param y y position of the point
     */
    contains(x: number | Point, y?: number): boolean;
    /**
     * Return bounds and locks the bounds rect from further editing.
     */
    getBounds(): Rect | any;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): object | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties JSON containing the properties to set
     */
    setProperties(properties?: object): this;
}
