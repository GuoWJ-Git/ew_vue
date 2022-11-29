/**
 * create a canvas element,
 * supports for HTMLCanvasElement and node-canvas.
 * @param width the canvas width in pixels
 * @param height the canvas height in pixels
 * @param inDevicePixel if set to true width and height will be converted to canvas pixels.
 */
export function createCanvasElement(width?: number, height?: number, inDevicePixel?: boolean): HTMLCanvasElement | object;
/**
 * Creates DOM element with specified tag and css class name
 * @param tag element tag name
 * @param className css class name(s)
 */
export function createElement(tag: string, className?: string): HTMLElement;
/**
 * return position relative to the parent
 * @param element HTML element
 * @param parentElement the parent HTML element
 */
export function getAbsolutePosition(element: HTMLElement, parentElement?: HTMLElement): object;
/**
 * Mouse buttons enum for using in native browser events as 'buttons' parameter
 */
export enum MouseButtons {
    /**
     * No button or un-initialized
     */
    None = 0,
    /**
     * Primary button (usually the left button)
     */
    Left = 1,
    /**
     * Secondary button (usually the right button)
     */
    Right = 2
}
/**
 * Mouse buttons enum for using in native browser events as 'button' parameter
 */
export enum MouseButton {
    /**
     * Left mouse button
     */
    Left = 0,
    /**
     * Middle mouse button
     */
    Middle = 1,
    /**
     * Right mouse button
     */
    Right = 2
}
/**
 * DOM Events fired by geotoolkit.scene.Node with DOMSupport tool
 */
export enum Events {
    /**
     * This Event is fired by node when cursor is initially moved into it
     */
    Enter = 'enter',
    /**
     * This Event is fired by node when cursor is moved out of it
     */
    Leave = 'leave',
    /**
     * This Event is fired by node when cursor is moved over it
     */
    Hover = 'hover',
    /**
     * This Event is fired by node when it was selected by mouse down
     */
    MouseDown = 'mousedown',
    /**
     * This Event is fired by node when it was selected by mouse up
     */
    MouseUp = 'mouseup',
    /**
     * This Event is fired by node when it was clicked
     */
    Click = 'click',
    /**
     * This Event is fired by node when it was double clicked
     */
    DoubleClick = 'doubleclick'
}
