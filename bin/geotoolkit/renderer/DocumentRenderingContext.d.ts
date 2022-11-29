import {RenderingContext} from './RenderingContext';

/**
 * Represents context to traverse nodes during picking and rendering
 */
export class DocumentRenderingContext extends RenderingContext {
    /**
     * Represents context to traverse nodes during picking and rendering
     */
    constructor();
    /**
     * Sets the pages count
     * @param xPageCount page count along x
     * @param yPageCount page count along y
     */
    setPagesCount(xPageCount: number, yPageCount: number): void;
    /**
     * Sets the page info settings
     * @param pageX index of the page by x
     * @param pageY index of the page by y
     */
    setPageInfoSettings(pageX: number, pageY: number): void;
    /**
     * Sets document settings
     * @param documentSettings document settings
     */
    setDocumentSettings(documentSettings: object): this;
    /**
     * Return document settings
     */
    getDocumentSettings(): object | null;
}
