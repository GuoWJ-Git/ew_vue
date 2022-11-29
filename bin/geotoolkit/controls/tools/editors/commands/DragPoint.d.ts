import {AbstractCommand} from './AbstractCommand';

/**
 * Command for dragging node's geometry point
 */
export class DragPoint extends AbstractCommand {
    /**
     * Command for dragging node's geometry point
     * @param dx point x-ordinate translation
     * @param dy point y-ordinate translation
     * @param index index of the dragging point
     */
    constructor(dx: number, dy: number, index: number);
    /**
     * Returns point x-ordinate translation
     */
    getTranslateX(): number;
    /**
     * Returns point y-ordinate translation
     */
    getTranslateY(): number;
    /**
     * Returns index of the dragging point
     */
    getIndex(): number;
}
