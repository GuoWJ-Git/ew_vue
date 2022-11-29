import {AbstractTool} from './AbstractTool';

/**
 * Drag-and-drop tool
 */
export class DragAndDrop extends AbstractTool {
    /**
     * Drag-and-drop tool
     * @param options options
     * @param options.nodeFilters filters for nodes
     * @param options.dragMode which part of node will be displayed on drag preview
     * @param options.inflateX inflate bounds axis X
     * @param options.inflateY inflate bounds axis Y
     */
    constructor(options?: object | { nodeFilters?: NodeFilter[]; dragMode?: boolean; inflateX?: number; inflateY?: number; } );
    /**
     * Get node filters
     */
    getNodeFilters(): object[];
    /**
     * Set node filters
     * @param nodeFilters node filters
     */
    setNodeFilters(nodeFilters: object[]): this;
    /**
     * Gets drag mode
     */
    getDragMode(): DragMode;
    /**
     * Sets drag mode
     * @param mode drag mode
     */
    setDragMode(mode: DragMode): this;
    /**
     * Sets cursor
     * @param cursor cursor see https://developer.mozilla.org/en-US/docs/Web/CSS/cursor for possible values
     */
    setCursor(cursor: string): void;
}
/**
 * DragAndDrop events.
 */
export enum Events {
    /**
     * Event fired when the element was picked
     */
    onPick = 'onPick',
    /**
     * Event fired when the element is being dragged
     */
    onDrag = 'onDrag',
    /**
     * Event fired when the element was dropped
     */
    onDrop = 'onDrop'
}
/**
 * DragAndDrop drag mode.
 */
export enum DragMode {
    /**
     * Drag only visible part of node
     */
    VisibleModelLimits = 'VisibleModelLimits',
    /**
     * Drag whole node
     */
    ModelLimits = 'ModelLimits'
}
/**
 * Defines node filter for nodes to drag and drop
 */
export type NodeFilter = { drag: Function; container: Function}
