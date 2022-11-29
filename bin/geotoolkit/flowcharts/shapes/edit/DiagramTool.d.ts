import {AbstractTool} from '../../../controls/tools/AbstractTool';
import {Group} from '../../../scene/Group';
import {CompositeNode} from '../../../scene/CompositeNode';
import {ShapeAdapterRegistry} from '../../../controls/editing/ShapeAdapterRegistry';
import {Node} from '../../../scene/Node';
import {Point} from '../../../util/Point';
import {EventArgs} from '../../../controls/tools/EventArgs';
import {Shape} from '../../../scene/shapes/Shape';
import {LiteEvent} from '../../utils/LiteEvent';

/**
 * A mechanism providing interactivity between a user and DiagramWidget. Main tool for visuals editing in the Diagram
 */
export class DiagramTool extends AbstractTool {
    /**
     * A mechanism providing interactivity between a user and DiagramWidget. Main tool for visuals editing in the Diagram
     * @param options model layer
     * @param options.model model layer
     * @param handlesLayer handles layer
     */
    constructor(options: Group | object | { model?: Group; } , handlesLayer: CompositeNode);
    /**
     * Gets an associated shapes adapter registry
     */
    getShapeAdapters(): ShapeAdapterRegistry;
    /**
     * Clears current selection
     */
    clearSelection(): void;
    /**
     * Starts the adapter, using devicePoint as start point
     * @param nodes nodes collection to operate on
     * @param devicePoint start point in device coordinates
     * @param eventArgs arguements to start
     */
    startAdapter(nodes: Node[], devicePoint: Point, eventArgs: EventArgs): any[];
    /**
     * Returns currently selected shapes.
     */
    getActiveSelection(): Node[];
    /**
     * Show shape adapters for specified shapes
     * @param shapes a collection of shapes to select
     */
    selectVisuals(shapes: Shape[]): this;
    /**
     * Returns a flag indicating if the text editor should be enabled or not
     */
    getTextEditorEnabled(): boolean;
    /**
     * Enables or disables text editor upon double click
     * @param value flag indicating if the text editor should be enabled or disabled
     */
    setTextEditorEnabled(value: boolean): this;
    /**
     * Event that raises on selection change
     */
    getOnSelectionChangeEvent(): LiteEvent;
}
