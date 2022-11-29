import {AbstractGestureTool} from './AbstractGestureTool';
import {Object3D} from '../scene/Object3D';

/**
 * A tool providing cursor tooltip in 3D.<br>
 * This tooltip will listen to cursor events and notify user-defined tooltip div.<br>
 * <br>
 * Note that by default, a highlighter object will be created along with tooltip. (See {@link @int/geotoolkit3d/tool/Highlighter.Highlighter} for more info)
 * <br>
 * To disable the cursor, set options.cursor to null.<br>
 * <br>
 * The content of tooltip is left to users. By default, it shows the type of selected object.<br>
 * If the user needs to change it, then modifying options.innerHTML.<br>
 * <br>
 * Users can provide their own divElement for styling purpose. If a divElement is not provided, ToolTip will create one.<br>
 */
export class ToolTip extends AbstractGestureTool {
    /**
     * A tool providing cursor tooltip in 3D.<br>
     * This tooltip will listen to cursor events and notify user-defined tooltip div.<br>
     * <br>
     * Note that by default, a highlighter object will be created along with tooltip. (See {@link @int/geotoolkit3d/tool/Highlighter.Highlighter} for more info)
     * <br>
     * To disable the cursor, set options.cursor to null.<br>
     * <br>
     * The content of tooltip is left to users. By default, it shows the type of selected object.<br>
     * If the user needs to change it, then modifying options.innerHTML.<br>
     * <br>
     * Users can provide their own divElement for styling purpose. If a divElement is not provided, ToolTip will create one.<br>
     * @param options See geotoolkit3d.tool.AbstractGestureTool for inherited options
     * @param options.name tool name
     * @param options.divelement the application tooltip div element
     * @param options.cursor the option to add cursor
     * @param options.enabled to or not to enable the tooltip
     * @param options.innerHTML this function returns the content in HTML format
     * @param options.opacity the opacity of tooltip
     */
    constructor(options: object | { name?: string; divelement?: HTMLElement | string; cursor?: Object3D; enabled?: boolean; innerHTML?: Function; opacity?: number; } );
    /**
     * Set options, the given json will be merged with the object's state so that only the given options will be changed.<br>
     * @param options The options
     * @param options.enabled The status of s tool
     * @param options.innerHTML this function returns the content in HTML format
     * @param options.opacity the opacity of tooltip
     */
    setOptions(options: object | { enabled?: boolean; innerHTML?: Function; opacity?: number; } ): this;
    /**
     * Get options as json
     * (See {@link @int/geotoolkit3d/tool/ToolTip.ToolTip} for more info)
     */
    getOptions(): object | any;
    /**
     * Get tooltip's div element
     */
    getDivElement(): HTMLElement;
    /**
     * Adds a listener that will be triggered each time this tool 'move' occurs.
     * @param callback The function that will be called
     */
    addMoveListener(callback: Function): void;
    /**
     * Dispose tooltip
     */
    dispose(): void;
}
