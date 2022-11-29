import {AbstractCommand} from './AbstractCommand';

/**
 * Command for changing node's property
 */
export class PropertyChange extends AbstractCommand {
    /**
     * Command for changing node's property
     * @param name property name to change
     * @param value new property value
     */
    constructor(name: string, value: any);
    /**
     * Returns changing property name
     */
    getName(): string;
    /**
     * Returns new changing property value
     */
    getValue(): any;
}
