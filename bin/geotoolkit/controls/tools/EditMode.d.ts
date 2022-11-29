/**
 * Editing mode for the geotoolkit.controls.tools.editors.AbstractEditor tools. Use bitwise operations for the
 * full customization
 */
export enum EditMode {
    /**
     * Node can be resized (using bounding box handles)
     */
    Resize = 1,
    /**
     * Node can be translated (using drag-and-drop feature)
     */
    Translate = 2,
    /**
     * Node can be rotated (using rotation handle)
     */
    Rotate = 4,
    /**
     * New points can be added to the node (using mouse click)
     */
    AddPoint = 8,
    /**
     * Creates node by inscribing it into a bounding rectangle defined by the start (mouse down) and end (mouse up) points
     */
    CreateWithBounds = 16,
    /**
     * Node points can be moved (using drag-and-drop feature)
     */
    DragPoint = 32,
    /**
     * New points can be added by inserting it inside the node
     */
    InsertPoint = 64,
    /**
     * Node points can be deleted (using right-click)
     */
    DeletePoint = 128,
    /**
     * Node bounding box can be edited (resize, translate and rotate)
     */
    EditBbox = 7,
    /**
     * Node editing mode (all except adding new points and creation with bounds)
     */
    EditNode = 231,
    /**
     * Node creating mode (add, create, drag, insert and delete points)
     */
    Create = 248,
    /**
     * All features are included
     */
    All = 255
}
