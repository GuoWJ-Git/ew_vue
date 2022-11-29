import {AbstractUnit} from '../../util/AbstractUnit';
import {PaperOrientation} from './PaperOrientation';
import {Dimension} from '../../util/Dimension';

/**
 * Abstract Paper Format class
 */
export class AbstractPaperFormat {
    /**
     * Abstract Paper Format class
     * @param name paper name
     * @param width paper width
     * @param height paper height
     * @param top margin
     *                  paper top margin
     * @param right margin
     *                  paper right margin
     * @param bottom margin
     *                  paper bottom margin
     * @param left margin
     *                  paper left margin
     * @param unit paper measure unit
     * @param orientation paper orientation
     */
    constructor(name: string, width: number, height: number, top: number, right: number, bottom: number, left: number, unit: AbstractUnit, orientation: PaperOrientation);
    /**
     * get the paper name
     */
    getName(): string;
    /**
     * get paper width
     */
    getWidth(): number;
    /**
     * get paper height
     */
    getHeight(): number;
    /**
     * get top margin
     */
    getTop(): number;
    /**
     * get bottom margin
     */
    getBottom(): number;
    /**
     * get left margin
     */
    getLeft(): number;
    /**
     * get right margin
     */
    getRight(): number;
    /**
     * get paper unit
     */
    getUnit(): AbstractUnit;
    /**
     * get dimension
     */
    getDimension(): Dimension;
    /**
     * get paper orientation
     */
    getOrientation(): PaperOrientation;
}
