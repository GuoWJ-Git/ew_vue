/**
 * Define container of the drilling sections
 */
export class LogDrillingSection {
    /**
     * Define container of the drilling sections
     * @param depthFrom from depth or properties object
     * @param depthFrom.depthfrom depth from
     * @param depthFrom.depthto depth to
     * @param depthFrom.valuefrom an object containing valuefrom options
     * @param depthFrom.valuefrom.break break
     * @param depthFrom.valuefrom.date date
     * @param depthFrom.valueto an object containing valueto options
     * @param depthFrom.valueto.break break
     * @param depthFrom.valueto.date date
     * @param depthFrom.hint date
     * @param depthTo to depth
     * @param valueFrom 
     * @param valueFrom.Break 
     * @param valueFrom.Date 
     * @param valueTo 
     * @param valueTo.Break 
     * @param valueTo.Date 
     * @param hint array of rendering hints that will value markers at specified depths, defined by a depth Depth: and time Time:
     */
    constructor(depthFrom?: number | object | { depthfrom?: number; depthto?: number; valuefrom?: object | { break?: boolean; date?: Date; } ; valueto?: object | { break?: boolean; date?: Date; } ; hint?: object[]; } , depthTo?: number, valueFrom?: object | { Break?: boolean; Date?: Date; } , valueTo?: object | { Break?: boolean; Date?: Date; } , hint?: object[] | null);
    /**
     * Gets depth from
     */
    getDepthFrom(): number;
    /**
     * Get DepthTo
     */
    getDepthTo(): number;
    /**
     * Get value from
     * Used by the {geotoolkit.axis.DateTimeTickGenerator} such that if Break, label is drawn at beginning or end of section instead of middle
     */
    getValueFrom(): {Date: Date; Break: boolean} | object;
    /**
     * Get value to
     * Used by the {geotoolkit.axis.DateTimeTickGenerator} such that if Break, label is drawn at beginning or end of section instead of middle
     */
    getValueTo(): {Date: Date; Break: boolean} | object;
    /**
     * Gets hints associated with this LogDrillingSection
     */
    getHint(): object[];
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {depthfrom: number; depthto: number; valuefrom: {break: boolean; date: Date}; valueto: {break: boolean; date: Date}; hint: object[]} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.depthfrom depth from
     * @param properties.depthto depth to
     * @param properties.valuefrom an object containing valuefrom options
     * @param properties.valuefrom.break break
     * @param properties.valuefrom.date date
     * @param properties.valueto an object containing valueto options
     * @param properties.valueto.break break
     * @param properties.valueto.date date
     * @param properties.hint date
     */
    setProperties(properties: object | { depthfrom?: number; depthto?: number; valuefrom?: object | { break?: boolean; date?: Date; } ; valueto?: object | { break?: boolean; date?: Date; } ; hint?: object[]; } ): this;
}
