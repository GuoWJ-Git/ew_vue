import {IComponent} from '../../shapes/IComponent';

/**
 * This class provides a set of industrial diagram visuals prototypes
 * Method getComponents returns an array of available visual prototypes
 */
export class IndustrialComponents {
    /**
     * This class provides a set of industrial diagram visuals prototypes
     * Method getComponents returns an array of available visual prototypes
     */
    constructor();
    /**
     * Gets all components stored in the library
     */
    static getComponents(): IComponent[];
    /**
     * Industrial components' category name
     */
    static Category: string;
}
