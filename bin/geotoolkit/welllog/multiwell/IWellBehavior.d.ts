import {MultiWellWidget} from './MultiWellWidget';
import {ITrack} from '../ITrack';
import {CorrelationTrack} from './CorrelationTrack';

/**
 * Define interface for well actions
 */
export abstract class IWellBehavior {
    /**
     * Highlight well or track
     * @param widget 
     * @param track track to remove
     * @param highlight 
     */
    abstract highlight(widget: MultiWellWidget, track: ITrack | CorrelationTrack, highlight: boolean): void;
    /**
     * Resize the track width
     * @param widget 
     * @param track track to remove
     * @param size a new size
     */
    abstract resize(widget: MultiWellWidget, track: ITrack | CorrelationTrack, size: number): boolean;
    /**
     * Return true if track is selectable
     * @param widget 
     * @param track track to remove
     */
    abstract isSelectable(widget: MultiWellWidget, track: ITrack | CorrelationTrack): boolean;
    /**
     * Return true if track is movable
     * @param widget 
     * @param track track to remove
     */
    abstract isMovable(widget: MultiWellWidget, track: ITrack | CorrelationTrack): boolean;
    /**
     * Gets all the properties pertaining to this object
     */
    abstract getProperties(): object | any;
    /**
     * Sets all the properties pertaining to this object
     * @param properties an object containing the properties to set
     */
    abstract setProperties(properties: object): this;
}
