import {AbstractTool} from './AbstractTool';
import {EventArgs} from './EventArgs';

/**
 * Abstract composite tool.
 */
export class AbstractCompositeTool extends AbstractTool {
    /**
     * Abstract composite tool.
     * @param name name of the tool or its options
     */
    constructor(name?: string | object);
    /**
     * Returns the tool matching the given name.
     * This function also accepts tool 'path' instead of absolute name.
     * For example:
     * getToolByName("compositeTool.panningTools.trackPanning.TrackPanning")
     * Would return the same tool than
     * getToolByName("TrackPanning")
     * As long as there is only one tool named "TrackPanning" in this composite
     * See listToolsNames()
     * @param name tool name or path
     */
    getToolByName(name: string): AbstractTool;
    /**
     * Returns the tool matching the given type.
     * @param type type
     */
    getToolByType(type: Function): AbstractTool;
    /**
     * List all the tools contained in this composite.
     * Prepend their compositetool parent using a '.'
     */
    listToolsNames(): string[];
    /**
     * Return index of specified tool.
     * @param tool abstract tool
     */
    getToolIndex(tool: AbstractTool): number;
    /**
     * Insert tool at specified index.
     * @param index index to insert the tool
     * @param tool abstract tool
     */
    insert(index: number, tool: AbstractTool | AbstractTool[]): this;
    /**
     * Add tool to the container.
     * @param tool abstract tool to be added
     */
    add(tool: AbstractTool | AbstractTool[]): this;
    /**
     * Remove tool from container.
     * @param tool to remove
     */
    remove(tool: AbstractTool | AbstractTool[]): this;
    /**
     * Dispatch event through the handlers.
     * @param eventName contains the name of the event to dispatch.
     * @param eventArgs contains info of the event.
     */
    dispatchEvent(eventName: string, eventArgs: EventArgs): boolean;
}
