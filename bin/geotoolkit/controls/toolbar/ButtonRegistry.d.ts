import {Button} from './Button';

/**
 * This class provides registry of toolbar buttons
 */
export class ButtonRegistry {
    /**
     * This class provides registry of toolbar buttons
     */
    constructor();
    /**
     * Registers button with the provided id. When registered, it can be used in toolbar by a single string identifier.
     * @param id string button identifier for later use in toolbar
     * @param button button to register or its options object
     */
    register(id: string, button: Button | object): this;
    /**
     * Returns button clone by its string identifier or null, if no such button registered
     * @param id button string identifier
     */
    getButton(id: string): Button | any;
    /**
     * Returns registered button identifiers list
     */
    getIds(): string[];
    /**
     * Returns singleton instance of the button registry
     */
    static getInstance(): ButtonRegistry;
}
