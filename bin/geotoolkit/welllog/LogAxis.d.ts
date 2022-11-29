import {Axis} from '../axis/Axis';
import {TickGenerator} from '../axis/TickGenerator';
import {LogTrack} from './LogTrack';

/**
 * Creates the standard representation of a well log axis. It can be added to the track and a tickgenerator like {@link @int/geotoolkit/welllog/axis/DateTimeTickGenerator.DateTimeTickGenerator} can be assigned to it based on the trajectory data.
 */
export class LogAxis extends Axis {
    /**
     * Creates the standard representation of a well log axis. It can be added to the track and a tickgenerator like {@link @int/geotoolkit/welllog/axis/DateTimeTickGenerator.DateTimeTickGenerator} can be assigned to it based on the trajectory data.
     * @param options axis tick generator or options object
     */
    constructor(options?: TickGenerator | object);
    /**
     * Returns a parent log track
     */
    getTrack(): LogTrack | null;
    /**
     * Get title alignment
     */
    getTitleAlignment(): TitleAlignment;
    /**
     * Set title alignment
     * @param titleAlignment title alignment
     */
    setTitleAlignment(titleAlignment: TitleAlignment): this;
    /**
     * Set properties
     * @param properties properties to set
     */
    setProperties(properties?: object): this;
}
/**
 * Enum of axis tick positions
 */
export enum TitleAlignment {
    /**
     * Title is on the top side.
     */
    Top = 'top',
    /**
     * Title is on the center.
     */
    Center = 'center',
    /**
     * Title is on the bottom side.
     */
    Bottom = 'bottom'
}
