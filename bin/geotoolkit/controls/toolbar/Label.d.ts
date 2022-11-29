import {Button} from './Button';

/**
 * Label elements use .cg-toolbar-label css class
 */
export class Label extends Button {
    /**
     * Label elements use .cg-toolbar-label css class
     * @param options label options
     * @param options.text label text info
     * @param options.padding label left/right padding (in px)
     */
    constructor(options?: object | { text?: string; padding?: number; } );
    /**
     * Set label text
     * @param text label text
     */
    setText(text: string): this;
}
