import {LogDrillingSection} from './LogDrillingSection';

/**
 * Define container of the drilling sections
 */
export class LogDrillingSectionContainer {
    /**
     * Define container of the drilling sections
     * @param options An object containing the properties to set
     * @param options.sections sections
     */
    constructor(options: object | { sections?: LogDrillingSection[]; } );
    /**
     * Add Section
     * @param section section
     */
    addSection(section: LogDrillingSection): this;
    /**
     * Get Sections Array
     * @param from from
     * @param to to
     */
    getSectionsArray(from: number, to: number): LogDrillingSection[] | any;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {sections: LogDrillingSection[]} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.sections sections
     */
    setProperties(properties: object | { sections?: LogDrillingSection[]; } ): this;
}
