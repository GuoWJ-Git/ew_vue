import {AbstractCommand} from './AbstractCommand';
import {Point} from '../../../../util/Point';

/**
 * Command to create node a segment
 */
export class AddSegment extends AbstractCommand {
    /**
     * Command to create node a segment
     * @param from segment start point
     * @param to segment end point
     * @param isContinue 
     */
    constructor(from: Point, to: Point, isContinue?: boolean);
    /**
     * Returns segment start point
     */
    getFrom(): Point;
    /**
     * Returns segment end point
     */
    getTo(): Point;
}
