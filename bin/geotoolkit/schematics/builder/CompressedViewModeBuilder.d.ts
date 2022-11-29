import {AbstractViewModeBuilder} from './AbstractViewModeBuilder';

/**
 * Builder for schematics "Compressed" view mode
 */
export class CompressedViewModeBuilder extends AbstractViewModeBuilder {
    /**
     * Builder for schematics "Compressed" view mode
     * @param options view mode options
     * @param options.horizontal elements orientation
     * @param options.tolerance gap/overlap tolerance along MD axis
     */
    constructor(options?: object | { horizontal?: boolean; tolerance?: number; } );
    /**
     * Gets builder options
     */
    getOptions(): object | any;
    /**
     * Sets builder options
     * @param options builder options
     */
    setOptions(options: object): this;
}
