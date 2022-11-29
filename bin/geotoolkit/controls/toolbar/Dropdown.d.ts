import {Button} from './Button';

/**
 * Dropdown contains multiple buttons list that is visible when mouse hovers the button or dropdown main button is clicked.
 * Its element applies extra .cg-toolbar-dropdown css class, use it to change the default style
 */
export class Dropdown extends Button {
    /**
     * Dropdown contains multiple buttons list that is visible when mouse hovers the button or dropdown main button is clicked.
     * Its element applies extra .cg-toolbar-dropdown css class, use it to change the default style
     * @param options dropdown options
     * @param options.buttons buttons that are hidden in dropdown list
     * @param options.icon css class for the button icon span element
     * @param options.checkbox button checkbox options
     * @param options.checkbox.enabled true if button should act like checkbox. By default checked dropdown
     * shows its content permanently, click again to hide it.
     */
    constructor(options?: object | { buttons?: Button[]; icon?: string; checkbox?: object | { enabled?: boolean; } ; } );
    /**
     * Returns the contained buttons list
     */
    getButtons(): Button[];
}
