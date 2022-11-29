import {Group} from '../../scene/Group';
import {Node} from '../../scene/Node';
import {Iterator} from '../../util/iterator';
import {AbstractTool} from '../tools/AbstractTool';

/**
 * Group with associated scrollbars.
 */
export class ScrollablePanel extends Group {
    /**
     * Group with associated scrollbars.
     * @param options options
     * @param options.content content to add
     * @param options.scroll scrolls options
     * @param options.scroll.vertical vertical scroll options
     * @param options.scroll.vertical.type vertical scroll type
     * @param options.scroll.vertical.size vertical scroll size
     * @param options.scroll.vertical.visible vertical scroll visibility
     * @param options.scroll.vertical.floating vertical scroll mode
     * @param options.scroll.vertical.options vertical scroll options, see setOptions of corresponding scroll for details
     * @param options.scroll.horizontal horizontal scroll options
     * @param options.scroll.horizontal.type horizontal scroll type
     * @param options.scroll.horizontal.size horizontal scroll size
     * @param options.scroll.horizontal.visible horizontal scroll visibility
     * @param options.scroll.horizontal.floating horizontal scroll mode
     * @param options.scroll.horizontal.options horizontal scroll options, see setOptions of corresponding scroll for details
     */
    constructor(options?: object | { content?: Node | Node[] | Iterator; scroll?: object | { vertical?: object | { type?: string; size?: number; visible?: boolean; floating?: boolean; options?: any; } ; horizontal?: object | { type?: string; size?: number; visible?: boolean; floating?: boolean; options?: any; } ; } ; } );
    /**
     * Returns content group
     */
    getContent(): Group;
    /**
     * Recalculates content bounds and updates scrolls
     */
    updateLimits(): this;
    /**
     * Fit size to content
     */
    fitContent(): this;
    /**
     * Gets associated tools
     */
    getTools(): AbstractTool[];
}
