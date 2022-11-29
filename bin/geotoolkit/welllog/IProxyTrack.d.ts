import {ITrack} from './ITrack';

/**
 * Define an interface for proxy track
 */
export abstract class IProxyTrack extends ITrack {
    /**
     * Return a reference to template
     */
    abstract getPrototype(): ITrack;
}
