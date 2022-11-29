import {AbstractProcessor} from './AbstractProcessor';

/**
 * Can process object {key: value}, typeof value === number
 */
export class ObjectProcessor extends AbstractProcessor {
    /**
     * Can process object {key: value}, typeof value === number
     */
    constructor();
    /**
     * Returns instance of the ObjectProcessor
     */
    static getInstance(): ObjectProcessor;
}
