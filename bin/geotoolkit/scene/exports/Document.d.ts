import {CompositeDocumentElement} from './CompositeDocumentElement';
import {DocumentElement} from './DocumentElement';
import {PageElement, isVisiblePageElementCallback} from './PageElement';

/**
 * Document class represents a pdf document
 * this class can contains a :
 *              - root element { geotoolkit.scene.exports.CompositeDocumentElement || geotoolkit.scene.exports.DocumentElement}
 *              - header : pdf header component {@link @int/geotoolkit/scene/exports/PageElement.PageElement}
 *              - footer : pdf footer component {@link @int/geotoolkit/scene/exports/PageElement.PageElement}
 */
export class Document {
    /**
     * Document class represents a pdf document
     * this class can contains a :
     *              - root element { geotoolkit.scene.exports.CompositeDocumentElement || geotoolkit.scene.exports.DocumentElement}
     *              - header : pdf header component {@link @int/geotoolkit/scene/exports/PageElement.PageElement}
     *              - footer : pdf footer component {@link @int/geotoolkit/scene/exports/PageElement.PageElement}
     * @param root root object or settings
     * @param root.root root object
     * @param root.pageHeader page header
     * @param root.pageFooter page footer
     * @param root.document options
     * @param root.truescale enable true scale
     * @param root.isheadervisible an optional function to return
     * if header should be printed. If it is not specified then header isElementVisible function is used or a standard rule if it snot defined.
     * @param root.isfootervisible an optional function to return
     * if footer should be printed. If it is not specified then header isElementVisible function is used or a standard rule if it snot defined.
     * @param pageHeader page header
     * @param pageFooter page footer
     * @param trueScale enable true scale
     * @param options options
     */
    constructor(root: CompositeDocumentElement | DocumentElement | object | { root?: CompositeDocumentElement | DocumentElement; pageHeader?: PageElement; pageFooter?: PageElement; document?: any; truescale?: boolean; isheadervisible?: isVisiblePageElementCallback; isfootervisible?: isVisiblePageElementCallback; } , pageHeader?: PageElement, pageFooter?: PageElement, trueScale?: boolean, options?: any);
    /**
     * Returns options
     */
    getOptions(): any;
    /**
     * Set Root document
     * @param root Root document
     */
    setRoot(root: CompositeDocumentElement | DocumentElement): this;
    /**
     * Get root document
     */
    getRoot(): CompositeDocumentElement | DocumentElement;
    /**
     * Used to restore object's state after exporting
     */
    endExport(): void;
    /**
     * Used to prepare object before exporting
     */
    beginExport(): void;
    /**
     * Set PDF Page Header component.
     * @param pageHeader Page Header
     */
    setPageHeader(pageHeader: PageElement): this;
    /**
     * Get PDF Page Header component
     */
    getPageHeader(): PageElement;
    /**
     * Set PDF Page Footer Component
     * @param pageFooter Page Footer
     */
    setPageFooter(pageFooter: PageElement): this;
    /**
     * Get PDF Page Footer Component
     */
    getPageFooter(): PageElement;
    /**
     * Get function to check PDF Page Footer visibility
     */
    isFooterVisible(): Function;
    /**
     * Get function to check PDF Page Header visibility
     */
    isHeaderVisible(): Function;
    /**
     * Set PDF Document Header component.
     * @param docHeader Document Header
     */
    setDocumentHeader(docHeader: PageElement): this;
    /**
     * Get PDF Document Header component
     */
    getDocumentHeader(): PageElement;
    /**
     * Set PDF Document Footer Component
     * @param docFooter Document Footer
     */
    setDocumentFooter(docFooter: PageElement): this;
    /**
     * Get PDF Document Footer Component
     */
    getDocumentFooter(): PageElement;
    /**
     * Get true if true scale mode is enabled
     */
    getTrueScale(): boolean;
}
