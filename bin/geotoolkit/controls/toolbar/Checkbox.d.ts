import {Button} from './Button';

/**
 * Checkbox button that adds extra text information to the button icons. Checkbox elements use .cg-toolbar-checkbox css class,
 * inner text applies .cg-toolbar-checkbox-text css class. Use it to change the default checkbox style
 */
export class Checkbox extends Button {
    /**
     * Checkbox button that adds extra text information to the button icons. Checkbox elements use .cg-toolbar-checkbox css class,
     * inner text applies .cg-toolbar-checkbox-text css class. Use it to change the default checkbox style
     * @param options checkbox options
     * @param options.text checkbox inner text info
     * @param options.padding checkbox left/right padding (in px)
     */
    constructor(options?: object | { text?: string; padding?: number; } );
}
