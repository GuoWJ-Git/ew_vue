import {PageElement} from '../../../scene/exports/PageElement';
import {Element} from '../../elements/Element';
import {DocumentRenderingContext} from '../../../renderer/DocumentRenderingContext';
import {AbstractPaperFormat} from '../../../scene/exports/AbstractPaperFormat';
import {PageContext} from '../../../scene/exports/PageContext';

/**
 * Header/Footer Component that print the title, date or page information
 */
export class PageComponent extends PageElement {
    /**
     * Header/Footer Component that print the title, date or page information
     * @param documentElement document element
     * @param options optional object
     * @param options.title optional title
     * @param options.date optional date
     */
    constructor(documentElement: Element, options?: any | object | { title?: string; date?: Date; } );
    /**
     * Get title
     */
    getTitle(): string;
    /**
     * get date
     */
    getDate(): Date;
    /**
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
}
