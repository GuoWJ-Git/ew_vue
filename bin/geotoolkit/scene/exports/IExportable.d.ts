import {AbstractDocumentElement} from './AbstractDocumentElement';

/**
 * Define an interface to provide exportable elements.
 * It is used to provide custom layouting for printing and exporting
 * to various graphic formats.
 */
export abstract class IExportable {
    /**
     * Returns exportable element
     * @param options 
     */
    abstract getExportElement(options?: any): AbstractDocumentElement;
    /**
     * Used to prepare object before exporting
     * @param options 
     */
    abstract beginExport(options?: any): void;
    /**
     * Used to restore object's state after exporting
     */
    abstract endExport(): void;
}
