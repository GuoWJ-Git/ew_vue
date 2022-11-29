import {TickGenerator, labelFormatHandler} from './TickGenerator';
import {Locale} from '../util/Locale';
import {TimeZone} from './TimeZone';
import {AbstractUnit} from '../util/AbstractUnit';
import {Grid} from './Grid';
import {Axis} from './Axis';
import {Orientation} from '../util/Orientation';
import {TickInfo} from './TickInfo';

/**
 * The adaptive data time tick generator will automatically configure itself to create DateTime Ticks at a reasonable interval.
 */
export class AdaptiveDateTimeTickGenerator extends TickGenerator {
    /**
     * The adaptive data time tick generator will automatically configure itself to create DateTime Ticks at a reasonable interval.
     * @param options An object containing the properties to set
     * @param options.formatlabeleventhandler format of the label see {@link @int/geotoolkit/axis/AdaptiveDateTimeTickGenerator.AdaptiveDateTimeTickGenerator#setFormatLabelHandler}
     * @param options.labelformat tickGrade valid values are "edge", "dst", "major" and "minor" with corresponding format label grade format
     * @param options.labelminspan min distance between 2 labels
     * @param options.labeledgespan distance of label from edge
     * @param options.labelautohide minimum distance to hide label
     * @param options.rotatelabels rotate label or not
     * @param options.locale locale
     * @param options.timezone timeZone UTC or local time
     * @param options.localtimezoneoffset timezoneoffset
     * @param options.formatdictionary dictionary to use. see {@link @int/geotoolkit/axis/AdaptiveDateTimeTickGenerator.AdaptiveDateTimeTickGenerator#setFormatDictionary}
     * @param options.minspan min distance between ticks in device space
     * @param options.dsttimestamps see {@link @int/geotoolkit/axis/AdaptiveDateTimeTickGenerator.AdaptiveDateTimeTickGenerator#setDSTTimestamps}
     * @param options.offsetUnit specified in sec,mls,hours.
     * @param offsetUnit specified in sec,mls,hours.
     */
    constructor(options?: object | { formatlabeleventhandler?: Function; labelformat?: any; labelminspan?: number; labeledgespan?: number; labelautohide?: number; rotatelabels?: boolean; locale?: Locale | string; timezone?: TimeZone | string; localtimezoneoffset?: number; formatdictionary?: string[]; minspan?: number; dsttimestamps?: number[]; offsetUnit?: AbstractUnit | string; }  | number, offsetUnit?: AbstractUnit | string);
    /**
     * Returns valid Tick Grades : "dst", "edge", "major", "minor"
     */
    getGrades(): string[];
    /**
     * Sets locale
     * @param locale locale
     */
    setLocale(locale: Locale | string): this;
    /**
     * Return the current locale
     */
    getLocale(): Locale | string;
    /**
     * Set Daylight Saving Time dates in milliseconds
     * @param timeStamps Daylight Saving Time dates in milliseconds
     */
    setDSTTimestamps(timeStamps?: number[]): this;
    /**
     * Invalidate
     */
    invalidate(): this;
    /**
     * Set time zone
     * @param timeZone UTC or local time,
     * If using Third Party such as momentJS see also {@link https://en.wikipedia.org/wiki/List_of_tz_database_time_zones}
     */
    setTimeZone(timeZone: TimeZone | string): this;
    /**
     * Set time zone offset
     * @param timeZoneOffset UTC time if timeZoneOffset is 0
     * @param offsetUnit specified in sec,mls,hours.
     */
    setTimeZoneOffset(timeZoneOffset: number, offsetUnit?: AbstractUnit | string): this;
    /**
     * Get time zone
     */
    getTimeZone(): TimeZone | string;
    /**
     * Get time zone offset
     * @param offsetUnit specified in sec,mls,hours
     */
    getTimeZoneOffset(offsetUnit?: AbstractUnit | string): TimeZone | string;
    /**
     * Set label pattern
     * @param pattern internal object represents labels pattern information
     */
    setLabelPattern(pattern: any): this;
    /**
     * Reset ticks
     * @param parent parent axis or grid
     * @param orient orientation
     * @param tickInfo tick info
     */
    resetTicks(parent: Grid | Axis, orient: Orientation | string, tickInfo: TickInfo): number;
    /**
     * Sets format label handler.
     * This function will be used by the tickgenerator to build a label for a given model value.
     * Function parameters are:
     * tickGenerator {geotoolkit.axis.TickGenerator} The tickgenerator
     * parent {object} that triggered the label creation, generally a {geotoolkit.axis.Axis}
     * orientation {geotoolkit.util.Orientation|string} of the axis
     * tickInfo {geotoolkit.axis.TickInfo} The tickinformation containing the tick type
     * tickIndex {number} The index of the tick
     * modelValue {number}  The value to build a label for
     * @param handler handler is called to specify format of the label
     */
    setFormatLabelHandler(handler: Function | labelFormatHandler): this;
    /**
     * Set label max text
     * @param tickGrade valid values are "edge", "dst", "major" and "minor"
     * @param text label text
     */
    setLabelMaxText(tickGrade: string, text: string): this;
    /**
     * Sets format dictionary
     * Default dictionary is ["s.u", "s.u", "s.u", "H:i:s", "H:i:s", "H:i", "H:i", "M j<b\r/>H:i", "M j<b\r/>H:i", "M j<b\r/>H:i", "M j", "M, Y", "Y", "Y", "Y"]
     * The index of the dictionary should match geotoolkit.axis.DateZoomLevel
     * @param dictionary dictionary to use to format "edge", "dst", "major" and "minor" and  labels when label grade format not specified
     */
    setFormatDictionary(dictionary: string[]): this;
    /**
     * Set label grade format
     * @param tickGrade valid values are "edge", "dst", "major" and "minor"
     * @param format label grade format
     */
    setLabelGradeFormat(tickGrade: string, format?: string): this;
    /**
     * Return label grade format
     * @param tickGrade valid values are "edge", "dst", "major" and "minor"
     */
    getLabelGradeFormat(tickGrade: string): string | null;
    /**
     * Sets unit
     * @param unit unit to set
     */
    setUnit(unit: string | AbstractUnit): this;
    /**
     * Sets supported ticks visible.
     * Note that this would also change the resulting visibility of the corresponding label.
     * (An AdaptiveDateTimeTickGenerator's label can be visible only if the corresponding tick is visible)
     * Use LineStyle null to make tick invisible.
     * @param tickGrade Tick grade
     * @param visible Tick visibility
     */
    setVisibleTickGrade(tickGrade: string, visible: boolean): this;
    /**
     * Enable or disable 'Monday' flag
     * @param enable Enables week starting from Monday, default is disabled
     */
    static setWeekStartMonday(enable: boolean): void;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {formatlabeleventhandler: Function; labelformat: object; labelminspan: number; labeledgespan: number; labelautohide: number; rotatelabels: boolean; locale: Locale | string; timezone: TimeZone | string; localtimezoneoffset: number; formatdictionary: string[]; minspan: number; dsttimestamps: number[]} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.formatlabeleventhandler format of the label see {@link @int/geotoolkit/axis/AdaptiveDateTimeTickGenerator.AdaptiveDateTimeTickGenerator#setFormatLabelHandler}
     * @param properties.labelformat tickGrade valid values are "edge", "dst", "major" and "minor" with corresponding format label grade format
     * @param properties.labelminspan min distance between 2 labels
     * @param properties.labeledgespan distance of label from edge
     * @param properties.labelautohide minimum distance to hide label
     * @param properties.rotatelabels rotate label or not
     * @param properties.locale locale
     * @param properties.timezone timeZone UTC or local time
     * @param properties.localtimezoneoffset timezoneoffset
     * @param properties.formatdictionary dictionary to use. see {@link @int/geotoolkit/axis/AdaptiveDateTimeTickGenerator.AdaptiveDateTimeTickGenerator#setFormatDictionary}
     * @param properties.minspan min distance between ticks in device space
     * @param properties.dsttimestamps see {@link @int/geotoolkit/axis/AdaptiveDateTimeTickGenerator.AdaptiveDateTimeTickGenerator#setDSTTimestamps}
     * @param properties.offsetUnit specified in sec,mls,hours.
     */
    setProperties(properties: object | { formatlabeleventhandler?: Function; labelformat?: object; labelminspan?: number; labeledgespan?: number; labelautohide?: number; rotatelabels?: boolean; locale?: Locale | string; timezone?: TimeZone | string; localtimezoneoffset?: number; formatdictionary?: string[]; minspan?: number; dsttimestamps?: number[]; offsetUnit?: AbstractUnit | string; } ): this;
}
