import {HeaderComponent} from '../../../scene/exports/HeaderComponent';
import {WellLogWidget} from '../WellLogWidget';
import {Dimension} from '../../../util/Dimension';
import {isVisiblePageElementCallback} from '../../../scene/exports/PageElement';

/**
 * Header Component that print WellLogWidget headers on each page
 */
export class WellLogHeaderComponent extends HeaderComponent {
    /**
     * Header Component that print WellLogWidget headers on each page
     * @param widget widget to get headers
     */
    constructor(widget: WellLogWidget);
    /**
     * Get the default size of the component
     */
    getDefaultSize(): Dimension;
    /**
     * Get function to check element visibility. It displays header, where track container exists
     * and header container is not visible.
     */
    isElementVisible(): isVisiblePageElementCallback | null;
}
