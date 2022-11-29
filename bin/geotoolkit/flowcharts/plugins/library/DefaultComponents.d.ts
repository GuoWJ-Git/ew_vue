import {IComponent} from '../../shapes/IComponent';

/**
 * This class provides a set of default diagram visuals prototypes, such as Link, Rectangle, Text, etc.
 * Method getComponents returns an array of available visual prototypes
 */
export class DefaultComponents {
    /**
     * This class provides a set of default diagram visuals prototypes, such as Link, Rectangle, Text, etc.
     * Method getComponents returns an array of available visual prototypes
     */
    constructor();
    /**
     * Gets all components stored in the library
     */
    static getComponents(): IComponent[];
    /**
     * Default components' category name
     */
    static Category: string;
}
