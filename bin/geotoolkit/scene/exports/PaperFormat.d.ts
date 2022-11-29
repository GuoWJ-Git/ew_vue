import {AbstractPaperFormat} from './AbstractPaperFormat';
import {AbstractUnit} from '../../util/AbstractUnit';
import {PaperOrientation} from './PaperOrientation';

/**
 * Paper format
 */
export class PaperFormat extends AbstractPaperFormat {
    /**
     * Paper format
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
}
