import {AbstractTool} from './AbstractTool';
import {RubberBandRenderMode} from './RubberBandRenderMode';
import {MouseButtons} from '../../dom';

/**
 * AbstractRubberTool
 */
export class AbstractRubberTool extends AbstractTool {
    /**
     * AbstractRubberTool
     * @param options type of system events like mousedown etc. The slot object allows to attach browser events (HTML Dom Events) to your callback function or properties object
     * @param options.mode Rubber mode
     * @param name name of the tool
     * @param mode Rubber mode
     */
    constructor(options?: object | { mode?: RubberBandRenderMode | number; } , name?: string, mode?: RubberBandRenderMode | number);
    /**
     * Set the way the rectangle has to be displayed
     * @param mode the way the rectangle has to be displayed
     */
    setRubberBandRenderMode(mode: RubberBandRenderMode): this;
    /**
     * Return the way the rectangle is displayed
     */
    getRubberBandRenderMode(): RubberBandRenderMode;
    /**
     * Gets mouse buttons set for selection
     */
    getMouseButtons(): MouseButtons;
    /**
     * Sets mouse buttons for selection
     * @param button mouse button
     */
    setMouseButtons(button: MouseButtons): this;
}
