import {Element} from '../Element';
import {PaperFormat} from '../../../scene/exports/PaperFormat';

/**
 * Document is root document element
 */
export class Document extends Element {
    /**
     * Document is root document element
     * @param options options
     * @param options.paperformat paper format
     */
    constructor(options?: object | { paperformat?: PaperFormat; } );
    /**
     * Return true if document is locked
     */
    isLocked(): boolean;
    /**
     * Lock document
     */
    lock(): this;
    /**
     * Unlock document
     */
    unlock(): this;
    /**
     * Return document paper format
     */
    getPaperFormat(): PaperFormat | null;
    /**
     * Set document paper format
     * @param paperFormat paper format
     */
    setPaperFormat(paperFormat: PaperFormat | any): this;
    /**
     * Gets document properties
     */
    getProperties(): {paperformat: PaperFormat | any} | any;
    /**
     * Sets document properties
     * @param properties document properties
     * @param properties.paperformat paper format
     */
    setProperties(properties?: object | { paperformat?: PaperFormat; } ): this;
}
/**
 * Document Events
 */
export enum DocumentEvents {
    /**
     * ChildAdding
     */
    ChildAdding = 'ChildAdding'
}
