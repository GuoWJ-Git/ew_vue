import {Group} from '../../scene/Group';
import {ITrack} from '../ITrack';
import {Node} from '../../scene/Node';
import {Iterator} from '../../util/iterator';
import {AbstractTool} from '../../controls/tools/AbstractTool';
import {CompositeTool} from '../../controls/tools/CompositeTool';
import {Rect} from '../../util/Rect';

/**
 * Define track to display correlation between wells
 */
export class CorrelationTrack extends Group {
    /**
     * Define track to display correlation between wells
     * @param options left track or properties object
     * @param options.leftwell left track
     * @param options.rightwell right track
     * @param rightWell right track
     */
    constructor(options?: ITrack | object | { leftwell?: ITrack; rightwell?: ITrack; } , rightWell?: ITrack);
    /**
     * This method is called it child or children ara added
     * @param child added child
     */
    protected onChildAdded(child: Node | Iterator): void;
    /**
     * Specify left and right well
     * @param leftWell left well
     * @param rightWell right well
     */
    setWells(leftWell: ITrack, rightWell: ITrack): this;
    /**
     * Return left well
     */
    getLeftWell(): ITrack;
    /**
     * Return right well
     */
    getRightWell(): ITrack;
    /**
     * function call in the constructor to initialize tools in the widget
     */
    protected initializeTools(): this;
    /**
     * Connect a new tool with a toolname to the widget
     * @param tool tool associated with the widget
     */
    connectTool(tool: AbstractTool | AbstractTool[]): this;
    /**
     * Disconnect the tool from the widget
     * @param tool tool to disconnect
     */
    disconnectTool(tool: AbstractTool | AbstractTool[]): this;
    /**
     * Returns root tool associated to this widget
     */
    getTool(): CompositeTool;
    /**
     * Set root tool associated to this widget
     * @param tool tool to set
     */
    protected setTool(tool: CompositeTool): this;
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
    getToolByName(toolName: string): AbstractTool | any;
    /**
     * Returns the tool matching the given type. or null if nothing is matching the tool type<br>
     * For example:<br>
     * getToolByType(geotoolkit.controls.tools.Selection)<br>
     * Would return the same tool than<br>
     * getToolByName("pick")<br>
     * @param toolType toolType of the tool
     */
    getToolByType(toolType: string): AbstractTool | any;
    /**
     * List all the tools contained in this composite.
     * Prepend their parent tools parent using a '.'.
     */
    listToolsNames(): string[];
    /**
     * Dispose node. Clear all listeners
     * and disconnect style to avoid memory
     * leaks
     */
    dispose(): void;
    /**
     * Get the bounds in the parents model space. If bounds are not set,
     * then parent model limits are used.
     */
    getBounds(): Rect;
}
