import {PaperFormat} from './PaperFormat';
import {AbstractUnit} from '../../util/AbstractUnit';
import {PaperOrientation} from './PaperOrientation';
import {Dimension} from '../../util/Dimension';

/**
 * Custom paper format
 */
export class CustomPaperFormat extends PaperFormat {
    /**
     * Custom paper format
     * @param name 
     * @param width 
     * @param height 
     * @param top margin
     * @param right margin
     * @param bottom margin
     * @param left margin
     * @param unit 
     * @param orientation 
     */
    constructor(name: string, width: number, height: number, top: number, right: number, bottom: number, left: number, unit: AbstractUnit, orientation: PaperOrientation);
    /**
     * set the paper name
     * @param name paper name
     */
    setName(name: string): this;
    /**
     * set paper width
     * @param width paper width
     */
    setWidth(width: number): this;
    /**
     * set paper height
     * @param height paper height
     */
    setHeight(height: number): this;
    /**
     * set top margin
     * @param top top margin
     */
    setTop(top: number): this;
    /**
     * set bottom margin
     * @param bottom bottom margin
     */
    setBottom(bottom: number): this;
    /**
     * set left margin
     * @param left left margin
     */
    setLeft(left: number): this;
    /**
     * set right margin
     * @param right right margin
     */
    setRight(right: number): this;
    /**
     * set paper unit
     * @param unit paper unit
     */
    setUnit(unit: AbstractUnit): this;
    /**
     * set dimension
     * @param dimension paper dimension
     */
    setDimension(dimension: Dimension): this;
    /**
     * set paper orientation
     * @param orientation paper orientation
     */
    setOrientation(orientation: PaperOrientation): this;
}
