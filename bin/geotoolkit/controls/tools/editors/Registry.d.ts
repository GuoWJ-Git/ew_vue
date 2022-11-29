import {AbstractEditor} from './AbstractEditor';

/**
 * Registry that stores node editors
 */
export class Registry {
    /**
     * Registry that stores node editors
     */
    constructor();
    /**
     * Returns editor to edit node with provided options
     * @param options editor options
     */
    getEditor(options: any): AbstractEditor | any;
    /**
     * Registers editor to apply
     * @param editor editor
     */
    register(editor: AbstractEditor): this;
    /**
     * Returns editors registry singleton instance
     */
    static getInstance(): Registry;
}
