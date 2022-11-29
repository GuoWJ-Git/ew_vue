import {AbstractViewModeBuilder} from './AbstractViewModeBuilder';

/**
 * Builder for schematics "Regular" view mode
 */
export class RegularViewModeBuilder extends AbstractViewModeBuilder {
    /**
     * Builder for schematics "Regular" view mode
     */
    constructor();
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
