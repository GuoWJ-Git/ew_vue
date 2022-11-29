import {ProxyEventArgs} from './ProxyEventArgs';
import {EventArgs} from './EventArgs';

/**
 * RejectableEventArgs
 */
export class RejectableEventArgs extends ProxyEventArgs {
    /**
     * RejectableEventArgs
     * @param eventArgs contains info about the event
     */
    constructor(eventArgs: EventArgs);
    /**
     * set target
     * @param target object that initialised this event
     */
    setTarget(target: any): this;
    /**
     * returns target
     */
    getTarget(): any;
    /**
     * reject action
     * @param doReject reject event or not
     */
    reject(doReject: boolean): this;
    /**
     * return rejected state
     */
    isRejected(): boolean;
}
