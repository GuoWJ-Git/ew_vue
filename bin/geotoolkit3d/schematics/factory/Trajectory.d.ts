import {SimpleFactory} from '../../util/factories/SimpleFactory';

/**
 * Trajectory componentName-to-componentFactory mapping
 */
export class Trajectory extends SimpleFactory {
    /**
     * Trajectory componentName-to-componentFactory mapping
     */
    constructor();
    /**
     * Get instance of trajectory factory
     */
    static getInstance(): Trajectory;
}
