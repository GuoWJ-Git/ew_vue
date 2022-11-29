import {CompactHVBaseScroll} from './CompactHVBaseScroll';

/**
 * Defines a Compact Scroll bar
 * @deprecated since 2020.1 (3.1) Use VerticalScroll instead
 */
export class CompactVerticalScroll extends CompactHVBaseScroll {
    /**
     * Defines a Compact Scroll bar
     * @param options 
     * @param options.name tool name
     */
    constructor(options: object | { name?: string; } );
}
/**
 * Events {@link @int/geotoolkit/controls/tools/scroll/AbstractScroll.Events}
 */
export type Events = any;

