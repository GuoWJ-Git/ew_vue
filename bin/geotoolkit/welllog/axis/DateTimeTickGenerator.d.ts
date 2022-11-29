import {TickGenerator} from '../../axis/TickGenerator';
import {LogDrillingSectionContainer} from '../data/LogDrillingSectionContainer';

/**
 */
export class DateTimeTickGenerator extends TickGenerator {
    /**
     * @param options An object containing the properties to set
     * @param options.dttrajectory trajectory options
     */
    constructor(options?: object | { dttrajectory?: LogDrillingSectionContainer; }  | LogDrillingSectionContainer);
    /**
     * Returns valid Tick Grades : "sections", "major"
     */
    getGrades(): string[];
    /**
     * Gets all the properties pertaining to this object
     */
    getProperties(): {dttrajectory: LogDrillingSectionContainer} | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties An object containing the properties to set
     * @param properties.dttrajectory trajectory options
     */
    setProperties(properties?: object | { dttrajectory?: LogDrillingSectionContainer; } ): this;
}
