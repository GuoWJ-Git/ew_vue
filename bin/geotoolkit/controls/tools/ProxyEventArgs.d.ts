import {EventArgs} from './EventArgs';

/**
 * ProxyEventArgs
 */
export class ProxyEventArgs extends EventArgs {
    /**
     * ProxyEventArgs
     * @param eventArgs contains info about the event
     * @param eventName name of the event
     */
    constructor(eventArgs: EventArgs, eventName?: string);
    /**
     * Set event target
     * @param target event target
     */
    setEventTarget(target: any): this;
}
