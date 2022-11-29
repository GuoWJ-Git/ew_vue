/**
 * Events fired by geotoolkit.controls.tools.editors.AbstractEditor tools and geotoolkit.controls.tools.Paint
 * while creating/modifying a node
 */
export enum EditEvents {
    /**
     * Node was resized
     */
    Resized = 'Resized',
    /**
     * Node was translated
     */
    Translated = 'Translated',
    /**
     * Node was rotated
     */
    Rotated = 'Rotated',
    /**
     * Node creation started (e.g. first point was added)
     */
    Start = 'Start',
    /**
     * Node creation continues (e.g. second point was added)
     */
    Continue = 'Continue',
    /**
     * Node creation ended
     */
    End = 'End',
    /**
     * Node point was dragged
     */
    Drag = 'Drag',
    /**
     * Node point was inserted
     */
    Inserted = 'Inserted',
    /**
     * Node point was deleted
     */
    Deleted = 'Deleted',
    /**
     * Node was flipped (vertically/horizontally)
     */
    Flipped = 'Flipped',
    /**
     * Several nodes were grouped into geotoolkit.scene.Group
     */
    Grouped = 'Grouped',
    /**
     * Group node was ungrouped into set of its children
     */
    Ungrouped = 'Ungrouped',
    /**
     * Node text was changed (for text editors only)
     */
    PropertyChanged = 'PropertyChanged',
    /**
     * Node has been moved throughout the scene graph
     */
    SceneChanged = 'SceneChanged',
    /**
     * Current editor changed (other node(s) editing started)
     */
    EditorChanged = 'EditorChanged',
    /**
     * The last history command was undone
     */
    Undo = 'Undo',
    /**
     * The last history command was redone
     */
    Redo = 'Redo',
    /**
     * Any command was applied (duplicates any other command event)
     */
    CommandApplied = 'CommandApplied'
}
