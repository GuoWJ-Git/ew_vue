import {IToolContainer} from '../../plot/IToolContainer';
import {Plot} from '../../plot/Plot';
import {ITool} from '../../plot/ITool';
import {Node} from '../../scene/Node';
import {CompositeTool} from './CompositeTool';

/**
 * The tools container class is a container of tools {@link @int/geotoolkit/controls/tools/AbstractTool.AbstractTool} connecting tools to their plot.
 * It can hold several tools using a composite tool as a root.
 */
export class ToolsContainer implements IToolContainer {
    /**
     * The tools container class is a container of tools {@link @int/geotoolkit/controls/tools/AbstractTool.AbstractTool} connecting tools to their plot.
     * It can hold several tools using a composite tool as a root.
     * @param plot plot which renders nodes
     */
    constructor(plot: Plot);
    /**
     * Dispose tool container
     * @param disposeTool dispose tool flag
     */
    dispose(disposeTool?: boolean): void;
    /**
     * set enable state
     * @param enabled sets the enabled state
     */
    setEnabled(enabled: boolean): this;
    /**
     * returns enable state
     */
    isEnabled(): boolean;
    /**
     * Returns the tool matching the given name.<br>
     * This function also accepts tool 'path' instead of absolute name.<br>
     * For example:<br>
     * getToolByName("compositeTool.panningTools.trackPanning.TrackPanning")<br>
     * Would return the same tool than <br>
     * getToolByName("TrackPanning")<br>
     * As long as there is only one tool named "TrackPanning" in this composite<br>
     * See listToolsNames()<br>
     * @param toolName The tool name or path
     */
    getToolByName(toolName: string): ITool | null;
    /**
     * Returns the tool matching the given type. or null if nothing is matching the tool type<br>
     * For example:<br>
     * getToolByType(geotoolkit.controls.tools.Selection)<br>
     * Would return the same tool than<br>
     * getToolByName("pick")<br>
     * @param toolType toolType of the tool
     */
    getToolByType(toolType: string): ITool | null;
    /**
     * List all the tools contained in this composite.
     * Prepend their parent tools parent using a '.'.
     */
    listToolsNames(): string[];
    /**
     */
    getNode(): Node;
    /**
     * Add tool or array of tools to container
     * @param tool tool or array of tools
     */
    add(tool: ITool | ITool[]): this;
    /**
     * Remove tool from container
     * @param tool tool to remove
     */
    remove(tool: ITool): this;
    /**
     * Get tool
     */
    getTool(): CompositeTool;
}
