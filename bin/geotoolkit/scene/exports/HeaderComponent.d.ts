import {PageElement} from './PageElement';
import {DocumentRenderingContext} from '../../renderer/DocumentRenderingContext';
import {AbstractPaperFormat} from './AbstractPaperFormat';
import {PageContext} from './PageContext';

/**
 * Header Component that print the title and the date of the pdf document
 */
export class HeaderComponent extends PageElement {
    /**
     * Header Component that print the title and the date of the pdf document
     * @param width width
     * @param height height
     * @param title title
     * @param date date
     * @param textStyle textStyle
     */
    constructor(width: number, height: number, title?: string, date?: Date, textStyle?: string);
    /**
     * print title and date in the context
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
     * @param pageContext page context
     */
    render(context: DocumentRenderingContext, pageInfo?: object | { Margin?: object | { Top?: number; Bottom?: number; Left?: number; Right?: number; } ; Page?: AbstractPaperFormat; currentPage?: number; numberPage?: number; date?: Date; title?: string; } , pageContext?: PageContext): void;
    /**
     * get title
     */
    getTitle(): string;
    /**
     * get date
     */
    getDate(): Date;
}
