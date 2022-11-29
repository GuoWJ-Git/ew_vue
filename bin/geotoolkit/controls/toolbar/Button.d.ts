import {ToolsContainer} from '../tools/ToolsContainer';

/**
 * Is called when button is initialized or cleared (disposed).
 */
export type initCallback = (tools: ToolsContainer, enabled: boolean) => void;
/**
 * Is called when button is pressed.
 */
export type actionCallback = (tools: ToolsContainer, enabled?: boolean) => void;
/**
 */
export class Button {
    /**
     * @param options button options
     * @param options.element html dom element to use as the button (instead of the new one creating by default)
     * @param options.icon css class for the button icon span element
     * @param options.title button title (DOM hover text)
     * @param options.action action callback that is called when button is pressed. See actionCallback documentation for more info.
     * @param options.init initialization callback that is called when button is created or cleared. See initCallback documentation for more info.
     * @param options.checkbox button checkbox options
     * @param options.checkbox.enabled true if button should act like checkbox (toggling .cg-toolbar-checked css class,
     * use it to change the default style)
     * @param options.checkbox.checked true if button should be checked initially
     * @param options.checkbox.name name(s) that is used as the group id among the checkbox buttons. When
     * user turns on one button from the group, all the others are automatically turned off. So the button becomes a 'radio' button.
     * @param options.width fixed button width in pixels (if necessarily)
     * @param options.height fixed button height in pixels (if necessarily)
     * @param options.color button element background color
     * @param options.border button element css-border
     */
    constructor(options?: object | { element?: HTMLElement; icon?: string; title?: string; action?: Function; init?: Function; checkbox?: object | { enabled?: boolean; checked?: boolean; name?: string | string[]; } ; width?: number; height?: number; color?: string; border?: string; } );
    /**
     * All subclasses should override copyConstructor or provide custom implementation for this method
     */
    clone(): Button;
    /**
     * Copy constructor function.<br>
     * Function used as part of the cloning mechanism.<br>
     * Implementations should copy the given instance state to this instance.<br>
     * @param src Source to copy from
     */
    protected copyConstructor(src: Button): this;
    /**
     * Returns current html DOM element used for the button
     */
    getElement(): HTMLElement;
    /**
     * Returns current action callback (if exists)
     */
    getAction(): Function | any;
    /**
     * Sets current action callback
     * @param action action callback to be called when pressing the button
     */
    setAction(action: Function): this;
    /**
     * Returns current initialization callback to be called on toolbar init/dispose
     */
    getInit(): Function;
    /**
     * Sets initialization callback that is called on toolbar init/dispose
     * @param init initialization callback
     */
    setInit(init: Function): this;
    /**
     * Returns current name(s) that describe group(s) that the radio button belongs to (checkbox case only).
     * If the button should not switch automatically or is not checkbox, returns empty array
     */
    getName(): string[];
    /**
     * Returns fixed button width in px (if was set), null otherwise
     */
    getWidth(): number | any;
    /**
     * Returns fixed button height in px (if was set), null otherwise
     */
    getHeight(): number | any;
    /**
     * Sets button DOM element fixed size (in px)
     * @param width button element size or width
     * @param height button element height. Equals to width, if nothing is provided.
     */
    setSize(width: number, height?: number): this;
    /**
     * Returns true if button is checked (for checkbox case), false otherwise
     */
    getChecked(): boolean;
    /**
     * Adds or removes css checked class to the DOM element
     * @param checked true to add checked class, false otherwise
     */
    setChecked(checked: boolean): this;
    /**
     * Sets button element background color
     * @param color background color
     */
    setColor(color: string): this;
    /**
     * Returns button element background color
     */
    getColor(): string;
    /**
     * Sets button element border
     * @param border css-styled border value
     */
    setBorder(border: string): this;
    /**
     * Returns button element border
     */
    getBorder(): string;
}
