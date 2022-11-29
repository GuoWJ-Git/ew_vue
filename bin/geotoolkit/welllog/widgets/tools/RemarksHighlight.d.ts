import {AbstractTool} from '../../../controls/tools/AbstractTool';
import {CompositeNode} from '../../../scene/CompositeNode';
import {Rectangle} from '../../../scene/shapes/Rectangle';

/**
 * Tool to highlight geotoolkit.welllog.LogMudLogSection ellipsis text and detect it's expand event.
 * Works for LogMudLogSection in 'default' mode only.
 */
export class RemarksHighlight extends AbstractTool {
    /**
     * Tool to highlight geotoolkit.welllog.LogMudLogSection ellipsis text and detect it's expand event.
     * Works for LogMudLogSection in 'default' mode only.
     * @param options tool manipulator layer or a tool properties object
     * @param options.name tool name
     * @param name tool name
     */
    constructor(options?: object | { name?: string; }  | CompositeNode, name?: string);
    /**
     * Returns rectangle shape that is used to highlight ellipsis text
     */
    getHighlightRectangle(): Rectangle;
}
