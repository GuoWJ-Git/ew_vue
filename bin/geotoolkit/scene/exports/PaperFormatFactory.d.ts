import {PaperFormat} from './PaperFormat';
import {AbstractUnit} from '../../util/AbstractUnit';
import {PaperOrientation} from './PaperOrientation';
import {AbstractPaperFormat} from './AbstractPaperFormat';
import {CustomPaperFormat} from './CustomPaperFormat';

/**
 * Paper format factory
 */
export class PaperFormatFactory {
    /**
     * Paper format factory
     */
    constructor();
    /**
     * Return the instance of paper format factory. Will build new one if one has not been constructed.
     */
    static getInstance(): PaperFormatFactory;
    /**
     * Return an instance of paper format.
     * @param paperformat paper format
     * @param unit optional if paperformat is a {geotoolkit.scene.exports.PaperFormat}
     * @param orientation optional if paperformat is a {geotoolkit.scene.exports.PaperFormat}
     */
    getPaper(paperformat: PaperFormat | string, unit?: AbstractUnit | string, orientation?: PaperOrientation): AbstractPaperFormat | any;
    /**
     * Register a custom paper format to the paper format factory. The paper format must extend AbstractPaperFormat.
     * @param newPaper custom paper format
     */
    registerNewPaperFormat(newPaper: CustomPaperFormat): void;
    /**
     * Return the list of all papers supported by the factory.
     */
    getPaperList(): any[];
}
