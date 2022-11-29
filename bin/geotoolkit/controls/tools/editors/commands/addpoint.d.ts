import {AbstractCommand} from './AbstractCommand';
import {Point} from '../../../../util/Point';

/**
 * Command of adding a new point to the node
 */
export class AddPoint extends AbstractCommand {
    /**
     * Command of adding a new point to the node
     * @param point point to be added
     * @param index position of the point to be added
     * @param isInsert true if new point should be inserted, false otherwise
     */
    constructor(point: Point, index: number, isInsert?: boolean);
    /**
     * Returns new point
     */
    getPoint(): Point;
    /**
     * Returns new point x-ordinate
     */
    getX(): number;
    /**
     * Returns new point y-ordinate
     */
    getY(): number;
    /**
     * Returns new point index position
     */
    getIndex(): number;
    /**
     * Returns true if new point should be inserted, false otherwise
     */
    isInsert(): boolean;
}
/**
 * Command to delete point from node
 */
export class DeletePoint extends AbstractCommand {
    /**
     * Command to delete point from node
     * @param point point coordinates
     * @param index index of the point to delete
     */
    constructor(point: Point, index: number);
    /**
     * Returns point x-ordinate
     */
    getX(): number;
    /**
     * Returns point y-ordinate
     */
    getY(): number;
    /**
     * Returns point index position
     */
    getIndex(): number;
}
