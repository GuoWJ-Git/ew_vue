import {PageElement} from './PageElement';
import {DocumentRenderingContext} from '../../renderer/DocumentRenderingContext';
import {AbstractPaperFormat} from './AbstractPaperFormat';

/**
 * Footer Component that print the page number of the document, and any additional data
 */
export class FooterComponent extends PageElement {
    /**
     * Footer Component that print the page number of the document, and any additional data
     * @param width paper width
     * @param height paper height
     * @param textStyle text style
     */
    constructor(width: number, height: number, textStyle: string);
    /**
     * render the footer
     * @param context PdfRenderingContext
     * @param pageInfo JSON Object
     * @param pageInfo.Margin JSON Object
     * @param pageInfo.Margin.Top Top margin
     * @param pageInfo.Margin.Bottom Bottom margin
     * @param pageInfo.Margin.Left Left margin
     * @param pageInfo.Margin.Right Right margin
     * @param pageInfo.Page paper format
     * @param pageInfo.currentPage current page
     * @param pageInfo.numberPage pages count
     * @param pageInfo.date date
     * @param pageInfo.title title
     */
    render(context: DocumentRenderingContext, pageInfo?: object | { Margin?: object | { Top?: number; Bottom?: number; Left?: number; Right?: number; } ; Page?: AbstractPaperFormat; currentPage?: number; numberPage?: number; date?: Date; title?: string; } ): void;
}
