import {TickGenerator, labelFormatHandler} from './TickGenerator';
import {TimeZone} from './TimeZone';
import {AbstractUnit} from '../util/AbstractUnit';
import {DateZoomLevel} from './DateZoomLevel';

/**
 * Define date and time tick generator. Ticks are generated based on UTC date and time by default if no timezone offset is specified
 */
export class DateTimeTickGenerator extends TickGenerator {
    /**
     * Define date and time tick generator. Ticks are generated based on UTC date and time by default if no timezone offset is specified
     * @param options An object containing the properties to set
     * @param options.timezone time zone UTC or Local Time
     * @param options.zoomlevel zoom level
     * @param options.rotatelabels rotate lebels or not
     * @param options.labelmode label mode (0 or 1)
     * @param options.formatlabeleventhandler format label event handler
     * @param options.localtimezoneoffset local time zone offset unit
     * @param options.tickgrades array of the type of ticks that are supported
     * @param options.timezoneoffset UTC time if timeZoneOffset is 0
     * @param options.offsetunit offset unit specified in sec,mls,hours.
     * @param offsetUnit offset unit specified in sec,mls,hours.
     */
    constructor(options?: object | { timezone?: TimeZone; zoomlevel?: number; rotatelabels?: boolean; labelmode?: LabelMode; formatlabeleventhandler?: Function; localtimezoneoffset?: number; tickgrades?: string[]; timezoneoffset?: number; offsetunit?: AbstractUnit; }  | number, offsetUnit?: AbstractUnit);
    /**
     * Set time zone
     * @param timeZone time zone UTC or Local Time
     */
    setTimeZone(timeZone: TimeZone): this;
    /**
     * Get time zone
     */
    getTimeZone(): TimeZone;
    /**
     * Sets label mode
     * @param mode label mode
     */
    setLabelMode(mode: LabelMode): this;
    /**
     * Gets label mode
     */
    getLabelMode(): LabelMode;
    /**
     * Sets zoom level
     * @param zoomLevel Date ZoomLevel
     */
    setZoomLevel(zoomLevel: DateZoomLevel | number): this;
    /**
     * Gets zoom level
     */
    getZoomLevel(): DateZoomLevel | number;
    /**
     * Sets format label handler
     * @param handler handler is called to set the format of the label
     */
    setFormatLabelHandler(handler: Function | labelFormatHandler): this;
    /**
     * Sets unit
     * @param unit unit to be set
     */
    setUnit(unit: string | AbstractUnit): this;
    /**
     * Enables week starting from Monday
     * @param enable Enables or disables week starting from Monday
     */
    static setWeekStartMonday(enable: boolean): void;
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {timezone: TimeZone; zoomlevel: number; rotatelabels: boolean; labelmode: LabelMode; formatlabeleventhandler: Function; localtimezoneoffset: number; tickgrades: string[]; timezoneoffset: number; offsetunit: AbstractUnit} | any;
    /**
     * Set time zone offset
     * @param timeZoneOffset UTC time if timeZoneOffset is 0
     * @param offsetUnit specified in sec,mls,hours.
     */
    setTimeZoneOffset(timeZoneOffset: number, offsetUnit?: AbstractUnit | string): this;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.timezone time zone UTC or Local Time //
     * @param properties.zoomlevel zoom level
     * @param properties.rotatelabels rotate lebels or not
     * @param properties.labelmode label mode (0 or 1)
     * @param properties.formatlabeleventhandler format label event handler
     * @param properties.localtimezoneoffset local time zone offset unit
     * @param properties.tickgrades array of the type of ticks that are supported
     * @param properties.timezoneoffset UTC time if timeZoneOffset is 0
     * @param properties.offsetunit offset unit specified in sec,mls,hours.
     */
    setProperties(properties: object | { timezone?: TimeZone; zoomlevel?: number; rotatelabels?: boolean; labelmode?: LabelMode; formatlabeleventhandler?: Function; localtimezoneoffset?: number; tickgrades?: string[]; timezoneoffset?: number; offsetunit?: AbstractUnit; } ): this;
}
/**
 * Enum of label mode
 */
export enum LabelMode {
    /**
     * Default
     */
    Default = 0,
    /**
     * Between
     */
    Between = 1
}
