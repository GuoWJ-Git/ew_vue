import {PageContext} from './PageContext';
import {RenderingContext} from '../../renderer/RenderingContext';
import {Dimension} from '../../util/Dimension';

/**
 * Check page element visibility
 */
export type isVisiblePageElementCallback = (context: PageContext) => boolean;
/**
 * Utility class used to create page component such as header and footer in a document. Used in PDF output.
 */
export class PageElement {
    /**
     * Utility class used to create page component such as header and footer in a document. Used in PDF output.
     * @param width width of the component
     * @param height height of the component
     */
    constructor(width: number, height: number);
    /**
     * draw component
     * @param context RenderingContext
     * @param pageInfo optional-contains all data about the pdf page
     */
    render(context: RenderingContext, pageInfo?: any): void;
    /**
     * get the defaultSize of the component
     */
    getDefaultSize(): Dimension;
    /**
     * get the maximum size of the component
     */
    getMaximumSize(): Dimension;
    /**
     * Get function to check element visibility.
     * The default implementation returns null and standard
     * rule is used
     */
    isElementVisible(): isVisiblePageElementCallback | null;
}
