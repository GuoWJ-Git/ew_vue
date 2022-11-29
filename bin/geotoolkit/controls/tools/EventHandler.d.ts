import {AbstractCompositeTool} from './AbstractCompositeTool';
import {AbstractTool} from './AbstractTool';
import {EventArgs} from './EventArgs';

/**
 * EventHandler*
 */
export class EventHandler {
    /**
     * EventHandler*
     * @param compositeTool abstract composite tool
     * @param eventName event
     * @param tool tool
     * @param obj extra obj
     * @param delegate to execute
     */
    constructor(compositeTool: AbstractCompositeTool, eventName: string, tool: AbstractTool, obj: any, delegate: Function);
    /**
     * return tool container
     */
    getCompositeTool(): AbstractCompositeTool;
    /**
     * return event name
     */
    getEventName(): string;
    /**
     */
    getObject(): any;
    /**
     * return tool
     */
    getTool(): AbstractTool;
    /**
     * return enable state
     */
    isEnabled(): boolean;
    /**
     * set enable state
     * @param enabled flag to set enable state
     */
    setEnabled(enabled: boolean): this;
    /**
     * returns true if event was captured be event handler
     * @param nativeEventArgs event args from DOM events
     */
    execute(nativeEventArgs: Event | EventArgs): EventArgs;
}
