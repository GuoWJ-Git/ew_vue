/**
 * Enums of Paint Mode
 */
export enum PaintMode {
    /**
     * Draws polygon based on a points set using mouse clicks. Another click removes selected point from the shape,
clicking on the first or last vertex ends creation
     */
    Polygon = 'Polygon',
    /**
     * Draws polyline based on a points set using mouse clicks. Another click removes selected point from the shape,
clicking on the last vertex ends creation
     */
    Polyline = 'Polyline',
    /**
     * Draws rectangle by inscribing it into a bounds defined by the start (mouse down) and end (mouse up) points
     */
    Rectangle = 'Rectangle',
    /**
     * Draws ellipse by inscribing it into a bounding rectangle defined by the start (mouse down) and end (mouse up) points
     */
    Ellipse = 'Ellipse',
    /**
     * Draws image by inscribing it into a bounding rectangle defined by the start (mouse down) and end (mouse up) points
     */
    Image = 'Image',
    /**
     * Draws spline-like path based on a points set using mouse clicks. Another click removes selected point from the shape,
clicking on the last vertex ends creation
     */
    Spline = 'Spline',
    /**
     * Draws arrow shape from the first (mouse down) to the last (mouse up) point
     */
    Arrow = 'Arrow',
    /**
     * Draws line shape from the first (mouse down) to the last (mouse up) point
     */
    Line = 'Line',
    /**
     * Draws symbol by inscribing it into a bounding rectangle defined by the start (mouse down) and end (mouse up) points
     */
    Symbol = 'Symbol',
    /**
     * Draws text by inscribing it into a bounding rectangle defined by the start (mouse down) and end (mouse up) points
     */
    Text = 'Text',
    /**
     * Draws callout shape with inner text by clicking on the anchor point or inscribing it into a bounding rectangle
defined by the start (mouse down) and end (mouse up) points
     */
    Callout = 'Callout',
    /**
     * Draws arbitrary path by mouse move with left button pressed
     */
    Pencil = 'Pencil',
    /**
     * Edits the shape received in the corresponding tool method. Editing mode depends on the shape type.
     */
    Edit = 'Edit'
}
