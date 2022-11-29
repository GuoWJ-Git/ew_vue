/**
 * Enums of Pointer Selection Mode
 */
export enum PointerMode {
    /**
     * Hover
 will select if the object is under the mouse pointer
     */
    Hover = 'hover',
    /**
     * Click
 will select if the object is under the pointer while clicking
     */
    Click = 'click',
    /**
     * MouseDown
will select if the object pressed under the pointer
     */
    MouseDown = 'mousedown',
    /**
     * MouseUp
will select if the object released under the pointer
     */
    MouseUp = 'mouseup',
    /**
     * DoubleClick
will select if the object is double clicked
     */
    DoubleClick = 'doubleclick',
    /**
     * TapHold
will select if the object is long pressed
     */
    TapHold = 'taphold'
}
