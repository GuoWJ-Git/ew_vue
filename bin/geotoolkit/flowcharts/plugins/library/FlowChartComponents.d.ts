import {IComponent} from '../../shapes/IComponent';

/**
 * This class provides a set of Flow Chart related diagram visuals prototypes
 * Method getComponents returns an array of available visual prototypes
 */
export class FlowChartComponents {
    /**
     * This class provides a set of Flow Chart related diagram visuals prototypes
     * Method getComponents returns an array of available visual prototypes
     */
    constructor();
    /**
     * Gets all components stored in the library
     */
    static getComponents(): IComponent[];
    /**
     * Category name
     */
    static Category: string;
}
